import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ 
    message: '🎉 Portfolio API Successfully Deployed on Render',
    status: 'online',
    student: 'Nick',
    course: 'COMP229',
    assignment: 'Assignment 4 - Testing & Deployment',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/projects', (req, res) => {
  res.json([
    { id: 1, title: 'Portfolio Website', description: 'Full-stack MERN application with React frontend' },
    { id: 2, title: 'E-commerce Platform', tech: 'React, Node.js, MongoDB, Stripe API' },
    { id: 3, title: 'Task Management App', description: 'Real-time collaboration tool' }
  ]);
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy', uptime: process.uptime() });
});

app.listen(PORT, () => {
  console.log(`✅ Portfolio API deployed and running on port ${PORT}`);
  console.log(`🌐 Live URL: https://nick-portfolio.onrender.com`);
});