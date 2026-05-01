/* Section 2 — Pain: 3 sự thật về vòng loại RBT2026 */
import pains from '../data/pains';

export default function Pain() {
  return (
    <section className="lp-pain section section-alt" id="pain" aria-labelledby="pain-heading">
      <div className="container">
        {/* Tiêu đề */}
        <h2 id="pain-heading" className="section-title text-center">
          3 SỰ THẬT VỀ VÒNG LOẠI RBT2026 —<br />
          <span className="gradient-text">MÀ ÍT TRUNG TÂM DÁM NÓI VỚI BỐ MẸ</span>
        </h2>
        <p className="section-subtitle text-center">
          Bố mẹ đọc xong 3 sự thật này — sẽ hiểu vì sao
          "con học chăm, con luyện nhiều" <strong>KHÔNG còn là lợi thế</strong> nữa.
        </p>

        {/* 3 pain cards */}
        <div className="lp-pain__grid">
          {pains.map((pain, i) => (
            <article key={pain.id} className="lp-pain__card" aria-label={pain.label} data-num={i + 1}>
              <div className="lp-pain__card-label">
                <span aria-hidden="true">{pain.icon}</span>
                {pain.label}
              </div>
              <h3 className="lp-pain__card-title">{pain.title}</h3>
              <p className="lp-pain__card-body">{pain.body}</p>
            </article>
          ))}
        </div>

        {/* Câu chuyển */}
        <div className="lp-pain__pivot">
          <p className="lp-pain__pivot-question">
            Bố mẹ đọc đến đây — thấy đúng không?
          </p>

          {/* Reframe 3 lớp */}
          <div className="lp-pain__reframe">
            <p>Vấn đề <strong>KHÔNG PHẢI</strong> con không có đề.</p>
            <p>Vấn đề <strong>KHÔNG PHẢI</strong> con không luyện đủ.</p>
            <p>Vấn đề <strong>KHÔNG PHẢI</strong> con không cố gắng.</p>
          </div>

          <div className="lp-pain__core">
            <p>Vấn đề là cả nước đều có đề.</p>
            <p>Cả nước đều luyện free.</p>
            <p>Cả nước đều đứng <strong>CÙNG MỘT VẠCH</strong>.</p>
          </div>

          <p className="lp-pain__conclusion">
            BTC vòng loại không lấy "đứng cùng vạch".<br />
            BTC chỉ lấy <strong>NGƯỜI VƯỢT LÊN TRƯỚC</strong>.
          </p>

          <a
            href="#solution"
            className="lp-pain__scroll-cta"
            aria-label="Xem cách đưa con vượt lên trước"
          >
            👉 Mình có cách đưa con bố mẹ vượt lên trước ↓
          </a>
        </div>
      </div>
    </section>
  );
}
