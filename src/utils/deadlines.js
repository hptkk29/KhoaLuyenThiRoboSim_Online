/**
 * Rolling deadline cho ưu đãi 490k.
 * Mốc trong tháng: 5, 10, 15, 20, 25
 * Sau ngày 25 → deadline = ngày 1 tháng sau
 * Hết ngày deadline → chuyển sang mốc kế tiếp (đếm tới 00:00 ngày sau ngày deadline)
 */
export function getNextDeadline() {
  const now = new Date();
  const day = now.getDate();
  const month = now.getMonth();
  const year = now.getFullYear();
  const milestones = [5, 10, 15, 20, 25];

  for (const m of milestones) {
    if (day <= m) {
      return new Date(year, month, m + 1, 0, 0, 0);
    }
  }
  // day > 25 → deadline = cuối ngày 1 tháng sau (00:00 ngày 2 tháng sau)
  return new Date(year, month + 1, 2, 0, 0, 0);
}

/**
 * Ngày diễn ra vòng loại RBT2026 — cố định 20/7 hằng năm.
 * Nếu đã qua 20/7 năm hiện tại → đếm tới 20/7 năm sau.
 */
export function getExamDate() {
  const now = new Date();
  const year = now.getFullYear();
  const examThisYear = new Date(year, 6, 20, 0, 0, 0); // tháng 7 = index 6
  return now > examThisYear
    ? new Date(year + 1, 6, 20, 0, 0, 0)
    : examThisYear;
}
