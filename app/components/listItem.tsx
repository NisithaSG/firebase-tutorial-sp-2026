import { useState } from "react";

export interface item {
  id: string;
  task: string;
  status: boolean;
  active: boolean;
  handleOnClick: (id: string) => void;
  handleTaskClick: (id: string) => void;
  handleDelete: (id: string) => void;
  handleEditClick: (id: string) => void;
  handleEditSubmit: (id: string, task: string) => void;
  editMode: boolean;
}

export default function listItem({
  task,
  status,
  active,
  editMode,
  handleOnClick,
  handleTaskClick,
  handleDelete,
  handleEditClick,
  handleEditSubmit,
  id,
}: item) {
  const [input, setInput] = useState(task);

  return (
    <div
      onClick={(e) => {
        handleTaskClick(id);
      }}
      className={`${active ? "border-amber-300" : ""} bg-white rounded-sm shadow-md/30 flex flex-col  p-5 w-80 cursor-pointer gap-3`}
    >
      <div className="flex flex-row gap-5">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleOnClick(id);
          }}
          type="button"
          className={`${status ? "bg-yellow-200" : "bg-white"} cursor-pointer inset-shadow-md/30 border border-gray-300 min-w-5 max-w-5 min-h-5 max-h-5 rounded-3xl`}
        ></button>
        <p className={`${status ? "line-through" : ""}`}>{task}</p>
      </div>

      {active && (
        <div className="flex justify-end gap-5 ">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleDelete(id);
            }}
            className="text-red-500 bg-red-100 p-1 rounded-sm cursor-pointer"
          >
            Delete
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleEditClick(id);
            }}
            className="text-blue-400 bg-blue-100 p-1  rounded-sm cursor-pointer"
          >
            Edit
          </button>
        </div>
      )}

      {editMode && (
        <>
          <input
            value={input}
            onClick={(e) => e.stopPropagation()}
            onChange={(e) => {
              setInput(e.target.value);
              console.log(input);
            }}
            type="text"
            className="rounded-md border-2 border-pink-400 bg-white p-0.5"
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleEditSubmit(id, input);
            }}
            className="text-blue-400 bg-blue-100 p-1  rounded-sm cursor-pointer"
          >
            Submit
          </button>
        </>
      )}
    </div>
  );
}
