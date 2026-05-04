/* Section 1 — Hero: 2-col layout, linh vật bên phải */
import CompetitionRoadmap from './CompetitionRoadmap';
import { trackAndRedirect } from '../utils/tracking';

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="w-full overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #fff9f5 0%, #ffffff 45%, #f5f3ff 100%)' }}
    >
      {/* ── 2-col grid ── */}
      <div className="max-w-6xl mx-auto px-4 pt-10 pb-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

        {/* ── LEFT: nội dung chính ── */}
        <div className="flex flex-col gap-5">

          {/* Badge urgency */}
          <span
            className="inline-flex items-center gap-2 bg-gradient-to-r from-urgent to-warning text-white text-sm font-bold px-5 py-2 rounded-full shadow-md animate-pulse w-fit"
            role="note"
          >
            🚨 Vòng loại RBT2026 đã mở — Cả nước đang luyện
          </span>

          {/* H1 */}
          <h1
            id="hero-heading"
            className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"
          >
            Con bạn sẵn sàng<br />
            chinh phục{' '}
            <span
              className="inline-block"
              style={{
                background: 'linear-gradient(135deg, #F97316 0%, #7C3AED 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Robotics 2026?
            </span>
          </h1>

          {/* Sub */}
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-lg">
            Khoá Luyện Thi <strong>RoboSim</strong> của Sata Robo được tạo ra để{' '}
            <strong>đưa con vào TOP</strong> — pass vòng loại{' '}
            <strong className="text-urgent">26/07/2026</strong>.
          </p>

          {/* Purpose box */}
          <div className="border-l-4 border-urgent bg-orange-50 px-5 py-4 rounded-r-2xl">
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1 font-semibold">
              Mục tiêu duy nhất của khoá học
            </p>
            <p className="text-xl font-extrabold text-urgent uppercase tracking-wide">
              Đưa con vào TOP. Pass vòng loại.
            </p>
          </div>

          {/* 2 CTA */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => trackAndRedirect('R1', 'hero_R1')}
              className="flex-1 text-white px-6 py-4 rounded-2xl font-bold text-base shadow-lg hover:scale-105 hover:shadow-xl transition-all"
              style={{ background: 'linear-gradient(135deg, #1d4ed8 0%, #2563EB 100%)' }}
              aria-label="Đăng ký Bảng R1 cho con học Tiểu học — 490.000đ"
            >
              🟦 Tiểu học → Bảng R1
              <span className="block text-sm font-normal opacity-80 mt-0.5">490.000đ</span>
            </button>
            <button
              onClick={() => trackAndRedirect('R2', 'hero_R2')}
              className="flex-1 text-white px-6 py-4 rounded-2xl font-bold text-base shadow-lg hover:scale-105 hover:shadow-xl transition-all"
              style={{ background: 'linear-gradient(135deg, #5b21b6 0%, #7C3AED 100%)' }}
              aria-label="Đăng ký Bảng R2 cho con học THCS — 490.000đ"
            >
              🟪 THCS → Bảng R2
              <span className="block text-sm font-normal opacity-80 mt-0.5">490.000đ</span>
            </button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-col gap-1.5 text-sm text-gray-500">
            <span>⏰ Ưu đãi GIẢM đến 45% — chỉ trước ngày thi</span>
            <span>⭐ Học viên Sata Robo đã pass vòng loại các năm trước</span>
          </div>
        </div>

        {/* ── RIGHT: linh vật ── */}
        <div className="relative flex items-end justify-center lg:justify-end min-h-[320px] lg:min-h-[480px]">

          {/* Glow hào quang */}
          <div
            className="absolute inset-0 rounded-full opacity-60 blur-3xl pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at 60% 60%, #ffd6a5 0%, #e9d5ff 60%, transparent 100%)',
            }}
          />

          {/* Mascot */}
          <img
            src="/image/LinhVat.png"
            alt="Linh vật Sata Robo"
            className="relative z-10 w-72 md:w-96 lg:w-full max-w-[420px] object-contain drop-shadow-2xl"
            style={{ filter: 'drop-shadow(0 20px 48px rgba(124,58,237,0.25))' }}
          />

          {/* Floating card — ngày thi */}
          <div
            className="absolute top-6 left-0 z-20 bg-white rounded-2xl shadow-xl border border-orange-100 px-4 py-3"
            style={{ animation: 'float 3.5s ease-in-out infinite' }}
          >
            <div className="text-xs text-gray-400 font-medium">📅 Vòng loại</div>
            <div className="text-base font-extrabold text-urgent">26/07/2026</div>
          </div>

          {/* Floating card — pass rate */}
          <div
            className="absolute bottom-16 right-0 z-20 bg-white rounded-2xl shadow-xl border border-purple-100 px-4 py-3"
            style={{ animation: 'float 4s ease-in-out infinite 0.8s' }}
          >
            <div className="text-xs text-gray-400 font-medium">🏆 Kết quả học viên</div>
            <div className="text-base font-extrabold text-r2-primary">Pass nhiều năm liên tiếp</div>
          </div>
        </div>
      </div>

      {/* ── Roadmap full-width ── */}
      <div className="max-w-6xl mx-auto px-4 pb-10">
        <p className="text-center text-sm text-gray-500 font-medium mb-5">
          Hành trình từ vòng loại đến chung kết thế giới — con bố mẹ có thể đi hết:
        </p>
        <CompetitionRoadmap />
        <p className="text-center font-semibold text-gray-700 mt-5 text-sm md:text-base">
          Mọi đứa trẻ đều mơ tới chung kết — nhưng tất cả đều bắt đầu từ{' '}
          <span className="text-urgent">vòng loại 26/07/2026.</span>
        </p>
      </div>
    </section>
  );
}
