# 🚀 Redis Caching Optimization on Fake API

This project demonstrates how integrating **Redis** caching into a fake REST API can dramatically improve performance. The API serves **thousands of user records**, and by caching the results, the response time was reduced from **~200ms to just 6ms**.

## 🔧 Tech Stack

- **Node.js / Express** – Backend framework
- **Redis** – In-memory key-value store for caching
- **Fake API (Mock Data)** – Simulates thousands of users
- **Postman / Thunder Client** – API testing

## ⚙️ Features

- ✅ Fetches user data from a mock database
- ✅ Implements Redis caching for GET requests
- ✅ Automatically invalidates cache on data update (optional/if applicable)
- ✅ Significant speedup: 200ms → 6ms

## 🚦 How It Works

1. API receives a request for user data.
2. Redis is checked for a cached response.
3. If cache hit ✅ → Serve instantly from Redis (6ms).
4. If cache miss ❌ → Fetch from DB, store in Redis, and serve (200ms).

## 📊 Performance Before & After

| Operation     | Without Redis | With Redis |
|---------------|---------------|-------------|
| GET /users    | ~200ms        | ~6ms        |

## 📁 Project Structure


## 📦 Setup & Run

```bash
git clone https://github.com/AnshDwivedi03/Redis_Backend.git
cd Redis_Backend
npm install
node index.js


