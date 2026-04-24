import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useScrollReveal } from '../hooks/useScrollReveal'

const R1_URL = 'https://sataworld.vn/robotics/khoa-hoc/full-de-luyen-thi-vong-loai-robosim-hau-can-thong-minh-bang-r1-cuoc-thi-sang-tao-robotics-2026'
const R2_URL = 'https://sataworld.vn/robotics/khoa-hoc/full-de-luyen-thi-vong-loai-robosim-hau-can-thong-minh-bang-r2-cuoc-thi-sang-tao-robotics-2026'

/* YouTube click-to-play */
function YTPlayer({ videoId, altText }) {
  const [playing, setPlaying] = useState(false)

  return (
    <div
      className="yt-wrapper"
      role="button"
      tabIndex={0}
      onClick={() => setPlaying(true)}
      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setPlaying(true) }}
      aria-label="Bấm để xem video hướng dẫn đăng ký tài khoản và mua khóa học SataWorld"
    >
      {!playing ? (
        <>
          <img
            className="yt-thumb"
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            onError={e => { e.target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` }}
            alt={altText}
          />
          <div className="yt-overlay" />
          <div className="yt-play-btn" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M5 3l14 9-14 9V3z" /></svg>
          </div>
          <div className="yt-label">▶ Bấm để xem hướng dẫn</div>
        </>
      ) : (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={altText}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      )}
    </div>
  )
}

/* FAQ Item */
function FAQItem({ question, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-item${open ? ' open' : ''}`} role="listitem">
      <button className="faq-q" onClick={() => setOpen(o => !o)} aria-expanded={open}>
        {question}
        <span className="faq-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </button>
      <div className="faq-a">
        <div className="faq-a-inner">{children}</div>
      </div>
    </div>
  )
}

export default function OnlinePage() {
  useScrollReveal()

  useEffect(() => {
    document.title = 'Full đề luyện thi RoboSim Vòng loại 2026 – Hậu cần thông minh | Sata Robo'
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', 'Luyện thi RoboSim vòng loại Cuộc thi Sáng tạo Robotics 2026 với bộ full đề chủ đề Hậu cần thông minh. Khóa học bảng R1 và R2 trên SataWorld – lộ trình bài bản, thực hành thực tế.')
  }, [])

  return (
    <>
      <Navbar />

      <main>
        {/* ── 1. HERO ── */}
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="container">
            <div className="hero-grid">
              <div>
                <div className="hero-eyebrow">
                  <span className="dot" />
                  <span>Vòng loại Robotics 2026 — Đang mở đăng ký</span>
                </div>
                <div className="badge">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                  Cuộc thi Sáng tạo Robotics 2026
                </div>

                <h1 id="hero-title">
                  <span className="gradient-text">Full đề luyện thi RoboSim</span><br />
                  Vòng loại 2026<br />
                  Chủ đề Hậu cần thông minh
                </h1>

                <p className="hero-sub">Bộ khóa học bảng R1 &amp; R2 trên SataWorld – Học bài bản, thi tự tin</p>

                <p className="hero-desc">
                  Khóa học dành cho học sinh tham gia Cuộc thi Sáng tạo Robotics 2026 bảng R1 và R2, giúp các em
                  nắm cách thiết kế robot, phân tích nhiệm vụ, lập trình và tối ưu bài thi trên RoboSim theo đúng
                  chủ đề vòng loại.
                </p>

                <div className="hero-cta">
                  <a href={R1_URL} className="btn btn-r1 btn-lg" rel="noopener" target="_blank">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
                    </svg>
                    Mua khóa bảng R1
                  </a>
                  <a href={R2_URL} className="btn btn-r2 btn-lg" rel="noopener" target="_blank">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
                    </svg>
                    Mua khóa bảng R2
                  </a>
                </div>

                <div className="hero-stats">
                  <div className="hero-stat">
                    <div className="hero-stat-num">2</div>
                    <div className="hero-stat-label">Bảng thi (R1 &amp; R2)</div>
                  </div>
                  <div className="hero-stat">
                    <div className="hero-stat-num">5</div>
                    <div className="hero-stat-label">Bước lộ trình</div>
                  </div>
                  <div className="hero-stat">
                    <div className="hero-stat-num">100%</div>
                    <div className="hero-stat-label">Bám sát đề vòng loại</div>
                  </div>
                </div>
              </div>

              <div className="hero-visual">
                <div className="hero-visual-card">
                  <div className="circuit-lines" />
                  <img src="/image/LinhVat.png" alt="Linh vật Sata Robo" className="hero-robot-img" />
                  <h3 style={{ fontSize: '17px', fontWeight: 800, marginBottom: '8px' }}>RoboSim – Hậu cần thông minh</h3>
                  <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', marginBottom: '18px', lineHeight: 1.6 }}>
                    Vòng loại RoboSim không chỉ cần lập trình cơ bản – mà cần phân tích đề, chia nhiệm vụ, tối ưu đường đi và xử lý bài thi chiến lược.
                  </p>
                  <div>
                    <span className="hero-visual-tag">🏆 Robotics 2026</span>
                    <span className="hero-visual-tag">⚙️ RoboSim</span>
                    <span className="hero-visual-tag">📦 Logistics AI</span>
                    <span className="hero-visual-tag">🎯 Bảng R1</span>
                    <span className="hero-visual-tag">🎯 Bảng R2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. HƯỚNG DẪN ── */}
        <section className="section section-alt" id="huong-dan" aria-labelledby="guide-title">
          <div className="container">
            <div className="text-center reveal">
              <div className="badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
                </svg>
                Hướng dẫn
              </div>
              <h2 className="section-title" id="guide-title">
                Cách đăng ký tài khoản và<br />
                <span className="gradient-text">mua khóa học trên SataWorld</span>
              </h2>
              <p className="section-subtitle">
                Chỉ với vài bước đơn giản, phụ huynh và học sinh có thể tạo tài khoản SataWorld, chọn đúng khóa học
                theo bảng thi và bắt đầu luyện tập ngay trên hệ thống.
              </p>
            </div>

            <div className="guide-grid">
              <div className="reveal">
                <YTPlayer videoId="cuiQ5XO-Qps" altText="Video hướng dẫn đăng ký tài khoản SataWorld" />
              </div>

              <div className="reveal reveal-delay-1">
                <div className="steps-list">
                  {[
                    <>Truy cập website <strong>SataWorld.vn</strong></>,
                    'Đăng ký hoặc đăng nhập tài khoản học viên',
                    <>Chọn khóa học theo đúng bảng thi <strong>R1</strong> hoặc <strong>R2</strong></>,
                    'Bấm nút mua khóa học',
                    'Hoàn tất thanh toán theo hướng dẫn trên hệ thống',
                    <>Vào tài khoản học viên để <strong>bắt đầu học và luyện đề</strong></>,
                  ].map((text, i) => (
                    <div className="step-item" key={i}>
                      <div className="step-num">{i + 1}</div>
                      <div className="step-text">{text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="guide-footer reveal">
              <p>Chưa biết con đang thi bảng nào? Liên hệ Sata Robo để được hỗ trợ chọn đúng khóa.</p>
              <a href="https://zalo.me/0818823720" className="btn btn-zalo" rel="noopener" target="_blank">
                💬 Nhắn Zalo tư vấn
              </a>
            </div>
          </div>
        </section>

        {/* ── 3. NỖI ĐAU ── */}
        <section className="section" id="kho-khan" aria-labelledby="pain-title">
          <div className="container">
            <div className="text-center reveal">
              <div className="badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                  <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
                Vấn đề học sinh thường gặp
              </div>
              <h2 className="section-title" id="pain-title">
                RoboSim không khó nếu học đúng lộ trình –<br />
                <span className="gradient-text">nhưng rất dễ mất điểm nếu luyện sai trọng tâm</span>
              </h2>
              <p className="section-subtitle">
                Nhiều học sinh khi bắt đầu luyện RoboSim thường gặp khó khăn vì chưa biết phân tích sa bàn, chưa
                thiết kế robot phù hợp, lập trình chưa ổn định hoặc chưa có chiến thuật tối ưu điểm số.
              </p>
            </div>
            <div className="pain-grid">
              {[
                { icon: '🧩', title: 'Không biết bắt đầu từ đâu', desc: 'Học sinh dễ bị rối khi nhìn vào sa bàn và nhiều nhiệm vụ cùng lúc.' },
                { icon: '🔧', title: 'Thiết kế robot chưa phù hợp', desc: 'Robot chạy được nhưng khó hoàn thành nhiệm vụ ổn định.', delay: 1 },
                { icon: '💻', title: 'Lập trình thiếu chiến thuật', desc: 'Làm từng phần rời rạc nhưng chưa biết ghép thành bài thi hoàn chỉnh.', delay: 2 },
                { icon: '📉', title: 'Dễ mất điểm khi thi', desc: 'Không tối ưu đường đi, thời gian và thứ tự thực hiện nhiệm vụ.', delay: 3 },
              ].map(({ icon, title, desc, delay }) => (
                <div key={title} className={`pain-card reveal${delay ? ` reveal-delay-${delay}` : ''}`}>
                  <span className="pain-icon">{icon}</span>
                  <h3 className="pain-title">{title}</h3>
                  <p className="pain-desc">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. SO SÁNH R1 & R2 ── */}
        <section className="section section-alt" id="so-sanh" aria-labelledby="compare-title">
          <div className="container">
            <div className="text-center reveal">
              <div className="badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
                </svg>
                So sánh khóa học
              </div>
              <h2 className="section-title" id="compare-title">
                Chọn đúng bảng thi để <span className="gradient-text">học đúng nội dung</span>
              </h2>
              <p className="section-subtitle">
                Hai khóa học R1 và R2 có nội dung riêng biệt, phù hợp với từng bảng thi. Phụ huynh cần chọn đúng để
                học sinh học hiệu quả nhất.
              </p>
            </div>

            <div className="compare-table-wrap reveal">
              <table className="compare-table" role="table" aria-label="So sánh khóa học RoboSim bảng R1 và R2">
                <thead>
                  <tr>
                    <th>Nội dung</th>
                    <th className="th-r1">🟠 Khóa RoboSim Bảng R1</th>
                    <th className="th-r2">🔵 Khóa RoboSim Bảng R2</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Đối tượng</td>
                    <td>Học sinh tham gia bảng R1</td>
                    <td>Học sinh tham gia bảng R2</td>
                  </tr>
                  <tr>
                    <td>Chủ đề</td>
                    <td>Hậu cần thông minh</td>
                    <td>Hậu cần thông minh</td>
                  </tr>
                  <tr>
                    <td>Trọng tâm</td>
                    <td>Nắm nền tảng, thiết kế robot, lập trình nhiệm vụ từ cơ bản đến hoàn chỉnh.</td>
                    <td>Phân tích nhiệm vụ phức tạp hơn, tối ưu chiến thuật và luồng xử lý.</td>
                  </tr>
                  <tr>
                    <td>Phù hợp với</td>
                    <td>Học sinh cần lộ trình rõ ràng, dễ tiếp cận, luyện đúng đề R1.</td>
                    <td>Học sinh cần luyện đề R2 bài bản, tăng khả năng xử lý nhiều nhiệm vụ.</td>
                  </tr>
                  <tr>
                    <td className="btn-cell">Đăng ký</td>
                    <td className="btn-cell">
                      <a href={R1_URL} className="btn btn-r1" rel="noopener" target="_blank">Mua khóa bảng R1</a>
                    </td>
                    <td className="btn-cell">
                      <a href={R2_URL} className="btn btn-r2" rel="noopener" target="_blank">Mua khóa bảng R2</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── 5&6. KHÓA HỌC R1 + R2 ── */}
        <section className="section" id="khoa-hoc" aria-labelledby="courses-title">
          <div className="container">
            <div className="text-center reveal">
              <div className="badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
                Nội dung khóa học
              </div>
              <h2 className="section-title" id="courses-title">
                Hai khóa luyện thi <span className="gradient-text">RoboSim 2026</span>
              </h2>
            </div>

            <div className="course-grid">
              <div className="course-card course-card-r1 reveal">
                <span className="course-card-tag tag-r1">Bảng R1</span>
                <h3>Khóa luyện thi RoboSim bảng R1 – Nắm chắc nền tảng, luyện đúng nhiệm vụ</h3>
                <p>
                  Khóa R1 phù hợp với học sinh cần một lộ trình học rõ ràng để làm quen với đề thi RoboSim chủ đề
                  Hậu cần thông minh. Học sinh sẽ từng bước học cách thiết kế robot mô phỏng, phân tích nhiệm vụ và
                  lập trình robot hoàn thành bài thi theo yêu cầu bảng R1.
                </p>
                <ul className="features-list">
                  {[
                    'Làm quen với cấu trúc đề thi bảng R1',
                    'Thiết kế robot phù hợp với sa bàn',
                    'Lập trình robot thực hiện từng nhiệm vụ',
                    'Ghép các nhiệm vụ thành bài chạy hoàn chỉnh',
                    'Rèn tư duy thuật toán và khả năng xử lý lỗi',
                    'Tối ưu đường đi, thời gian và độ ổn định',
                  ].map(t => (
                    <li key={t}><span className="check check-r1">✓</span><span>{t}</span></li>
                  ))}
                </ul>
                <a href={R1_URL} className="btn btn-r1" rel="noopener" target="_blank">
                  🛒 Mua khóa bảng R1
                </a>
              </div>

              <div className="course-card course-card-r2 reveal reveal-delay-1">
                <span className="course-card-tag tag-r2">Bảng R2</span>
                <h3>Khóa luyện thi RoboSim bảng R2 – Luyện chiến thuật, tối ưu nhiệm vụ, tăng độ ổn định</h3>
                <p>
                  Khóa R2 dành cho học sinh tham gia bảng R2 cần luyện tập chuyên sâu với các nhóm nhiệm vụ trong
                  chủ đề Hậu cần thông minh. Khóa học giúp học sinh biết cách phân tích bài thi, chia nhỏ nhiệm
                  vụ, lập trình theo chiến lược và tối ưu bài chạy.
                </p>
                <ul className="features-list">
                  {[
                    'Phân tích đề thi bảng R2 theo từng nhóm nhiệm vụ',
                    'Xây dựng chiến thuật xử lý nhiệm vụ hợp lý',
                    'Lập trình robot theo thứ tự ưu tiên',
                    'Tối ưu luồng di chuyển trên sa bàn',
                    'Kiểm tra lỗi và cải thiện độ ổn định',
                    'Hoàn thiện bài thi RoboSim bảng R2',
                  ].map(t => (
                    <li key={t}><span className="check check-r2">✓</span><span>{t}</span></li>
                  ))}
                </ul>
                <a href={R2_URL} className="btn btn-r2" rel="noopener" target="_blank">
                  🛒 Mua khóa bảng R2
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── 7. LỘ TRÌNH ── */}
        <section className="section section-alt" id="lo-trinh" aria-labelledby="roadmap-title">
          <div className="container">
            <div className="text-center reveal">
              <div className="badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg>
                Lộ trình học
              </div>
              <h2 className="section-title" id="roadmap-title">
                Lộ trình học giúp học sinh <span className="gradient-text">tiến bộ từng bước</span>
              </h2>
              <p className="section-subtitle">
                Từ hiểu đề đến hoàn thiện bài thi – mỗi bước được thiết kế để học sinh không bị bỏ lại phía sau.
              </p>
            </div>

            <div style={{ maxWidth: '720px', margin: '0 auto' }} className="reveal">
              <div className="timeline">
                {[
                  { title: 'Hiểu đề và luật chơi', desc: 'Học sinh nắm bối cảnh chủ đề Hậu cần thông minh, mục tiêu từng nhiệm vụ và yêu cầu khi robot vận hành trên sa bàn.' },
                  { title: 'Thiết kế robot trên RoboSim', desc: 'Học sinh học cách xây dựng robot mô phỏng phù hợp với nhiệm vụ, hạn chế lỗi khi chạy.' },
                  { title: 'Lập trình từng nhiệm vụ nhỏ', desc: 'Thay vì làm toàn bộ bài ngay từ đầu, học sinh luyện từng phần để hiểu rõ logic điều khiển.' },
                  { title: 'Ghép nhiệm vụ thành bài hoàn chỉnh', desc: 'Các phần nhỏ được kết nối thành một bài chạy có chiến lược, hạn chế lỗi ngắt quãng.' },
                  { title: 'Tối ưu điểm số và độ ổn định', desc: 'Học sinh rà soát đường đi, thời gian, thứ tự nhiệm vụ và các lỗi thường gặp trước khi bước vào thi.' },
                ].map(({ title, desc }, i) => (
                  <div className="timeline-item" key={i}>
                    <div className="timeline-dot">{i + 1}</div>
                    <div className="timeline-content">
                      <div className="timeline-title">{title}</div>
                      <div className="timeline-desc">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 8. KẾT QUẢ ── */}
        <section className="section" id="ket-qua" aria-labelledby="results-title">
          <div className="container">
            <div className="text-center reveal">
              <div className="badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                Kết quả đầu ra
              </div>
              <h2 className="section-title" id="results-title">
                Sau khóa học, học sinh không chỉ biết làm bài –<br />
                <span className="gradient-text">mà còn tư duy như một đội thi Robotics</span>
              </h2>
            </div>
            <div className="results-grid reveal">
              {[
                { icon: '🎯', text: 'Biết cách đọc và phân tích đề RoboSim' },
                { icon: '📋', text: 'Hiểu cách chia bài thi thành từng nhóm nhiệm vụ' },
                { icon: '🤖', text: 'Biết thiết kế robot phù hợp với yêu cầu sa bàn' },
                { icon: '💡', text: 'Có khả năng lập trình robot hoàn thành bài thi' },
                { icon: '🏅', text: 'Tự tin hơn khi bước vào vòng loại trực tuyến' },
                { icon: '🧠', text: 'Rèn tư duy thuật toán, tư duy hệ thống và kỹ năng giải quyết vấn đề' },
              ].map(({ icon, text }) => (
                <div className="result-card" key={text}>
                  <div className="result-icon">{icon}</div>
                  <div className="result-text">{text}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 9. ĐỐI TƯỢNG ── */}
        <section className="section section-alt" id="doi-tuong" aria-labelledby="audience-title">
          <div className="container">
            <div className="text-center reveal">
              <div className="badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
                Đối tượng
              </div>
              <h2 className="section-title" id="audience-title">
                Ai nên tham gia <span className="gradient-text">khóa học này?</span>
              </h2>
            </div>
            <div className="audience-grid">
              {[
                { icon: '🏆', title: 'Học sinh chuẩn bị thi vòng loại RoboSim 2026', desc: 'Cần luyện đề theo đúng chủ đề và bảng thi.' },
                { icon: '👨‍👩‍👧', title: 'Phụ huynh muốn con luyện tập bài bản tại nhà', desc: 'Không muốn con học lan man, thiếu định hướng.', delay: 1 },
                { icon: '👨‍🏫', title: 'Giáo viên / HLV đội thi Robotics', desc: 'Cần tài liệu tham khảo để hướng dẫn học sinh luyện thi.', delay: 2 },
                { icon: '🌱', title: 'Học sinh mới làm quen RoboSim', desc: 'Cần lộ trình dễ hiểu, có ví dụ thực hành theo từng nhiệm vụ.', delay: 3 },
              ].map(({ icon, title, desc, delay }) => (
                <div key={title} className={`audience-card reveal${delay ? ` reveal-delay-${delay}` : ''}`}>
                  <span className="audience-icon">{icon}</span>
                  <h3 className="audience-title">{title}</h3>
                  <p className="audience-desc">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 10. ĐIỂM NỔI BẬT ── */}
        <section className="section" id="diem-noi-bat" aria-labelledby="usp-title">
          <div className="container">
            <div className="text-center reveal">
              <div className="badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
                Điểm nổi bật
              </div>
              <h2 className="section-title" id="usp-title">
                Vì sao nên học khóa RoboSim<br />
                <span className="gradient-text">trên SataWorld?</span>
              </h2>
            </div>
            <div className="usp-grid">
              {[
                { icon: '📌', title: 'Bám sát chủ đề vòng loại', desc: 'Nội dung xây dựng đúng theo chủ đề Hậu cần thông minh của vòng loại RoboSim 2026.' },
                { icon: '🎯', title: 'Chia riêng theo bảng R1 và R2', desc: 'Tránh học sai nội dung – học sinh học đúng bảng thi của mình.', delay: 1 },
                { icon: '🗺️', title: 'Lộ trình từ cơ bản đến hoàn chỉnh', desc: 'Không bỏ sót bước nào – học sinh tiến bộ có hệ thống.', delay: 2 },
                { icon: '⚙️', title: 'Tập trung thực hành trên RoboSim', desc: 'Không học lý thuyết suông – giải nhiệm vụ thực tế trên phần mềm thi.', delay: 1 },
                { icon: '🏅', title: 'Hình thành tư duy thi đấu Robotics', desc: 'Học sinh không chỉ làm theo máy móc mà hiểu được chiến lược đằng sau.', delay: 2 },
                { icon: '🏠', title: 'Phụ huynh dễ theo dõi, dễ bắt đầu', desc: 'Giao diện thân thiện, lộ trình rõ ràng – gia đình cùng đồng hành với học sinh.', delay: 3 },
              ].map(({ icon, title, desc, delay }) => (
                <div key={title} className={`usp-card reveal${delay ? ` reveal-delay-${delay}` : ''}`}>
                  <span className="usp-icon">{icon}</span>
                  <h3 className="usp-title">{title}</h3>
                  <p className="usp-desc">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 11. CTA ── */}
        <section className="cta-section" id="dang-ky" aria-labelledby="cta-title">
          <div className="container">
            <div className="badge" style={{ margin: '0 auto 20px' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
              Bắt đầu ngay hôm nay
            </div>
            <h2 id="cta-title">
              Sẵn sàng luyện thi RoboSim <span className="gradient-text">vòng loại 2026?</span>
            </h2>
            <p>Chọn đúng bảng thi của học sinh và bắt đầu luyện tập ngay hôm nay.</p>
            <div className="cta-btns">
              <a href={R1_URL} className="btn btn-r1 btn-lg" rel="noopener" target="_blank">
                🟠 Mua khóa bảng R1
              </a>
              <a href={R2_URL} className="btn btn-r2 btn-lg" rel="noopener" target="_blank">
                🔵 Mua khóa bảng R2
              </a>
              <a href="https://zalo.me/0818823720" className="btn btn-zalo btn-lg" rel="noopener" target="_blank">
                💬 Tư vấn qua Zalo
              </a>
            </div>
          </div>
        </section>

        {/* ── 12. FAQ ── */}
        <section className="section" id="faq" aria-labelledby="faq-title">
          <div className="container">
            <div className="text-center reveal">
              <div className="badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                  <line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
                FAQ
              </div>
              <h2 className="section-title" id="faq-title">
                Câu hỏi thường gặp về<br />
                <span className="gradient-text">khóa luyện thi RoboSim</span>
              </h2>
            </div>

            <div className="faq-list reveal" role="list">
              <FAQItem question="Con chưa học RoboSim nhiều có học được không?">
                Có. Khóa học được thiết kế theo lộ trình từ thiết kế robot, lập trình từng nhiệm vụ đến ghép bài
                hoàn chỉnh, giúp học sinh dễ bắt đầu hơn dù chưa có nhiều kinh nghiệm với RoboSim.
              </FAQItem>
              <FAQItem question="Nên mua khóa R1 hay R2?">
                Phụ huynh cần chọn theo đúng bảng thi của học sinh. Nếu học sinh đã đăng ký bảng R1 thì mua
                khóa R1; nếu đăng ký bảng R2 thì mua khóa R2. Chưa chắc chắn? Nhắn Zalo{' '}
                <strong>0818.823.720</strong> để được tư vấn.
              </FAQItem>
              <FAQItem question="Khóa học có phù hợp để luyện thi vòng loại không?">
                Có. Nội dung được xây dựng để hỗ trợ học sinh luyện thi RoboSim vòng loại 2026 theo chủ đề
                Hậu cần thông minh, bám sát cấu trúc đề và yêu cầu từng bảng thi.
              </FAQItem>
              <FAQItem question="Học sinh học trên điện thoại được không?">
                Có thể xem bài học trên thiết bị hỗ trợ truy cập SataWorld. Tuy nhiên, để thực hành RoboSim
                hiệu quả, học sinh nên dùng máy tính hoặc laptop để có trải nghiệm tốt nhất.
              </FAQItem>
              <FAQItem question="Nếu không biết cách mua khóa thì làm sao?">
                Phụ huynh có thể xem video hướng dẫn ở đầu trang hoặc liên hệ trực tiếp qua Zalo{' '}
                <strong>0818.823.720</strong> để được đội ngũ Sata Robo hỗ trợ từng bước.
              </FAQItem>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
