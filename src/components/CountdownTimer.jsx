/* Component đếm ngược tái sử dụng — hiển thị DD:HH:MM:SS */

export default function CountdownTimer({ timeLeft, className = '' }) {
  const pad = (n) => String(n).padStart(2, '0');

  if (timeLeft.expired) {
    return <span className={`lp-countdown ${className}`}>Đã hết hạn</span>;
  }

  return (
    <span className={`lp-countdown ${className}`}>
      <span className="lp-countdown__unit">
        <strong key={pad(timeLeft.days)} className="lp-cd-tick">{pad(timeLeft.days)}</strong>
        <small>ngày</small>
      </span>
      <span className="lp-countdown__sep">:</span>
      <span className="lp-countdown__unit">
        <strong key={pad(timeLeft.hours)} className="lp-cd-tick">{pad(timeLeft.hours)}</strong>
        <small>giờ</small>
      </span>
      <span className="lp-countdown__sep">:</span>
      <span className="lp-countdown__unit">
        <strong key={pad(timeLeft.minutes)} className="lp-cd-tick">{pad(timeLeft.minutes)}</strong>
        <small>phút</small>
      </span>
      <span className="lp-countdown__sep">:</span>
      <span className="lp-countdown__unit">
        <strong key={pad(timeLeft.seconds)} className="lp-cd-tick">{pad(timeLeft.seconds)}</strong>
        <small>giây</small>
      </span>
    </span>
  );
}
