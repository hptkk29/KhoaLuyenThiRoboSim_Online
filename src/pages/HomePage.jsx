import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function HomePage() {
  useScrollReveal()

  useEffect(() => {
    document.title = 'Luyện thi RoboSim 2026 cùng Sata Robo | SataWorld'
  }, [])

  return (
    <>
      <Navbar />

      <main>
        {/* ── HERO ── */}
        <section className="home-hero">
          <div className="container">
            <div className="home-hero-inner">
              <div className="home-hero-eyebrow">
                <span className="dot" />
                Vòng loại Robotics 2026 – Đang mở đăng ký
              </div>

              <div className="badge" style={{ display: 'inline-flex' }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
                Cuộc thi Sáng tạo Robotics 2026
              </div>

              <h1>
                <span className="gradient-text">Luyện thi RoboSim 2026</span><br />
                cùng Sata Robo
              </h1>

              <p className="home-hero-sub">
                Hệ thống khóa học RoboSim giúp học sinh Tiểu học và THCS chuẩn bị tốt hơn cho
                vòng loại Cuộc thi Sáng tạo Robotics 2026, từ học online theo đề đến lớp kèm
                trực tiếp offline.
              </p>

              <p className="home-hero-desc">
                Chọn hình thức học phù hợp với nhu cầu của học sinh: tự luyện online theo bộ đề
                R1/R2 hoặc tham gia lớp học kèm trực tiếp 16 buổi tại Đà Nẵng.
              </p>

              <div className="home-hero-cta">
                <Link to="/luyen-thi-robosim-r1-r2" className="btn btn-r1 btn-lg">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <rect x="2" y="3" width="20" height="14" rx="2"/><polyline points="8 21 12 17 16 21"/>
                  </svg>
                  Luyện thi RoboSim R1 &amp; R2 Online
                </Link>
                <Link to="/khoa-hoc-robosim-offline" className="btn btn-r2 btn-lg">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                  Khóa học RoboSim Offline 16 buổi
                </Link>
              </div>

              <img
                src="/image/LinhVat.png"
                alt="Linh vật Sata Robo"
                className="home-mascot"
                style={{ marginTop: '20px' }}
              />
            </div>
          </div>
        </section>

        {/* ── CHOICE CARDS ── */}
        <section className="choice-section">
          <div className="container">
            <div className="text-center reveal">
              <div className="badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
                Chọn hình thức học phù hợp
              </div>
              <h2 className="section-title">
                Hai lựa chọn – Một mục tiêu:<br />
                <span className="gradient-text">Chinh phục RoboSim 2026</span>
              </h2>
              <p className="section-subtitle">
                Dù học sinh muốn tự luyện online hay cần giáo viên kèm trực tiếp, Sata Robo đều
                có lộ trình phù hợp.
              </p>
            </div>

            <div className="choice-grid">
              {/* Card online */}
              <div className="choice-card choice-card-online reveal">
                <div className="choice-card-icon">💻</div>
                <span className="choice-card-badge badge-online">Online · SataWorld</span>
                <h3>Luyện thi RoboSim R1 &amp; R2 Online</h3>
                <p>
                  Phù hợp với học sinh muốn tự học, tự luyện đề trên nền tảng online, học theo
                  đúng bảng R1 hoặc R2. Truy cập bất kỳ lúc nào, luyện theo lộ trình bài bản
                  với full đề chủ đề Hậu cần thông minh.
                </p>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: 'auto' }}>
                  <Link to="/luyen-thi-robosim-r1-r2" className="btn btn-r1">
                    Xem khóa online
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Card offline */}
              <div className="choice-card choice-card-offline reveal reveal-delay-1">
                <div className="choice-card-icon">🏫</div>
                <span className="choice-card-badge badge-offline">Offline · Đà Nẵng · 16 buổi</span>
                <h3>Khóa học RoboSim Offline 16 buổi</h3>
                <p>
                  Phù hợp với học sinh cần giáo viên kèm trực tiếp, được hướng dẫn, sửa lỗi và
                  sắp lớp tại cơ sở gần nhà ở Đà Nẵng. Khai giảng tối Thứ 2,
                  ngày 18/05/2026. Ưu đãi giảm 30%.
                </p>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: 'auto' }}>
                  <Link to="/khoa-hoc-robosim-offline" className="btn btn-r2">
                    Xem lớp offline
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY SATA ROBO ── */}
        <section className="section section-alt">
          <div className="container">
            <div className="text-center reveal">
              <div className="badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
                Điểm nổi bật
              </div>
              <h2 className="section-title">
                Vì sao nên luyện thi RoboSim<br />
                <span className="gradient-text">cùng Sata Robo?</span>
              </h2>
            </div>

            <div className="why-grid">
              <div className="why-card reveal">
                <span className="why-icon">🗺️</span>
                <h3 className="why-title">Lộ trình học rõ ràng theo bảng R1/R2</h3>
                <p className="why-desc">
                  Học sinh học đúng nội dung theo bảng thi của mình, không lo học sai trọng tâm.
                </p>
              </div>
              <div className="why-card reveal reveal-delay-1">
                <span className="why-icon">🎯</span>
                <h3 className="why-title">Bám sát vòng loại RoboSim 2026</h3>
                <p className="why-desc">
                  Nội dung xây dựng đúng theo chủ đề Hậu cần thông minh của vòng loại năm 2026.
                </p>
              </div>
              <div className="why-card reveal reveal-delay-2">
                <span className="why-icon">🌱</span>
                <h3 className="why-title">Phù hợp với Tiểu học và THCS</h3>
                <p className="why-desc">
                  Lộ trình từ cơ bản đến nâng cao, thiết kế phù hợp với học sinh từ bảng R1 đến R2.
                </p>
              </div>
              <div className="why-card reveal reveal-delay-3">
                <span className="why-icon">🔄</span>
                <h3 className="why-title">Học online hoặc offline tùy nhu cầu</h3>
                <p className="why-desc">
                  Tự học theo đề online trên SataWorld hoặc tham gia lớp kèm trực tiếp tại Đà Nẵng.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="cta-section">
          <div className="container">
            <div className="badge" style={{ margin: '0 auto 20px' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
              Bắt đầu ngay hôm nay
            </div>
            <h2>Sẵn sàng chinh phục <span className="gradient-text">RoboSim 2026?</span></h2>
            <p>Chọn hình thức học phù hợp và bắt đầu luyện tập ngay hôm nay cùng Sata Robo.</p>
            <div className="cta-btns">
              <Link to="/luyen-thi-robosim-r1-r2" className="btn btn-r1 btn-lg">
                Luyện thi Online R1 &amp; R2
              </Link>
              <Link to="/khoa-hoc-robosim-offline" className="btn btn-r2 btn-lg">
                Đăng ký lớp Offline 16 buổi
              </Link>
              <a href="https://zalo.me/0818823720" className="btn btn-zalo btn-lg" rel="noopener" target="_blank">
                Nhắn Zalo tư vấn
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
