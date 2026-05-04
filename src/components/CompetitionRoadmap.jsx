/* Sub-component: Roadmap 4 vòng thi — desktop ngang, mobile dọc */
import { competitionStages } from '../data/competition-roadmap';

// Map tên màu → class Tailwind tĩnh (không dùng template literal để JIT không bỏ sót)
const colorMap = {
  urgent: {
    border: 'border-urgent',
    text: 'text-urgent',
    ring: 'ring-4 ring-urgent shadow-xl shadow-urgent/30 animate-pulse',
  },
  warning: {
    border: 'border-warning',
    text: 'text-yellow-600',
    ring: '',
  },
  'r1-primary': {
    border: 'border-r1-primary',
    text: 'text-r1-primary',
    ring: '',
  },
  'r2-primary': {
    border: 'border-r2-primary',
    text: 'text-r2-primary',
    ring: '',
  },
};

function StageCard({ stage }) {
  const c = colorMap[stage.color];
  return (
    <div
      className={`flex flex-col items-center gap-1 border-2 rounded-xl p-4 bg-white text-center w-full md:min-w-[130px] md:w-auto ${c.border} ${stage.isCurrent ? c.ring : 'shadow-sm'}`}
    >
      <span className="text-3xl" aria-hidden="true">{stage.icon}</span>
      <span className={`text-xs font-extrabold uppercase tracking-wide ${c.text}`}>
        {stage.title}
      </span>
      {stage.subtitle && (
        <span className={`text-xs font-bold uppercase tracking-wider ${c.text} opacity-80`}>
          {stage.subtitle}
        </span>
      )}
      <span className="text-xs text-gray-500 font-medium mt-1">{stage.date}</span>
    </div>
  );
}

export default function CompetitionRoadmap() {
  return (
    <div className="w-full" role="list" aria-label="Hành trình 4 vòng thi RBT2026">

      {/* DESKTOP: 4 card nằm ngang + mũi tên → */}
      <div className="hidden md:flex items-stretch justify-center gap-2 w-full">
        {competitionStages.map((stage, i) => (
          <div key={stage.title} className="flex items-center gap-2" role="listitem">
            <StageCard stage={stage} />
            {i < competitionStages.length - 1 && (
              <span className="text-2xl font-bold text-gray-400 flex-shrink-0" aria-hidden="true">
                →
              </span>
            )}
          </div>
        ))}
      </div>

      {/* MOBILE: 4 card xếp dọc + mũi tên ↓ */}
      <div className="flex md:hidden flex-col items-center gap-2 w-full">
        {competitionStages.map((stage, i) => (
          <div key={stage.title} className="flex flex-col items-center gap-2 w-full" role="listitem">
            <StageCard stage={stage} />
            {i < competitionStages.length - 1 && (
              <span className="text-xl font-bold text-gray-400" aria-hidden="true">↓</span>
            )}
          </div>
        ))}
      </div>

    </div>
  );
}
