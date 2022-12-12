import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { ToDo } from "../model";
import SingleToDo from "./SingleToDo";
import "./style.css";

interface Props {
  toDos: ToDo[];
  setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
  completedToDos: ToDo[];
  setCompletedToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
  handleDone: (id: number, isDone: boolean) => void;
}

const ToDoList: React.FC<Props> = ({
  toDos,
  setToDos,
  completedToDos,
  setCompletedToDos,
  handleDone,
}) => {
  return (
    <div className="container">
      <Droppable droppableId="ToDosList">
        {(provided, snapshot) => (
          <div
            className={`toDos ${snapshot.isDraggingOver ? "dragactive" : ""}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="toDos__heading">Active Tasks</span>
            {toDos.map((toDo, index) => (
              <SingleToDo
                index={index}
                key={toDo.id}
                toDo={toDo}
                toDos={toDos}
                setToDos={setToDos}
                handleDone={handleDone}
                completedToDos={completedToDos}
                setCompletedToDos={setCompletedToDos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="ToDosRemove">
        {(provided, snapshot) => (
          <div
            className={`toDos remove ${
              snapshot.isDraggingOver ? "dragcomplete" : ""
            }`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className=" toDos__heading">Completed Tasks</span>
            {completedToDos.map((toDo, index) => (
              <SingleToDo
                index={index}
                key={toDo.id}
                toDo={toDo}
                toDos={toDos}
                setToDos={setCompletedToDos}
                handleDone={handleDone}
                completedToDos={completedToDos}
                setCompletedToDos={setCompletedToDos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default ToDoList;
