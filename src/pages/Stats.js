import React from 'react';
import URLCard from '../components/URLCard';
import { Container, Typography } from '@mui/material';
import './Stats.css';

export default function Stats() {
  const allLinks = Object.entries(localStorage)
    .filter(([key]) => key.startsWith('url_'))
    .map(([key, value]) => ({ shortcode: key.replace('url_', ''), ...JSON.parse(value) }));

  return (
    <Container>
      <Typography variant="h4" gutterBottom>URL Statistics</Typography>
      {allLinks.length === 0 ? (
        <Typography>No links found.</Typography>
      ) : (
        allLinks.map(link => <URLCard key={link.shortcode} data={link} />)
      )}
    </Container>
  );
}
