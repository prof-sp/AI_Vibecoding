const app = document.getElementById("app");

function renderHomePage() {
  app.innerHTML = "<h2>Available Courses</h2>";
  courses.forEach(course => {
    const card = document.createElement("div");
    card.className = "course-card";
    card.innerHTML = `
      <h3>${course.title}</h3>
      <p>${course.lessons.length} lessons</p>
      <p>Status: ${course.completed ? "✅ Completed" : "🕒 In Progress"}</p>
    `;
    card.onclick = () => renderCourseDetail(course.id);
    app.appendChild(card);
  });
}

function renderCourseDetail(courseId) {
  const course = courses.find(c => c.id === courseId);
  app.innerHTML = `
    <h2>${course.title}</h2>
    <div>
      ${course.lessons.map(lesson => `<div class="lesson">${lesson}</div>`).join("")}
    </div>
    <br/>
    <button onclick="markCompleted(${course.id})" class="${course.completed ? 'completed' : ''}">
      ${course.completed ? "Course Completed" : "Mark as Completed"}
    </button>
    <br/><br/>
    <button onclick="renderHomePage()">← Back to Courses</button>
  `;
}

function markCompleted(courseId) {
  const course = courses.find(c => c.id === courseId);
  course.completed = true;
  renderCourseDetail(courseId);
}

// Initial render
renderHomePage();
