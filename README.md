# 📈 Stock Price Alert Tracker

A backend application built with **Node.js** and **Express** that monitors stock prices and sends **email notifications** when user-defined target prices are reached. It periodically checks stock prices using scheduled jobs and supports easy alert management via REST APIs.

---

## 🚀 Features

- Create stock price alerts
- Automatically send email notifications when target prices are hit
- Periodic stock price monitoring using **cron jobs**
- REST API to manage alerts (Create, Read, Delete)
- Scalable backend design with **MongoDB**
- Future-ready for frontend integration (React/Angular)

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB (Mongoose)**
- **Nodemailer**
- **Node-cron**

---

## 📂 Project Structure

    stock-tracker/
    ├── config/
    │   └── default.json
    ├── controllers/
    │   └── stockController.js
    ├── jobs/
    │   └── stockMonitor.js
    ├── models/
    │   ├── User.js
    │   └── StockAlert.js
    ├── routes/
    │   └── api.js
    ├── services/
    │   ├── stockService.js
    │   └── emailService.js
    ├── utils/
    │   └── logger.js
    ├── .env
    ├── app.js
    ├── package.json
    └── README.md


---

## ⚡ Getting Started

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/stock-tracker.git
    cd stock-tracker
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables in `.env`**:
    ```plaintext
    PORT=3010
    MONGODB_URI=your_mongodb_connection_string
    EMAIL_USER=your_email@gmail.com
    EMAIL_PASS=your_email_password
    ```

4. **Start the server**:
    ```bash
    npm start
    ```

---

## 🎯 API Endpoints

| Method | Endpoint           | Description           |
|--------|--------------------|-----------------------|
| POST   | /api/alerts        | Create a new alert    |
| GET    | /api/alerts        | Get all alerts        |
| DELETE | /api/alerts/:id    | Delete an alert by ID |

### 📝 Example Request (POST /api/alerts)
    {
      "email": "bhaswanth0526@gmail.com",
      "symbol": "AAPL",
      "targetPrice": 180.50
    }


⏰ Cron Job Scheduler
    Periodically fetches stock prices
    Compares against user-defined target prices
    Triggers email alerts when conditions match

🌟 Future Plans
  Add authentication (login/signup)

  Build a frontend with React or Angular

  Add SMS notifications

  Support for real-time price streaming

📬 Contact
  Bhaswanth Polamarasetti 

  Email: bhaswanth0526@gmail.com

> “Never miss your stock's golden moment.”
