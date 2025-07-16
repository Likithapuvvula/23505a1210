export function getExpiryTimestamp(minutes = 30) {
  return Date.now() + minutes * 60 * 1000;
}

export function isExpired(timestamp) {
  return Date.now() > timestamp;
}
