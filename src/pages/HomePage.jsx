import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        {/* ── HERO ── */}
        <section className="home-hero">
          <div className="container home-hero-inner">
            <div className="home-hero-eyebrow">
              <span className="dot" />
              Đang tuyển sinh · Luyện thi RoboSim 2026
            </div>

            <h1>
              Luyện thi RoboSim 2026{' '}
              <span className="gradient-text">cùng Sata Robo</span>
            </h1>

            <p className="home-hero-sub">
              Chương trình luyện thi sáng tạo robotics bài bản nhất tại Đà Nẵng
            </p>

            <p className="home-hero-desc">
              Chọn hình thức học phù hợp: luyện thi RoboSim online theo bảng R1/R2 hoặc tham gia lớp học RoboSim Offline 16 buổi tại Đà Nẵng.
            </p>

            <div className="home-hero-cta">
              <Link to="/luyen-thi-robosim-r1-r2" className="btn btn-r1 btn-lg">
                🚀 Xem khóa luyện thi online
              </Link>
              <Link to="/khoa-hoc-robosim-offline" className="btn btn-r2 btn-lg">
                🏫 Xem lớp học offline
              </Link>
            </div>

            <img
              src="/image/LinhVat.png"
              alt="Linh vật Sata Robo"
              className="home-mascot"
            />
          </div>
        </section>

        {/* ── CHOICE CARDS ── */}
        <section className="choice-section">
          <div className="container">
            <div className="text-center">
              <span className="badge">🎯 Hai hình thức học</span>
              <h2 className="section-title">Chọn hình thức phù hợp với bạn</h2>
              <p className="section-subtitle">
                Mỗi hình thức có ưu điểm riêng, phù hợp với từng nhu cầu và thời gian của học sinh.
              </p>
            </div>

            <div className="choice-grid">
              {/* Card Online */}
              <div className="choice-card choice-card-online">
                <div className="choice-card-icon">🖥️</div>
                <span className="choice-card-badge badge-online">ONLINE · TỰ HỌC</span>
                <h3>Luyện thi RoboSim R1 &amp; R2 Online</h3>
                <p>
                  Phù hợp với học sinh muốn tự luyện đề, học theo lộ trình online và mua khóa trực tiếp trên SataWorld. Học mọi lúc, mọi nơi với video bài giảng và AI kiểm tra.
                </p>
                <Link to="/luyen-thi-robosim-r1-r2" className="btn btn-r1">
                  Xem khóa online →
                </Link>
              </div>

              {/* Card Offline */}
              <div className="choice-card choice-card-offline">
                <div className="choice-card-icon">🏫</div>
                <span className="choice-card-badge badge-offline">OFFLINE · CÓ GIÁO VIÊN</span>
                <h3>Khóa học RoboSim Offline 16 buổi</h3>
                <p>
                  Phù hợp với học sinh cần giáo viên kèm trực tiếp, được hướng dẫn và sửa lỗi tại các cơ sở SataMath Đà Nẵng. Lịch học cố định, sát đề thi thực tế.
                </p>
                <Link to="/khoa-hoc-robosim-offline" className="btn btn-r2">
                  Xem lớp offline →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY SATA ROBO ── */}
        <section className="section section-alt">
          <div className="container text-center">
            <span className="badge">⭐ Vì sao chọn Sata Robo</span>
            <h2 className="section-title">Cam kết chất lượng từ Sata Robo</h2>
            <p className="section-subtitle">
              Hơn 5 năm đồng hành cùng học sinh trong hành trình học Robotics và thi đấu sáng tạo công nghệ.
            </p>
            <div className="why-grid">
              <div className="why-card">
                <span className="why-icon">🏆</span>
                <div className="why-title">Chuyên sâu RoboSim</div>
                <div className="why-desc">Đội ngũ giáo viên có kinh nghiệm thi đấu và giảng dạy RoboSim từ 2020</div>
              </div>
              <div className="why-card">
                <span className="why-icon">📊</span>
                <div className="why-title">Lộ trình bài bản</div>
                <div className="why-desc">Chương trình học từ nền tảng đến nâng cao, sát đề thi thực tế</div>
              </div>
              <div className="why-card">
                <span className="why-icon">🤖</span>
                <div className="why-title">AI hỗ trợ học tập</div>
                <div className="why-desc">Hệ thống AI kiểm tra, phản hồi và gợi ý cải thiện cho từng học sinh</div>
              </div>
              <div className="why-card">
                <span className="why-icon">💬</span>
                <div className="why-title">Hỗ trợ tận tình</div>
                <div className="why-desc">Giáo viên và đội ngũ Sata Robo luôn sẵn sàng hỗ trợ qua Zalo</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="cta-section">
          <div className="container">
            <h2>Bắt đầu hành trình RoboSim 2026 ngay hôm nay</h2>
            <p>Đăng ký sớm để nhận ưu đãi đặc biệt và đảm bảo suất học trong lớp offline</p>
            <div className="cta-btns">
              <Link to="/luyen-thi-robosim-r1-r2" className="btn btn-r1 btn-lg">
                🚀 Luyện thi Online ngay
              </Link>
              <a
                href="https://zalo.me/0818823720"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-zalo btn-lg"
              >
                💬 Tư vấn qua Zalo
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
