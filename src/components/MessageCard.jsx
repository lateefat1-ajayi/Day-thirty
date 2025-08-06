// components/MessageCard.jsx
import { useState } from "react";

export default function MessageCard({ message, onDelete, onEdit }) {
  const [showModal, setShowModal] = useState(false);
  const [editedText, setEditedText] = useState(message.text);

  const handleSave = () => {
    if (!editedText.trim()) return;
    onEdit(message.id, editedText);
    setShowModal(false);
  };

  return (
    <div className="bg-white shadow-md p-4 rounded-xl flex justify-between items-start">
      <div>
        <p className="text-gray-800 text-lg mb-1">{message.text}</p>
        <p className="text-sm text-gray-500">⏰ {message.time}</p>
      </div>

      <div className="flex flex-col gap-2 ml-4">
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-500 text-white px-3 py-1 rounded-xl hover:-translate-y-0.5 transition-transform"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(message.id)}
          className="bg-red-500 text-white px-3 py-1 rounded-xl hover:-translate-y-0.5 transition-transform"
        >
          Delete
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm">
            <h3 className="text-lg font-bold mb-2">Edit Your Entry</h3>
            <textarea
              rows="4"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              className="w-full border rounded-md px-3 py-2 mb-4"
            ></textarea>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded-xl bg-gray-300 hover:-translate-y-0.5 transition-transform"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 rounded-xl bg-green-500 text-white hover:-translate-y-0.5 transition-transform"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
