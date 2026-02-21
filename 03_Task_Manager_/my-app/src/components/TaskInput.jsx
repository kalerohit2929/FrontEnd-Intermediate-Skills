import { useState } from "react";
import { useTasks } from "../context/TaskContext";

export default function TaskInput() {
  const [title, setTitle] = useState("");
  const { addTask } = useTasks();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring"
        placeholder="Add a task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="bg-blue-500 text-[#043915] px-4 rounded-lg hover:bg-blue-600">
        Add
      </button>
    </form>
  );
}
