"use client";
import ListItem from "./listItem";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

export default function Todo() {
  const tasks = [
    {
      id: "1",
      task: "✨ Plan for upcoming board meeting",
      status: false,
    },
    { id: "2", task: "📄 Reserve room", status:false },
    {
      id: "3",
      task: "🤝 Schedule meeting with professors",
      status: false,
    },
    { id: "4", task: "🥘 Order food for GBM", status: false},
    { id: "5", task: "🔥 Firebase workshop!", status: false },
  ];

  const [myTasks, setTasks] = useState(tasks);
  const [input, setInput] = useState("");
  

  function handleAddTodo() {
    const newTask = { id: `todo-${nanoid()}`, task:input, status: false };
    setTasks([...myTasks, newTask]);
    setInput("");
  }

  function handleOnClick(id) {
    const updatedTasks = myTasks.map(task => {
      if(id == task.id){
        return {...task, status: !task.status};
      }
      return task;
    })
    setTasks(updatedTasks);
  }

  return (
    <div className="flex flex-col gap-5 rounded-lg w-100 h-150 overflow-y-scroll items-center shadow-xl/30 p-10 bg-[#F487B6]">
      <h1 className="text-white font-bold text-2xl">💗 WiCS To-Do List</h1>

      <ul className="flex flex-col text-pink-700 gap-2 font-bold h-100 overflow-y-scroll">
        {myTasks.map((item) => (
          <ListItem
            key={item.id}
            id={item.id}
            task={item.task}
            status={item.status}
            handleOnClick={() => handleOnClick(item.id)}
          />
        ))}
      </ul>

      <div className="flex gap-5">
        <input
          type="text"
          className="rounded-md border-2 border-white bg-white p-0.5"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button
          className="bg-pink-500 shadow-lg shadow-pink-500/50 text-white p-2 rounded-md active:relative active:top-0.5"
          onClick={handleAddTodo}
        >
          Add To-Do
        </button>
      </div>
    </div>
  );
}
