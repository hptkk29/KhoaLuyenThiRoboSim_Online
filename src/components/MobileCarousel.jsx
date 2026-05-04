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
    <div style={{ width: '100%' }}>
      {/* Track + nav buttons */}
      <div style={{ position: 'relative' }}>
        {/* Slide track */}
        <div style={{ overflow: 'hidden', margin: '0 44px' }}>
          <div
            style={{
              display: 'flex',
              transition: 'transform 0.38s cubic-bezier(0.4,0,0.2,1)',
              transform: `translateX(-${cur * 100}%)`,
              willChange: 'transform',
            }}
          >
            {slides.map((slide, i) => (
              <div key={i} style={{ minWidth: '100%', flexShrink: 0 }}>
                {slide}
              </div>
            ))}
          </div>
        </div>

        {/* Prev */}
        <button
          onClick={() => goTo(cur - 1)}
          aria-label="Slide trước"
          style={{
            position: 'absolute', left: 0, top: '50%',
            transform: 'translateY(-50%)',
            width: 36, height: 36, borderRadius: '50%',
            background: '#fff', border: '1.5px solid #E5E7EB',
            boxShadow: '0 2px 10px rgba(0,0,0,0.12)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', fontSize: 20, color: '#374151',
            fontWeight: 700, zIndex: 10, lineHeight: 1, padding: 0,
          }}
        >‹</button>

        {/* Next */}
        <button
          onClick={() => goTo(cur + 1)}
          aria-label="Slide tiếp"
          style={{
            position: 'absolute', right: 0, top: '50%',
            transform: 'translateY(-50%)',
            width: 36, height: 36, borderRadius: '50%',
            background: '#fff', border: '1.5px solid #E5E7EB',
            boxShadow: '0 2px 10px rgba(0,0,0,0.12)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', fontSize: 20, color: '#374151',
            fontWeight: 700, zIndex: 10, lineHeight: 1, padding: 0,
          }}
        >›</button>
      </div>

      {/* Dots */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 6, marginTop: 16 }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            style={{
              width: i === cur ? 24 : 8, height: 8,
              borderRadius: 4, border: 'none',
              background: i === cur ? accentColor : '#D1D5DB',
              cursor: 'pointer', padding: 0,
              transition: 'width 0.3s ease, background 0.3s ease',
            }}
          />
        ))}
      </div>
    </div>
  );
}
