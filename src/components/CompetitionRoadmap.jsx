/* Roadmap 4 vòng thi — desktop ngang, mobile dọc — inline styles */
import { competitionStages } from '../data/competition-roadmap';

const colorConfig = {
  urgent:      { hex: '#F97316', bg: '#FFF7ED', shadow: 'rgba(249,115,22,0.22)' },
  warning:     { hex: '#D97706', bg: '#FFFBEB', shadow: 'rgba(217,119,6,0.18)'  },
  'r1-primary':{ hex: '#2563EB', bg: '#EFF6FF', shadow: 'rgba(37,99,235,0.18)'  },
  'r2-primary':{ hex: '#7C3AED', bg: '#F5F3FF', shadow: 'rgba(124,58,237,0.18)' },
};

function StageCard({ stage }) {
  const c = colorConfig[stage.color];
  return (
    <div
      role="listitem"
      style={{
        flex: '1 1 0',
        minWidth: 130,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 6,
        background: stage.isCurrent
          ? `linear-gradient(145deg, ${c.bg}, white)`
          : '#fff',
        border: `2px solid ${c.hex}`,
        borderRadius: 16,
        padding: '18px 12px',
        textAlign: 'center',
        boxShadow: stage.isCurrent
          ? `0 6px 24px ${c.shadow}, 0 0 0 3px ${c.hex}33`
          : `0 2px 8px rgba(0,0,0,0.06)`,
        animation: stage.isCurrent ? 'pulse 2.5s ease-in-out infinite' : 'none',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Accent strip top */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 3,
        background: stage.isCurrent
          ? `linear-gradient(90deg, ${c.hex}, ${c.hex}88)`
          : 'transparent',
        borderRadius: '16px 16px 0 0',
      }} />

      <span style={{ fontSize: 32, lineHeight: 1 }} aria-hidden="true">{stage.icon}</span>

      <div>
        <div style={{
          fontSize: 11, fontWeight: 800, letterSpacing: 1,
          textTransform: 'uppercase', color: c.hex,
          lineHeight: 1.3,
        }}>
          {stage.title}
        </div>
        {stage.subtitle && (
          <div style={{
            fontSize: 10, fontWeight: 700, letterSpacing: 0.8,
            textTransform: 'uppercase', color: c.hex, opacity: 0.75,
          }}>
            {stage.subtitle}
          </div>
        )}
      </div>

      <div style={{
        fontSize: 11, color: '#6B7280', fontWeight: 600,
        background: '#f3f4f6', borderRadius: 8,
        padding: '3px 8px', marginTop: 2,
      }}>
        {stage.date}
      </div>

      {stage.isCurrent && (
        <div style={{
          fontSize: 9, fontWeight: 800, letterSpacing: 0.5,
          color: '#fff', background: c.hex,
          borderRadius: 100, padding: '2px 8px', textTransform: 'uppercase',
        }}>
          ĐÂY RỒI!
        </div>
      )}
    </div>
  );
}

const Arrow = ({ direction = 'right' }) => (
  <div style={{
    flexShrink: 0,
    color: '#D1D5DB',
    fontSize: direction === 'right' ? 22 : 18,
    fontWeight: 700,
    lineHeight: 1,
  }} aria-hidden="true">
    {direction === 'right' ? '→' : '↓'}
  </div>
);

export default function CompetitionRoadmap() {
  return (
    <div role="list" aria-label="Hành trình 4 vòng thi RBT2026">

      {/* DESKTOP: ngang */}
      <div style={{
        display: 'none',
        alignItems: 'stretch',
        justifyContent: 'center',
        gap: 10,
        width: '100%',
      }} className="roadmap-desktop">
        {competitionStages.map((stage, i) => (
          <div key={stage.title} style={{ display: 'flex', alignItems: 'center', gap: 10, flex: '1 1 0' }}>
            <StageCard stage={stage} />
            {i < competitionStages.length - 1 && <Arrow direction="right" />}
          </div>
        ))}
      </div>

      {/* MOBILE: dọc */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        width: '100%',
      }} className="roadmap-mobile">
        {competitionStages.map((stage, i) => (
          <div key={stage.title} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, width: '100%' }}>
            <StageCard stage={stage} />
            {i < competitionStages.length - 1 && <Arrow direction="down" />}
          </div>
        ))}
      </div>

      <style>{`
        @media (min-width: 768px) {
          .roadmap-desktop { display: flex !important; }
          .roadmap-mobile  { display: none  !important; }
        }
      `}</style>
    </div>
  );
}
