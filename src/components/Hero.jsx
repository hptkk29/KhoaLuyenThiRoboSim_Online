/* Section 1 — Hero: Hook đầu trang, 2 CTA chính R1/R2 */
import { trackAndRedirect } from '../utils/tracking';

export default function Hero() {
  return (
    <section className="lp-hero" id="hero" aria-labelledby="hero-heading">
      <div className="container lp-hero__wrap">

        {/* Desktop: 2 cột — nội dung + CTA trái | mascot phải */}
        <div className="lp-hero__grid">

          {/* Cột trái: toàn bộ nội dung + CTA */}
          <div className="lp-hero__content">
            <div className="lp-hero__badge" role="note">
              <span className="lp-hero__badge-dot" aria-hidden="true" />
              🚨 ĐỀ THI VÒNG LOẠI RBT2026 ĐÃ MỞ.&nbsp;
              <strong>50.000+ HỌC SINH ĐANG LUYỆN CÙNG LÚC.</strong>
            </div>

            <h1 id="hero-heading" className="lp-hero__h1">
              ĐỀ ĐÃ MỞ.<br />
              CẢ NƯỚC ĐANG LUYỆN.<br />
              <span className="gradient-text">CON BỐ MẸ — LUYỆN ĐÚNG CÁCH HAY CHƯA?</span>
            </h1>

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

            <div className="lp-hero__emphasis">
              <p>
                Khoá Luyện Thi RoboSim của <strong>Sata Robo</strong><br />
                sinh ra cho 1 mục đích duy nhất:
              </p>
              <strong className="lp-hero__emphasis-main">ĐƯA CON BỐ MẸ VÀO TOP. PASS VÒNG LOẠI.</strong>
            </div>

            {/* CTA buttons ngay dưới hook copy */}
            <div className="lp-hero__cta">
              <button
                onClick={() => trackAndRedirect('R1', 'hero_R1')}
                className="btn btn-r1"
                aria-label="Đăng ký Khoá Luyện Thi Bảng R1 cho con Tiểu học — 490.000đ"
              >
                <span className="lp-cta__label">🟦 Tiểu học → Đăng ký BẢNG R1</span>
                <span className="lp-cta__price">490.000đ</span>
              </button>
              <button
                onClick={() => trackAndRedirect('R2', 'hero_R2')}
                className="btn btn-r2"
                aria-label="Đăng ký Khoá Luyện Thi Bảng R2 cho con THCS — 490.000đ"
              >
                <span className="lp-cta__label">🟪 THCS → Đăng ký BẢNG R2</span>
                <span className="lp-cta__price">490.000đ</span>
              </button>
            </div>

            <div className="lp-hero__trust">
              <span className="lp-trust-badge">⏰ Ưu đãi GIẢM đến 45% — chỉ trước ngày thi</span>
              <span className="lp-trust-badge">⭐ Học viên Sata Robo đã pass vòng loại các năm trước</span>
            </div>
          </div>

          {/* Cột phải: mascot thuần visual */}
          <div className="lp-hero__mascot-col" aria-hidden="true">
            <img
              src="/image/LinhVat.png"
              alt=""
              className="lp-hero__mascot"
              loading="eager"
              width="340"
              height="340"
            />
          </div>
        </div>

        {/* Stats row — full width bên dưới grid */}
        <div className="lp-hero__stats" aria-label="Thành tích Sata Robo">
          <div className="lp-hero__stat">
            <span className="lp-hero__stat-num">50.000+</span>
            <span className="lp-hero__stat-label">Học sinh<br />đang luyện</span>
          </div>
          <div className="lp-hero__stat">
            <span className="lp-hero__stat-num">788/800</span>
            <span className="lp-hero__stat-label">Điểm tối ưu<br />Bảng R1</span>
          </div>
          <div className="lp-hero__stat">
            <span className="lp-hero__stat-num">858/900</span>
            <span className="lp-hero__stat-label">Điểm tối ưu<br />Bảng R2</span>
          </div>
          <div className="lp-hero__stat">
            <span className="lp-hero__stat-num">490K</span>
            <span className="lp-hero__stat-label">Trọn khoá<br />luyện thi</span>
          </div>
        </div>

      </div>
    </section>
  );
}
