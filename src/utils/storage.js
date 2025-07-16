export function saveShortLink(code, data) {
  localStorage.setItem(`url_${code}`, JSON.stringify(data));
}

export function getShortLink(code) {
  const raw = localStorage.getItem(`url_${code}`);
  return raw ? JSON.parse(raw) : null;
}

export function getAllShortLinks() {
  return Object.entries(localStorage)
    .filter(([key]) => key.startsWith('url_'))
    .map(([key, value]) => ({ shortcode: key.replace('url_', ''), ...JSON.parse(value) }));
}
