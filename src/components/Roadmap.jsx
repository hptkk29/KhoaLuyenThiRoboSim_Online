/* Section 5 — Roadmap: 18 buổi, 3 chặng */
import roadmap from '../data/roadmap';

const stageColors = {
  green: { bg: '#d1fae5', border: '#10b981', text: '#065f46' },
  yellow: { bg: '#fef9c3', border: '#f59e0b', text: '#78350f' },
  red: { bg: '#fee2e2', border: '#ef4444', text: '#991b1b' },
};

export default function Roadmap() {
  return (
    <section className="lp-roadmap section" id="roadmap" aria-labelledby="roadmap-heading">
      <div className="container">
        {/* Tiêu đề */}
        <h2 id="roadmap-heading" className="section-title text-center">
          18 BUỔI — 3 CHẶNG —{' '}
          <span className="gradient-text">1 ĐÍCH ĐẾN</span>
        </h2>
        <p className="section-subtitle text-center">
          Lộ trình con đi từ "ôn nền" đến "tối ưu đề thi vòng loại RBT2026"<br />
          Không học vu vơ. Không nhảy cóc. Không bỏ sót.
        </p>

        {/* 3 chặng */}
        <div className="lp-roadmap__stages" role="list">
          {roadmap.map((stage) => {
            const colors = stageColors[stage.colorKey];
            return (
              <article
                key={stage.id}
                className="lp-roadmap__stage"
                style={{ borderColor: colors.border, backgroundColor: colors.bg }}
                role="listitem"
                aria-label={stage.title}
              >
                {/* Header chặng */}
                <div className="lp-roadmap__stage-header">
                  <span className="lp-roadmap__stage-dot" aria-hidden="true">{stage.dot}</span>
                  <div>
                    <div
                      className="lp-roadmap__stage-sessions"
                      style={{ color: colors.text }}
                    >
                      {stage.sessions}
                    </div>
                    <h3
                      className="lp-roadmap__stage-title"
                      style={{ color: colors.text }}
                    >
                      {stage.title}
                    </h3>
                  </div>
                </div>

                {/* Nội dung */}
                <p className="lp-roadmap__stage-intro">{stage.intro}</p>
                <ul className="lp-roadmap__stage-points" role="list">
                  {stage.points.map((point, i) => (
                    <li key={i} role="listitem">
                      <span className="lp-roadmap__point-check" aria-hidden="true">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
                <p
                  className="lp-roadmap__stage-summary"
                  style={{ color: colors.text }}
                >
                  {stage.summary}
                </p>
              </article>
            );
          })}
        </div>

        {/* Đoạn chốt */}
        <div className="lp-roadmap__conclusion">
          <p>
            Sau 18 buổi, con không chỉ "biết đề" —<br />
            con <strong>CÁCH TỐI ƯU</strong>. Biết <strong>MẸO</strong>. <strong>PHẢN XẠ</strong> nhanh hơn.
          </p>
          <p>
            Đó là khác biệt giữa "con học cho biết"<br />
            và <strong>"con học để PASS vòng loại RBT2026"</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
