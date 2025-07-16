import React from 'react';
import './URLCard.css';
import { Card, CardContent, Typography, Tooltip } from '@mui/material';

export default function URLCard({ data }) {
  const isExpired = Date.now() > data.expiresAt;

  return (
    <Card className={`url-card ${isExpired ? 'expired' : ''}`}>
      <CardContent>
        <Typography variant="subtitle2">Original URL:</Typography>
        <Typography variant="body2" color="textSecondary">{data.longURL}</Typography>

        <Typography variant="subtitle2" sx={{ mt: 1 }}>Short Link:</Typography>
        <Tooltip title="Click to copy">
          <Typography
            variant="body2"
            className="short-link"
            onClick={() => navigator.clipboard.writeText(window.location.origin + '/' + data.shortcode)}
          >
            {window.location.origin}/{data.shortcode}
          </Typography>
        </Tooltip>

        <Typography variant="body2" sx={{ mt: 1 }}>
          Clicks: {data.clickCount} | Expires: {new Date(data.expiresAt).toLocaleString()}
        </Typography>
      </CardContent>
    </Card>
  );
}
