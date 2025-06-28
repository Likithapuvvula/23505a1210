import React from 'react';
import React from 'react';
import './URLCard.css';

export default function URLCard({ data }) {
  const handleClick = () => {
    // Redirect to the shortcode route (e.g., /abc123)
    window.location.href = `/${data.shortcode}`;
  };

  return (
    <div className="url-card" onClick={handleClick}>
      <p><strong>Shortcode:</strong> {data.shortcode}</p>
      <p><strong>Original URL:</strong> {data.longURL}</p>
      <p><strong>Clicks:</strong> {data.clickCount}</p>
    </div>
  );
}
