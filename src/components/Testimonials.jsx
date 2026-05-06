/* Section — Phụ huynh và học sinh nói gì */
import { useState } from 'react';
import MobileCarousel from './MobileCarousel';

const items = [
  {
    id: 't1',
    initials: 'NA',
    name: 'Anh Ngọc Anh',
    role: 'Phụ huynh bạn Duy Tùng · Đà Nẵng',
    quote:
      '"Con học 3 tuần, từ chỗ không biết bắt đầu từ đâu đến khi thi thử đạt 85% điểm. Điều tôi thích nhất là AI chấm bài ngay — tôi biết chắc con hiểu bài trước khi học tiếp, khác hoàn toàn so với xem YouTube."',
    videoId: 'anInoYFGrF0',
    videoUrl: 'https://youtu.be/anInoYFGrF0',
    avatarBg: '#5B2D8E',
  },
  {
    id: 't2',
    initials: 'TS',
    name: 'Anh Trường Sơn',
    role: 'Phụ huynh bạn Minh Châu · Đà Nẵng',
    quote:
      '"Ban đầu lo con học online không hiệu quả. Nhưng 27.000 đồng mỗi buổi — rẻ hơn cả nửa cốc trà sữa — mà con tiến bộ rõ rệt sau 2 tuần. Con học hào hứng và làm được bài tập thực hành rất tốt."',
    videoId: 'bqB2c7AlSfE',
    videoUrl: 'https://youtu.be/bqB2c7AlSfE',
    avatarBg: '#7C3AED',
  },
  {
    id: 't3',
    initials: 'MT',
    name: 'Chị Mỹ Trang',
    role: 'Phụ huynh bạn Gia Hân · Đà Nẵng',
    quote:
      '"Con thi Robotics năm ngoái không vào được vòng chung kết vì không có chiến lược. Năm nay học khóa này, con tự làm được bài tập và hiểu rõ cách sắp xếp thứ tự nhiệm vụ. Tự tin hơn hẳn khi bước vào phòng thi!"',
    videoId: '9MJFC4v8cbU',
    videoUrl: 'https://youtu.be/9MJFC4v8cbU',
    avatarBg: '#3D1A6E',
  },
];

function TestiCard({ item, onVideoClick }) {
  return (
    <article className="lp-testi__card" aria-label={`Đánh giá từ ${item.name}`}>
      <div className="lp-testi__stars" aria-label="5 sao">★★★★★</div>

      <p className="lp-testi__quote">{item.quote}</p>

      <div className="lp-testi__author">
        <div
          className="lp-testi__avatar"
          style={{ background: item.avatarBg }}
          aria-hidden="true"
        >
          {item.initials}
        </div>
        <div>
          <div className="lp-testi__name">{item.name}</div>
          <div className="lp-testi__role">{item.role}</div>
        </div>
      </div>

      <a
        href={item.videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="lp-testi__video"
        aria-label={`Xem video cảm nhận của ${item.name} trên YouTube`}
        onClick={onVideoClick}
      >
        <img
          src={`https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`}
          alt={`Video cảm nhận của ${item.name}`}
          className="lp-testi__thumb"
          loading="lazy"
          width="480"
          height="360"
        />
        <div className="lp-testi__play" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        <span className="lp-testi__video-caption">Bấm để xem</span>
      </a>
    </article>
  );
}

export default function Testimonials() {
  const [videoClicked, setVideoClicked] = useState(false);
  const handleVideoClick = () => setVideoClicked(true);

  return (
    <section className="lp-testi" id="testimonials" aria-labelledby="testi-heading">
      <div className="container">
        <div className="lp-testi__badge" aria-hidden="true">
          <span className="lp-testi__badge-dot" />
          PHỤ HUYNH VÀ HỌC SINH NÓI GÌ
        </div>

        <h2 id="testi-heading" className="lp-testi__heading">
          Hàng trăm học sinh đã tham gia khóa học<br />
          <span>và hào hứng làm được bài tập thực tế</span>
        </h2>

        <p className="lp-testi__sub">
          Cảm nhận thực tế từ phụ huynh và học sinh đã trải qua hành trình luyện thi cùng Sata Robo
        </p>

        {/* Desktop: 3-col grid */}
        <div className="lp-testi__grid">
          {items.map((item) => (
            <TestiCard key={item.id} item={item} onVideoClick={handleVideoClick} />
          ))}
        </div>

        {/* Mobile: swipe carousel — dừng auto khi video bị bấm */}
        <div className="lp-testi__carousel">
          <MobileCarousel autoInterval={4500} accentColor="#9B6DD4" isPaused={videoClicked}>
            {items.map((item) => (
              <TestiCard key={item.id} item={item} onVideoClick={handleVideoClick} />
            ))}
          </MobileCarousel>
        </div>
      </div>
    </section>
  );
}
