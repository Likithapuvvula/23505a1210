/*
import React, { useState } from 'react';
import URLInputRow from '../components/URLInputRow';
import URLCard from '../components/URLCard';
import ErrorAlert from '../components/ErrorAlert';
import { isValidUrl } from '../utils/validateUrl';
import { generateShortcode } from '../utils/generateShortcode';
import { getExpiryTimestamp, isExpired } from '../utils/timeUtils';
import { saveShortLink } from '../utils/storage';
import { logEvent } from '../utils/logger';
import { Container, Button, Typography } from '@mui/material';
import './Home.css';

export default function Home() {
  const [rows, setRows] = useState(
    Array(5).fill({ longURL: '', shortcode: '', validity: '' })
  );
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  const handleChange = (index, field, value) => {
    const updated = [...rows];
    updated[index][field] = value;
    setRows(updated);
  };

  const handleSubmit = () => {
    const newResults = [];
    for (let i = 0; i < rows.length; i++) {
      const { longURL, shortcode, validity } = rows[i];
      if (!longURL) continue;
      if (!isValidUrl(longURL)) {
        setError(`Row ${i + 1}: Invalid URL`);
        return;
      }
      const code = shortcode || generateShortcode();
      const expiresAt = getExpiryTimestamp(validity ? parseInt(validity) : 30);
      const data = { longURL, shortcode: code, expiresAt, clickCount: 0 };
      saveShortLink(code, data);
      logEvent('Shorten', data);
      newResults.push(data);
    }
    setResults(newResults);
    setError('');
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Shorten Your URLs
      </Typography>

      {error && <ErrorAlert message={error} />}

      {rows.map((row, i) => (
        <URLInputRow key={i} index={i} values={row} onChange={handleChange} />
      ))}

      <Button
        className="submit-button"
        variant="contained"
        color="primary"
        onClick={handleSubmit}
      >
        Shorten
      </Button>

      {results.map((res, i) => (
        <URLCard key={i} data={res} />
      ))}
    </Container>
  );
}
*/
import React, { useState } from 'react';
import URLInputRow from '../components/URLInputRow';
import URLCard from '../components/URLCard';
import ErrorAlert from '../components/ErrorAlert';
import { isValidUrl } from '../utils/validateUrl';
import { generateShortcode } from '../utils/generateShortcode';
import { getExpiryTimestamp, isExpired } from '../utils/timeUtils';
import { saveShortLink } from '../utils/storage';
import { logEvent } from '../utils/logger';
import { Container, Button, Typography } from '@mui/material';
import './Home.css';

export default function Home() {
  const [rows, setRows] = useState(
    Array.from({ length: 5 }, () => ({ longURL: '', shortcode: '', validity: '' }))
  );
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  const handleChange = (index, field, value) => {
    const updated = [...rows];
    updated[index][field] = value;
    setRows(updated);
  };

  const handleSubmit = () => {
    const newResults = [];
    const usedCodes = new Set();

    for (let i = 0; i < rows.length; i++) {
      const { longURL, shortcode, validity } = rows[i];
      if (!longURL.trim()) continue;

      if (!isValidUrl(longURL)) {
        setError(`Row ${i + 1}: Invalid URL`);
        return;
      }

      let code = shortcode.trim() || generateShortcode();
      if (usedCodes.has(code)) {
        setError(`Row ${i + 1}: Duplicate shortcode "${code}"`);
        return;
      }

      usedCodes.add(code);
      const expiresAt = getExpiryTimestamp(validity ? parseInt(validity) : 30);
      const data = { longURL, shortcode: code, expiresAt, clickCount: 0 };
      saveShortLink(code, data);
      logEvent('Shorten', data);
      newResults.push(data);
    }

    setResults(newResults);
    setError('');
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Shorten Your URLs
      </Typography>

      {error && <ErrorAlert message={error} />}

      {rows.map((row, i) => (
        <URLInputRow key={i} index={i} values={row} onChange={handleChange} />
      ))}

      <Button
        className="submit-button"
        variant="contained"
        color="primary"
        onClick={handleSubmit}
      >
        Shorten
      </Button>

      {results.map((res, i) => (
        <URLCard key={i} data={res} />
      ))}
    </Container>
  );
}
