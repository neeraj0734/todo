
import { MoveLeft } from "lucide-react";
import React, { useEffect, useState } from "react";

const TodoInput = () => {
  const [toDoTask, setToDoTask] = useState([]);

  useEffect(()=>{
    const storedItems = JSON.parse(localStorage.getItem("toDoTask")) || []
    setToDoTask(storedItems)
  }, [])

  useEffect(()=>{
    localStorage.setItem("toDoTask",JSON.stringify(toDoTask))
  },[toDoTask])

  let handler = (event) => {
    event.preventDefault();
    if (event.target.taskName.value == "") {
      alert("Please enter task");
    } 
    else if (!toDoTask.includes(event.target.taskName.value.toLowerCase())) {
      setToDoTask([...toDoTask, event.target.taskName.value.toLowerCase()]);
    }
    else {
      alert("Task is already exits!");
    }
  };
  const list = toDoTask.map((elem, idx)=>{
    return(
        <ToDoTaskName key={idx} value={elem.charAt(0).toUpperCase()+elem.slice(1)} indexNumber={idx} toDoTask={toDoTask} setToDoTask={setToDoTask}/>
    )
  })

  return (
    <>
      {/* <div className="w-full flex justify-center items-center p-4"> */}
      <div className="w-full flex flex-row gap-4 justify-center items-center">
        <div className="inputDiv w-full md:w-5/12">
        <h1 className="font-bold text-3xl">ToDo List</h1>
          <form onSubmit={handler} className="w-full m-auto flex gap-3 h-12">
            <input
              type="text"
              name="taskName"
              id=""
              className="border-2 basis-4/5 rounded-lg cursor-pointer"
            />
            <button
              type="submit"
              className="border-2 basis-1/5 rounded-lg cursor-pointer font-bold hover:bg-gray-200 hover:text-lg"
            >
              Add
            </button>
          </form>
        </div>
      </div>
      <div className="outerDiv w-full md:w-5/12">
        <ul className="list-none">
          {list}
        </ul>
      </div>
    </>
  );
};

export default TodoInput;

function ToDoTaskName ({value,indexNumber,toDoTask,setToDoTask}){
    function deleteTask(){
        let finalData = toDoTask.filter((elem,idx)=>idx != indexNumber)
        setToDoTask(finalData)
    }

    function markAsComplete (){
        // let completedTask = toDoTask.filter((elem,idx)=>idx==indexNumber)
        // alert(indexNumber)
        let elements = document.querySelectorAll('.list')
        elements[indexNumber].style = 'background-color:green'
    }

    return(
        <>
            <li className="list font-semibold  bg-black text-white relative rounded">
            {value}
            <span onClick={markAsComplete} className="absolute right-8 cursor-pointer">
            ✔️
            </span>
            <span onClick={deleteTask} className="absolute right-2 cursor-pointer">
            🗑️
            </span>
          </li>
        </>
    )
}