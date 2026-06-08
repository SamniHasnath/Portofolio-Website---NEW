const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
const sequelize = require('../config/db');
const Project = require('../models/Project');
const BlogPost = require('../models/BlogPost');

const projects = [
  {
    title: 'Movie Website', tags: ['REACT', 'TAILWIND', 'API'], emoji: '🎬',
    description: 'A high-performance movie database application with real-time search, category filtering, and detailed media pages using TMDB API.',
    githubUrl: '#', demoUrl: '#', order: 1,
  },
  {
    title: 'Sales Analysis Dashboard', tags: ['PYTHON', 'PANDAS', 'D3.JS'], emoji: '📊',
    description: 'Comprehensive data visualization platform for sales metrics, including regional performance charts and predictive analytics components.',
    githubUrl: '#', demoUrl: '#', order: 2,
  },
  {
    title: 'Authentication System', tags: ['NODE.JS', 'EXPRESS', 'JWT'], emoji: '🔐',
    description: 'Secure user management system featuring JWT-based auth, OAuth integration, and comprehensive account management features.',
    githubUrl: '#', demoUrl: '#', order: 3,
  },
  {
    title: 'Weather App', tags: ['REACT NATIVE', 'OPENWEATHER', 'UI/UX'], emoji: '⛅',
    description: 'Minimalist weather forecasting app with geolocation support, dynamic backgrounds based on weather, and 7-day detailed forecasts.',
    githubUrl: '#', demoUrl: '#', order: 4,
  },
  {
    title: 'E-Commerce Platform', tags: ['NEXT.JS', 'STRIPE', 'MONGODB'], emoji: '🛒',
    description: 'Full-featured online store with product management, cart system, Stripe payment integration, and an admin dashboard for order tracking.',
    githubUrl: '#', demoUrl: '#', order: 5,
  },
  {
    title: 'Chat Application', tags: ['SOCKET.IO', 'REACT', 'NODE.JS'], emoji: '💬',
    description: 'Real-time messaging app with private and group chats, typing indicators, online presence detection, and message history.',
    githubUrl: '#', demoUrl: '#', order: 6,
  },
  {
    title: 'Task Manager', tags: ['REACT', 'REDUX', 'FIREBASE'], emoji: '✅',
    description: 'Productivity app with drag-and-drop kanban boards, deadline reminders, team collaboration features, and cloud sync via Firebase.',
    githubUrl: '#', demoUrl: '#', order: 7,
  },
  {
    title: 'AI Image Generator', tags: ['PYTHON', 'OPENAI', 'FLASK'], emoji: '🎨',
    description: 'Web app that generates unique images from text prompts using the DALL-E API, with a gallery, download support, and prompt history.',
    githubUrl: '#', demoUrl: '#', order: 8,
  },
  {
    title: 'Portfolio CMS', tags: ['NEXT.JS', 'SANITY', 'TAILWIND'], emoji: '🗂️',
    description: 'Headless CMS-powered portfolio template where all content is managed through Sanity Studio — no code changes needed for updates.',
    githubUrl: '#', demoUrl: '#', order: 9,
  },
];

const posts = [
  {
    tag: 'REACT', tagColor: '#60a5fa', emoji: '⚛️',
    title: 'Getting Started with React & Tailwind CSS — A Practical Guide',
    excerpt: 'Learn how to set up a modern React project with Tailwind CSS from scratch. We cover project structure, component design patterns, and styling best practices.',
    date: 'Mar 15, 2025', readTime: '5 min read',
    bannerBg: 'linear-gradient(135deg, #1a2035, #0f1628)', href: '#',
  },
  {
    tag: 'DATA SCIENCE', tagColor: '#34d399', emoji: '📊',
    title: 'From Raw Data to Insights: My Data Science Workflow',
    excerpt: 'A walkthrough of the complete data science pipeline — data cleaning with Pandas, visualization with Matplotlib, and building a predictive model step by step.',
    date: 'Feb 20, 2025', readTime: '8 min read',
    bannerBg: 'linear-gradient(135deg, #0f2520, #091a14)', href: '#',
  },
  {
    tag: 'BACKEND', tagColor: '#a78bfa', emoji: '🔐',
    title: 'Building Secure REST APIs with Node.js and Express',
    excerpt: 'Best practices for designing and securing REST APIs — JWT authentication, input validation, rate limiting, and proper error handling patterns.',
    date: 'Jan 10, 2025', readTime: '6 min read',
    bannerBg: 'linear-gradient(135deg, #1e1535, #110c24)', href: '#',
  },
  {
    tag: 'DEVOPS', tagColor: '#fb923c', emoji: '🐳',
    title: 'Dockerizing a Full-Stack App — From Dev to Production',
    excerpt: 'Step-by-step guide to containerizing a Node + React application with Docker Compose, environment configs, and deploying to a VPS with Nginx.',
    date: 'Dec 5, 2024', readTime: '7 min read',
    bannerBg: 'linear-gradient(135deg, #2a1a08, #1a1005)', href: '#',
  },
  {
    tag: 'TYPESCRIPT', tagColor: '#38bdf8', emoji: '🔷',
    title: 'TypeScript Generics Explained With Real Examples',
    excerpt: 'Generics can feel abstract at first. This post breaks them down using practical patterns you will actually encounter in everyday TypeScript projects.',
    date: 'Nov 18, 2024', readTime: '6 min read',
    bannerBg: 'linear-gradient(135deg, #0d2030, #081520)', href: '#',
  },
  {
    tag: 'MACHINE LEARNING', tagColor: '#f472b6', emoji: '🤖',
    title: 'Training Your First Neural Network with PyTorch',
    excerpt: 'A beginner-friendly introduction to building and training a simple feedforward neural network using PyTorch, covering tensors, layers, and optimizers.',
    date: 'Oct 30, 2024', readTime: '10 min read',
    bannerBg: 'linear-gradient(135deg, #2a1020, #1a0a15)', href: '#',
  },
  {
    tag: 'GIT', tagColor: '#facc15', emoji: '🌿',
    title: 'Git Workflows That Actually Scale for Teams',
    excerpt: 'Comparing Git Flow, trunk-based development, and GitHub Flow — when to use each, how to enforce them with branch rules, and tips for clean commit history.',
    date: 'Sep 12, 2024', readTime: '5 min read',
    bannerBg: 'linear-gradient(135deg, #1a1a08, #101008)', href: '#',
  },
  {
    tag: 'DATABASES', tagColor: '#f97316', emoji: '🗄️',
    title: 'PostgreSQL vs MongoDB — Choosing the Right Database',
    excerpt: 'An honest comparison of relational and document databases with real benchmarks, schema design trade-offs, and guidance on which fits your use case.',
    date: 'Aug 22, 2024', readTime: '9 min read',
    bannerBg: 'linear-gradient(135deg, #1a1208, #100c05)', href: '#',
  },
  {
    tag: 'CAREER', tagColor: '#c084fc', emoji: '🚀',
    title: 'How I Landed My First Dev Job With No CS Degree',
    excerpt: 'The exact projects, learning path, and networking strategies I used to go from self-taught beginner to employed software developer in under a year.',
    date: 'Jul 4, 2024', readTime: '12 min read',
    bannerBg: 'linear-gradient(135deg, #1e1030, #12081e)', href: '#',
  },
];

async function seed() {
  await sequelize.authenticate();
  await sequelize.sync({ force: true }); // drops and recreates tables

  await Project.bulkCreate(projects);
  await BlogPost.bulkCreate(posts);

  console.log('✅ Seed complete — projects and blog posts inserted');
  process.exit(0);
}

seed().catch((err) => {
  console.error('❌ Seed failed:', err.message);
  process.exit(1);
});
