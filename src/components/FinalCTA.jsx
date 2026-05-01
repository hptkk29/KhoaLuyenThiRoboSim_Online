/* Section 7 — FinalCTA: Kêu gọi hành động cuối trang (đặt TRƯỚC FAQ) */
import { trackAndRedirect } from '../utils/tracking';

const guarantees = [
  'Truy cập RoboSim không giới hạn',
  'Hỗ trợ đổi bảng nếu chọn nhầm',
  'Forum hỏi đáp với mentor trong suốt khoá học',
  'Đề mô phỏng vòng loại RBT2026 cập nhật thường xuyên',
];

export default function FinalCTA() {
  return (
    <section className="lp-final-cta cta-section" id="final-cta" aria-labelledby="final-cta-heading">
      <div className="container">
        <h2 id="final-cta-heading">
          BỐ MẸ ĐÃ ĐỌC ĐẾN ĐÂY —<br />
          CHỈ CÒN 1 BƯỚC NỮA CHO CON.
        </h2>
        <p>
          Mỗi ngày trôi qua = 1 ngày các bạn khác đang luyện thêm.<br />
          Đừng để con bố mẹ bị bỏ lại trong nhóm đại trà.
        </p>

        {/* 2 CTA chính */}
        <div className="cta-btns">
          <button
            onClick={() => trackAndRedirect('R1', 'section7_R1')}
            className="btn btn-r1 btn-lg"
            aria-label="Đăng ký Bảng R1 cho con Tiểu học — 490.000đ, mở trong tab mới"
          >
            🟦 ĐĂNG KÝ BẢNG R1 — 490.000đ
            <span className="lp-final-cta__sub">(Cho con TIỂU HỌC)</span>
          </button>
          <button
            onClick={() => trackAndRedirect('R2', 'section7_R2')}
            className="btn btn-r2 btn-lg"
            aria-label="Đăng ký Bảng R2 cho con THCS — 490.000đ, mở trong tab mới"
          >
            🟪 ĐĂNG KÝ BẢNG R2 — 490.000đ
            <span className="lp-final-cta__sub">(Cho con THCS)</span>
          </button>
        </div>

        {/* Liên hệ trực tiếp */}
        <div className="lp-final-cta__contact">
          <p>Bố mẹ cần tư vấn riêng?</p>
          <ul>
            <li>
              <a href="tel:0818823720" aria-label="Gọi hotline Sata Robo">
                📞 Hotline: <strong>0818.823.720</strong>
              </a>
            </li>
            <li>
              <a href="https://zalo.me/0818823720" target="_blank" rel="noopener noreferrer" aria-label="Chat Zalo với Sata Robo">
                💬 Zalo: <strong>0818.823.720</strong>
              </a>
            </li>
            <li>
              <a href="mailto:satarobo@gmail.com" aria-label="Gửi email cho Sata Robo">
                📧 Email: <strong>satarobo@gmail.com</strong>
              </a>
            </li>
          </ul>
          <p className="lp-final-cta__response-time">
            Sata Robo phản hồi trong 30 phút (giờ hành chính).
          </p>
        </div>

        {/* Bảo chứng */}
        <ul className="lp-final-cta__guarantees" role="list" aria-label="Cam kết của Sata Robo">
          {guarantees.map((g) => (
            <li key={g} role="listitem">
              <span className="lp-final-cta__check" aria-hidden="true">✓</span>
              {g}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
