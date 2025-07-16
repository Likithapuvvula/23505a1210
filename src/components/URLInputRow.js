import React from 'react';
import './URLInputRow.css';
import { TextField, Grid } from '@mui/material';

export default function URLInputRow({ index, values, onChange }) {
  return (
    <Grid container spacing={2} className="url-row">
      <Grid item xs={12} sm={6}>
        <TextField
          label="Long URL"
          fullWidth
          required
          value={values.longURL}
          onChange={(e) => onChange(index, 'longURL', e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <TextField
          label="Custom Shortcode (optional)"
          fullWidth
          value={values.shortcode}
          onChange={(e) => onChange(index, 'shortcode', e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <TextField
          label="Validity (min)"
          type="number"
          fullWidth
          value={values.validity}
          onChange={(e) => onChange(index, 'validity', e.target.value)}
        />
      </Grid>
    </Grid>
  );
}
