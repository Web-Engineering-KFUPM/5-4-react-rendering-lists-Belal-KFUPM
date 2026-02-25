// src/components/CourseCard.jsx
import TaskItem from "./TaskItem";

export default function CourseCard({ course, index, onMutateCourse }) {
  /* =========================================================
     TASK 4 — Interactivity (Toggle + Delete ONLY)
     ---------------------------------------------------------
     1) Implement toggleTask(id) using onMutateCourse + .map()
     2) Implement deleteTask(id) using onMutateCourse + .filter()
     ========================================================= */

  function toggleTask(id) {
    // TODO (TASK 4): toggle task.isDone for the task with matching id
  }

  function deleteTask(id) {
    // TODO (TASK 4): remove the task with matching id
  }

  // Helpful hints for TASK 3 (optional to use)
  const hasTasks = course.tasks.length > 0;
  const allDone = hasTasks && course.tasks.every(t => t.isDone);

  return (
    <article className="course card">
      <header className="cardHeader">
        <h2>{course.title}</h2>

      {allDone && <p className="badge">All caught up!</p>}
      </header>

      <section className="tasksSection">

        {!hasTasks && <p className="muted">No tasks yet.</p>}
        
      <ul className="tasks">
        {course.tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        ))}
      </ul>
      </section>
    </article>
  );
}