// pages/Wall.jsx
import { useEffect, useState } from "react";
import MessageCard from "../components/MessageCard";
import { toast } from "react-toastify";

export default function Wall() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("goal-messages")) || [];
    setMessages(stored);
  }, []);

  const handleSend = () => {
    if (!text.trim()) {
      toast.warn("Write your goal or win first!");
      return;
    }

    const newMsg = {
      id: Date.now(),
      text,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    const updated = [newMsg, ...messages];
    setMessages(updated);
    localStorage.setItem("goal-messages", JSON.stringify(updated));
    toast.success("Shared successfully!");
    setText("");
  };

  const handleDelete = (id) => {
    const updated = messages.filter((msg) => msg.id !== id);
    setMessages(updated);
    localStorage.setItem("goal-messages", JSON.stringify(updated));
    toast.info("Entry deleted");
  };

  const handleEdit = (id, newText) => {
    const updated = messages.map((msg) =>
      msg.id === id ? { ...msg, text: newText } : msg
    );
    setMessages(updated);
    localStorage.setItem("goal-messages", JSON.stringify(updated));
    toast.success("Entry updated");
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-indigo-700 mb-4 text-center">
        Goal Wall 🎯
      </h2>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What did you achieve or plan today?"
          className="flex-1 px-4 py-2 rounded-xl border border-indigo-300 focus:outline-none"
        />
        <button
          onClick={handleSend}
          className="bg-indigo-500 text-white px-4 py-2 rounded-xl hover:-translate-y-0.5 transition-transform"
        >
          Share ➤
        </button>
      </div>

      {messages.length === 0 ? (
        <p className="text-gray-500 text-center">
          No wins yet. Start your streak today! 🚀
        </p>
      ) : (
        <div className="space-y-4">
          {messages.map((msg) => (
            <MessageCard
              key={msg.id}
              message={msg}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))}
        </div>
      )}
    </div>
  );
}
