import { useEffect, useState, useRef } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useScrollReveal } from '../hooks/useScrollReveal'

const GOOGLE_SHEET_WEBHOOK_URL =
  import.meta.env.VITE_GOOGLE_SHEET_WEBHOOK_URL ||
  'https://script.google.com/macros/s/AKfycby_PIwLWQ7h-lS-WWBVr12m3mvx6rt40xJQgtaj40lB1sYlWELZoayMeTbrtY589K7qlg/exec'

const CENTERS = [
  'Cơ sở 1: 60 Lê Lợi',
  'Cơ sở 2: 258 Lê Thanh Nghị',
  'Cơ sở 3: 269 Điện Biên Phủ',
  'Cơ sở 4: 232 Nguyễn Phước Lan',
]

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

function RegistrationForm() {
  const [form, setForm] = useState({
    parentName: '',
    phone: '',
    email: '',
    center: '',
    grade: '',
    note: '',
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.parentName.trim()) e.parentName = 'Vui lòng nhập họ và tên'
    if (!form.phone.trim()) e.phone = 'Vui lòng nhập số điện thoại'
    if (!form.email.trim()) e.email = 'Vui lòng nhập email'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Email không đúng định dạng'
    if (!form.center) e.center = 'Vui lòng chọn cơ sở học'
    if (!form.grade) e.grade = 'Vui lòng chọn khối'
    return e
  }

  const set = field => e => {
    setForm(f => ({ ...f, [field]: e.target.value }))
    if (errors[field]) setErrors(ev => { const n = { ...ev }; delete n[field]; return n })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setLoading(true)
    setSubmitError(false)

    try {
      await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify({
          parentName: form.parentName,
          phone: form.phone,
          email: form.email,
          center: form.center,
          grade: form.grade,
          note: form.note,
          sourcePage: 'khoa-hoc-robosim-offline',
          submittedAt: new Date().toISOString(),
        }),
      })
      setSubmitted(true)
    } catch {
      setSubmitError(true)
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="form-success">
        <span className="form-success-icon">✅</span>
        <h3>Đăng ký thành công!</h3>
        <p>
          Cảm ơn quý phụ huynh đã đăng ký. Sata Robo sẽ liên hệ trong thời gian sớm nhất
          để tư vấn và giữ chỗ.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {submitError && (
        <div className="form-error-box">
          Thông tin chưa được gửi thành công. Vui lòng thử lại hoặc liên hệ Zalo{' '}
          <strong>0818.823.720</strong> để được hỗ trợ.
        </div>
      )}

      <div className="form-row">
        <div className="form-group">
          <label className="form-label" htmlFor="parentName">
            Họ và tên phụ huynh <span className="req">*</span>
          </label>
          <input
            id="parentName"
            type="text"
            className={`form-input${errors.parentName ? ' error' : ''}`}
            placeholder="Nhập họ và tên phụ huynh"
            value={form.parentName}
            onChange={set('parentName')}
          />
          {errors.parentName && <span className="form-error-msg">{errors.parentName}</span>}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="phone">
            Số điện thoại <span className="req">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            className={`form-input${errors.phone ? ' error' : ''}`}
            placeholder="Nhập số điện thoại để tư vấn viên liên hệ"
            value={form.phone}
            onChange={set('phone')}
          />
          {errors.phone && <span className="form-error-msg">{errors.phone}</span>}
          <span className="form-hint">Tư vấn viên sẽ gọi điện tư vấn và sắp lớp phù hợp.</span>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="email">
          Email <span className="req">*</span>
        </label>
        <input
          id="email"
          type="email"
          className={`form-input${errors.email ? ' error' : ''}`}
          placeholder="Nhập email để nhận quà tặng Ebook công nghệ"
          value={form.email}
          onChange={set('email')}
        />
        {errors.email && <span className="form-error-msg">{errors.email}</span>}
        <span className="form-hint">
          Ebook công nghệ sẽ được gửi qua Email. Quý phụ huynh vui lòng nhập đúng Email để nhận quà.
        </span>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label" htmlFor="center">
            Chọn cơ sở học <span className="req">*</span>
          </label>
          <select
            id="center"
            className={`form-select${errors.center ? ' error' : ''}`}
            value={form.center}
            onChange={set('center')}
          >
            <option value="">-- Chọn cơ sở học --</option>
            {CENTERS.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          {errors.center && <span className="form-error-msg">{errors.center}</span>}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="grade">
            Chọn khối <span className="req">*</span>
          </label>
          <select
            id="grade"
            className={`form-select${errors.grade ? ' error' : ''}`}
            value={form.grade}
            onChange={set('grade')}
          >
            <option value="">-- Chọn khối --</option>
            <option value="Tiểu học (R1)">Tiểu học (R1)</option>
            <option value="THCS (R2)">THCS (R2)</option>
          </select>
          {errors.grade && <span className="form-error-msg">{errors.grade}</span>}
        </div>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="note">Ghi chú thêm</label>
        <textarea
          id="note"
          className="form-textarea"
          placeholder="Ví dụ: thời gian thuận tiện, học sinh đã từng học RoboSim chưa..."
          value={form.note}
          onChange={set('note')}
          rows={4}
        />
      </div>

      <button type="submit" className="submit-btn" disabled={loading}>
        {loading ? 'Đang gửi...' : 'Đăng ký tư vấn ngay'}
      </button>
    </form>
  )
}

export default function OfflinePage() {
  useScrollReveal()
  const formRef = useRef(null)

  useEffect(() => {
    document.title = 'Khóa học RoboSim Offline Đà Nẵng 2026 | Luyện thi Robotics R1 R2 | Sata Robo'
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', 'Khóa học RoboSim Offline 16 buổi tại Đà Nẵng dành cho học sinh Tiểu học R1 và THCS R2 luyện thi vòng loại Cuộc thi Sáng tạo Robotics 2026. Khai giảng 18/05/2026, học tại 4 cơ sở SataMath.')
  }, [])

  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <div className="offline-page-wrapper">
      <Navbar />

      <main>
        {/* ── 1. HERO ── */}
        <section className="offline-hero" aria-labelledby="offline-hero-title">
          <div className="container">
            <div className="offline-hero-inner">
              <div className="badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
                Lớp học Offline · Sata Robo · Đà Nẵng
              </div>

              <h1 id="offline-hero-title">
                <span className="gradient-text">Khóa học RoboSim Offline 16 buổi</span> –<br />
                Luyện thi Robotics 2026 tại Đà Nẵng
              </h1>

              <p className="offline-hero-sub">
                Lớp học kèm trực tiếp giúp học sinh Tiểu học R1 và THCS R2 luyện thi RoboSim vòng loại chủ đề
                Hậu cần thông minh, được giáo viên hướng dẫn từng bước từ phân tích đề, thiết kế robot, lập
                trình nhiệm vụ đến tối ưu bài thi.
              </p>

              <div className="badge-row">
                <span className="badge-discount">Giảm 30% · 30/04 &amp; 01/05</span>
                <span className="badge-info">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  Khai giảng: Tối Thứ 2, 18/05/2026
                </span>
                <span className="badge-info">16 buổi học trực tiếp</span>
                <span className="badge-info">4 cơ sở tại Đà Nẵng</span>
                <span className="badge-info">Tiểu học R1 &amp; THCS R2</span>
              </div>

              <div className="offline-hero-cta">
                <button className="btn btn-r1 btn-lg" onClick={scrollToForm}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                  </svg>
                  Đăng ký giữ chỗ ngay
                </button>
                <a href="https://zalo.me/0818823720" className="btn btn-zalo btn-lg" rel="noopener" target="_blank">
                  💬 Nhắn Zalo: 0818.823.720
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. VÌ SAO CHỌN LỚP OFFLINE ── */}
        <section className="section section-alt" aria-labelledby="why-offline-title">
          <div className="container">
            <div className="text-center reveal">
              <div className="badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                  <line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
                Lý do nên học offline
              </div>
              <h2 className="section-title" id="why-offline-title">
                Tự học RoboSim có thể khó –<br />
                <span className="gradient-text">nhưng có giáo viên kèm trực tiếp, con sẽ đi đúng hướng hơn</span>
              </h2>
              <p className="section-subtitle">
                Nhiều học sinh khi luyện RoboSim thường gặp khó khăn ở bước đọc đề, chia nhiệm vụ, thiết kế
                robot, lập trình đường đi và xử lý lỗi. Với lớp học offline, học sinh được giáo viên quan sát
                trực tiếp, sửa lỗi kịp thời và hướng dẫn chiến thuật luyện thi phù hợp với bảng R1 hoặc R2.
              </p>
            </div>

            <div className="why-offline-grid">
              {[
                { icon: '👨‍🏫', title: 'Có giáo viên kèm trực tiếp', desc: 'Học sinh được hướng dẫn, hỏi đáp và sửa lỗi ngay trong buổi học.' },
                { icon: '🎯', title: 'Luyện đúng bảng thi R1/R2', desc: 'Nội dung được định hướng theo cấp học và bảng thi của học sinh.', delay: 1 },
                { icon: '🗺️', title: 'Học theo lộ trình 16 buổi', desc: 'Từ nền tảng RoboSim đến luyện nhiệm vụ và hoàn thiện bài thi.', delay: 2 },
                { icon: '💪', title: 'Tăng sự tự tin trước vòng loại', desc: 'Con hiểu đề, biết cách xử lý nhiệm vụ và chủ động hơn khi luyện thi.', delay: 3 },
              ].map(({ icon, title, desc, delay }) => (
                <div key={title} className={`why-offline-card reveal${delay ? ` reveal-delay-${delay}` : ''}`}>
                  <div className="why-offline-icon">{icon}</div>
                  <h3 className="why-offline-title">{title}</h3>
                  <p className="why-offline-desc">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. THÔNG TIN KHAI GIẢNG ── */}
        <section className="section" aria-labelledby="info-title">
          <div className="container">
            <div className="text-center reveal">
              <div className="badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
                </svg>
                Thông tin lớp học
              </div>
              <h2 className="section-title" id="info-title">
                Thông tin lớp học <span className="gradient-text">RoboSim Offline</span>
              </h2>
            </div>

            <div className="info-card reveal">
              {[
                { icon: '🏫', label: 'Hình thức', value: 'Lớp học kèm trực tiếp offline' },
                { icon: '📅', label: 'Số buổi', value: '16 buổi' },
                { icon: '🗓️', label: 'Khai giảng', value: 'Tối Thứ 2, ngày 18/05/2026', highlight: true },
                { icon: '📍', label: 'Địa điểm', value: '4 cơ sở thuộc hệ sinh thái SataMath tại Đà Nẵng' },
                { icon: '🎓', label: 'Đối tượng', value: 'Tiểu học R1, THCS R2' },
                { icon: '📞', label: 'Hotline / Zalo', value: '0818.823.720', highlight: true },
              ].map(({ icon, label, value, highlight }) => (
                <div className="info-row" key={label}>
                  <div className="info-icon">{icon}</div>
                  <div>
                    <div className="info-label">{label}</div>
                    <div className={`info-value${highlight ? ' highlight' : ''}`}>{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. ĐỊA ĐIỂM HỌC ── */}
        <section className="section section-alt" aria-labelledby="location-title">
          <div className="container">
            <div className="text-center reveal">
              <div className="badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                Địa điểm học
              </div>
              <h2 className="section-title" id="location-title">
                4 cơ sở học thuận tiện <span className="gradient-text">tại Đà Nẵng</span>
              </h2>
              <p className="section-subtitle">
                Phụ huynh có thể chọn cơ sở học gần nhà hoặc thuận tiện nhất để được tư vấn và sắp lớp.
              </p>
            </div>

            <div className="location-grid">
              {[
                { num: 1, addr: '60 Lê Lợi' },
                { num: 2, addr: '258 Lê Thanh Nghị' },
                { num: 3, addr: '269 Điện Biên Phủ' },
                { num: 4, addr: '232 Nguyễn Phước Lan' },
              ].map(({ num, addr }) => (
                <div key={num} className={`location-card reveal${num > 1 ? ` reveal-delay-${num - 1}` : ''}`}>
                  <div className="location-num">{num}</div>
                  <div className="location-label">Cơ sở {num}</div>
                  <div className="location-addr">{addr}</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '6px' }}>
                    SataMath Đà Nẵng
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '36px' }} className="reveal">
              <button className="btn btn-r1 btn-lg" onClick={scrollToForm}>
                Chọn cơ sở học thuận tiện nhất
              </button>
            </div>
          </div>
        </section>

        {/* ── 5. LỘ TRÌNH 16 BUỔI ── */}
        <section className="section" aria-labelledby="phase-title">
          <div className="container">
            <div className="text-center reveal">
              <div className="badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg>
                Lộ trình 16 buổi
              </div>
              <h2 className="section-title" id="phase-title">
                Lộ trình 16 buổi giúp học sinh<br />
                <span className="gradient-text">luyện thi RoboSim bài bản</span>
              </h2>
            </div>

            <div className="phase-grid">
              {[
                {
                  num: 1,
                  title: 'Làm quen và phân tích đề',
                  desc: 'Học sinh hiểu giao diện RoboSim, cấu trúc đề thi, chủ đề Hậu cần thông minh và cách chia nhiệm vụ.',
                },
                {
                  num: 2,
                  title: 'Thiết kế robot và lập trình nền tảng',
                  desc: 'Học sinh học cách thiết kế robot phù hợp, điều khiển di chuyển, xử lý cảm biến và xây dựng logic cơ bản.',
                  delay: 1,
                },
                {
                  num: 3,
                  title: 'Luyện nhiệm vụ theo bảng R1/R2',
                  desc: 'Học sinh thực hành các nhóm nhiệm vụ theo bảng thi, rèn kỹ năng xử lý tình huống và tối ưu thao tác.',
                  delay: 2,
                },
                {
                  num: 4,
                  title: 'Ghép bài, sửa lỗi và tối ưu trước thi',
                  desc: 'Học sinh ghép các nhiệm vụ thành bài chạy hoàn chỉnh, kiểm tra lỗi, tối ưu đường đi, thời gian và độ ổn định.',
                  delay: 3,
                },
              ].map(({ num, title, desc, delay }) => (
                <div key={num} className={`phase-card reveal${delay ? ` reveal-delay-${delay}` : ''}`}>
                  <div className="phase-num">{num}</div>
                  <h3 className="phase-title">{title}</h3>
                  <p className="phase-desc">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. HỌC SINH NHẬN ĐƯỢC GÌ ── */}
        <section className="section section-alt" aria-labelledby="benefits-title">
          <div className="container">
            <div className="text-center reveal">
              <div className="badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                Kết quả đầu ra
              </div>
              <h2 className="section-title" id="benefits-title">
                Sau khóa học, con không chỉ biết làm bài –<br />
                <span className="gradient-text">mà còn biết tư duy như một đội thi Robotics</span>
              </h2>
            </div>

            <div className="benefits-list reveal">
              {[
                'Biết cách đọc và phân tích đề RoboSim.',
                'Hiểu cách chia bài thi thành từng nhiệm vụ nhỏ.',
                'Biết thiết kế robot phù hợp với sa bàn.',
                'Lập trình robot thực hiện nhiệm vụ trên RoboSim.',
                'Biết kiểm tra lỗi và tối ưu bài chạy.',
                'Tự tin hơn khi tham gia vòng loại.',
                'Rèn luyện tư duy logic, tư duy hệ thống và kỹ năng giải quyết vấn đề.',
                'Có thêm động lực học công nghệ, Robotics và lập trình.',
              ].map(t => (
                <div className="benefit-item" key={t}>
                  <span className="benefit-check">✓</span>
                  <span className="benefit-text">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. BẢNG GIÁ ── */}
        <section className="section" aria-labelledby="pricing-title">
          <div className="container">
            <div className="text-center reveal">
              <div className="badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
                Học phí ưu đãi
              </div>
              <h2 className="section-title" id="pricing-title">
                Học phí ưu đãi giảm 30%<br />
                <span className="gradient-text">nhân dịp 30/04 và 01/05</span>
              </h2>
            </div>

            <div className="pricing-wrap reveal">
              <div className="pricing-card">
                <div className="pricing-discount-badge">
                  🎉 Ưu đãi lễ 30/04 &amp; 01/05 – Giảm 30%
                </div>

                <p className="pricing-original">
                  Giá gốc: <s>149.000đ/buổi</s>
                </p>
                <p className="pricing-total">
                  Tổng khóa 16 buổi: 149.000 × 16 = <strong>2.384.000đ</strong>
                </p>
                <p className="pricing-savings">Tiết kiệm hơn 700.000đ cho một khóa học chất lượng</p>

                <div className="pricing-final">
                  <div className="pricing-label">Giá ưu đãi chỉ còn</div>
                  <div className="pricing-price">1.668.000đ</div>
                </div>

                <p className="pricing-note">
                  Đây là thời điểm phù hợp để học sinh bắt đầu luyện thi sau khi hoàn thành học kỳ 2, vừa củng
                  cố tư duy công nghệ, vừa chuẩn bị cho vòng loại Cuộc thi Sáng tạo Robotics 2026.
                </p>

                <button className="btn btn-r1 btn-lg" style={{ width: '100%' }} onClick={scrollToForm}>
                  Đăng ký giữ chỗ ngay
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── 8. FORM ĐĂNG KÝ ── */}
        <section className="section section-alt" id="dang-ky" ref={formRef} aria-labelledby="form-title">
          <div className="container">
            <div className="text-center reveal">
              <div className="badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                </svg>
                Đăng ký tư vấn
              </div>
              <h2 className="section-title" id="form-title">
                Đăng ký tư vấn và giữ chỗ<br />
                <span className="gradient-text">lớp RoboSim Offline</span>
              </h2>
              <p className="section-subtitle">
                Quý phụ huynh vui lòng điền thông tin bên dưới. Tư vấn viên Sata Robo sẽ liên hệ để tư vấn
                lớp phù hợp và hỗ trợ sắp lớp tại cơ sở thuận tiện nhất.
              </p>
            </div>

            <div className="form-section">
              <div className="form-container reveal">
                <RegistrationForm />
              </div>
            </div>
          </div>
        </section>

        {/* ── 9. FAQ ── */}
        <section className="section" aria-labelledby="faq-offline-title">
          <div className="container">
            <div className="text-center reveal">
              <div className="badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                  <line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
                FAQ
              </div>
              <h2 className="section-title" id="faq-offline-title">
                <span className="gradient-text">Câu hỏi thường gặp</span>
              </h2>
            </div>

            <div className="faq-list reveal" role="list">
              <FAQItem question="Lớp học này dành cho học sinh lớp mấy?">
                Khóa học phù hợp với học sinh Tiểu học thi bảng R1 và học sinh THCS thi bảng R2 trong nội dung
                RoboSim.
              </FAQItem>
              <FAQItem question="Con chưa học RoboSim nhiều có theo được không?">
                Có. Lớp học được thiết kế theo lộ trình từ nền tảng đến luyện nhiệm vụ, giúp học sinh từng bước
                làm quen, thực hành và tối ưu bài thi.
              </FAQItem>
              <FAQItem question="Phụ huynh chọn cơ sở học như thế nào?">
                Phụ huynh có thể chọn một trong 4 cơ sở tại Đà Nẵng. Sau khi đăng ký, tư vấn viên sẽ liên hệ
                để hỗ trợ sắp lớp phù hợp.
              </FAQItem>
              <FAQItem question="Học phí khóa học là bao nhiêu?">
                Giá gốc là 149.000đ/buổi. Tổng khóa 16 buổi là 2.384.000đ. Nhân dịp 30/04 và 01/05, khóa học
                được ưu đãi giảm 30%, chỉ còn <strong>1.668.000đ</strong>.
              </FAQItem>
              <FAQItem question="Sau khi đăng ký, khi nào được liên hệ?">
                Sata Robo sẽ liên hệ theo số điện thoại phụ huynh cung cấp để tư vấn chi tiết và hỗ trợ giữ chỗ.
              </FAQItem>
            </div>
          </div>
        </section>

        {/* ── 10. CTA CUỐI TRANG ── */}
        <section className="cta-section" aria-labelledby="final-cta-title">
          <div className="container">
            <div className="badge" style={{ margin: '0 auto 20px' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
              Bắt đầu ngay hôm nay
            </div>
            <h2 id="final-cta-title">
              Sẵn sàng cho con bắt đầu<br />
              <span className="gradient-text">hành trình chinh phục RoboSim 2026?</span>
            </h2>
            <p>
              Đăng ký ngay hôm nay để được tư vấn lớp học phù hợp, chọn cơ sở thuận tiện và
              nhận ưu đãi học phí giảm 30% nhân dịp 30/04 - 01/05.
            </p>
            <div className="cta-btns">
              <button className="btn btn-r1 btn-lg" onClick={scrollToForm}>
                Đăng ký giữ chỗ ngay
              </button>
              <a href="https://zalo.me/0818823720" className="btn btn-zalo btn-lg" rel="noopener" target="_blank">
                💬 Nhắn Zalo 0818.823.720
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* ── STICKY CTA MOBILE ── */}
      <div className="sticky-cta" role="complementary" aria-label="Đăng ký nhanh">
        <div className="sticky-cta-inner">
          <button className="btn btn-r1" onClick={scrollToForm}>
            Đăng ký giữ chỗ
          </button>
          <a href="https://zalo.me/0818823720" className="btn btn-zalo" rel="noopener" target="_blank">
            💬 Nhắn Zalo
          </a>
        </div>
      </div>
    </div>
  )
}
