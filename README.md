# PrivacyLens 🔍

A sophisticated privacy policy analysis tool that uses AI to evaluate website privacy policies and terms of service, providing comprehensive risk assessments and GDPR compliance scores.

## Features 🌟

- **AI-Powered Analysis**: Leverages LLM technology to analyze privacy policies and terms of service
- **Risk Assessment**: Evaluates 10 key privacy parameters including:
  - Account Control
  - Data Collection
  - Data Deletion
  - Data Sharing
  - Legal Rights
  - Privacy Controls
  - Security Measures
  - Terms Changes
  - Transparency
  - User Content Rights
- **GDPR Compliance**: Provides GDPR compliance scores and detailed observations
- **Real-time Processing**: Instant analysis through microservices architecture
- **Result Caching**: Efficient data persistence using PostgreSQL and Prisma ORM
- **Chrome Extension**: Seamless integration with browser for easy access

## Tech Stack 💻

- **Frontend**: React, TailwindCSS, Recharts
- **Backend**: 
  - Express.js (Main Server)
  - FastAPI (ML Processing)
- **Database**: PostgreSQL with Prisma ORM
- **AI Integration**: Large Language Model for policy analysis
- **Tools**: TypeScript, Vite

## Architecture 🏗️

- Microservices-based architecture with separate services for:
  - Web interface (React)
  - Main API server (Express)
  - ML processing service (FastAPI)
  - Database layer (PostgreSQL)

## Getting Started 🚀

1. Clone the repository
```bash
git clone https://github.com/yourusername/PrivacyLens.git
cd PrivacyLens
