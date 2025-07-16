# 🧰 DextUtils – Django-Powered Text Utility Web App

DextUtils is a **full-stack web application** built with **Django**, providing a simple yet functional platform for text manipulation tasks like converting case, removing extra spaces, character/word counting, and more.

This project includes both the **frontend UI** and **backend logic**, showcasing how Django handles form submissions, request handling, and dynamic HTML rendering through templates.

> 🛠️ A more robust, server-rendered sibling of my React-based [RextUtils](https://github.com/rahules24/rextutils) app.

---

## 🌐 Live Demo

Check it out in action:
👉 [DextUtils](https://dextutils.onrender.com/)
> ⚡ Live and running on Render.

---

<img width="1903" height="859" alt="image" src="https://github.com/user-attachments/assets/6711cadd-ee15-4a5c-b95e-b4534243a832" />


## 🛠️ Tech Stack

- **Backend Framework:** Django (Python)
- **Frontend:** HTML, CSS, Bootstrap
- **Templating Engine:** Django Templates
- **Deployment Ready:** Can be hosted via Heroku, Render, or self-hosted server

---

## 📦 Features

- 🔠 Convert text to **uppercase** or **lowercase**
- ✂️ Remove **extra spaces** from text
- 🔢 **Count words and characters**
- 📤 **Copy processed text** to clipboard (JS integration)
- 🌗 Theme toggle (dark/light mode UI with Bootstrap)
- 📑 Clean form handling with Django's POST requests

---

## 📁 Project Structure

```
dextutils/
├── textutils/              # Django app containing views, urls, templates
│   ├── templates/
│   │   └── index.html      # Main UI
│   ├── views.py            # Text processing logic
│   └── urls.py
├── dextutils/              # Django project config
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── manage.py
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/rahules24/dextutils.git
cd dextutils
```

### 2. Create a Virtual Environment & Activate

```bash
python -m venv venv
source venv/bin/activate    # On Windows use: venv\Scripts\activate
```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

### 4. Run the Development Server

```bash
python manage.py runserver
```

---

## 🔍 Use Cases

- Lightweight text formatting directly from a browser
- Demonstrates Django forms, views, and templates
- Perfect example for beginners learning Django web development

---

## 🧠 What I Learned

- Setting up a Django project from scratch
- Building server-side rendered applications with user interaction
- Handling form inputs and backend text processing
- Connecting views with URL patterns and rendering with context data
