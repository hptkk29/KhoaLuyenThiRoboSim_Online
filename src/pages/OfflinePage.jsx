import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// TODO: Thêm nội dung đầy đủ cho trang khóa học Offline

export default function OfflinePage() {
  return (
    <>
      <Navbar />

      <main className="offline-page-wrapper">
        {/* ── HERO ── */}
        <section className="offline-hero">
          <div className="container offline-hero-inner">
            <div className="badge-row">
              <span className="badge-info">🗓️ 16 buổi học</span>
              <span className="badge-info">📍 Đà Nẵng</span>
              <span className="badge-discount">🔥 Ưu đãi đặc biệt 2026</span>
            </div>

            <h1>
              Khóa học RoboSim{' '}
              <span className="gradient-text">Offline 16 buổi</span>
            </h1>

            <p className="offline-hero-sub">
              Lớp học RoboSim trực tiếp với giáo viên tại các cơ sở SataMath Đà Nẵng. Phù hợp với học sinh cần được hướng dẫn sát sao, sửa lỗi tức thì và học theo nhóm nhỏ.
            </p>

            <div className="offline-hero-cta">
              <a
                href="https://zalo.me/0818823720"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-r1 btn-lg"
              >
                💬 Đăng ký qua Zalo
              </a>
              <Link to="/" className="btn btn-outline btn-lg">
                ← Về trang chủ
              </Link>
            </div>
          </div>
        </section>

        {/* ── WHY OFFLINE ── */}
        <section className="section section-alt">
          <div className="container text-center">
            <span className="badge">🏫 Ưu điểm học offline</span>
            <h2 className="section-title">Tại sao chọn lớp học trực tiếp?</h2>
            <p className="section-subtitle">
              Học offline giúp học sinh được giáo viên sát sao, phản hồi tức thì và trao đổi với bạn học.
            </p>
            <div className="why-offline-grid">
              <div className="why-offline-card">
                <div className="why-offline-icon">👨‍🏫</div>
                <div className="why-offline-title">Giáo viên trực tiếp</div>
                <div className="why-offline-desc">Được hướng dẫn và sửa lỗi ngay trong buổi học</div>
              </div>
              <div className="why-offline-card">
                <div className="why-offline-icon">👥</div>
                <div className="why-offline-title">Nhóm nhỏ</div>
                <div className="why-offline-desc">Lớp học sĩ số ít, giáo viên chú ý từng học sinh</div>
              </div>
              <div className="why-offline-card">
                <div className="why-offline-icon">🗺️</div>
                <div className="why-offline-title">Thực hành trực tiếp</div>
                <div className="why-offline-desc">Thực hành trên phần mềm RoboSim ngay tại lớp</div>
              </div>
              <div className="why-offline-card">
                <div className="why-offline-icon">📅</div>
                <div className="why-offline-title">Lịch học cố định</div>
                <div className="why-offline-desc">16 buổi có lịch rõ ràng, dễ sắp xếp cho phụ huynh</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── LOCATION ── */}
        <section className="section">
          <div className="container text-center">
            <span className="badge">📍 Địa điểm học</span>
            <h2 className="section-title">Các cơ sở SataMath tại Đà Nẵng</h2>
            <p className="section-subtitle">
              Liên hệ Zalo để biết lịch khai giảng và cơ sở gần bạn nhất.
            </p>
            <div style={{ marginTop: '32px' }}>
              <a
                href="https://zalo.me/0818823720"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-zalo btn-lg"
              >
                💬 Hỏi lịch khai giảng qua Zalo: 0818.823.720
              </a>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="cta-section">
          <div className="container">
            <h2>Đăng ký ngay — Số lượng lớp có hạn</h2>
            <p>Liên hệ Zalo 0818.823.720 để đăng ký và nhận lịch khai giảng mới nhất</p>
            <div className="cta-btns">
              <a
                href="https://zalo.me/0818823720"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-zalo btn-lg"
              >
                💬 Tư vấn qua Zalo ngay
              </a>
              <Link to="/luyen-thi-robosim-r1-r2" className="btn btn-r1 btn-lg">
                🖥️ Xem thêm khóa Online
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
