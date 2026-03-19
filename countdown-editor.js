/**
 * TEMPORARY Countdown Visual Editor
 * Adds drag + resize handles to countdown elements so you can position them visually.
 * Press 'E' to toggle editor mode. Click "Copy CSS" to get the final values.
 * REMOVE THIS SCRIPT when done.
 */
(function () {
  let editorActive = false;
  let panel = null;
  const targets = [];

  function createPanel() {
    panel = document.createElement('div');
    panel.id = 'editor-panel';
    panel.innerHTML = `
      <style>
        #editor-panel {
          position: fixed; bottom: 0; left: 0; right: 0;
          background: rgba(0,0,0,0.95); color: #0f0; z-index: 99999;
          font-family: monospace; font-size: 11px; padding: 8px 12px;
          display: flex; flex-wrap: wrap; gap: 6px; align-items: center;
          border-top: 2px solid #ff7b00;
        }
        #editor-panel button {
          background: #ff7b00; color: #000; border: none; padding: 6px 14px;
          font-weight: bold; cursor: pointer; border-radius: 4px; font-size: 11px;
        }
        #editor-panel button:hover { background: #ffaa44; }
        #editor-panel .info { color: #aaa; margin-left: 8px; }
        .editor-outline { outline: 2px dashed #ff7b00 !important; cursor: move !important; }
        .editor-outline:hover { outline-color: #0f0 !important; }
        .resize-handle {
          position: absolute; bottom: -4px; right: -4px;
          width: 12px; height: 12px; background: #ff7b00;
          cursor: nwse-resize; z-index: 100000; border-radius: 2px;
        }
      </style>
      <span style="color:#ff7b00;font-weight:bold;">🎯 EDITOR MODE</span>
      <span class="info">Drag elements to move • Corner handle to resize • </span>
      <button id="btn-copy-css">📋 Copy CSS</button>
      <button id="btn-reset">↩ Reset</button>
      <button id="btn-close">✕ Close Editor</button>
      <div id="editor-log" style="width:100%;color:#0f0;margin-top:4px;max-height:60px;overflow-y:auto;"></div>
    `;
    document.body.appendChild(panel);

    document.getElementById('btn-copy-css').addEventListener('click', copyCss);
    document.getElementById('btn-reset').addEventListener('click', resetAll);
    document.getElementById('btn-close').addEventListener('click', toggleEditor);
  }

  function makeEditable(el, label) {
    const orig = {
      transform: el.style.transform,
      fontSize: el.style.fontSize,
      width: el.style.width,
      height: el.style.height,
      maxHeight: el.style.maxHeight,
      padding: el.style.padding,
      marginTop: el.style.marginTop,
      marginBottom: el.style.marginBottom,
    };

    el.classList.add('editor-outline');
    el.style.position = el.style.position || 'relative';

    // Store metadata
    const data = { el, label, orig, dx: 0, dy: 0 };
    targets.push(data);

    // Drag
    let dragging = false, startX, startY, origDx, origDy;
    el.addEventListener('mousedown', (e) => {
      if (e.target.classList.contains('resize-handle')) return;
      e.preventDefault(); e.stopPropagation();
      dragging = true;
      startX = e.clientX; startY = e.clientY;
      origDx = data.dx; origDy = data.dy;
    });
    el.addEventListener('touchstart', (e) => {
      if (e.target.classList.contains('resize-handle')) return;
      e.preventDefault(); e.stopPropagation();
      dragging = true;
      startX = e.touches[0].clientX; startY = e.touches[0].clientY;
      origDx = data.dx; origDy = data.dy;
    }, { passive: false });

    const onMove = (cx, cy) => {
      if (!dragging) return;
      data.dx = origDx + (cx - startX);
      data.dy = origDy + (cy - startY);
      el.style.transform = `translate(${data.dx}px, ${data.dy}px)`;
      logPos(data);
    };
    document.addEventListener('mousemove', (e) => onMove(e.clientX, e.clientY));
    document.addEventListener('touchmove', (e) => {
      onMove(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: false });
    document.addEventListener('mouseup', () => { dragging = false; });
    document.addEventListener('touchend', () => { dragging = false; });

    // Resize handle
    const handle = document.createElement('div');
    handle.className = 'resize-handle';
    el.style.position = 'relative';
    el.appendChild(handle);

    let resizing = false, resizeStartX, resizeStartY, origW, origH;
    handle.addEventListener('mousedown', (e) => {
      e.preventDefault(); e.stopPropagation();
      resizing = true;
      resizeStartX = e.clientX; resizeStartY = e.clientY;
      origW = el.offsetWidth; origH = el.offsetHeight;
    });
    handle.addEventListener('touchstart', (e) => {
      e.preventDefault(); e.stopPropagation();
      resizing = true;
      resizeStartX = e.touches[0].clientX; resizeStartY = e.touches[0].clientY;
      origW = el.offsetWidth; origH = el.offsetHeight;
    }, { passive: false });

    const onResize = (cx, cy) => {
      if (!resizing) return;
      const newW = origW + (cx - resizeStartX);
      const newH = origH + (cy - resizeStartY);
      el.style.width = newW + 'px';
      el.style.height = newH + 'px';
      el.style.maxHeight = newH + 'px';
      logPos(data);
    };
    document.addEventListener('mousemove', (e) => onResize(e.clientX, e.clientY));
    document.addEventListener('touchmove', (e) => {
      onResize(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: false });
    document.addEventListener('mouseup', () => { resizing = false; });
    document.addEventListener('touchend', () => { resizing = false; });

    // Font size with scroll wheel
    el.addEventListener('wheel', (e) => {
      e.preventDefault();
      const current = parseFloat(getComputedStyle(el).fontSize);
      const delta = e.deltaY < 0 ? 1 : -1;
      const newSize = Math.max(8, current + delta);
      el.style.fontSize = newSize + 'px';
      logPos(data);
    }, { passive: false });
  }

  function logPos(data) {
    const cs = getComputedStyle(data.el);
    const log = document.getElementById('editor-log');
    if (log) {
      log.textContent = `${data.label}: translate(${data.dx}px, ${data.dy}px) | font: ${cs.fontSize} | w: ${cs.width} | h: ${cs.height}`;
    }
  }

  function copyCss() {
    let css = '/* === Countdown Editor Output ===\n   Paste these values into your mobile media query */\n\n';
    targets.forEach(t => {
      const cs = getComputedStyle(t.el);
      css += `/* ${t.label} */\n`;
      if (t.dx || t.dy) css += `  transform: translate(${t.dx}px, ${t.dy}px);\n`;
      css += `  font-size: ${cs.fontSize};\n`;
      css += `  width: ${cs.width};\n`;
      css += `  height: ${cs.height};\n\n`;
    });
    navigator.clipboard.writeText(css).then(() => {
      alert('CSS copied to clipboard!');
    }).catch(() => {
      // Fallback
      const ta = document.createElement('textarea');
      ta.value = css;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      alert('CSS copied to clipboard!');
    });
    console.log(css);
  }

  function resetAll() {
    targets.forEach(t => {
      t.dx = 0; t.dy = 0;
      Object.assign(t.el.style, t.orig);
    });
  }

  function toggleEditor() {
    editorActive = !editorActive;
    if (editorActive) {
      if (!panel) createPanel();
      else panel.style.display = 'flex';

      // Make countdown elements editable
      const box = document.querySelector('.countdown-box.primary-focus');
      if (!box) { alert('No countdown box found!'); return; }

      const tag = box.querySelector('.next-event-tag');
      const logo = box.querySelector('.countdown-graphic');
      const digits = box.querySelector('.timer-digits');
      const dateText = box.querySelector('.countdown-date-text');

      if (tag && !tag.classList.contains('editor-outline')) makeEditable(tag, 'Next Major Moment badge');
      if (logo && !logo.classList.contains('editor-outline')) makeEditable(logo, 'Nexus Logo');
      if (digits && !digits.classList.contains('editor-outline')) makeEditable(digits, 'Timer Digits');
      if (dateText && !dateText.classList.contains('editor-outline')) makeEditable(dateText, 'Date Text');

      // Also make individual digit groups adjustable
      box.querySelectorAll('.digit').forEach((d, i) => {
        if (!d.classList.contains('editor-outline')) {
          makeEditable(d, `Digit ${i}`);
        }
      });
    } else {
      if (panel) panel.style.display = 'none';
      document.querySelectorAll('.editor-outline').forEach(el => {
        el.classList.remove('editor-outline');
      });
    }
  }

  // Press 'E' to toggle editor
  document.addEventListener('keydown', (e) => {
    if (e.key === 'e' || e.key === 'E') {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      toggleEditor();
    }
  });

  // Auto-activate on load
  setTimeout(toggleEditor, 1000);

  console.log('🎯 Countdown Editor loaded. Press E to toggle.');
})();
