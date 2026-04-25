import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          {/* Col 1 */}
          <div className="footer-brand">
            <img src="/image/LogoSataROBO.png" alt="Sata Robo" className="footer-brand-logo" />
            <p>
              Đồng hành cùng học sinh trong hành trình học Robotics, RoboSim và luyện thi sáng tạo
              công nghệ. Chúng tôi cam kết cung cấp lộ trình học bài bản, thực hành thiết thực và
              sát với yêu cầu thi đấu.
            </p>
            <div style={{ marginTop: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <Link to="/luyen-thi-robosim-r1-r2" className="btn btn-r1 btn-sm">
                Luyện thi Online
              </Link>
              <Link to="/khoa-hoc-robosim-offline" className="btn btn-r2 btn-sm">
                Học Offline
              </Link>
            </div>
          </div>

          {/* Col 2 */}
          <div className="footer-col">
            <h4>Khóa học</h4>
            <ul className="footer-links">
              <li>
                <Link to="/luyen-thi-robosim-r1-r2">
                  <span className="fi">📚</span> Luyện thi RoboSim R1 &amp; R2 Online
                </Link>
              </li>
              <li>
                <Link to="/khoa-hoc-robosim-offline">
                  <span className="fi">🏫</span> Khóa học RoboSim Offline 16 buổi
                </Link>
              </li>
              <li>
                <a
                  href="https://sataworld.vn/robotics/khoa-hoc/full-de-luyen-thi-vong-loai-robosim-hau-can-thong-minh-bang-r1-cuoc-thi-sang-tao-robotics-2026"
                  rel="noopener" target="_blank"
                >
                  <span className="fi">🟠</span> Mua khóa luyện thi bảng R1
                </a>
              </li>
              <li>
                <a
                  href="https://sataworld.vn/robotics/khoa-hoc/full-de-luyen-thi-vong-loai-robosim-hau-can-thong-minh-bang-r2-cuoc-thi-sang-tao-robotics-2026"
                  rel="noopener" target="_blank"
                >
                  <span className="fi">🔵</span> Mua khóa khoá luyện thi bảng R2
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="footer-col">
            <h4>Liên hệ</h4>
            <ul className="footer-links">
              <li>
                <a href="https://maps.google.com/?q=258+Lê+Thanh+Nghị,+Đà+Nẵng" rel="noopener" target="_blank">
                  <span className="fi">📍</span> 258 Lê Thanh Nghị, Hòa Cường, Đà Nẵng
                </a>
              </li>
              <li>
                <a href="https://zalo.me/0818823720" rel="noopener" target="_blank">
                  <span className="fi">💬</span> Zalo: 0818.823.720
                </a>
              </li>
              <li>
                <a href="mailto:satarobo@gmail.com">
                  <span className="fi">✉️</span> satarobo@gmail.com
                </a>
              </li>
              <li>
                <a href="http://facebook.com/Satarobo" rel="noopener" target="_blank">
                  <span className="fi">📘</span> Facebook: Sata Robo
                </a>
              </li>
              <li>
                <a href="https://sataworld.vn/" rel="noopener" target="_blank">
                  <span className="fi">🌐</span> sataworld.vn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2026{' '}
            <a href="https://sataworld.vn/" rel="noopener">Sata Robo</a>.
            {' '}Tất cả quyền được bảo lưu.
          </p>
          <p style={{ fontSize: '12px' }}>
            Luyện thi RoboSim 2026 – Hậu cần thông minh | Bảng R1 &amp; R2
          </p>
        </div>
      </div>
    </footer>
  )
}
