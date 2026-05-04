/* Section 1 — Hero: hành trình thi đấu Robotics + 2 CTA đăng ký R1/R2 */
import CompetitionRoadmap from './CompetitionRoadmap';
import { trackAndRedirect } from '../utils/tracking';

export default function Hero() {
  return (
    <section
      className="w-full py-14 px-4 bg-white"
      id="hero"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">

        {/* 1. Badge urgency — gradient đỏ cam → vàng, animate-pulse */}
        <div
          className="bg-gradient-to-r from-urgent to-warning text-white text-sm font-bold px-5 py-2 rounded-full shadow-md animate-pulse"
          role="note"
        >
          🚨 Vòng loại RBT2026 đã mở — Cả nước đang luyện
        </div>

        {/* 2. H1 — câu tuyên bố chính */}
        <h1
          id="hero-heading"
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 text-center leading-tight"
        >
          Vòng loại Cuộc thi Sáng tạo Robotics 2026 đã mở.
        </h1>

        {/* 3. Sub dẫn vào roadmap */}
        <p className="text-base md:text-lg text-gray-600 text-center max-w-2xl">
          Đây là hành trình con bố mẹ có thể đi — nếu pass được vòng đầu tiên:
        </p>

        {/* 4. Roadmap 4 vòng thi */}
        <CompetitionRoadmap />

        {/* 5. Sub dưới roadmap — 3 câu chốt tâm lý */}
        <div className="text-center space-y-1 max-w-2xl">
          <p className="text-gray-600">Mọi đứa trẻ học Robotics đều mơ tới chung kết.</p>
          <p className="text-gray-600">
            Bố mẹ đồng hành cùng con chinh phục đấu trường robotics quốc tế.
          </p>
          <p className="font-semibold text-gray-800">
            Nhưng tất cả đều phải bắt đầu từ — vòng loại 26/07/2026.
          </p>
        </div>

        {/* 6. Box chốt mục đích — viền trái đỏ cam, nền vàng nhạt */}
        <div className="w-full max-w-2xl border-l-4 border-urgent bg-yellow-50 px-6 py-4 rounded-r-xl">
          <p className="text-gray-700 mb-2 text-base">
            Khoá Luyện Thi RoboSim của Sata Robo được tạo ra<br />
            cho 1 mục đích duy nhất:
          </p>
          <p className="text-lg md:text-xl font-extrabold text-urgent uppercase tracking-wide">
            Đưa con bố mẹ vào TOP. Pass vòng loại.
          </p>
        </div>

        {/* 7. 2 nút CTA — dọc mobile, ngang desktop */}
        <div className="flex flex-col md:flex-row gap-4 w-full max-w-2xl">
          <button
            onClick={() => trackAndRedirect('R1', 'hero_R1')}
            className="flex-1 bg-r1-primary text-white px-6 py-4 rounded-xl font-bold text-base md:text-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all"
            aria-label="Đăng ký Bảng R1 cho con học Tiểu học — 490.000đ"
          >
            🟦 Con học TIỂU HỌC → Đăng ký Bảng R1 (490.000đ)
          </button>
          <button
            onClick={() => trackAndRedirect('R2', 'hero_R2')}
            className="flex-1 bg-r2-primary text-white px-6 py-4 rounded-xl font-bold text-base md:text-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all"
            aria-label="Đăng ký Bảng R2 cho con học THCS — 490.000đ"
          >
            🟪 Con học THCS → Đăng ký Bảng R2 (490.000đ)
          </button>
        </div>

        {/* 8. Trust badge — 2 dòng nhỏ căn giữa */}
        <div className="flex flex-col items-center gap-1 text-sm text-gray-500">
          <span>⏰ Ưu đãi GIẢM đến 45% — chỉ trước ngày thi</span>
          <span>⭐ Học viên Sata Robo đã pass vòng loại các năm trước</span>
        </div>

      </div>
    </section>
  );
}
