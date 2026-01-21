"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";

const FRAME_NAMES = [
    "001", "003", "004", "005", "007", "008", "009", "011", "012", "014",
    "015", "017", "018", "020", "021", "024", "025", "027", "028", "030",
    "031", "033", "034", "036", "037", "039", "040"
];

const FRAME_COUNT = FRAME_NAMES.length;

export default function CameraScroll() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const images = useRef<HTMLImageElement[]>([]);
    const [loaded, setLoaded] = useState(false);
    const [progress, setProgress] = useState(0);

    // Scroll mapping
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Smooth the scroll progress for less "jumpy" frame changes
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const frameIndex = useTransform(smoothProgress, [0, 1], [0, FRAME_COUNT - 1]);

    // Text overlay opacities
    const titleOpacity = useTransform(scrollYProgress, [0, 0.05, 0.15, 0.2], [1, 1, 1, 0]);
    const launchOpacity = useTransform(scrollYProgress, [0.25, 0.3, 0.4, 0.45], [0, 1, 1, 0]);
    const reachOpacity = useTransform(scrollYProgress, [0.5, 0.55, 0.65, 0.7], [0, 1, 1, 0]);
    const ctaOpacity = useTransform(scrollYProgress, [0.8, 0.85, 0.95, 1], [0, 1, 1, 1]);

    // Logo transforms
    // Phase 1: Center (0-0.2)
    // Phase 2: Right (0.25-0.45) -> opposite of left text
    // Phase 3: Left (0.5-0.7) -> opposite of right text
    // Phase 4: Top-Center (0.8-1)
    const logoX = useTransform(scrollYProgress,
        [0, 0.15, 0.3, 0.45, 0.55, 0.7, 0.85, 1],
        ["0%", "0%", "30%", "30%", "-30%", "-30%", "0%", "0%"]
    );
    const logoY = useTransform(scrollYProgress,
        [0, 0.15, 0.3, 0.7, 0.85, 1],
        ["-160%", "-160%", "0%", "0%", "-320%", "-320%"]
    );
    const logoScale = useTransform(scrollYProgress,
        [0, 0.15, 0.3, 0.7, 0.85, 1],
        [2.0, 2.0, 1.1, 1.1, 0.8, 0.8]
    );
    const logoOpacity = useTransform(scrollYProgress,
        [0, 0.05, 0.75, 0.8],
        [0, 1, 1, 1]
    );

    const smoothLogoX = useSpring(logoX, { stiffness: 60, damping: 25 });
    const smoothLogoY = useSpring(logoY, { stiffness: 60, damping: 25 });
    const smoothLogoScale = useSpring(logoScale, { stiffness: 60, damping: 25 });

    useEffect(() => {
        let loadedCount = 0;
        const preloadImages = () => {
            for (let i = 0; i < FRAME_COUNT; i++) {
                const img = new Image();
                img.src = `/ezgif-14d437273d65aa0a-png-split/ezgif-frame-${FRAME_NAMES[i]}.png`;
                img.onload = () => {
                    loadedCount++;
                    setProgress(Math.floor((loadedCount / FRAME_COUNT) * 100));
                    if (loadedCount === FRAME_COUNT) {
                        setLoaded(true);
                        // Brief timeout to ensure layout is ready
                        setTimeout(() => render(0), 100);
                    }
                };
                images.current[i] = img;
            }
        };

        preloadImages();
    }, []);

    const render = (index: number) => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        if (!canvas || !ctx || !images.current[index]) return;

        const img = images.current[index];

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Object-contain logic
        const imgRatio = img.width / img.height;
        const canvasRatio = canvas.width / canvas.height;
        let drawWidth, drawHeight, x, y;

        if (imgRatio > canvasRatio) {
            drawWidth = canvas.width;
            drawHeight = canvas.width / imgRatio;
            x = 0;
            y = (canvas.height - drawHeight) / 2;
        } else {
            drawHeight = canvas.height;
            drawWidth = canvas.height * imgRatio;
            x = (canvas.width - drawWidth) / 2;
            y = 0;
        }

        ctx.drawImage(img, x, y, drawWidth, drawHeight);
    };

    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth * window.devicePixelRatio;
                canvasRef.current.height = window.innerHeight * window.devicePixelRatio;
                render(Math.round(frameIndex.get()));
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, [loaded]);

    // Frame update listener
    useEffect(() => {
        const unsubscribe = frameIndex.onChange((v) => {
            render(Math.round(v));
        });
        return () => unsubscribe();
    }, [frameIndex, loaded]);

    return (
        <div ref={containerRef} className="relative h-[600vh] bg-black">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="w-full h-full object-contain pointer-events-none"
                />

                {/* Vignette and Edge Gradients */}
                <div className="absolute inset-0 pointer-events-none z-10 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_50%,rgba(0,0,0,0.85)_90%,black_100%)]" />
                <div className="absolute inset-0 pointer-events-none z-10 bg-[linear-gradient(to_bottom,black_0%,transparent_25%,transparent_75%,black_100%)]" />
                <div className="absolute inset-0 pointer-events-none z-10 bg-[linear-gradient(to_right,black_0%,transparent_25%,transparent_75%,black_100%)]" />

                {/* Text Overlays */}
                <motion.div
                    style={{
                        opacity: logoOpacity,
                        x: smoothLogoX,
                        y: smoothLogoY,
                        scale: smoothLogoScale
                    }}
                    className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none"
                >
                    <img src="/nexus-globe-v3.png" alt="Nexus Logo" className="w-32 h-32 md:w-48 md:h-48 object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]" />
                </motion.div>

                <motion.div style={{ opacity: titleOpacity }} className="absolute inset-0 flex items-center justify-center p-8 pointer-events-none z-20">
                    <h1 className="text-5xl md:text-8xl text-center text-white/95 font-serif leading-tight drop-shadow-[0_4px_15px_rgba(0,0,0,0.8)]">
                        Faith Nexus 2026
                    </h1>
                </motion.div>

                <motion.div style={{ opacity: launchOpacity }} className="absolute inset-0 flex flex-col items-start justify-center p-12 md:p-24 pointer-events-none z-20">
                    <h2 className="text-4xl md:text-7xl text-white/95 font-serif max-w-2xl drop-shadow-[0_4px_15px_rgba(0,0,0,0.8)]">
                        Global Virtual Launch.
                    </h2>
                </motion.div>

                <motion.div style={{ opacity: reachOpacity }} className="absolute inset-0 flex flex-col items-end justify-center p-12 md:p-24 pointer-events-none z-20">
                    <h2 className="text-4xl md:text-7xl text-white/95 font-serif text-right max-w-2xl drop-shadow-[0_4px_15px_rgba(0,0,0,0.8)]">
                        Kingdom Voices<br />Global Reach.
                    </h2>
                </motion.div>

                <motion.div style={{ opacity: ctaOpacity }} className="absolute inset-0 flex flex-col items-center justify-center p-8 pointer-events-none gap-6 z-20">
                    <motion.h2 className="text-3xl md:text-7xl text-center text-white font-serif italic drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] tracking-tight">
                        Roots Revelation Renaissance
                    </motion.h2>

                    <motion.p className="text-lg md:text-2xl text-center text-white/90 font-sans max-w-4xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] leading-relaxed font-light">
                        Step into the vision, story and strategy behind <span className="text-white font-semibold">Faith Nexus 2026</span>; the global summit for Christian content creators and Kingdom storytellers.
                    </motion.p>

                    <motion.div className="relative group bg-black/60 backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] max-w-4xl mt-6 overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)]">
                        {/* Animated Scanline Overlay */}
                        <motion.div
                            className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] opacity-20"
                            animate={{ opacity: [0.1, 0.2, 0.1] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        />

                        <p className="relative z-10 text-base md:text-xl text-center text-white/95 font-sans leading-relaxed tracking-wide">
                            On 28 March 2026, we’re gathering; creators, media professionals, pastors, educators, writers, technologists and innovators online for a free global activation that will introduce Faith Nexus 2026 theme; <span className="text-white font-bold italic underline decoration-white/30 underline-offset-8">Roots Revelation Renaissance</span> and open the digital doorway into the October summit in Pretoria.
                        </p>
                    </motion.div>

                    <div className="flex flex-col md:flex-row gap-6 mt-8 pointer-events-auto">
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,255,255,0.4)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-5 bg-white text-black rounded-full font-sans font-bold text-base md:text-lg transition-all"
                        >
                            Register Free for the Virtual Launch
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.5)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-5 bg-transparent border-2 border-white/20 text-white rounded-full font-sans font-semibold text-base md:text-lg backdrop-blur-sm transition-all"
                        >
                            Learn About Faith Nexus 2026
                        </motion.button>
                    </div>

                    <p className="mt-8 text-xs md:text-sm text-white/40 font-sans tracking-widest uppercase text-center max-w-2xl">
                        Free online event · Registration required · Replay available for all registrants
                    </p>
                </motion.div>
            </div>

            {!loaded && (
                <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black">
                    <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-white"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                        />
                    </div>
                    <p className="mt-4 text-white/70 font-sans text-sm tracking-widest uppercase">
                        Loading Experience {progress}%
                    </p>
                </div>
            )}
        </div>
    );
}
