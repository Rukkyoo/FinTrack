# Personal Finance Tracker (Frontend)

This is the frontend application for a personal finance and expense tracking platform. It allows users to track income and expenses, manage categories, and visualize financial activity through a modern, dashboard-driven interface.

The application is built with **Next.js** and **TypeScript** and consumes a REST API secured with token-based authentication.

---

## Features - Coming soon

* User registration and login
* JWT-based authentication
* Protected routes and authenticated sessions
* Dashboard overview of income, expenses, and balance
* Create, update, and delete transactions
* Filter transactions by category and type
* Manage income and expense categories
* Financial insights with charts and summaries
* Multi-currency support

---

## Pages / Routes

* `/landing` – Landing page
* `/authentication` – User login and registration
* `/dashboard` – Financial overview


---

## Tech Stack

* Next.js (App Router)
* TypeScript
* Tailwind CSS
* Axios
* SWR for data fetching
* Chart.js for data visualization

---

## API Integration

The frontend communicates with a FastAPI backend.

Base API URL:

```
https://api.siakpere.xyz
```

Authentication is handled using bearer tokens. Protected requests must include:

```
Authorization: Bearer <access_token>
```

---


## Goal

The goal of this project is to provide a simple, scalable, and user-friendly interface for managing personal finances, helping users understand spending patterns and make informed financial decisions.

