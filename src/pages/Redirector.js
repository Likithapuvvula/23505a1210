import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Redirector.css';
export default function Redirector() {
  const { shortcode } = useParams();

  useEffect(() => {
    const data = localStorage.getItem(`url_${shortcode}`);
    if (data) {
      const parsed = JSON.parse(data);
      parsed.clickCount += 1;
      localStorage.setItem(`url_${shortcode}`, JSON.stringify(parsed));
      window.location.href = parsed.longURL;
    } else {
      alert('Invalid or expired link');
    }
  }, [shortcode]);

  return <p>Redirecting...</p>;
}
