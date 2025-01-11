
export function timeAgo(date) {
  const now = new Date();
  const inputDate = new Date(date);

  // Check if the input date is today
  if (inputDate >= now.setHours(0, 0, 0, 0)) {
    return 'Today';
  }

  const seconds = Math.floor((now - inputDate) / 1000);
  let interval = Math.floor(seconds / 31536000);
  if (interval === 1) return interval + ' year ago';
  if (interval > 1) return interval + ' years ago';
  interval = Math.floor(seconds / 2592000);
  if (interval === 1) return interval + ' month ago';
  if (interval > 1) return interval + ' months ago';
  interval = Math.floor(seconds / 86400);
  if (interval === 1) return interval + ' day ago';
  if (interval > 1) return interval + ' days ago';

  // Return "Today" for any time less than a day ago
  return 'Today';
}

window.getTimeAgo = (ts) => timeAgo(new Date(ts));
