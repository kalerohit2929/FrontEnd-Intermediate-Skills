import { useTasks } from "../context/TaskContext";

export default function TaskList() {
  const { tasks, toggleTask, deleteTask } = useTasks();

  if (tasks.length === 0) {
    return (
      <p className="text-center text-gray-500">
        No tasks yet ✨
      </p>
    );
  }

  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
        >
          <span
            onClick={() => toggleTask(task.id)}
            className={`cursor-pointer flex-1 ${
              task.completed
                ? "line-through text-gray-400"
                : ""
            }`}
          >
            {task.title}
          </span>

          <button
            onClick={() => deleteTask(task.id)}
            className="text-red-500 hover:text-red-700 ml-3"
          >
            ✕
          </button>
        </li>
      ))}
    </ul>
  );
}
