
# 📚 Mini E-Learning Platform

A simple, responsive e-learning prototype built with **HTML**, **CSS**, and **JavaScript**. It features a homepage listing available courses, a detailed course view with lessons, and a button to mark each course as completed. Designed for clarity, modularity, and ease of extension.

---

## 🚀 Features

- ✅ Home page with a list of available courses
- 📖 Course detail view showing lessons and progress
- 🟢 "Mark as Completed" button with dynamic status update
- 🎨 Clean UI with hover effects for interactivity
- 🧠 Course data stored in a JavaScript array (easy to extend or connect to backend)

---

## 🧱 Tech Stack

- **HTML5** – Semantic structure
- **CSS3** – Simple styling with hover transitions
- **JavaScript (Vanilla)** – Dynamic rendering and state management

---

## 📂 File Structure

mini-elearning-platform/
├── index.html              # Entry point with basic layout and script/style links
├── css/
│   └── style.css           # All styling: layout, typography, hover effects
├── js/
│   └── app.js              # Core logic: rendering views, handling state, events
├── data/
│   └── courses.js          # Course data stored as a JS array or JSON object
│   
└── README.md               # Project overview and setup instructions


## 🧪 How to Run

1. Clone or download the repository.
2. Open `index.html` in any modern browser.
3. Interact with the course cards and explore the detail view.

---

## 🧠 Sample Course Data

```js
const courses = [
  {
    id: 1,
    title: "Intro to Python",
    lessons: ["Variables", "Loops", "Functions"],
    completed: false
  },
  ...
];

🛠️ Future Enhancements
🔐 Add user authentication

📊 Track lesson-level progress

🗃️ Persist data using LocalStorage or backend (e.g. Firebase, Flask)

📈 Add analytics dashboard for course completion

🌍 Multi-language support using i18n libraries

🤝 Contributing
Feel free to fork and extend the platform. Suggestions and pull requests are welcome—especially if you're adding features aligned with SDG 4 (Quality Education) or SDG 12 (Sustainable Consumption).

📜 License
MIT License. Use freely, modify responsibly.

Deployment
Live at: https://aielearningvibe.netlify.app/

✨ Author
Built by Suleiman — strategic builder, ethical entrepreneur, and advocate for sustainable tech. Let’s empower learning, one modular app at a time.
