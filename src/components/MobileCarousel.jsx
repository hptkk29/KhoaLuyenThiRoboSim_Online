/* Reusable mobile carousel — auto-slide + prev/next + dots */
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
      {/* Row: nút ‹ — track — nút › */}
      <div className="mc-row">
        <button className="mc-btn" onClick={() => goTo(cur - 1)} aria-label="Slide trước">‹</button>

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

        <button className="mc-btn" onClick={() => goTo(cur + 1)} aria-label="Slide tiếp">›</button>
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

        .mc-row {
          display: flex !important;
          align-items: center !important;
          gap: 8px !important;
        }

        /* CSS reset + explicit style để không bị ghi đè bởi section CSS */
        .mc-btn {
          all: unset !important;
          box-sizing: border-box !important;
          flex-shrink: 0 !important;
          width: 36px !important;
          height: 36px !important;
          border-radius: 50% !important;
          background: #fff !important;
          border: 1.5px solid #E5E7EB !important;
          box-shadow: 0 2px 10px rgba(0,0,0,0.12) !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          cursor: pointer !important;
          font-size: 20px !important;
          color: #374151 !important;
          font-weight: 700 !important;
          line-height: 1 !important;
          user-select: none !important;
        }
        .mc-btn:active { transform: scale(0.92) !important; }

        .mc-track-outer {
          flex: 1 !important;
          overflow: hidden !important;
          min-width: 0 !important;
        }

        .mc-track-inner {
          display: flex !important;
          transition: transform 0.38s cubic-bezier(0.4,0,0.2,1) !important;
          will-change: transform !important;
        }

        .mc-slide {
          min-width: 100% !important;
          width: 100% !important;
          flex-shrink: 0 !important;
          box-sizing: border-box !important;
        }

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
