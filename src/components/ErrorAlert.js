import React from 'react';
import { Alert } from '@mui/material';

export default function ErrorAlert({ message }) {
  return (
    <Alert severity="error" sx={{ mb: 2 }}>
      {message}
    </Alert>
  );
}
