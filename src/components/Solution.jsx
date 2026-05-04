/* Section 3 — Solution: Lý do chọn Khoá Luyện Thi RoboSim */

const usps = [
  {
    icon: '⚙️',
    title: 'HỌC MẸO',
    desc: 'Không học mò mẫm',
  },
  {
    icon: '🎬',
    title: 'HỌC VIDEO',
    desc: 'Tự xem, tự nhớ, tự làm lại',
  },
  {
    icon: '🏆',
    title: 'HỌC ĐỂ PASS',
    desc: 'Không học cho có',
  },
];

const compareRows = [
  {
    feature: 'Người hướng dẫn',
    free: 'Tự mò trên Youtube — không có thầy chỉ',
    course: 'Giảng viên chỉ MẸO + TRICK chuyên môn',
  },
  {
    feature: 'Kết quả',
    free: 'Cùng cách làm như đa số → cùng kết quả như đa số',
    course: 'Cách làm khác đa số → kết quả khác đa số',
  },
  {
    feature: 'Vị trí thi',
    free: 'Đứng chung vạch với hàng nghìn bạn khác',
    course: 'Vượt lên trước — vào nhóm TOP đi tiếp',
  },
  {
    feature: 'Kết quả thi',
    free: 'BTC cắt top — đa số rơi vào nhóm BỊ LOẠI',
    course: 'PASS vòng loại — bước vào sân chơi khu vực',
  },
];

export default function Solution() {
  return (
    <section className="lp-solution section" id="solution" aria-labelledby="solution-heading">
      <div className="container">
        {/* Tiêu đề */}
        <h2 id="solution-heading" className="section-title text-center">
          ĐÂY LÀ LÝ DO PHỤ HUYNH TINH Ý<br />
          <span className="gradient-text">CHỌN KHOÁ LUYỆN THI ROBOSIM CHO CON</span>
        </h2>
        <p className="section-subtitle text-center">
          Bố mẹ không cần biết kỹ thuật.<br />
          Chỉ cần biết: con đang ở đâu — và sau khoá học, con sẽ ở đâu.
        </p>

        {/* Block nội dung + ảnh */}
        <div className="lp-solution__grid">
          {/* Cột chữ */}
          <div className="lp-solution__content">
            <h3 className="lp-solution__sub-heading">
              🤖 Khoá Luyện Thi không chỉ giải đề. Khoá Luyện Thi <em>GIẢI TỐI ƯU</em>.
            </h3>
            <p className="lp-solution__context">
              Cùng 1 đề thi vòng loại RBT2026. Cùng 180 phút. Cùng phần mềm RoboSim.<br />
              Khác biệt nằm ở <strong>4 điều — chỉ giảng viên chuyên môn mới có:</strong>
            </p>

            <ul className="lp-solution__points" role="list">
              <li>
                <span className="lp-solution__point-icon" aria-hidden="true">⚙️</span>
                <div>
                  <strong>CÁCH DI CHUYỂN robot NHANH nhất, CHÍNH XÁC nhất.</strong>
                  <span> (Mỗi giây tiết kiệm = thêm 1 điểm có thể ăn được.)</span>
                </div>
              </li>
              <li>
                <span className="lp-solution__point-icon" aria-hidden="true">🎯</span>
                <div>
                  <strong>TRICK + MẸO không có trên Youtube — không có ở khoá free.</strong>
                  <span> (Đây là kỹ thuật giảng viên tích luỹ qua nhiều mùa thi.)</span>
                </div>
              </li>
              <li>
                <span className="lp-solution__point-icon" aria-hidden="true">📋</span>
                <div>
                  <strong>HƯỚNG DẪN từng bước trong video — con xem 1 lần là làm được.</strong>
                  <span> (Không cần bố mẹ kèm. Không cần thầy cô đứng cạnh.)</span>
                </div>
              </li>
              <li>
                <span className="lp-solution__point-icon" aria-hidden="true">⏱️</span>
                <div>
                  <strong>RÈN PHẢN XẠ trong RoboSim —</strong>
                  <span> đến phòng thi 180 phút, con chỉ cần LẶP LẠI thao tác đã quen tay.</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Cột ảnh */}
          <div className="lp-solution__visual">
            <img
              src="/image/sabanrobosim.jpg"
              alt="Sa bàn RoboSim — giao diện phần mềm thi vòng loại RBT2026"
              className="lp-solution__img"
              loading="lazy"
              width="520"
              height="400"
            />
          </div>
        </div>

        {/* Bảng so sánh */}
        <div className="lp-solution__compare-title">
          <h3>📊 Khác biệt giữa "tự luyện free" và "học khoá luyện thi":</h3>
        </div>
        <div className="compare-table-wrap">
          <table className="compare-table" role="table" aria-label="So sánh học free và học khoá luyện thi">
            <thead>
              <tr>
                <th scope="col">Tiêu chí</th>
                <th scope="col" className="th-r1">❌ HỌC FREE</th>
                <th scope="col" className="th-r2">✅ HỌC KHOÁ LUYỆN THI</th>
              </tr>
            </thead>
            <tbody>
              {compareRows.map((row, i) => (
                <tr key={i}>
                  <td>{row.feature}</td>
                  <td>{row.free}</td>
                  <td>{row.course}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Đoạn chốt */}
        <div className="lp-solution__summary">
          <p>Nói gọn:</p>
          <p>Học free → con như mọi người → <strong>bị loại cùng mọi người</strong>.</p>
          <p>Học khoá → con khác mọi người → <strong>vượt qua mọi người</strong>.</p>
        </div>

        {/* 3 USP icons */}
        <div className="usp-grid" role="list">
          {usps.map((usp) => (
            <div key={usp.title} className="usp-card" role="listitem">
              <span className="usp-icon" aria-hidden="true">{usp.icon}</span>
              <div className="usp-title">{usp.title}</div>
              <div className="usp-desc">{usp.desc}</div>
            </div>
          ))}
        </div>

        {/* CTA mềm */}
        <p className="lp-solution__soft-cta">
          👉 Con bố mẹ ở bảng nào?{' '}
          <a href="#courses" aria-label="Xem chi tiết khoá học R1 và R2">
            Xem chi tiết khoá học bên dưới ↓
          </a>
        </p>
      </div>
    </section>
  );
}
