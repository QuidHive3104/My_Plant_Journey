const express = require('express');
const cors = require('cors');
require('dotenv').config();
const supabase = require('./supabaseClient');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Health check route
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Plant Doctor Backend API is running!' });
});

// GET /api/plants - Fetch all plants for the E-Garden / Dashboard
app.get('/api/plants', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('plants')
      .select('*');

    if (error) {
      return res.status(400).json({ success: false, error: error.message });
    }

    res.status(200).json({ success: true, data });
  } catch (err) {
    console.error('Server error in GET /api/plants:', err.message);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

// POST /api/plants - Add a new plant record
app.post('/api/plants', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('plants')
      .insert([req.body])
      .select();

    if (error) {
      return res.status(400).json({ success: false, error: error.message });
    }

    res.status(201).json({ success: true, data });
  } catch (err) {
    console.error('Server error in POST /api/plants:', err.message);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

// POST /api/care-log - Log a watering or care activity
app.post('/api/care-log', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('care_logs')
      .insert([req.body])
      .select();

    if (error) {
      return res.status(400).json({ success: false, error: error.message });
    }

    res.status(201).json({ success: true, data });
  } catch (err) {
    console.error('Server error in POST /api/care-log:', err.message);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});