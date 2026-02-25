// src/components/TaskItem.jsx
import DueBadge from "./DueBadge";

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="task">
      <label className="taskMain">
        {/* TODO (TASK 4): Checkbox calls onToggle(task.id) on change
            Also make it reflect task.isDone using checked={task.isDone} */}
        <input type="checkbox" />

        {!task.isDone && <DueBadge dueDate={task.dueDate} />}

        <span className="title">{task.title}</span>
      </label>

      {/* TODO (TASK 4): Delete button calls onDelete(task.id) on click */}
      <button className="ghost" aria-label="Delete task">
        ✕
      </button>
    </li>
  );
}