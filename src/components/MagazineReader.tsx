import React, { useRef, useEffect, useState, lazy, Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Maximize, X, Download, Search, Layout, ZoomIn, ZoomOut, Share2, RotateCcw, Home, Printer } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Slider } from '@/components/ui/slider';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

// Lazy load the heavy HTMLFlipBook component
const HTMLFlipBook = lazy(() => import('react-pageflip').then(module => ({ default: module.default })));

interface MagazineReaderProps {
  isOpen: boolean;
  onClose: () => void;
}

// Standard magazine page dimensions (A4 aspect ratio)
const PAGE_ASPECT_RATIO = 1.414; // height/width for A4
const PAGE_WIDTH = 595; // Standard A4 width in points (roughly pixels)
const PAGE_HEIGHT = PAGE_WIDTH * PAGE_ASPECT_RATIO;

// Real magazine pages from the uploaded PDF
// Generate a list for 52 pages (assumes images are available at /magazine/page_1.jpg ... /magazine/page_52.jpg)
const magazinePages = Array.from({ length: 52 }, (_, i) => `/magazine/page_${i + 1}.jpg`);

type PageFlipAPI = {
  pageFlip?: () => {
    flipNext?: () => void;
    flipPrev?: () => void;
    flip?: (n: number) => void;
  };
};

export const MagazineReader = ({ isOpen, onClose }: MagazineReaderProps) => {
  const book = useRef<PageFlipAPI | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [layoutMode, setLayoutMode] = useState<'flip' | 'scroll'>('flip');
  const [zoom, setZoom] = useState<number>(1);
  const [gotoValue, setGotoValue] = useState<string>('');
  const pageRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [imageErrorMap, setImageErrorMap] = useState<Record<number, boolean>>({});
  const pdfRenderCache = useRef<Record<number, HTMLCanvasElement | null>>({});
  const [pdfLoading, setPdfLoading] = useState<Record<number, boolean>>({});
  const [pageSources, setPageSources] = useState<string[]>(magazinePages);
  const [hydrationPending, setHydrationPending] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const nextButtonClick = () => book.current?.pageFlip?.().flipNext?.();
  const prevButtonClick = () => book.current?.pageFlip?.().flipPrev?.();
  const viewerRegionRef = useRef<HTMLDivElement | null>(null);

  const onPageChange = (e: unknown) => {
    if (typeof e === 'object' && e && 'data' in e) {
      const d = (e as Record<string, unknown>).data;
      setCurrentPage(Number(d));
    }
    // small visual cue: add class to book container
    const container = document.querySelector('.magazine-book');
    if (container) {
      container.classList.add('page-turn-anim');
      setTimeout(() => container.classList.remove('page-turn-anim'), 420);
    }
  };

  const toggleFullscreen = () => setIsFullscreen(!isFullscreen);

  // Keyboard navigation: left/right arrows to flip, Esc to close
    useEffect(() => {
      const handler = (e: KeyboardEvent) => {
        if (!isOpen) return;
        if (e.key === 'ArrowRight') nextButtonClick();
        if (e.key === 'ArrowLeft') prevButtonClick();
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handler);
      return () => window.removeEventListener('keydown', handler);
    }, [isOpen, onClose]);

  // Keep the flipbook centered when zoom changes
  useEffect(() => {
    // small side-effect placeholder: could recalc layout if needed
  }, [zoom, layoutMode]);

  const handleDownload = () => {
    // Create a download link for the PDF
    const link = document.createElement('a');
    link.href = '/NEXUS_MAGAZINE.pdf';
  link.download = 'NEXUS_Magazine_May_June_2026.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const goToPage = React.useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(magazinePages.length - 1, index));
    if (layoutMode === 'flip') {
      book.current?.pageFlip?.().flip?.(clamped);
      setCurrentPage(clamped);
    } else {
      const el = pageRefs.current[clamped];
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setCurrentPage(clamped);
    }
  }, [layoutMode]);

  const handleGotoSubmit = () => {
    const num = parseInt(gotoValue, 10);
    if (!isNaN(num)) goToPage(num - 1);
    setGotoValue('');
  };

  const toggleLayout = () => setLayoutMode((s) => (s === 'flip' ? 'scroll' : 'flip'));

  const zoomIn = () => setZoom((z) => Math.min(2.5, +(z + 0.1).toFixed(2)));
  const zoomOut = () => setZoom((z) => Math.max(0.5, +(z - 0.1).toFixed(2)));

  const handleShare = async () => {
    const url = `${window.location.origin}${window.location.pathname}#magazine-page-${currentPage + 1}`;
    if (navigator.share) {
      try {
        await navigator.share({ title: 'NEXUS Magazine', url });
      } catch (err) {
        // ignore
      }
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(url);
      // Optional: show toast - not implemented here
    } else {
      // fallback: prompt
      window.prompt('Copy this link', url);
    }
  };

  const handlePrint = () => {
    // Open PDF in a new tab where user can print
    window.open('/NEXUS_MAGAZINE.pdf', '_blank');
  };

  // Audio for page turns
  const pageAudioRef = useRef<HTMLAudioElement | null>(null);
  useEffect(() => {
    try {
      pageAudioRef.current = new Audio('/sounds/page-turn.mp3');
      pageAudioRef.current.volume = 0.6;
    } catch (err) {
      pageAudioRef.current = null;
      void err;
    }
  }, []);

  // Deep-link support: if URL contains #magazine-page-XX, open at that page when modal opens
  useEffect(() => {
    if (!isOpen) return;
    const hash = window.location.hash;
    const match = hash.match(/#magazine-page-(\d+)/i);
    if (match) {
      const num = parseInt(match[1], 10);
      if (!isNaN(num)) {
        // ensure flip layout when deep-linking
        setLayoutMode('flip');
        // flip after small timeout to ensure book is mounted
        setTimeout(() => goToPage(num - 1), 200);
      }
    }
  }, [isOpen, goToPage]);

  // When the dialog opens, focus the viewer region for keyboard users
  useEffect(() => {
    if (isOpen && viewerRegionRef.current) {
      try { viewerRegionRef.current.focus(); } catch { /* ignore */ }
    }
  }, [isOpen]);

  // When reader opens, ensure all page image sources exist; if not, render the PDF page to an image data URL.
  useEffect(() => {
    if (!isOpen) return;

    let cancelled = false;
    setHydrationPending(true);
    setLoadingProgress(0);

    const checkImage = (src: string) =>
      new Promise<boolean>((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = src;
      });

    (async () => {
      try {
        const missing: number[] = [];
        
        // First pass: check which images exist
        for (let i = 0; i < magazinePages.length; i++) {
          if (cancelled) break;
          const src = pageSources[i] ?? magazinePages[i];
          const exists = await checkImage(src);
          if (!exists) missing.push(i);
          
          // Update progress for checking phase (50% of total progress)
          const checkProgress = Math.round((i / magazinePages.length) * 50);
          setLoadingProgress(checkProgress);
        }

        if (missing.length > 0) {
          // Render missing pages in batches to avoid blocking UI
          const batchSize = 5;
          const batches = Math.ceil(missing.length / batchSize);
          
          for (let batchIndex = 0; batchIndex < batches; batchIndex++) {
            if (cancelled) break;
            
            const start = batchIndex * batchSize;
            const end = Math.min(start + batchSize, missing.length);
            const batchItems = missing.slice(start, end);
            
            const renders = await Promise.all(
              batchItems.map(async (idx) => {
                try {
                  const canvas = await renderPdfPageToCanvas(idx);
                  if (canvas && !cancelled) {
                    const dataUrl = canvas.toDataURL('image/jpeg', 0.9);
                    return { idx, dataUrl };
                  }
                } catch (err) {
                  return { idx, dataUrl: null };
                }
                return { idx, dataUrl: null };
              })
            );

            // Apply results for this batch
            setPageSources((prev) => {
              const next = [...prev];
              for (const r of renders) {
                if (r && r.dataUrl) next[r.idx] = r.dataUrl as string;
              }
              return next;
            });

            // Clear imageErrorMap for those successfully rendered
            setImageErrorMap((s) => {
              const next = { ...s };
              for (const r of renders) {
                if (r && r.dataUrl) delete next[r.idx];
              }
              return next;
            });
            
            // Update progress for rendering phase (50% to 100%)
            const renderProgress = 50 + Math.round(((batchIndex + 1) / batches) * 50);
            setLoadingProgress(renderProgress);
          }
        } else {
          // If no missing pages, set to 100%
          setLoadingProgress(100);
        }
      } finally {
        // Small delay before hiding loading screen for smoother transition
        if (!cancelled) {
          setTimeout(() => {
            setHydrationPending(false);
          }, 500);
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [isOpen, pageSources]);

  const handleImgError = (index: number) => {
    setImageErrorMap((s) => ({ ...s, [index]: true }));
  };

  const openPdfAtPage = (pageIndex: number) => {
    // Most browsers support page= or #page= anchors depending on viewer; we open the PDF directly.
    const pageNumber = pageIndex + 1;
    const url = `/NEXUS_MAGAZINE.pdf#page=${pageNumber}`;
    window.open(url, '_blank');
  };

  const renderPdfPageToCanvas = async (pageIndex: number) => {
    if (pdfRenderCache.current[pageIndex]) return pdfRenderCache.current[pageIndex];
    try {
      setPdfLoading((s) => ({ ...s, [pageIndex]: true }));
      // Dynamically import PDF.js only when needed
      const pdfjs = await import('pdfjs-dist/build/pdf');
      // Create a narrow local view of pdfjs to avoid broad `any` usage
      type PDFJSLike = {
        GlobalWorkerOptions?: { workerSrc?: string };
        version?: string;
        getDocument: (url: string) => { promise: Promise<unknown> };
      };
      const pdfjsTyped = pdfjs as unknown as PDFJSLike;
      // Worker: best-effort assignment if present
      try {
        if (pdfjsTyped.GlobalWorkerOptions) pdfjsTyped.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsTyped.version}/pdf.worker.min.js`;
      } catch (err) { void err; }

      const loadingTask = pdfjsTyped.getDocument('/NEXUS_MAGAZINE.pdf');
      const pdf = await loadingTask.promise as unknown as { getPage: (n:number) => Promise<unknown> };
      const pageNumber = pageIndex + 1;
      const page = await pdf.getPage(pageNumber) as unknown;
      const pageWithViewport = page as unknown as { getViewport: (opts: { scale: number }) => { width: number; height: number } };
      const viewport = pageWithViewport.getViewport({ scale: 1.5 });
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      if (!context) throw new Error('Unable to get canvas context');
      canvas.width = Math.floor(viewport.width);
      canvas.height = Math.floor(viewport.height);
      const renderContext = {
        canvasContext: context,
        viewport,
      } as unknown;
      // pdfjs page.render returns a task with a `promise` property. Narrow locally and await it safely.
      const pageLike = page as unknown as { render?: (ctx: unknown) => { promise?: Promise<unknown> } };
      const renderTask = pageLike.render?.(renderContext);
      if (renderTask && renderTask.promise) await renderTask.promise;
      pdfRenderCache.current[pageIndex] = canvas;
      return canvas;
    } finally {
      setPdfLoading((s) => ({ ...s, [pageIndex]: false }));
    }
  };

  // derive discrete zoom class (round to nearest 10%)
  const zoomPct = Math.max(50, Math.min(250, Math.round((zoom * 100) / 10) * 10));
  const zoomClass = `zoom-${zoomPct}`;

  // wheel zoom: when the user scrolls while hovering the viewer, zoom in/out
  const wheelTimeout = useRef<number | null>(null);
  const onViewerWheel = (e: React.WheelEvent) => {
    // Use Ctrl+wheel or plain wheel to zoom (kept permissive)
    if (!e.ctrlKey && Math.abs(e.deltaY) < 4) return; // small scrolls ignored
    e.preventDefault();
    const delta = -e.deltaY; // invert to make wheel-up = zoom in
    const factor = delta > 0 ? 0.06 : -0.06;
    setZoom((z) => {
      const next = Math.max(0.5, Math.min(2.5, +(z + factor).toFixed(2)));
      return next;
    });
    // debounce any heavy recalcs
    if (wheelTimeout.current != null) window.clearTimeout(wheelTimeout.current);
    // setTimeout returns a number in browsers; cast from ReturnType to number for TS clarity
    wheelTimeout.current = (window.setTimeout(() => {
      wheelTimeout.current = null;
    }, 80) as unknown) as number;
  };

  // Play page-turn sound when page flips
  useEffect(() => {
    if (!isMuted && pageAudioRef.current) {
      try {
        pageAudioRef.current.currentTime = 0;
        // Play may throw in some autoplay-restricted environments
        void pageAudioRef.current.play();
      } catch (err) {
        void err;
      }
    }
  }, [currentPage, isMuted]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      {/* Changed background for a more magazine-like feel */}
      <DialogContent className={`${isFullscreen ? 'w-screen h-screen max-w-none max-h-none p-0 magazine-fullscreen' : 'w-[95vw] sm:w-[90vw] md:max-w-7xl h-[85vh] sm:h-[92vh] p-2 sm:p-4'} bg-gray-100`}>
        <DialogHeader className="sr-only">
          <DialogTitle>NEXUS Magazine Viewer</DialogTitle>
          <DialogDescription>Flip through pages and view in fullscreen.</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col h-full">
          {/* Removed Floating toolbar */}

          {/* Removed center orange marker */}

          {/* Removed Left page tab */}
          {/* Removed Right page tab */}

          {hydrationPending && (
            <div className="absolute inset-0 z-40 flex items-center justify-center bg-white/95 backdrop-blur-sm">
              <div className="magazine-loading-container text-center max-w-xs sm:max-w-md w-full px-4 sm:px-6 py-6 sm:py-8 bg-white rounded-xl shadow-2xl border border-gray-100">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="text-lg sm:text-2xl font-bold text-primary">Preparing magazine</div>
                </div>
                <div className="relative h-3 w-full bg-gray-100 rounded-full overflow-hidden mb-4">
                  <div
                    className="absolute top-0 left-0 h-full bg-primary transition-all duration-300 ease-out magazine-progress-bar"
                    style={{ width: `${loadingProgress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between w-full mb-2">
                  <div className="text-xs sm:text-sm text-muted-foreground">Loading and rendering pages</div>
                  <div className="text-xs sm:text-sm text-primary font-medium">{loadingProgress}% complete</div>
                </div>
                {loadingProgress < 30 && (
                  <div className="text-xs text-gray-400 mt-2">
                    This may take a moment for high-quality viewing
                  </div>
                )}
              </div>
            </div>
          )}
          {/* Professional Magazine Toolbar */}
          <div className="flex flex-col gap-2 mb-2 sm:mb-4 px-2 sm:px-4 py-2 sm:py-3 bg-white rounded-lg shadow-md border border-gray-100">
            {/* Mobile First Row - Title and Page Info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="font-bold text-base sm:text-lg text-primary">NEXUS Magazine</div>
                <div className="text-xs sm:text-sm px-2 py-1 bg-primary/10 rounded-md font-medium text-primary">
                    Page {currentPage + 1} of {magazinePages.length}
                  </div>
                <div className="sr-only" aria-live="polite">Page {currentPage + 1} of {magazinePages.length}</div>
              </div>
              
              {/* Desktop Actions - Hidden on Mobile */}
              <div className="hidden sm:flex items-center gap-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button aria-label="Toggle fullscreen" variant="outline" size="icon" onClick={toggleFullscreen} className="h-8 w-8 sm:h-9 sm:w-9">
                        <Maximize className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Toggle Fullscreen</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button aria-label="Share magazine" variant="outline" size="icon" onClick={handleShare} className="h-8 w-8 sm:h-9 sm:w-9">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Share Magazine</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button aria-label="Download PDF" variant="outline" size="icon" onClick={handleDownload} className="h-8 w-8 sm:h-9 sm:w-9">
                        <Download className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Download PDF</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button aria-label="Print magazine" variant="outline" size="icon" onClick={handlePrint} className="h-8 w-8 sm:h-9 sm:w-9">
                        <Printer className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Print Magazine</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
            
            {/* Second Row - Navigation and Controls */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
              {/* Navigation Controls */}
              <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
                <Button variant="ghost" size="sm" onClick={() => goToPage(0)} className="h-7 sm:h-8 text-xs sm:text-sm px-2">
                  <Home className="h-3 w-3 sm:h-4 sm:w-4 sm:mr-1" />
                  <span className="hidden sm:inline">First</span>
                </Button>
                
                <Button variant="ghost" size="sm" onClick={prevButtonClick} className="h-7 sm:h-8 text-xs sm:text-sm px-2">
                  <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4 sm:mr-1" />
                  <span className="hidden sm:inline">Previous</span>
                </Button>
                
                <Button variant="ghost" size="sm" onClick={nextButtonClick} className="h-7 sm:h-8 text-xs sm:text-sm px-2">
                  <span className="hidden sm:inline">Next</span>
                  <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 sm:ml-1" />
                </Button>
                
                <Button variant="ghost" size="sm" onClick={() => goToPage(magazinePages.length - 1)} className="h-7 sm:h-8 text-xs sm:text-sm px-2">
                  <span className="hidden sm:inline">Last</span>
                  <RotateCcw className="h-3 w-3 sm:h-4 sm:w-4 sm:ml-1" />
                </Button>
              </div>
              
              {/* Right Side Controls */}
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                {/* Page search */}
                <div className="flex items-center border rounded-md overflow-hidden bg-gray-50">
                  <input
                    aria-label="Go to page"
                    placeholder="Page #"
                    value={gotoValue}
                    onChange={(e) => setGotoValue(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleGotoSubmit()}
                    className="px-2 py-1 w-16 sm:w-20 bg-transparent text-xs sm:text-sm outline-none"
                  />
                  <button onClick={handleGotoSubmit} title="Go" className="px-1 sm:px-2 py-1 border-l bg-gray-100 hover:bg-gray-200">
                    <Search className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>
                </div>
                
                {/* Layout toggle */}
                <Button variant="outline" size="sm" onClick={toggleLayout} className="h-7 sm:h-8 text-xs sm:text-sm px-2">
                  <Layout className="h-3 w-3 sm:h-4 sm:w-4 sm:mr-1" />
                  <span className="hidden sm:inline">{layoutMode === 'flip' ? 'Book' : 'Scroll'}</span>
                </Button>
                
                {/* Mobile Action Buttons */}
                <div className="flex sm:hidden gap-1">
                  <Button variant="outline" size="icon" onClick={handleDownload} className="h-7 w-7">
                    <Download className="h-3 w-3" />
                  </Button>
                  <Button variant="outline" size="icon" onClick={handleShare} className="h-7 w-7">
                    <Share2 className="h-3 w-3" />
                  </Button>
                </div>
                
                {/* Zoom controls - Simplified on mobile */}
                <div className="flex items-center gap-1">
                  <Button variant="outline" size="icon" onClick={zoomOut} className="h-7 w-7 sm:h-8 sm:w-8">
                    <ZoomOut className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                  
                  <div className="hidden sm:flex w-24 sm:w-32 px-2 items-center gap-2">
                    <Slider
                      value={[zoom * 100]}
                      min={50}
                      max={250}
                      step={10}
                      onValueChange={(value) => setZoom(value[0] / 100)}
                      className="w-full"
                    />
                    <span className="text-xs font-medium w-8">{(zoom * 100).toFixed(0)}%</span>
                  </div>
                  
                  <Button variant="outline" size="icon" onClick={zoomIn} className="h-7 w-7 sm:h-8 sm:w-8">
                    <ZoomIn className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Magazine Viewer */}
          <div className="flex-1 flex items-center justify-center relative overflow-hidden group">
            <div role="region" aria-label="Magazine viewer" onWheel={onViewerWheel} ref={viewerRegionRef} tabIndex={-1} className="relative w-full h-full max-w-full max-h-full flex items-center justify-center">
              {layoutMode === 'flip' ? (
                <div className={`flip-zoom ${zoomClass}`}>
                  <Suspense fallback={
                    <div className="flex items-center justify-center h-96">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                    </div>
                  }>
                    <HTMLFlipBook
                      ref={book}
                      width={PAGE_WIDTH} // Using standard A4 dimensions for more professional look
                      height={PAGE_HEIGHT}
                      size="stretch"
                      minWidth={PAGE_WIDTH * 0.6}
                      maxWidth={PAGE_WIDTH * 1.5}
                      minHeight={PAGE_HEIGHT * 0.6}
                      maxHeight={PAGE_HEIGHT * 1.5}
                      maxShadowOpacity={0.5}
                      showCover={true}
                      mobileScrollSupport={true}
                      onFlip={onPageChange}
                      className="magazine-book mx-auto"
                      style={{}}
                      drawShadow={true}
                      flippingTime={500} // Even faster flipping for better responsiveness
                      usePortrait={false}
                      startZIndex={0}
                      autoSize={true}
                      clickEventForward={true}
                      useMouseEvents={true}
                      swipeDistance={30}
                      showPageCorners={true}
                      disableFlipByClick={false}
                      startPage={0}
                    >
                    {/* If hydrationPending is true we are preparing pages; the dialog shows a loader overlay above */}
                    {pageSources.map((page, index) => (
                      <div key={index} className="page bg-white shadow-lg">
                        <div className="page-content h-full w-full flex items-center justify-center p-2 bg-gradient-to-br from-primary/5 to-accent/5 relative">
                          {!imageErrorMap[index] ? (
                            <>
                              <img
                                src={page}
                                alt={`Magazine page ${index + 1}`}
                                className="magazine-img max-w-full max-h-full object-contain rounded-lg"
                                loading="lazy"
                                onError={() => handleImgError(index)}
                              />
                              <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-0.5 rounded-full">
                                {index + 1}
                              </div>
                            </>
                          ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-6">
                              {pdfRenderCache.current[index] ? (
                                <div className="w-full h-full flex items-center justify-center">
                                  {/* Insert cached canvas */}
                                  <div ref={(el) => {
                                    const canvas = pdfRenderCache.current[index];
                                    if (el && canvas && !el.contains(canvas)) {
                                      el.innerHTML = '';
                                      el.appendChild(canvas);
                                    }
                                  }} className="w-full h-full" />
                                </div>
                              ) : pdfLoading[index] ? (
                                <div className="text-sm text-muted-foreground">Rendering PDF page...</div>
                              ) : (
                                <div className="w-full h-full bg-muted-foreground/10 rounded-lg flex items-center justify-center">
                                  <div className="text-sm text-muted-foreground">Page unavailable (image missing)</div>
                                </div>
                              )}
                              <div className="flex gap-2">
                                <Button size="sm" onClick={async () => { if (!pdfRenderCache.current[index]) await renderPdfPageToCanvas(index); }} className="bg-primary text-primary-foreground hover:bg-primary/90">Render PDF page</Button>
                                <Button size="sm" onClick={() => openPdfAtPage(index)} className="">Open PDF</Button>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                    </HTMLFlipBook>
                  </Suspense>
                  
                  {/* Page turn buttons - only visible on hover */}
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <Button 
                      aria-label="Previous page"
                      variant="ghost" 
                      size="icon" 
                      onClick={prevButtonClick} 
                      disabled={currentPage <= 0}
                      className="h-12 w-12 rounded-full bg-white/80 shadow-md hover:bg-white/90 transition-opacity opacity-0 group-hover:opacity-100"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </Button>
                  </div>
                  
                  <div className="absolute inset-y-0 right-0 flex items-center">
                    <Button 
                      aria-label="Next page"
                      variant="ghost" 
                      size="icon" 
                      onClick={nextButtonClick} 
                      disabled={currentPage >= magazinePages.length - 1}
                      className="h-12 w-12 rounded-full bg-white/80 shadow-md hover:bg-white/90 transition-opacity opacity-0 group-hover:opacity-100"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </Button>
                  </div>
                </div>
              ) : (
                // Scroll layout: simple vertical scroll of pages
                <div className={`w-full h-full overflow-auto p-4 scroll-zoom ${zoomClass} bg-gray-50 rounded-lg`}>
                  <div className="max-w-4xl mx-auto space-y-6">
                    {magazinePages.map((page, index) => (
                      <div
                        key={index}
                        ref={(el) => (pageRefs.current[index] = el)}
                        id={`magazine-page-${index + 1}`}
                        className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-200 ${index === currentPage ? 'ring-2 ring-primary ring-offset-2' : 'hover:shadow-xl'}`}
                        style={{ width: PAGE_WIDTH * 0.8, height: 'auto' }}
                      >
                        {!imageErrorMap[index] ? (
                          <div className="relative">
                            <img src={page} alt={`Magazine page ${index + 1}`} onError={() => handleImgError(index)} className="w-full h-auto object-contain block" loading="lazy" decoding="async" />
                            <div className="absolute bottom-3 right-3 bg-black/60 text-white text-sm px-3 py-1 rounded-full font-medium shadow-sm">
                              {index + 1}
                            </div>
                          </div>
                        ) : (
                          <div className="w-full h-60 flex flex-col items-center justify-center gap-3 p-6">
                            {pdfRenderCache.current[index] ? (
                              <div ref={(el) => {
                                const canvas = pdfRenderCache.current[index];
                                if (el && canvas && !el.contains(canvas)) {
                                  el.innerHTML = '';
                                  el.appendChild(canvas);
                                }
                              }} className="w-full h-full" />
                            ) : pdfLoading[index] ? (
                              <div className="text-sm text-muted-foreground">Rendering PDF page...</div>
                            ) : (
                              <div className="text-sm text-muted-foreground">Page unavailable (image missing)</div>
                            )}
                            <div className="flex gap-2">
                              <Button size="sm" onClick={async () => { if (!pdfRenderCache.current[index]) await renderPdfPageToCanvas(index); }} className="bg-primary text-primary-foreground hover:bg-primary/90">Render PDF page</Button>
                              <Button size="sm" onClick={() => openPdfAtPage(index)} className="">Open PDF page</Button>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Page Navigation removed as requested */}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};