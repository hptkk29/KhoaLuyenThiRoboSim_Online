/* Floating CTA buttons — hiện ở góc dưới phải khi cuộn xuống >600px */
import useScrollPosition from '../hooks/useScrollPosition';
import { trackAndRedirect } from '../utils/tracking';

export default function FloatingButtons() {
  const scrollY = useScrollPosition();
  const isVisible = scrollY > 600;

  return (
    <div
      className={`lp-floating${isVisible ? ' lp-floating--visible' : ''}`}
      aria-label="Đăng ký nhanh"
    >
      <button
        onClick={() => trackAndRedirect('R1', 'floating_R1')}
        className="lp-floating__btn lp-floating__btn--r1"
        aria-label="Đăng ký Khoá R1 cho Tiểu học — 490.000đ"
      >
        🟦 ĐK R1 — 490k
      </button>
      <button
        onClick={() => trackAndRedirect('R2', 'floating_R2')}
        className="lp-floating__btn lp-floating__btn--r2"
        aria-label="Đăng ký Khoá R2 cho THCS — 490.000đ"
      >
        🟪 ĐK R2 — 490k
      </button>
    </div>
  );
}
