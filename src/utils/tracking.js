/**
 * Gửi event tracking khi click nút Đăng ký.
 * Trả về URL SataWorld kèm UTM theo eventName.
 */
export function trackAndRedirect(courseLevel, eventName) {
  // Gửi event lên Google Analytics nếu có
  if (window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'CTA',
      event_label: courseLevel,
    });
  }
  // Gửi event lên Facebook Pixel nếu có
  if (window.fbq) {
    window.fbq('track', 'Lead', { content_name: courseLevel });
  }

  // Build URL SataWorld + UTM
  const slug = courseLevel === 'R1'
    ? 'robotics/khoa-hoc/full-de-luyen-thi-vong-loai-robosim-hau-can-thong-minh-bang-r1-cuoc-thi-sang-tao-robotics-2026'
    : 'robotics/khoa-hoc/full-de-luyen-thi-vong-loai-robosim-hau-can-thong-minh-bang-r2-cuoc-thi-sang-tao-robotics-2026';
  const url = `https://sataworld.vn/${slug}?utm_source=luyenthirobosim&utm_medium=${eventName}&utm_campaign=rbt2026`;
  window.open(url, '_blank', 'noopener,noreferrer');
}
