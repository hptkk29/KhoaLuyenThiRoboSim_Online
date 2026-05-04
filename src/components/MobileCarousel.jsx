/* Reusable mobile carousel — overlay nav buttons, equal-height cards */
import { useState, useEffect, useRef, useCallback } from 'react';

export default function MobileCarousel({ children, autoInterval = 3500, accentColor = '#F97316' }) {
  const slides = Array.isArray(children) ? children : [children];
  const n = slides.length;
  const [cur, setCur] = useState(0);
  const timerRef = useRef(null);

  const startTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setCur(c => (c + 1) % n), autoInterval);
  }, [n, autoInterval]);

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [startTimer]);

  const goTo = useCallback((idx) => {
    setCur(((idx % n) + n) % n);
    startTimer();
  }, [n, startTimer]);

  return (
    <div className="mc-wrap">

      {/* Track — full width, buttons float on top */}
      <div className="mc-track-container">
        <div className="mc-track-outer">
          <div
            className="mc-track-inner"
            style={{ transform: `translateX(-${cur * 100}%)` }}
          >
            {slides.map((slide, i) => (
              <div key={i} className="mc-slide">{slide}</div>
            ))}
          </div>
        </div>

        {/* Overlay prev */}
        <button
          className="mc-btn mc-btn--prev"
          onClick={() => goTo(cur - 1)}
          aria-label="Slide trước"
        >‹</button>

        {/* Overlay next */}
        <button
          className="mc-btn mc-btn--next"
          onClick={() => goTo(cur + 1)}
          aria-label="Slide tiếp"
        >›</button>
      </div>

      {/* Dots */}
      <div className="mc-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className="mc-dot"
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            style={{
              width: i === cur ? 24 : 8,
              background: i === cur ? accentColor : '#D1D5DB',
            }}
          />
        ))}
      </div>

      <style>{`
        .mc-wrap { width: 100%; }

        /* Wrapper cho track + overlay buttons */
        .mc-track-container {
          position: relative !important;
          width: 100% !important;
        }

        /* Overflow container — full width */
        .mc-track-outer {
          overflow: hidden !important;
          width: 100% !important;
        }

        /* Flex row của tất cả slides */
        .mc-track-inner {
          display: flex !important;
          align-items: stretch !important;
          transition: transform 0.38s cubic-bezier(0.4,0,0.2,1) !important;
          will-change: transform !important;
        }

        /* Mỗi slide — stretch theo slide cao nhất */
        .mc-slide {
          min-width: 100% !important;
          width: 100% !important;
          flex-shrink: 0 !important;
          box-sizing: border-box !important;
          display: flex !important;
          flex-direction: column !important;
        }

        /* Card bên trong slide lấp đầy chiều cao */
        .mc-slide > * {
          flex: 1 !important;
          min-height: 0 !important;
        }

        /* Overlay nav buttons — nằm trên card, không chiếm diện tích */
        .mc-btn {
          all: unset !important;
          box-sizing: border-box !important;
          position: absolute !important;
          top: 50% !important;
          transform: translateY(-50%) !important;
          z-index: 20 !important;
          width: 28px !important;
          height: 28px !important;
          border-radius: 50% !important;
          background: rgba(255,255,255,0.90) !important;
          border: 1px solid rgba(0,0,0,0.12) !important;
          box-shadow: 0 2px 8px rgba(0,0,0,0.18) !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          cursor: pointer !important;
          font-size: 15px !important;
          color: #374151 !important;
          font-weight: 800 !important;
          line-height: 1 !important;
          user-select: none !important;
          backdrop-filter: blur(4px) !important;
        }
        .mc-btn--prev { left: 10px !important; }
        .mc-btn--next { right: 10px !important; }
        .mc-btn:active {
          transform: translateY(-50%) scale(0.88) !important;
          background: rgba(255,255,255,1) !important;
        }

        /* Dots */
        .mc-dots {
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          gap: 6px !important;
          margin-top: 14px !important;
        }
        .mc-dot {
          all: unset !important;
          box-sizing: border-box !important;
          height: 8px !important;
          border-radius: 4px !important;
          cursor: pointer !important;
          transition: width 0.3s ease, background 0.3s ease !important;
          display: inline-block !important;
        }
      `}</style>
    </div>
  );
}
