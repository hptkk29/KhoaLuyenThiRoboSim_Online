import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import '../styles/online.css'

// ── CẤU HÌNH DỄ THAY ĐỔI ──────────────────────────────────────────────────
const R1_URL = 'https://sataworld.vn/robotics/khoa-hoc/full-de-luyen-thi-vong-loai-robosim-hau-can-thong-minh-bang-r1-cuoc-thi-sang-tao-robotics-2026'
const R2_URL = 'https://sataworld.vn/robotics/khoa-hoc/full-de-luyen-thi-vong-loai-robosim-hau-can-thong-minh-bang-r2-cuoc-thi-sang-tao-robotics-2026'
const ZALO_URL = 'https://zalo.me/0818823720'
const RULES_URL = 'https://drive.google.com/drive/folders/12DTFji_NWDg_i3d1SGgjKKp8vxjF1seL?usp=sharing'

// Link video hướng dẫn đăng ký (thay bằng ID YouTube khi cần)
const GUIDE_VIDEO_ID = 'mgP0t6clP2A'

// Link 3 video cảm nhận phụ huynh (thay từng cái khi cần)
const TESTI_VIDEO_IDS = [
  'anInoYFGrF0', // Video anh Ngọc Anh
  'bqB2c7AlSfE', // Video anh Trường Sơn
  '9MJFC4v8cbU', // Video chị Mỹ Trang
]

const EXAM_END = new Date('2026-07-19T23:59:59+07:00')

// Tự động tìm deadline tiếp theo sau 01/05
function getNextDeadline() {
  const now = new Date()
  const may1 = new Date('2026-05-01T23:59:59+07:00')
  if (now <= may1) return may1
  const dates = [5, 10, 15, 20, 25, 30].map(d =>
    new Date(`2026-05-${String(d).padStart(2, '0')}T23:59:59+07:00`)
  )
  return dates.find(d => now <= d) || dates[dates.length - 1]
}

function getDeadlineLabel() {
  const now = new Date()
  const may1 = new Date('2026-05-01T23:59:59+07:00')
  if (now <= may1) return '01/05/2026'
  const days = [5, 10, 15, 20, 25, 30]
  const found = days.find(d => now <= new Date(`2026-05-${String(d).padStart(2, '0')}T23:59:59+07:00`))
  return found ? `${found}/05/2026` : '30/05/2026'
}

function pad(n) { return String(Math.max(0, n)).padStart(2, '0') }

// ── COMPONENT PHÁT VIDEO ─────────────────────────────────────────────────
function GuideVideo({ videoId }) {
  const [playing, setPlaying] = useState(false)
  return (
    <div
      className={`vph${playing ? ' playing' : ''}`}
      onClick={() => !playing && setPlaying(true)}
    >
      {playing ? (
        <iframe
          className="vph-iframe"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title="Hướng dẫn đăng ký SataWorld"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <>
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            className="vph-thumb"
            alt="Thumbnail video hướng dẫn"
            onError={e => { e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` }}
          />
          <div className="play-btn">▶</div>
          <p>Hướng dẫn đăng ký tài khoản SataWorld và mua khóa học</p>
          <span>3–4 phút · HD · Phụ đề tiếng Việt</span>
        </>
      )}
    </div>
  )
}

function TestiVideo({ videoId }) {
  const [playing, setPlaying] = useState(false)
  return (
    <div
      className={`tv-ph${playing ? ' playing' : ''}`}
      onClick={() => !playing && setPlaying(true)}
    >
      {playing ? (
        <iframe
          className="tv-iframe"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title="Video cảm nhận phụ huynh"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <>
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            className="tv-thumb"
            alt="Thumbnail video cảm nhận"
            onError={e => { e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` }}
          />
          <div className="tv-overlay" />
          <div className="tplay">▶</div>
          <p>Bấm để xem</p>
        </>
      )}
    </div>
  )
}

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`fi${open ? ' open' : ''}`}>
      <button className="fq" onClick={() => setOpen(o => !o)}>
        {question}
        <div className="farr">▾</div>
      </button>
      <div className="fa">{answer}</div>
    </div>
  )
}

// ── DANH SÁCH BÀI HỌC ────────────────────────────────────────────────────
const R1_MODULES = [
  {
    title: 'Module 1 — Nắm vững nền tảng (Bài 1–3)',
    lessons: [
      { n: 1, t: 'Tổng quan cuộc thi Robotics 2026 và luật thi RoboSim', s: 'Cấu trúc vòng loại, cách tính điểm, những lỗi phổ biến nhất bị trừ điểm · AI kiểm tra: trắc nghiệm luật thi 10 câu', tm: '20p' },
      { n: 2, t: 'Làm quen phần mềm RoboSim — Giao diện và thiết lập cơ bản', s: 'Cài đặt, giao diện làm việc, tạo dự án mới · AI kiểm tra: nhận diện công cụ và thao tác cơ bản', tm: '20p' },
      { n: 3, t: 'Phân tích sa bàn Hậu cần thông minh — Đọc và hiểu đề thi R1', s: 'Bố cục sa bàn, vị trí nhiệm vụ, chiến lược đọc đề nhanh · AI kiểm tra: nhận dạng nhiệm vụ trên sa bàn mẫu', tm: '25p' },
    ],
  },
  {
    title: 'Module 2 — Thiết kế Robot (Bài 4–6)',
    lessons: [
      { n: 4, t: 'Thiết kế robot Phần 1 — Thân robot và kích thước theo luật R1', s: 'Chọn loại robot, lắp ráp thân, kiểm tra kích thước · AI kiểm tra: chọn thiết kế đúng quy cách', tm: '22p' },
      { n: 5, t: 'Thiết kế robot Phần 2 — Cánh tay và bộ phận chấp hành', s: 'Gắn cơ cấu gắp, điều chỉnh lực và tốc độ · AI kiểm tra: bài tập tìm và sửa lỗi robot', tm: '25p' },
      { n: 6, t: 'Lập trình di chuyển cơ bản — Tiến, lùi, rẽ và hiệu chỉnh', s: 'Lệnh di chuyển, xử lý sai số khi robot đi lệch · AI kiểm tra: điều hướng robot trên lưới mô phỏng', tm: '20p' },
    ],
  },
  {
    title: 'Module 3 — Lập trình từng Nhiệm vụ (Bài 7–10)',
    lessons: [
      { n: 7, t: 'Nhiệm vụ 1 — Nhận hàng từ kho: tiếp cận và gắp', s: 'Lập trình tiếp cận kho, gắp hàng ổn định · AI kiểm tra: chọn đường đi đúng trên sa bàn mẫu', tm: '25p' },
      { n: 8, t: 'Nhiệm vụ 2 — Phân loại hàng hóa theo màu sắc và loại', s: 'Dùng cảm biến phân luồng, đưa hàng đúng ô chứa · AI kiểm tra: bài phân loại logic có sai số', tm: '25p' },
      { n: 9, t: 'Nhiệm vụ 3 — Vận chuyển hàng đến điểm giao', s: 'Tối ưu đường đi ngắn nhất, giữ hàng ổn định · AI kiểm tra: tính toán đường đi tối ưu', tm: '25p' },
      { n: 10, t: 'Nhiệm vụ 4 — Tránh vật cản và xử lý tình huống phát sinh', s: 'Tránh vật cản cố định, xử lý cảm biến lỗi · AI kiểm tra: kịch bản vật cản ngẫu nhiên', tm: '22p' },
    ],
  },
  {
    title: 'Module 4 — Ghép bài Hoàn chỉnh (Bài 11–14)',
    lessons: [
      { n: 11, t: 'Ghép nhiệm vụ 1 và 2 — Chuỗi nhận hàng và phân loại', s: 'Kết nối hai đoạn code, xử lý thời gian giữa các bước · AI kiểm tra: tìm lỗi trong bài ghép mẫu', tm: '25p' },
      { n: 12, t: 'Ghép nhiệm vụ 3 và 4 — Chuỗi vận chuyển và giao hàng', s: 'Tối ưu tốc độ và thứ tự bước thực hiện · AI kiểm tra: tìm lỗi trong bài ghép mẫu', tm: '25p' },
      { n: 13, t: 'Tích hợp toàn bộ — Bài thi R1 hoàn chỉnh có chiến lược điểm', s: 'Thứ tự nhiệm vụ tối ưu, kế hoạch 3 phút thi · AI kiểm tra: tối ưu điểm số kịch bản mẫu', tm: '30p' },
      { n: 14, t: 'Top 10 lỗi thường gặp trong bài thi R1 và cách sửa nhanh', s: '10 lỗi phổ biến nhất, cách phòng tránh · AI kiểm tra: nhận diện lỗi trong đoạn code mẫu', tm: '20p' },
    ],
  },
  {
    title: 'Module 5 — Luyện thi và Tối ưu (Bài 15–18)',
    lessons: [
      { n: 15, t: 'Bài thi thử Full Run lần 1 — Chạy hoàn chỉnh và chấm điểm', s: 'Toàn bộ bài thi R1, phân tích từng giây · AI: chấm điểm tự động theo luật chính thức', tm: '30p' },
      { n: 16, t: 'Phân tích Full Run lần 1 — Tìm điểm yếu và lên kế hoạch cải thiện', s: 'Top 3 điểm yếu, gợi ý sửa code cụ thể · AI kiểm tra: cải thiện đoạn code yếu nhất', tm: '25p' },
      { n: 17, t: 'Bài thi thử Full Run lần 2 — Phiên bản đã tối ưu sau cải thiện', s: 'Chạy bài đã tối ưu, so sánh điểm với lần 1 · AI: xác nhận đạt chuẩn, sẵn sàng thi thật', tm: '30p' },
      { n: 18, t: 'Chiến lược tâm lý và danh sách kiểm tra ngày thi vòng loại', s: 'Checklist 48 giờ trước thi, thiết lập môi trường thi, tâm lý thi đấu · AI: mô phỏng áp lực thi', tm: '20p' },
    ],
  },
]

const R2_MODULES = [
  {
    title: 'Module 1 — Phân tích Chiến lược R2 (Bài 1–3)',
    lessons: [
      { n: 1, t: 'Tổng quan đề thi R2 — So sánh với R1 và chiến lược tổng thể', s: 'Cấu trúc đề R2, điểm khác biệt, thứ tự ưu tiên · AI kiểm tra: phân tích kịch bản đề R2 mẫu', tm: '25p' },
      { n: 2, t: 'Phân tích sa bàn R2 — Hậu cần thông minh nâng cao', s: 'Lập bản đồ vị trí nhiệm vụ, chiến lược nhóm nhiệm vụ trong 5 phút · AI kiểm tra: lập kế hoạch sa bàn', tm: '30p' },
      { n: 3, t: 'Thiết kế robot nâng cao cho nhiệm vụ phức tạp bảng R2', s: 'Nâng cấp thiết kế từ R1, thêm tính năng đa nhiệm · AI kiểm tra: chọn phương án thiết kế tối ưu', tm: '30p' },
    ],
  },
  {
    title: 'Module 2 — Thuật toán và Lập trình Nâng cao (Bài 4–6)',
    lessons: [
      { n: 4, t: 'Thuật toán tối ưu đường đi — Tìm đường ngắn nhất trên sa bàn', s: 'Nguyên lý tìm đường, áp dụng vào sa bàn RoboSim · AI kiểm tra: bài tập tìm đường trên lưới', tm: '35p' },
      { n: 5, t: 'Lập trình theo thứ tự ưu tiên — Xử lý nhiệm vụ theo mức độ quan trọng', s: 'Xác định nhiệm vụ nào làm trước, lập trình điều kiện linh hoạt · AI kiểm tra: sắp xếp ưu tiên kịch bản', tm: '30p' },
      { n: 6, t: 'State Machine cho bài thi phức tạp — Xử lý nhiều trạng thái robot', s: 'Mô hình State Machine, áp dụng robot đa nhiệm vụ · AI kiểm tra: thiết kế State Machine nhỏ', tm: '35p' },
    ],
  },
  {
    title: 'Module 3 — Các Nhiệm vụ Nâng cao R2 (Bài 7–11)',
    lessons: [
      { n: 7, t: 'Nhiệm vụ nâng cao 1 — Quản lý kho thông minh đa tầng', s: 'Hàng nhiều tầng và nhiều loại, lấy đúng theo yêu cầu động · AI kiểm tra: mô phỏng kho ngẫu nhiên', tm: '30p' },
      { n: 8, t: 'Nhiệm vụ nâng cao 2 — Hệ thống phân loại tự động đa tiêu chí', s: 'Phân loại theo nhiều điều kiện cùng lúc, giảm sai số · AI kiểm tra: bài phân loại điều kiện phức', tm: '30p' },
      { n: 9, t: 'Nhiệm vụ nâng cao 3 — Vận chuyển đa điểm theo lộ trình tối ưu', s: 'Giao hàng đến nhiều điểm đích theo thứ tự tối ưu nhất · AI kiểm tra: tính toán lộ trình tổng quát', tm: '35p' },
      { n: 10, t: 'Nhiệm vụ nâng cao 4 — Xử lý yêu cầu thay đổi trong khi thi đấu', s: 'Robot phản ứng linh hoạt khi sa bàn thay đổi · AI kiểm tra: kịch bản phát sinh bất ngờ', tm: '30p' },
      { n: 11, t: 'Ghép toàn bộ bài R2 — Chiến lược tổng thể trong 5 phút thi', s: 'Tổng hợp 4 nhiệm vụ, phân chia thời gian và chiến lược dự phòng · AI: mô phỏng kịch bản đề thật', tm: '35p' },
    ],
  },
  {
    title: 'Module 4 — Tối ưu và Kiểm tra Độ ổn định (Bài 12–14)',
    lessons: [
      { n: 12, t: 'Kiểm tra độ ổn định — Stress test bài thi R2 nhiều lần lặp lại', s: 'Chạy lặp lại phát hiện lỗi ngẫu nhiên, mục tiêu tỷ lệ thành công trên 90%', tm: '30p' },
      { n: 13, t: 'Bảng điểm R2 — Chiến lược đạt điểm tối đa trong mọi kịch bản', s: 'Bảng điểm chi tiết, chọn nhiệm vụ dễ làm trước, tận dụng điểm thưởng · AI: lập chiến lược điểm', tm: '25p' },
      { n: 14, t: 'Top 12 lỗi đặc thù bảng R2 và cách khắc phục triệt để', s: '12 lỗi đặc trưng R2, nguyên nhân gốc rễ và debug chuyên sâu · AI kiểm tra: debug code lỗi', tm: '25p' },
    ],
  },
  {
    title: 'Module 5 — Luyện thi và Sẵn sàng (Bài 15–18)',
    lessons: [
      { n: 15, t: 'Bài thi thử Full Run R2 lần 1 — Chạy hoàn chỉnh trong 5 phút', s: 'Full run toàn bộ bài R2, phân tích từng giây · AI: chấm điểm tự động theo luật chính thức', tm: '35p' },
      { n: 16, t: 'Phân tích sâu Full Run lần 1 — Top 3 điểm yếu và kế hoạch sửa', s: 'So sánh với chuẩn điểm, xác định điểm yếu, lập kế hoạch cải thiện · AI: gợi ý sửa cụ thể', tm: '30p' },
      { n: 17, t: 'Bài thi thử Full Run R2 lần 2 — Phiên bản hướng đến điểm tối đa', s: 'Chạy sau khi cải thiện, so sánh điểm với lần 1 · AI: xác nhận đạt chuẩn sẵn sàng thi thật', tm: '35p' },
      { n: 18, t: 'Tâm lý chiến và chuẩn bị cho ngày thi vòng loại chính thức', s: 'Checklist 48 giờ trước thi, thiết lập môi trường thi, xử lý sự cố kỹ thuật · AI: mô phỏng áp lực', tm: '25p' },
    ],
  },
]

// ── COMPONENT CHÍNH ───────────────────────────────────────────────────────
export default function OnlinePage() {
  const [cd, setCd] = useState({ d: 0, h: 0, m: 0, s: 0 })
  const [examCd, setExamCd] = useState({ d: 0, h: 0, m: 0 })
  const [tab, setTab] = useState('r1')
  const [popup, setPopup] = useState(false)
  const floatRef = useRef(null)
  const deadlineLabel = getDeadlineLabel()

  useEffect(() => {
    document.title = 'Luyện thi RoboSim 2026 – Full đề R1 & R2 | Sata Robo'
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', 'Khóa học luyện thi RoboSim vòng loại 2026 chủ đề Hậu cần thông minh. 18 bài học có AI chấm điểm, bám sát đề thi bảng R1 và R2. Chỉ 490.000đ, học vĩnh viễn.')
  }, [])

  // Countdown
  useEffect(() => {
    function update() {
      const deadline = getNextDeadline()
      const now = new Date()
      const diff = deadline - now
      if (diff > 0) {
        setCd({
          d: Math.floor(diff / 86400000),
          h: Math.floor((diff % 86400000) / 3600000),
          m: Math.floor((diff % 3600000) / 60000),
          s: Math.floor((diff % 60000) / 1000),
        })
      } else {
        setCd({ d: 0, h: 0, m: 0, s: 0 })
      }
      const examDiff = EXAM_END - now
      if (examDiff > 0) {
        setExamCd({
          d: Math.floor(examDiff / 86400000),
          h: Math.floor((examDiff % 86400000) / 3600000),
          m: Math.floor((examDiff % 3600000) / 60000),
        })
      }
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  // Popup sau 60 giây
  useEffect(() => {
    const id = setTimeout(() => setPopup(true), 60000)
    return () => clearTimeout(id)
  }, [])

  // Float panel ẩn/hiện theo scroll
  useEffect(() => {
    const fp = floatRef.current
    const onScroll = () => {
      if (!fp) return
      if (window.scrollY > 400) {
        fp.style.opacity = '1'
        fp.style.pointerEvents = 'auto'
      } else {
        fp.style.opacity = '0'
        fp.style.pointerEvents = 'none'
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll animation
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1'
          e.target.style.transform = 'translateY(0)'
        }
      }),
      { threshold: 0.08 }
    )
    document.querySelectorAll('.sk-card,.pain-card,.tc,.pc-card,.ic,.diff-item,.ai-step').forEach(el => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(16px)'
      el.style.transition = 'opacity .5s ease,transform .5s ease'
      obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <div className="online-page">
      {/* ── SALE BAR ── */}
      <div id="sale-bar">
        <div className="sb-inner">
          <span className="sb-label">🔥 GIÁ ƯU ĐÃI KẾT THÚC SAU</span>
          <div className="cd-units">
            <div className="cd-unit"><span className="cd-num">{pad(cd.d)}</span><span className="cd-lbl">ngày</span></div>
            <span className="cd-sep">:</span>
            <div className="cd-unit"><span className="cd-num">{pad(cd.h)}</span><span className="cd-lbl">giờ</span></div>
            <span className="cd-sep">:</span>
            <div className="cd-unit"><span className="cd-num">{pad(cd.m)}</span><span className="cd-lbl">phút</span></div>
            <span className="cd-sep">:</span>
            <div className="cd-unit"><span className="cd-num">{pad(cd.s)}</span><span className="cd-lbl">giây</span></div>
          </div>
          <span className="sb-label" style={{ background: 'rgba(255,255,255,.25)' }}>Sau {deadlineLabel} → R1: 790K · R2: 890K</span>
        </div>
      </div>

      {/* ── EXAM BAR ── */}
      <div id="exam-bar">
        <div className="eb-inner">
          <span>🏆 Vòng loại Cuộc thi Sáng tạo Robotics 2026 — Hạn đăng ký:</span>
          <div className="eb-timer">
            <div className="eb-box">{pad(examCd.d)}</div><span>ngày</span>
            <div className="eb-box">{pad(examCd.h)}</div><span>giờ</span>
            <div className="eb-box">{pad(examCd.m)}</div><span>phút</span>
          </div>
          <a href={RULES_URL} target="_blank" rel="noopener">📄 Xem thể lệ →</a>
        </div>
      </div>

      {/* ── NAV ── */}
      <nav className="ol-nav">
        <div className="nav-brand">
          <Link to="/">
            <img src="/image/LogoSataROBO.png" className="nav-logo" alt="Sata Robo" />
          </Link>
          <div className="nav-tag">
            <div className="nav-name">Sata Robo</div>
            <div className="nav-sl">Khơi Nguồn Sáng Tạo — Chắp Cánh Tương Lai</div>
          </div>
        </div>
        <div className="nav-links">
          <a href="#arena">Sa bàn thi</a>
          <a href="#courses">Khóa học</a>
          <a href="#pricing">Bảng giá</a>
          <a href="#faq">FAQ</a>
        </div>
        <a href="#pricing" className="nav-cta">Đăng ký ngay</a>
      </nav>

      {/* ── HERO ── */}
      <section id="hero" className="circuit-bg">
        <div className="circuit-lines">
          <div className="cl cl-h cl-pulse" style={{ top: '20%', left: 0, right: 0, animationDelay: '0s' }} />
          <div className="cl cl-h cl-pulse" style={{ top: '60%', left: 0, right: 0, animationDelay: '1.5s' }} />
          <div className="cl cl-v cl-pulse" style={{ left: '15%', top: 0, bottom: 0, animationDelay: '.7s' }} />
          <div className="cl cl-v cl-pulse" style={{ left: '75%', top: 0, bottom: 0, animationDelay: '2.1s' }} />
          <div className="circ-dot" style={{ top: '20%', left: '15%', animationDelay: '0s' }} />
          <div className="circ-dot" style={{ top: '60%', left: '75%', animationDelay: '1s' }} />
        </div>
        <div className="container z-1">
          <div className="hero-grid">
            <div className="hero-left">
              <div className="hero-badge">🔴 ĐANG MỞ ĐĂNG KÝ — VÒNG LOẠI ROBOTICS 2026</div>
              <div className="hero-hook">⚡ Ba mẹ ơi — Con sắp bước vào kỳ thi quan trọng nhất năm. Con đã thực sự sẵn sàng chưa?</div>
              <h1 className="hero-h1">
                Vòng loại Robotics 2026 chỉ còn <em>{examCd.d}</em> ngày<br />
                — Đừng để con vào phòng thi mà chưa được chuẩn bị
              </h1>
              <p className="hero-sub">Hàng trăm học sinh nỗ lực luyện tập nhưng vẫn mất điểm oan vì học sai trọng tâm, không có lộ trình bài bản. Khóa học RoboSim của Sata Robo giúp con học đúng đề, đúng bảng thi, có AI chấm điểm kiểm tra sau mỗi bài — đảm bảo con thực sự hiểu trước khi tiếp tục.</p>
              <p className="hero-micro">"Khi gieo những hạt mầm trải nghiệm hôm nay, ngày mai sẽ nảy nở một thế hệ trẻ Việt Nam sáng tạo hơn, nhân văn hơn và bản lĩnh hơn." — Sata Robo</p>
              <div className="hero-proof">
                <span className="stars">★★★★★</span>
                <div className="pdiv" />
                <span className="ptext">Hàng trăm học sinh đã hoàn thành</span>
                <div className="pdiv" />
                <span className="ptext">🤖 AI chấm điểm tự động</span>
                <div className="pdiv" />
                <span className="ptext">♾ Học vĩnh viễn</span>
              </div>
              <div className="hero-btns">
                <a href={R1_URL} target="_blank" rel="noopener" className="btn-r1">🟣 Đăng ký Bảng R1 (Tiểu học) — 490.000đ</a>
                <a href={R2_URL} target="_blank" rel="noopener" className="btn-r2">🟠 Đăng ký Bảng R2 (THCS) — 490.000đ</a>
              </div>
              <a href={ZALO_URL} target="_blank" rel="noopener" className="btn-ghost">💬 Chưa biết bảng nào? Tư vấn Zalo miễn phí</a>
            </div>

            <div className="hero-right">
              <div className="hcard">
                <div className="hcard-logo">
                  <img src="/image/LogoSataROBO.png" alt="Sata Robo" />
                </div>
                <div className="hcard-sl">KHÓA LUYỆN THI ROBOSIM 2026</div>
                <div className="price-row">
                  <div className="pc">
                    <div className="pc-lbl">🟣 Bảng R1</div>
                    <div className="pc-old">790.000đ</div>
                    <div className="pc-new">490.000đ</div>
                    <div className="pc-save">Giảm 38%</div>
                  </div>
                  <div className="pc">
                    <div className="pc-lbl">🟠 Bảng R2</div>
                    <div className="pc-old">890.000đ</div>
                    <div className="pc-new">490.000đ</div>
                    <div className="pc-save">Giảm 45%</div>
                  </div>
                </div>
                <div className="ts-mini">
                  <p>Ưu đãi kết thúc sau <span>{cd.d}ngày {pad(cd.h)}:{pad(cd.m)}:{pad(cd.s)}</span></p>
                  <small>Hết {deadlineLabel} giá trở về mức ban đầu</small>
                </div>
                <div className="hfeat">
                  {['18 video bài học bám sát đề thi', 'AI chấm điểm sau mỗi bài — phản hồi ngay', '2 bài thi thử Full Run có phân tích', 'Hỗ trợ Zalo trực tiếp từ Sata Robo', 'Truy cập vĩnh viễn — không bao giờ hết hạn'].map(f => (
                    <div className="hfi" key={f}><div className="hfc">✓</div><span>{f}</span></div>
                  ))}
                </div>
                <div className="hbtns">
                  <a href={R1_URL} target="_blank" rel="noopener" className="hbr1">🟣 Đăng ký Bảng R1 — 490.000đ</a>
                  <a href={R2_URL} target="_blank" rel="noopener" className="hbr2">🟠 Đăng ký Bảng R2 — 490.000đ</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STAKES ── */}
      <section id="stakes" className="circuit-bg">
        <div className="circuit-lines">
          <div className="cl cl-h cl-pulse" style={{ top: '30%', animationDelay: '.3s' }} />
          <div className="cl cl-v cl-pulse" style={{ left: '33%', animationDelay: '1s' }} />
          <div className="cl cl-v cl-pulse" style={{ left: '66%', animationDelay: '2s' }} />
        </div>
        <div className="container z-1">
          <div style={{ textAlign: 'center' }}>
            <div className="sbadge">🏆 Tầm quan trọng của cuộc thi</div>
            <h2 className="st">Cuộc thi Sáng tạo Robotics 2026<br /><span className="acc">Cơ hội vàng không thể bỏ lỡ</span></h2>
            <p className="ssub" style={{ margin: '0 auto 28px', maxWidth: '620px' }}>Do Trung ương Đoàn TNCS Hồ Chí Minh tổ chức — uy tín quốc gia, tầm vóc quốc tế</p>
          </div>
          <div className="sk-grid">
            {[
              { icon: '🏆', title: 'Giải thưởng lớn', desc: 'Hàng chục triệu đồng và bằng khen cấp Trung ương Đoàn cho các đội xuất sắc nhất' },
              { icon: '📋', title: 'Ghi nhận trong hồ sơ học tập', desc: 'Thành tích được ghi vào học bạ và hồ sơ xét tuyển đại học — lợi thế cạnh tranh rõ rệt' },
              { icon: '🌏', title: 'Sân chơi quốc tế', desc: 'Cơ hội đại diện Việt Nam tham dự WRC — World Robot Championship toàn cầu' },
              { icon: '🧠', title: 'Kỹ năng thế kỷ 21', desc: 'Rèn tư duy logic, kỹ năng lập trình và giải quyết vấn đề — nền tảng STEM vững chắc' },
              { icon: '🤖', title: 'Thi trực tuyến qua RoboSim', desc: 'Vòng loại thi qua phần mềm RoboSim — học sinh luyện bài bản sẽ có lợi thế vượt trội' },
              { icon: '⏰', title: 'Hạn đăng ký 19/07/2026', desc: 'Cần ít nhất 4–6 tuần chuẩn bị — bắt đầu học ngay hôm nay để không bị động' },
            ].map(({ icon, title, desc }) => (
              <div className="sk-card" key={title}>
                <span className="sk-icon">{icon}</span>
                <div className="sk-title">{title}</div>
                <div className="sk-desc">{desc}</div>
              </div>
            ))}
          </div>
          <div className="sk-note">
            <p>🎯 <strong>Vòng loại thi trực tuyến qua phần mềm RoboSim.</strong><br />Học sinh nào luyện tập bài bản, đúng lộ trình sẽ có lợi thế <strong>vượt trội</strong> so với các đối thủ chưa được chuẩn bị kỹ càng.</p>
          </div>
          <div className="rules-btn-wrap">
            <a href={RULES_URL} target="_blank" rel="noopener" className="btn-rules">
              📄 Xem thể lệ cuộc thi Sáng tạo Robotics 2026 đầy đủ →
            </a>
          </div>
        </div>
      </section>

      {/* ── PAIN ── */}
      <section id="pain">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <div className="sbadge">⚠️ Nỗi lo của phụ huynh</div>
            <h2 className="st">RoboSim không khó nếu học đúng lộ trình<br /><span className="acc">Nhưng rất dễ mất điểm nếu luyện sai cách</span></h2>
            <p className="ssub" style={{ margin: '0 auto 28px', maxWidth: '620px' }}>Nhiều học sinh chăm chỉ luyện tập nhưng vẫn không vào được vòng chung kết. Đây là những nguyên nhân thường gặp nhất mà phụ huynh không nhận ra:</p>
          </div>
          <div className="pain-grid">
            {[
              { icon: '😰', title: 'Con không biết bắt đầu từ đâu', desc: 'Nhìn vào sa bàn với hàng loạt nhiệm vụ phức tạp, học sinh dễ bị rối và mất phương hướng từ những bước đầu tiên.' },
              { icon: '🔧', title: 'Thiết kế robot chưa phù hợp nhiệm vụ', desc: 'Robot chạy được nhưng không hoàn thành nhiệm vụ ổn định, dẫn đến mất điểm liên tục do lỗi cơ học không mong muốn.' },
              { icon: '💻', title: 'Lập trình thiếu chiến lược điểm số', desc: 'Làm từng phần rời rạc nhưng không biết cách ghép thành bài thi hoàn chỉnh, không có kế hoạch tối ưu điểm số.' },
              { icon: '😔', title: 'Mất điểm oan ngay trong phòng thi', desc: 'Không tối ưu đường đi, thời gian và thứ tự thực hiện nhiệm vụ — chênh lệch điểm số ngay từ những phút đầu.' },
            ].map(({ icon, title, desc }) => (
              <div className="pain-card" key={title}>
                <span className="pain-icon">{icon}</span>
                <div className="pain-title">{title}</div>
                <div className="pain-desc">{desc}</div>
              </div>
            ))}
          </div>
          <div className="solution-bridge">
            <p>✅ <strong>Sata Robo giải quyết đúng từng vấn đề này</strong><br /><span>18 bài học theo lộ trình từ cơ bản đến hoàn chỉnh, có AI kiểm tra sau mỗi bài — đảm bảo con không chỉ xem mà thực sự hiểu và làm được.</span></p>
          </div>
        </div>
      </section>

      {/* ── ARENA ── */}
      <section id="arena" className="circuit-bg">
        <div className="circuit-lines">
          <div className="cl cl-h cl-pulse" style={{ top: '40%', animationDelay: '.8s' }} />
          <div className="cl cl-v cl-pulse" style={{ left: '20%', animationDelay: '1.6s' }} />
          <div className="cl cl-v cl-pulse" style={{ left: '80%', animationDelay: '.4s' }} />
        </div>
        <div className="container z-1">
          <div className="arena-wrap">
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <div className="sbadge">🎮 Sa bàn thi đấu RoboSim 2026</div>
              <h2 className="st">Sa bàn ảo RoboSim<br /><span className="cyan">Hậu cần thông minh — Vòng loại 2026</span></h2>
              <p className="ssub" style={{ margin: '0 auto', maxWidth: '560px' }}>Hình ảnh thực tế sa bàn thi đấu vòng loại — giúp phụ huynh và học sinh hình dung rõ nhiệm vụ cần thực hiện</p>
            </div>
            <div className="arena-box">
              <div className="arena-title">🤖 Sa bàn Hậu cần thông minh — Vòng loại RoboSim 2026</div>
              <div className="arena-img-wrap">
                <img
                  src="/image/SabanRoboSim.jpg"
                  alt="Sa bàn RoboSim Hậu cần thông minh Vòng loại 2026"
                  className="arena-img"
                />
              </div>
              <div className="arena-note">⚡ Học sinh cần lập trình robot di chuyển, phân loại và vận chuyển hàng hóa theo đúng yêu cầu trong thời gian giới hạn. Đây là bài toán kết hợp thiết kế cơ học, lập trình thuật toán và chiến lược điểm số.</div>
              <div style={{ textAlign: 'center', marginTop: '16px' }}>
                <a href={RULES_URL} target="_blank" rel="noopener" className="btn-rules">
                  📄 Tải thể lệ thi đấu đầy đủ — Xem chi tiết sa bàn chính thức →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── USP ── */}
      <section id="usp">
        <div className="container">
          <div className="usp-grid">
            <div className="usp-left">
              <div className="sbadge">🤖 Điểm khác biệt độc nhất</div>
              <h2 className="st" style={{ marginTop: '12px' }}>Không chỉ xem video<br /><span className="gold">AI chấm điểm từng bài học</span></h2>
              <div className="usp-hl">
                <strong>Vì sao YouTube và video thông thường không đủ?</strong>
                <p>Xem video không cho bạn biết con có thực sự hiểu hay không. Học sinh xem xong, gật đầu — rồi vào phòng thi vẫn mắc lỗi y chang. Đây là lỗ hổng lớn nhất của mọi khóa học video thông thường.</p>
              </div>
              <div className="diff-list">
                {[
                  { ic: '🎯', t: 'AI kiểm tra sau mỗi bài học', s: 'Bài kiểm tra tương tác, AI chấm ngay và giải thích từng câu sai' },
                  { ic: '🔒', t: 'Phải đạt điểm chuẩn mới học tiếp', s: 'Con không thể bỏ qua — đảm bảo hiểu vững trước khi học bài khó hơn' },
                  { ic: '👨‍🏫', t: 'Như có gia sư ngồi cạnh hướng dẫn', s: 'Phụ huynh biết chính xác con đang hiểu đến đâu' },
                  { ic: '♾', t: 'Truy cập vĩnh viễn, không giới hạn', s: 'Học lại bất cứ lúc nào — không có ngày hết hạn' },
                ].map(({ ic, t, s }) => (
                  <div className="diff-item" key={t}>
                    <div className="diff-ic">{ic}</div>
                    <div className="diff-t"><strong>{t}</strong><span>{s}</span></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="usp-right">
              <div className="ai-title">Quy trình học một bài</div>
              {[
                { n: 1, t: 'Xem video bài học', s: 'Video hướng dẫn rõ ràng, tua đi tua lại thoải mái' },
                { n: 2, t: 'Thực hành trên RoboSim', s: 'Làm theo hướng dẫn trong môi trường mô phỏng thực tế' },
                { n: 3, t: 'AI ra bài kiểm tra', s: 'Câu hỏi tương tác về lý thuyết và ứng dụng thực tiễn' },
                { n: 4, t: 'AI chấm điểm và giải thích', s: 'Phản hồi ngay, chỉ rõ câu sai và lý do tại sao' },
                { n: 5, t: 'Đạt chuẩn thì mở bài tiếp theo', s: 'Kiến thức nền vững chắc trước khi học bài khó hơn' },
              ].map(({ n, t, s }) => (
                <div className="ai-step" key={n}>
                  <div className="ai-n">{n}</div>
                  <div className="ai-t"><strong>{t}</strong><span>{s}</span></div>
                </div>
              ))}
              <div className="ai-vs">
                <div className="ai-bad"><div className="lbl">❌ YouTube thông thường</div><p>Xem xong — không biết con có hiểu thật không</p></div>
                <div className="ai-good"><div className="lbl">✅ Sata Robo AI</div><p>Biết chính xác con hiểu đến mức nào</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VIDEO GUIDE ── */}
      <section id="vguide">
        <div className="container">
          <div className="vwrap">
            <div style={{ textAlign: 'center' }}>
              <div className="sbadge">📹 Hướng dẫn đăng ký</div>
              <h2 className="st">Mua và bắt đầu học trong 5 phút<br /><span className="acc">Xem hướng dẫn đầy đủ từng bước</span></h2>
              <p className="ssub" style={{ margin: '0 auto' }}>Từ đăng ký tài khoản đến bài học đầu tiên — thực hiện đơn giản trên điện thoại hoặc máy tính</p>
            </div>
            <div className="vbox">
              <GuideVideo videoId={GUIDE_VIDEO_ID} />
              <div className="vsteps">
                {[
                  'Truy cập SataWorld.vn',
                  'Đăng ký tài khoản miễn phí',
                  'Chọn đúng khóa R1 hoặc R2',
                  'Thanh toán và xác nhận',
                  'Vào tài khoản và học ngay',
                  'Zalo hỗ trợ khi cần',
                ].map((step, i) => (
                  <div className="vstep" key={i} style={i === 5 ? { borderRight: 'none' } : {}}>
                    <div className="vsn">{i + 1}</div>
                    <p>{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COURSES ── */}
      <section id="courses">
        <div className="container">
          <div className="sbadge">📚 Nội dung khóa học</div>
          <h2 className="st">18 bài học bám sát đề thi vòng loại<br /><span className="acc">Thiết kế riêng cho từng bảng thi</span></h2>
          <div className="tabs">
            <button className={`tab-btn${tab === 'r1' ? ' active' : ''}`} onClick={() => setTab('r1')}>🟣 Bảng R1 · Tiểu học</button>
            <button className={`tab-btn${tab === 'r2' ? ' active' : ''}`} onClick={() => setTab('r2')}>🟠 Bảng R2 · THCS</button>
          </div>
          <div className={`tab-content${tab === 'r1' ? ' active' : ''}`}>
            {R1_MODULES.map(mod => (
              <div key={mod.title}>
                <div className="mod-title">{mod.title}</div>
                {mod.lessons.map(l => (
                  <div className="vi" key={l.n}>
                    <div className="vnum">{l.n}</div>
                    <div style={{ flex: 1 }}><div className="vti">{l.t}</div><div className="vsi">{l.s}</div></div>
                    <div className="vtm">{l.tm}</div>
                  </div>
                ))}
              </div>
            ))}
            <div className="csum">
              {[['18','Bài học video'],['5','Module lộ trình'],['~4.5–5.5h','Tổng thời lượng'],['18','Bài kiểm tra'],['♾','Truy cập vĩnh viễn']].map(([n,l]) => (
                <div className="cs" key={l}><div className="csn">{n}</div><div className="csl">{l}</div></div>
              ))}
            </div>
          </div>
          <div className={`tab-content${tab === 'r2' ? ' active' : ''}`}>
            {R2_MODULES.map(mod => (
              <div key={mod.title}>
                <div className="mod-title">{mod.title}</div>
                {mod.lessons.map(l => (
                  <div className="vi" key={l.n}>
                    <div className="vnum">{l.n}</div>
                    <div style={{ flex: 1 }}><div className="vti">{l.t}</div><div className="vsi">{l.s}</div></div>
                    <div className="vtm">{l.tm}</div>
                  </div>
                ))}
              </div>
            ))}
            <div className="csum">
              {[['18','Bài học video'],['5','Module lộ trình'],['~4.5–5.5h','Tổng thời lượng'],['18','Bài kiểm tra AI'],['♾','Truy cập vĩnh viễn']].map(([n,l]) => (
                <div className="cs" key={l}><div className="csn">{n}</div><div className="csl">{l}</div></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INSTRUCTOR ── */}
      <section id="instructor" className="circuit-bg">
        <div className="circuit-lines">
          <div className="cl cl-h cl-pulse" style={{ top: '50%', animationDelay: '1s' }} />
          <div className="cl cl-v cl-pulse" style={{ left: '50%', animationDelay: '.5s' }} />
        </div>
        <div className="container z-1">
          <div style={{ textAlign: 'center' }}>
            <div className="sbadge">👨‍🏫 Đội ngũ giảng viên</div>
            <h2 className="st">Những người thầy tâm huyết<br /><span className="acc">Học — Thực hành — Thi đấu</span></h2>
          </div>
          <div className="inst-intro">
            <p>Đội ngũ giảng viên Sata Robo được tuyển chọn kỹ lưỡng, mỗi người có trên 5 năm kinh nghiệm đào tạo Robotics thực tiễn. Chúng tôi không chỉ dạy lý thuyết — chúng tôi đồng hành cùng học sinh từ buổi học đầu tiên đến tận ngày bước vào phòng thi.</p>
          </div>
          <div className="inst-grid">
            <div className="ic">
              <div className="av">SR</div>
              <div className="in">Đội ngũ Sata Robo</div>
              <div className="ir">Chuyên gia Robotics Giáo dục</div>
              <div className="ic-tag">⭐ Trên 5 năm kinh nghiệm đào tạo</div>
              <div className="ic-desc">Trực tiếp hướng dẫn hàng trăm học sinh từ Tiểu học đến THCS trong các cuộc thi Robotics cấp quốc gia.</div>
            </div>
            <div className="ic">
              <div className="av" style={{ background: 'linear-gradient(135deg,#06B6D4,#0891B2)' }}>AI</div>
              <div className="in">Hệ thống AI hỗ trợ</div>
              <div className="ir">Trợ lý học tập thông minh 24/7</div>
              <div className="ic-tag">🤖 AI chấm điểm tự động</div>
              <div className="ic-desc">Hệ thống AI kiểm tra, phản hồi và theo dõi tiến độ của từng học sinh trong mọi bài học, không bỏ sót.</div>
            </div>
            <div className="ic">
              <div className="av" style={{ background: 'linear-gradient(135deg,#F59E0B,#F97316)', fontSize: '20px' }}>💬</div>
              <div className="in">Hỗ trợ Zalo trực tiếp</div>
              <div className="ir">Đồng hành đến ngày thi</div>
              <div className="ic-tag">📱 Phản hồi trong 2 giờ</div>
              <div className="ic-desc">Phụ huynh và học sinh nhắn Zalo 0818.823.720 bất cứ lúc nào. Không có câu hỏi nào là không quan trọng.</div>
            </div>
          </div>
          <div className="inst-spirit">
            <p>"Chúng tôi tin rằng mỗi học sinh đều có khả năng chinh phục RoboSim khi được <strong>học đúng</strong>, <strong>thực hành đủ</strong> và <strong>thi với sự tự tin</strong>. Đó là cam kết của Sata Robo với từng học sinh và phụ huynh."</p>
          </div>
          <div className="inst-zalo">
            <a href={ZALO_URL} target="_blank" rel="noopener" className="btn-zalo">💬 Nhắn Zalo 0818.823.720 — Tư vấn chọn bảng thi miễn phí</a>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="testi">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <div className="sbadge">💬 Phụ huynh và học sinh nói gì</div>
            <h2 className="st">Hàng trăm học sinh đã tham gia khóa học<br /><span className="gold">và hào hứng làm được bài tập thực tế</span></h2>
            <p className="ssub" style={{ margin: '0 auto 28px', maxWidth: '620px' }}>Cảm nhận thực tế từ phụ huynh và học sinh đã trải qua hành trình luyện thi cùng Sata Robo</p>
          </div>
          <div className="tg">
            {/* Phụ huynh 1 */}
            <div className="tc">
              <div className="ts">★★★★★</div>
              <div className="tq">"Con học 3 tuần, từ chỗ không biết bắt đầu từ đâu đến khi thi thử đạt 85% điểm. Điều tôi thích nhất là AI chấm bài ngay — tôi biết chắc con hiểu bài trước khi học tiếp, khác hoàn toàn so với xem YouTube."</div>
              <div className="ta">
                <div className="tav">NA</div>
                <div><div className="tn">Anh Ngọc Anh</div><div className="ti">Phụ huynh bạn Duy Tùng · Đà Nẵng</div></div>
              </div>
              <TestiVideo videoId={TESTI_VIDEO_IDS[0]} />
            </div>
            {/* Phụ huynh 2 */}
            <div className="tc">
              <div className="ts">★★★★★</div>
              <div className="tq">"Ban đầu lo con học online không hiệu quả. Nhưng 27.000 đồng mỗi buổi — rẻ hơn cả nửa cốc trà sữa — mà con tiến bộ rõ rệt sau 2 tuần. Con học hào hứng và làm được bài tập thực hành rất tốt."</div>
              <div className="ta">
                <div className="tav">TS</div>
                <div><div className="tn">Anh Trường Sơn</div><div className="ti">Phụ huynh bạn Minh Châu · Đà Nẵng</div></div>
              </div>
              <TestiVideo videoId={TESTI_VIDEO_IDS[1]} />
            </div>
            {/* Phụ huynh 3 */}
            <div className="tc">
              <div className="ts">★★★★★</div>
              <div className="tq">"Con thi Robotics năm ngoái không vào được vòng chung kết vì không có chiến lược. Năm nay học khóa này, con tự làm được bài tập và hiểu rõ cách sắp xếp thứ tự nhiệm vụ. Tự tin hơn hẳn khi bước vào phòng thi!"</div>
              <div className="ta">
                <div className="tav">MT</div>
                <div><div className="tn">Chị Mỹ Trang</div><div className="ti">Phụ huynh bạn Gia Hân · Đà Nẵng</div></div>
              </div>
              <TestiVideo videoId={TESTI_VIDEO_IDS[2]} />
            </div>
          </div>
        </div>
      </section>

      {/* ── TRASUA ── */}
      <section id="trasua">
        <div className="tv">
          <h2 className="tv-title">Mỗi buổi học chỉ tốn <span className="go">27.000đ</span><br />Rẻ hơn nửa cốc trà sữa 🧋</h2>
          <div className="compare-grid">
            <div className="cc">
              <span className="cc-icon">🧋🧋🧋🧋🧋<br />🧋🧋🧋🧋🧋</span>
              <div className="cc-name">Mua 10 cốc trà sữa</div>
              <div className="cc-price">450.000đ</div>
              <div className="cc-desc">Uống xong là hết — không còn lại gì</div>
            </div>
            <div className="vs-b">VS</div>
            <div className="cc hl">
              <span className="cc-icon">🤖</span>
              <div className="cc-name">Khóa học Sata Robo</div>
              <div className="cc-price">490.000đ</div>
              <div className="cc-desc">18 buổi học có AI · Truy cập vĩnh viễn<br />Cơ hội vào vòng chung kết quốc gia</div>
            </div>
          </div>
          <p style={{ color: 'rgba(255,255,255,.45)', fontSize: '14px', marginTop: '24px', fontStyle: 'italic' }}>"Ba mẹ chọn cái nào cho con?"</p>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="circuit-bg">
        <div className="circuit-lines">
          <div className="cl cl-h cl-pulse" style={{ top: '25%', animationDelay: '.6s' }} />
          <div className="cl cl-h cl-pulse" style={{ top: '75%', animationDelay: '1.8s' }} />
          <div className="cl cl-v cl-pulse" style={{ left: '25%', animationDelay: '1.2s' }} />
          <div className="cl cl-v cl-pulse" style={{ left: '75%', animationDelay: '0s' }} />
        </div>
        <div className="container z-1">
          <div style={{ textAlign: 'center' }}>
            <div className="sbadge">💰 Bảng giá khóa học</div>
            <h2 className="st">Đầu tư thông minh nhất<br /><span className="acc">cho mùa thi Robotics 2026</span></h2>
            <p className="ssub" style={{ margin: '0 auto 0', maxWidth: '560px' }}>Cả hai khóa đều bao gồm AI chấm điểm tương tác và quyền truy cập vĩnh viễn không giới hạn</p>
          </div>
          <div className="sale-urgency" style={{ marginTop: '24px' }}>
            <div className="su-title">🔥 GIÁ ƯU ĐÃI KẾT THÚC SAU — Hết ngày {deadlineLabel} giá trở về mức ban đầu</div>
            <div className="su-timer">
              <div className="su-unit"><span className="su-num">{pad(cd.d)}</span><span className="su-lbl">NGÀY</span></div>
              <span className="su-sep">:</span>
              <div className="su-unit"><span className="su-num">{pad(cd.h)}</span><span className="su-lbl">GIỜ</span></div>
              <span className="su-sep">:</span>
              <div className="su-unit"><span className="su-num">{pad(cd.m)}</span><span className="su-lbl">PHÚT</span></div>
              <span className="su-sep">:</span>
              <div className="su-unit"><span className="su-num">{pad(cd.s)}</span><span className="su-lbl">GIÂY</span></div>
            </div>
            <div className="su-note">⚡ Sau {deadlineLabel}: Khóa R1 về 790.000đ · Khóa R2 về 890.000đ</div>
          </div>
          <div className="pg" style={{ marginTop: '20px' }}>
            <div className="pc-card r1">
              <div className="pc-head"><span className="pc-icon">🟣</span><span className="pc-name">Luyện thi Bảng R1 — Tiểu học</span></div>
              <span className="pc-save-badge">Giảm 38% — Ưu đãi vòng loại</span>
              <div className="pc-oldp">Giá gốc: 790.000đ</div>
              <div className="pc-newp">490.000đ</div>
              <div className="pc-per">/ khóa · 18 bài học</div>
              <div className="pc-ts">🧋 Chỉ 27.000đ mỗi buổi — rẻ hơn nửa cốc trà sữa</div>
              <div className="pc-feats">
                {['18 video bám sát đề thi bảng R1', 'AI chấm điểm tương tác sau mỗi bài học', '2 bài thi thử Full Run có phân tích', 'Hỗ trợ trực tiếp qua Zalo', 'Truy cập vĩnh viễn — không bao giờ hết hạn'].map(f => (
                  <div className="pf" key={f}><span className="pfc r1c">✓</span><span>{f}</span></div>
                ))}
              </div>
              <a href={R1_URL} target="_blank" rel="noopener" className="btn-buyr1">🟣 Đăng ký Bảng R1 ngay — 490.000đ →</a>
            </div>
            <div className="pc-card r2">
              <div className="pc-head"><span className="pc-icon">🟠</span><span className="pc-name">Luyện thi Bảng R2 — THCS</span></div>
              <span className="pc-save-badge" style={{ background: 'var(--gold)' }}>Giảm 45% — Ưu đãi vòng loại</span>
              <div className="pc-oldp">Giá gốc: 890.000đ</div>
              <div className="pc-newp">490.000đ</div>
              <div className="pc-per">/ khóa · 18 bài học</div>
              <div className="pc-ts">🧋 Chỉ 27.000đ mỗi buổi — rẻ hơn nửa cốc trà sữa</div>
              <div className="pc-feats">
                {['18 video bám sát đề thi bảng R2', 'AI chấm điểm tương tác sau mỗi bài học', '2 bài thi thử Full Run có phân tích', 'Hỗ trợ trực tiếp qua Zalo', 'Truy cập vĩnh viễn — không bao giờ hết hạn'].map(f => (
                  <div className="pf" key={f}><span className="pfc r2c">✓</span><span>{f}</span></div>
                ))}
              </div>
              <a href={R2_URL} target="_blank" rel="noopener" className="btn-buyr2">🟠 Đăng ký Bảng R2 ngay — 490.000đ →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <div className="sbadge">❓ Câu hỏi thường gặp</div>
            <h2 className="st">Phụ huynh thường hỏi<br /><span className="acc">về khóa luyện thi RoboSim</span></h2>
          </div>
          <div className="fl">
            <FAQItem
              question="R1 dành cho ai? R2 dành cho ai? Làm sao biết con học bảng nào?"
              answer="Bảng R1 dành cho học sinh Tiểu học, bảng R2 dành cho học sinh THCS. Phụ huynh chọn theo đúng cấp học của con. Nếu chưa chắc hoặc con đã đăng ký thi mà không nhớ bảng nào, nhắn Zalo 0818.823.720 để đội ngũ Sata Robo kiểm tra và tư vấn miễn phí."
            />
            <FAQItem
              question="AI chấm điểm là như thế nào? Con có nhận được phản hồi chi tiết không?"
              answer="Sau mỗi bài học, con làm bài kiểm tra tương tác trực tiếp trên hệ thống. AI chấm điểm ngay lập tức, chỉ rõ câu sai, giải thích lý do và cho phép con thử lại đến khi đúng. Cơ chế này giống như có một trợ lý giáo viên ngồi cạnh — phụ huynh cũng biết chính xác con hiểu đến đâu."
            />
            <FAQItem
              question="Con được học trong bao lâu? Có hết hạn sau cuộc thi không?"
              answer="Con được truy cập vĩnh viễn — không bao giờ hết hạn. Năm sau con muốn ôn lại vẫn được. Nếu Sata Robo cập nhật nội dung theo đề thi mới, con cũng nhận được bản cập nhật đó hoàn toàn miễn phí."
            />
            <FAQItem
              question="Khóa học này khác YouTube ở điểm nào quan trọng nhất?"
              answer="YouTube không biết con có hiểu bài hay không. Khóa Sata Robo có AI kiểm tra sau mỗi bài — con phải đạt điểm chuẩn mới được học tiếp. Nội dung được thiết kế riêng cho đề thi R1 và R2 năm 2026, không phải nội dung tổng quát. Và có hỗ trợ Zalo trực tiếp từ đội ngũ bất cứ khi nào cần."
            />
            <FAQItem
              question="Con chưa biết gì về RoboSim có học được không?"
              answer="Có. Khóa học được thiết kế theo lộ trình từ cơ bản đến hoàn chỉnh — từ làm quen phần mềm, thiết kế robot, lập trình từng nhiệm vụ, đến ghép bài thi hoàn chỉnh và thi thử. Không cần có kinh nghiệm trước."
            />
            <FAQItem
              question="Nếu không biết cách thanh toán thì làm sao?"
              answer="Phụ huynh có thể xem video hướng dẫn ở đầu trang hoặc nhắn Zalo 0818.823.720 để được hỗ trợ từng bước. Đội ngũ Sata Robo sẽ hướng dẫn tận tình từ khâu đăng ký đến khi con vào học được."
            />
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section id="cta-final" className="circuit-bg">
        <div className="circuit-lines">
          <div className="cl cl-h cl-pulse" style={{ top: '30%', animationDelay: '.4s' }} />
          <div className="cl cl-h cl-pulse" style={{ top: '70%', animationDelay: '1.2s' }} />
          <div className="cl cl-v cl-pulse" style={{ left: '15%', animationDelay: '.8s' }} />
          <div className="cl cl-v cl-pulse" style={{ left: '85%', animationDelay: '1.6s' }} />
        </div>
        <div className="container z-1" style={{ textAlign: 'center' }}>
          <div className="sbadge" style={{ marginBottom: '16px' }}>🎯 Hành động ngay hôm nay</div>
          <h2 className="st">Chỉ còn <span style={{ color: 'var(--gold)' }}>{cd.d} ngày</span> giá ưu đãi<br /><span className="gold">Sau {deadlineLabel} giá trở về mức ban đầu!</span></h2>
          <p className="ctasub">Đăng ký ngay hôm nay để con có đủ thời gian luyện tập bài bản trước vòng loại ngày 19/07/2026. Chọn đúng bảng thi — học đúng nội dung — thi với sự tự tin.</p>
          <div className="cta-btns">
            <a href={R1_URL} target="_blank" rel="noopener" className="btn-r1" style={{ fontSize: '15px', padding: '15px 28px' }}>🟣 Đăng ký Bảng R1 (Tiểu học) — 490.000đ</a>
            <a href={R2_URL} target="_blank" rel="noopener" className="btn-r2" style={{ fontSize: '15px', padding: '15px 28px' }}>🟠 Đăng ký Bảng R2 (THCS) — 490.000đ</a>
          </div>
          <p className="cta-note">Chưa biết bảng nào? <a href={ZALO_URL} target="_blank" rel="noopener">💬 Nhắn Zalo 0818.823.720 — Tư vấn miễn phí</a></p>
        </div>
      </section>

      {/* ── BRAND ── */}
      <section id="brand">
        <div className="container">
          <div className="brand-inner">
            <div className="brand-logo-row">
              <img src="/image/LogoSataROBO.png" alt="Sata Robo" />
            </div>
            <div className="brand-slogan">Khơi Nguồn Sáng Tạo — Chắp Cánh Tương Lai 🚀</div>
            <blockquote>"Khi gieo những hạt mầm trải nghiệm hôm nay, ngày mai sẽ nảy nở một thế hệ trẻ Việt Nam sáng tạo hơn, nhân văn hơn và bản lĩnh hơn."</blockquote>
            <p>Sata Robo là đơn vị giáo dục công nghệ tại Đà Nẵng, chuyên đào tạo Robotics và luyện thi các cuộc thi sáng tạo quốc gia. Chúng tôi đồng hành cùng học sinh từ những bước đầu tiên đến sân chơi quốc tế.</p>
            <div className="bvals">
              {[['🏆','Robotics Quốc gia'],['🤖','AI Giáo dục'],['❤️','Tâm huyết'],['🌟','Bài bản']].map(([i,l]) => (
                <div className="bv" key={l}><span className="bvi">{i}</span><span className="bvl">{l}</span></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="ol-footer">
        <div className="container">
          <div className="fg">
            <div className="flo">
              <img src="/image/LogoSataROBO.png" alt="Sata Robo" />
              <div className="fn">Sata Robo</div>
              <div className="fsl">Luyện thi RoboSim 2026</div>
              <p className="fdesc">Đồng hành cùng học sinh trong hành trình học Robotics, RoboSim và luyện thi sáng tạo công nghệ. Cam kết cung cấp lộ trình học bài bản, thực hành thiết thực và sát với yêu cầu thi đấu.</p>
            </div>
            <div>
              <div className="fct">Khóa học</div>
              <div className="flinks">
                <a href={R1_URL} target="_blank" rel="noopener">🟣 Luyện thi RoboSim Bảng R1</a>
                <a href={R2_URL} target="_blank" rel="noopener">🟠 Luyện thi RoboSim Bảng R2</a>
                <Link to="/khoa-hoc-robosim-offline">🏫 Học Offline 16 buổi</Link>
                <Link to="/">🏠 Trang chủ</Link>
              </div>
            </div>
            <div>
              <div className="fct">Liên hệ</div>
              <div className="flinks">
                <a href="https://maps.google.com/?q=258+Lê+Thanh+Nghị,+Đà+Nẵng" target="_blank" rel="noopener">📍 258 Lê Thanh Nghị, Đà Nẵng</a>
                <a href={ZALO_URL} target="_blank" rel="noopener">💬 Zalo: 0818.823.720</a>
                <a href="mailto:satarobo@gmail.com">✉️ satarobo@gmail.com</a>
                <a href="https://facebook.com/Satarobo" target="_blank" rel="noopener">📘 Facebook: Sata Robo</a>
                <a href="https://sataworld.vn/" target="_blank" rel="noopener">🌐 sataworld.vn</a>
              </div>
            </div>
          </div>
          <div className="fbot">
            <span>© 2026 Sata Robo — SataWorld. Tất cả quyền được bảo lưu.</span>
            <span>Khơi Nguồn Sáng Tạo — Chắp Cánh Tương Lai 🚀</span>
          </div>
        </div>
      </footer>

      {/* ── FLOATING PANEL ── */}
      <div id="float-panel" ref={floatRef}>
        <div className="fp-label">Đăng ký ngay</div>
        <a href={R1_URL} target="_blank" rel="noopener" className="fp-btn fp-r1">🟣 R1 Tiểu học — 490K</a>
        <a href={R2_URL} target="_blank" rel="noopener" className="fp-btn fp-r2">🟠 R2 THCS — 490K</a>
        <a href={ZALO_URL} target="_blank" rel="noopener" className="fp-btn fp-zalo" title="Zalo tư vấn miễn phí">💬</a>
      </div>

      {/* ── POPUP ── */}
      {popup && (
        <div
          className="popup-overlay show"
          onClick={e => { if (e.target.classList.contains('popup-overlay')) setPopup(false) }}
        >
          <div className="popup">
            <button className="popup-close" onClick={() => setPopup(false)}>✕</button>
            <div className="popup-badge">🔥 SIÊU ƯU ĐÃI — CHỈ CÒN {cd.d} NGÀY</div>
            <h2 className="popup-h1">Đăng ký ngay hôm nay<br /><span className="ac">trước khi giá tăng!</span></h2>
            <p className="popup-sub">Ưu đãi kết thúc hết ngày {deadlineLabel}. Sau đó giá trở về mức ban đầu. Đây là cơ hội tốt nhất để con bắt đầu luyện thi.</p>
            <div className="popup-timer-row">
              <div className="ptr-block"><span className="ptr-n">{pad(cd.d)}</span><span className="ptr-l">ngày</span></div>
              <span className="ptr-sep">:</span>
              <div className="ptr-block"><span className="ptr-n">{pad(cd.h)}</span><span className="ptr-l">giờ</span></div>
              <span className="ptr-sep">:</span>
              <div className="ptr-block"><span className="ptr-n">{pad(cd.m)}</span><span className="ptr-l">phút</span></div>
              <span className="ptr-sep">:</span>
              <div className="ptr-block"><span className="ptr-n">{pad(cd.s)}</span><span className="ptr-l">giây</span></div>
            </div>
            <div className="popup-prices">
              <div className="pp">
                <div className="pp-lbl">🟣 Bảng R1 · Tiểu học</div>
                <div className="pp-old">790.000đ</div>
                <div className="pp-new">490.000đ</div>
                <div className="pp-save">Tiết kiệm 300.000đ</div>
              </div>
              <div className="pp">
                <div className="pp-lbl">🟠 Bảng R2 · THCS</div>
                <div className="pp-old">890.000đ</div>
                <div className="pp-new">490.000đ</div>
                <div className="pp-save">Tiết kiệm 400.000đ</div>
              </div>
            </div>
            <div className="popup-btns">
              <a href={R1_URL} target="_blank" rel="noopener" className="pbr1">🟣 Đăng ký Bảng R1 ngay — 490.000đ →</a>
              <a href={R2_URL} target="_blank" rel="noopener" className="pbr2">🟠 Đăng ký Bảng R2 ngay — 490.000đ →</a>
            </div>
            <div className="popup-dismiss" onClick={() => setPopup(false)}>Tôi muốn đọc thêm trước khi quyết định →</div>
          </div>
        </div>
      )}
    </div>
  )
}
