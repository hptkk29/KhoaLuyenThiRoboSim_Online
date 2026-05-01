/* Section 1 — Hero: Hook đầu trang, 2 CTA chính R1/R2 */
import { trackAndRedirect } from '../utils/tracking';

export default function Hero() {
  return (
    <section className="lp-hero" id="hero" aria-labelledby="hero-heading">
      <div className="container lp-hero__inner">
        {/* Badge trên cùng */}
        <div className="lp-hero__badge" role="note">
          <span className="lp-hero__badge-dot" aria-hidden="true" />
          🚨 ĐỀ THI VÒNG LOẠI RBT2026 ĐÃ MỞ.&nbsp;
          <strong>100.000+ HỌC SINH ĐANG LUYỆN CÙNG LÚC.</strong>
        </div>

        {/* H1 */}
        <h1 id="hero-heading" className="lp-hero__h1">
          ĐỀ ĐÃ MỞ.<br />
          CẢ NƯỚC ĐANG LUYỆN.<br />
          <span className="gradient-text">CON BỐ MẸ — LUYỆN ĐÚNG CÁCH HAY CHƯA?</span>
        </h1>

        {/* Sub copy */}
        <div className="lp-hero__sub">
          <p>Đây là sự thật ít ai nói với bố mẹ:</p>
          <p>
            Đề mở công khai = ai cũng có. Ai cũng luyện free.<br />
            Đến ngày thi — cả nước đứng <strong>cùng vạch xuất phát</strong>.
          </p>
          <p>
            Mà BTC RBT2026 chỉ chọn <strong>TOP</strong> đi tiếp.<br />
            Còn lại — về nhà.
          </p>
        </div>

        {/* Đoạn nhấn */}
        <div className="lp-hero__emphasis">
          <p>
            Khoá Luyện Thi RoboSim của <strong>Sata Robo</strong><br />
            sinh ra cho 1 mục đích duy nhất:<br />
            <strong className="lp-hero__emphasis-main">ĐƯA CON BỐ MẸ VÀO TOP. PASS VÒNG LOẠI.</strong>
          </p>
        </div>

        {/* CTA chính */}
        <div className="lp-hero__cta">
          <button
            onClick={() => trackAndRedirect('R1', 'hero_R1')}
            className="btn btn-r1 btn-lg"
            aria-label="Đăng ký Khoá Luyện Thi Bảng R1 cho con Tiểu học — 490.000đ"
          >
            🟦 Con học TIỂU HỌC → Đăng ký BẢNG R1
            <span className="lp-cta__price">490.000đ</span>
          </button>
          <button
            onClick={() => trackAndRedirect('R2', 'hero_R2')}
            className="btn btn-r2 btn-lg"
            aria-label="Đăng ký Khoá Luyện Thi Bảng R2 cho con THCS — 490.000đ"
          >
            🟪 Con học THCS → Đăng ký BẢNG R2
            <span className="lp-cta__price">490.000đ</span>
          </button>
        </div>

        {/* Trust badges */}
        <div className="lp-hero__trust">
          <span className="lp-trust-badge">
            ⏰ Ưu đãi GIẢM đến 45% — chỉ trước ngày thi
          </span>
          <span className="lp-trust-badge">
            ⭐ Học viên Sata Robo đã pass vòng loại các năm trước
          </span>
        </div>

        {/* Ảnh hero */}
        <div className="lp-hero__visual">
          <img
            src="[HERO_IMAGE]"
            alt="Học sinh luyện thi RoboSim trên máy tính — Khoá Luyện Thi RBT2026 Sata Robo"
            className="lp-hero__img"
            loading="lazy"
            width="800"
            height="500"
          />
        </div>
      </div>
    </section>
  );
}
