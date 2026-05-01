/* Section 4 — Courses: Card R1 và R2 với giá + features */
import courses from '../data/courses';
import { trackAndRedirect } from '../utils/tracking';

export default function Courses() {
  return (
    <section className="lp-courses section section-alt" id="courses" aria-labelledby="courses-heading">
      <div className="container">
        {/* Tiêu đề */}
        <h2 id="courses-heading" className="section-title text-center">
          KHOÁ LUYỆN THI ROBOSIM —<br />
          <span className="gradient-text">TIỂU HỌC CHỌN R1, THCS CHỌN R2</span>
        </h2>
        <p className="section-subtitle text-center">
          Sata Robo có 2 nội dung khoá luyện thi — tương ứng 2 bảng thi vòng loại RBT2026.<br />
          Bố mẹ chọn theo lứa tuổi của con. Đơn giản vậy thôi.
        </p>

        {/* Badge hỗ trợ đổi bảng */}
        <div className="lp-courses__swap-badge" role="note">
          💡 Lỡ chọn nhầm bảng? Sata Robo hỗ trợ đổi khoá miễn phí.
        </div>

        {/* 2 Course cards */}
        <div className="course-grid">
          {courses.map((course) => (
            <article
              key={course.id}
              className={`course-card course-card-${course.colorKey}`}
              aria-label={`${course.title} — ${course.subtitle}`}
            >
              {/* Tag */}
              <span className={`course-card-tag tag-${course.colorKey}`}>
                {course.badge}
              </span>

              {/* Tiêu đề */}
              <h3>{course.title}</h3>
              <p className="lp-courses__tagline">{course.tagline}</p>

              {/* Meta */}
              <ul className="lp-courses__meta" aria-label="Thông tin khoá học">
                <li>
                  <span className="lp-courses__meta-icon" aria-hidden="true">👤</span>
                  <strong>Dành cho:</strong> {course.audience}
                </li>
                <li>
                  <span className="lp-courses__meta-icon" aria-hidden="true">📋</span>
                  <strong>Bảng đề thi:</strong> {course.examBoard}
                </li>
                <li>
                  <span className="lp-courses__meta-icon" aria-hidden="true">⏰</span>
                  <strong>Thời lượng:</strong> {course.duration}
                </li>
              </ul>

              {/* Đầu ra */}
              <div className="lp-courses__outcomes">
                <p><strong>🎯 Đầu ra:</strong></p>
                <ul>
                  {course.outcomes.map((o) => (
                    <li key={o}>✓ {o}</li>
                  ))}
                </ul>
              </div>

              {/* Giá */}
              <div className="lp-courses__price">
                <div className="lp-courses__price-original">
                  <s>{course.originalPrice}</s>
                </div>
                <div className="lp-courses__price-sale">
                  <strong>{course.salePrice}</strong>
                  <span className="lp-courses__discount">🔥 {course.discount} — chỉ trước ngày thi</span>
                </div>
              </div>

              {/* Features */}
              <ul className="features-list" aria-label="Bố mẹ nhận được">
                {course.features.map((f) => (
                  <li key={f}>
                    <span className={`check check-${course.colorKey}`} aria-hidden="true">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA button */}
              <button
                onClick={() => trackAndRedirect(course.level, `section4_${course.level}`)}
                className={`btn btn-${course.colorKey} btn-lg lp-courses__cta`}
                aria-label={`${course.ctaText} — mở trong tab mới`}
              >
                {course.ctaText}
              </button>
            </article>
          ))}
        </div>

        {/* Khối chốt deal */}
        <div className="lp-courses__closer">
          <h3>🔥 Mình nói thẳng với bố mẹ:</h3>
          <p>❌ Không học khoá luyện thi → Con đứng chung vạch với cả nước → Bị loại.</p>
          <p>✅ Học khoá luyện thi 490k → Con biết MẸO + TRICK → Vượt lên trước → <strong>PASS</strong>.</p>

          {/* Ảnh bảng điểm */}
          <div className="lp-courses__score-img">
            <img
              src="[SCORE_TABLE_IMAGE]"
              alt="Bảng điểm thực tế học viên Sata Robo — vòng loại RBT2026"
              loading="lazy"
              width="700"
              height="400"
            />
          </div>

          <p className="lp-courses__closer-copy">
            490.000đ — bằng 1 buổi cà phê cuối tuần của bố mẹ —<br />
            để con không bị loại oan trong đám đông.
          </p>
          <p className="lp-courses__closer-question">
            <strong>Bố mẹ thấy đáng không?</strong>
          </p>
        </div>

        {/* Hỗ trợ tư vấn */}
        <div className="lp-courses__support">
          <p>💡 Bố mẹ phân vân con thuộc bảng nào?</p>
          <p>Inbox mình ngay — gửi tên lớp con đang học, tư vấn miễn phí trong 10 phút.</p>
          <a
            href="[ZALO_LINK]"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-zalo"
            aria-label="Chat Zalo với Sata Robo để được tư vấn miễn phí"
          >
            💬 Chat Zalo với mình →
          </a>
        </div>
      </div>
    </section>
  );
}
