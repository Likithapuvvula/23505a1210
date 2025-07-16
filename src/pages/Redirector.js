import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getShortLink } from '../utils/storage';
import { isExpired } from '../utils/timeUtils';
import { logEvent } from '../utils/logger';
import './Redirector.css';

export default function Redirector() {
  const { shortcode } = useParams();
  const [error, setError] = useState('');

  useEffect(() => {
    const data = getShortLink(shortcode);
    if (!data) return setError('Short link not found.');
    if (isExpired(data.expiresAt)) return setError('This link has expired.');

    data.clickCount += 1;
    localStorage.setItem(`url_${shortcode}`, JSON.stringify(data));
    logEvent('Redirect', { shortcode, longURL: data.longURL });
    window.location.href = data.longURL;
  }, [shortcode]);

  return error ? <h2>{error}</h2> : <p>Redirecting...</p>;
}
