import { Add, MoreVert } from "@mui/icons-material";
import Task from "./Task";

function TodoList() {
  let tasks = [
    {
      task: "task 1 description no one need to know what it is",
      type: 3
    },
    {
      task: "task 2 description no one need to know what it is",
      type: 1
    },
    {
      task: "task 3 description no one need to know what it is",
      type: 2
    },
    {
      task: "task 4 description no one need to know what it is , just wait ",
      type: 4
    },
    {
      task: "task 4 description no one need to know what it is , just wait ",
      type: 4
    }
  ];

  return (
    <div className="todo-list">
      <div className="todo-list-header flex-title">
        <div className="todo-left-sec">
          <div className="todo-title">Today To Do List</div>
          <div className="todo-date">
            <div>Saturday</div>
            <div>12 Oct 2021</div>
          </div>
        </div>
        <div className="flex-title">
          <div className="todo-add-icon flex-center">
            <Add sx={{ color: "white", width: "20px", height: "20px" }} />
          </div>
          <div className="todo-add-menu flex-center">
            <MoreVert sx={{ width: "20px", color: "white" }} />
          </div>
        </div>
      </div>

      <div className="todo-tasks">
        {tasks.map((task) => (
          <Task desc={task.task} type={task.type} />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
