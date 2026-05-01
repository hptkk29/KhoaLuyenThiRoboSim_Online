/* Footer — Logo, liên hệ, copyright */

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          {/* Cột 1: Brand */}
          <div className="footer-brand">
            <img
              src="/image/LogoSataROBO.png"
              alt="Logo Sata Robo"
              className="footer-brand-logo"
              loading="lazy"
              width="72"
              height="72"
            />
            <p>
              Sata Robo — Đơn vị luyện thi Robotics chuyên biệt.<br />
              Khoá Luyện Thi RBT2026 dành cho học sinh Tiểu học và THCS toàn quốc.
            </p>
          </div>

          {/* Cột 2: Khoá học */}
          <nav aria-label="Khoá học">
            <h4>Khoá học</h4>
            <ul className="footer-links">
              <li>
                <a href="#courses">
                  <span className="fi">🟦</span> Khoá Luyện Thi R1 — Tiểu học
                </a>
              </li>
              <li>
                <a href="#courses">
                  <span className="fi">🟪</span> Khoá Luyện Thi R2 — THCS
                </a>
              </li>
              
              <li>
                <a href="#faq">
                  <span className="fi">❓</span> Câu hỏi thường gặp
                </a>
              </li>
              <li>
                <a
                  href="https://sataworld.vn"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="fi">🌐</span> sataworld.vn
                </a>
              </li>
            </ul>
          </nav>

          {/* Cột 3: Liên hệ */}
          <address>
            <h4>Liên hệ</h4>
            <ul className="footer-links">
              <li>
                <a href="tel:0818823720" aria-label="Gọi hotline Sata Robo">
                  <span className="fi">📞</span> 0818.823.720
                </a>
              </li>
              <li>
                <a
                  href="https://zalo.me/0818823720"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat Zalo với Sata Robo"
                >
                  <span className="fi">💬</span> Zalo: 0818.823.720
                </a>
              </li>
              <li>
                <a href="mailto:satarobo@gmail.com" aria-label="Gửi email cho Sata Robo">
                  <span className="fi">✉️</span> satarobo@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=258+Lê+Thanh+Nghị,+Đà+Nẵng"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Xem địa chỉ trung tâm trên Google Maps"
                >
                  <span className="fi">📍</span> 258 Lê Thanh Nghị, Hòa Cường, Đà Nẵng
                </a>
              </li>
              <li>
                <a
                  href="http://facebook.com/Satarobo"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Sata Robo"
                >
                  <span className="fi">📘</span> Facebook: Sata Robo
                </a>
              </li>
            </ul>
          </address>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>
            © {year}{' '}
            <a href="https://sataworld.vn/" rel="noopener noreferrer" target="_blank">
              Sata Robo
            </a>.
            {' '}Tất cả quyền được bảo lưu.
          </p>
          <p>
            <a href="/chinh-sach-bao-mat">Chính sách bảo mật</a>
            {' | '}
            <a href="/dieu-khoan-su-dung">Điều khoản sử dụng</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
