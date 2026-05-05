/* Section sau Hero — Tầm quan trọng của cuộc thi Sáng tạo Robotics 2026 */

const CARDS = [
  {
    icon: '🏆',
    title: 'Giải thưởng lớn',
    body: 'Hàng chục triệu đồng và bằng khen cấp Trung ương Đoàn cho các đội xuất sắc nhất',
  },
  {
    icon: '📋',
    title: 'Ghi nhận trong hồ sơ học tập',
    body: 'Thành tích được ghi vào học bạ và hồ sơ xét tuyển đại học – lợi thế cạnh tranh rõ rệt',
  },
  {
    icon: '🌍',
    title: 'Sân chơi quốc tế',
    body: 'Cơ hội đại diện Việt Nam tham dự WRC – World Robot Championship toàn cầu',
  },
  {
    icon: '🧠',
    title: 'Kỹ năng thế kỷ 21',
    body: 'Rèn tư duy logic, kỹ năng lập trình và giải quyết vấn đề – nền tảng STEM vững chắc',
  },
  {
    icon: '🤖',
    title: 'Thi trực tuyến qua RoboSim',
    body: 'Vòng loại thi qua phần mềm RoboSim – học sinh luyện bài bản sẽ có lợi thế vượt trội',
  },
  {
    icon: '⏰',
    title: 'Hạn đăng ký 19/07/2026',
    body: 'Cần ít nhất 4–6 tuần chuẩn bị – bắt đầu học ngay hôm nay để không bị động',
  },
];

export default function ContestInfo() {
  return (
    <section className="lp-contest section" id="contest-info" aria-labelledby="contest-heading">
      <div className="container">
        {/* Badge */}
        <div className="text-center">
          <span className="lp-contest__badge">🏆 Tầm quan trọng của cuộc thi</span>
        </div>

        {/* Tiêu đề */}
        <h2 id="contest-heading" className="lp-contest__title text-center">
          Cuộc thi Sáng tạo Robotics 2026
          <br />
          <span className="lp-contest__title-accent">Cơ hội vàng không thể bỏ lỡ</span>
        </h2>

        <p className="lp-contest__subtitle text-center">
          Do Trung ương Đoàn TNCS Hồ Chí Minh tổ chức — uy tín quốc gia, tầm vóc quốc tế
        </p>

        {/* 6 cards */}
        <div className="lp-contest__grid">
          {CARDS.map((card) => (
            <article key={card.title} className="lp-contest__card">
              <span className="lp-contest__card-icon" aria-hidden="true">{card.icon}</span>
              <h3 className="lp-contest__card-title">{card.title}</h3>
              <p className="lp-contest__card-body">{card.body}</p>
            </article>
          ))}
        </div>

        {/* Callout highlight */}
        <div className="lp-contest__callout">
          <p>
            <strong>🎯 Vòng loại thi trực tuyến qua phần mềm RoboSim.</strong>
            <br />
            Học sinh nào luyện tập bài bản, đúng lộ trình sẽ có lợi thế vượt trội so với các
            đối thủ chưa được chuẩn bị kỹ càng.
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center" style={{ marginTop: '32px' }}>
          <a
            href="https://drive.google.com/drive/folders/12DTFji_NWDg_i3d1SGgjKKp8vxjF1seL?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="lp-contest__cta-btn"
          >
            📋 Xem thể lệ cuộc thi Sáng tạo Robotics 2026 đầy đủ →
          </a>
        </div>
      </div>

      <style>{`
        .lp-contest {
          background: linear-gradient(160deg, #0f0529 0%, #1a0845 50%, #0a1535 100%);
          color: #fff;
        }

        .lp-contest__badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(155, 109, 212, 0.18);
          border: 1px solid rgba(155, 109, 212, 0.5);
          color: #c4a0f0;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: .6px;
          padding: 6px 16px;
          border-radius: 100px;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .lp-contest__title {
          font-size: clamp(26px, 4.5vw, 42px);
          font-weight: 800;
          line-height: 1.25;
          color: #fff;
          margin-bottom: 12px;
        }

        .lp-contest__title-accent {
          background: linear-gradient(135deg, #c084fc 0%, #a855f7 50%, #7c3aed 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .lp-contest__subtitle {
          color: rgba(255, 255, 255, 0.65);
          font-size: 16px;
          max-width: 600px;
          margin: 0 auto 48px;
        }

        .lp-contest__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 40px;
        }

        .lp-contest__card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(155, 109, 212, 0.25);
          border-radius: 16px;
          padding: 28px 24px;
          text-align: center;
          transition: border-color .2s, background .2s;
        }
        .lp-contest__card:hover {
          border-color: rgba(155, 109, 212, 0.55);
          background: rgba(155, 109, 212, 0.1);
        }

        .lp-contest__card-icon {
          display: block;
          font-size: 32px;
          margin-bottom: 14px;
        }

        .lp-contest__card-title {
          font-size: 15px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 10px;
          line-height: 1.4;
        }

        .lp-contest__card-body {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.6;
        }

        .lp-contest__callout {
          background: rgba(247, 148, 29, 0.1);
          border: 1.5px solid rgba(247, 148, 29, 0.5);
          border-radius: 14px;
          padding: 24px 32px;
          text-align: center;
          max-width: 780px;
          margin: 0 auto;
        }
        .lp-contest__callout p {
          color: #fbbf24;
          font-size: 16px;
          line-height: 1.7;
        }
        .lp-contest__callout strong {
          color: #fde68a;
        }

        .lp-contest__cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 15px 32px;
          border-radius: 12px;
          border: 2px solid #2dd4bf;
          color: #2dd4bf;
          background: transparent;
          font-family: 'Be Vietnam Pro', sans-serif;
          font-weight: 700;
          font-size: 15px;
          text-decoration: none;
          transition: background .2s, color .2s, box-shadow .2s;
        }
        .lp-contest__cta-btn:hover {
          background: rgba(45, 212, 191, 0.12);
          box-shadow: 0 0 24px rgba(45, 212, 191, 0.25);
        }

        @media (max-width: 860px) {
          .lp-contest__grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
        }

        @media (max-width: 540px) {
          .lp-contest__grid {
            grid-template-columns: 1fr;
          }
          .lp-contest__callout {
            padding: 20px 20px;
          }
          .lp-contest__callout p {
            font-size: 14px;
          }
          .lp-contest__cta-btn {
            font-size: 13px;
            padding: 13px 22px;
          }
        }
      `}</style>
    </section>
  );
}
