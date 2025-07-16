export function logEvent(type, payload) {
  const logs = JSON.parse(localStorage.getItem('logs') || '[]');
  logs.push({ type, payload, timestamp: Date.now() });
  localStorage.setItem('logs', JSON.stringify(logs));
}
