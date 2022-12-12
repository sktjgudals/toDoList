import React, { useEffect, useState } from "react";
import { ToDo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import "./style.css";
import { deleteApi } from "../api/delete";
import { useRef } from "react";
import { updateApi } from "../api/update";
import { Draggable } from "react-beautiful-dnd";

type Props = {
  index: number;
  toDo: ToDo;
  toDos: ToDo[];
  completedToDos: ToDo[];
  setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
  setCompletedToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
  handleDone: (id: number, isDone: boolean) => void;
};

const SingleToDo = ({
  index,
  toDo,
  toDos,
  setToDos,
  handleDone,
  setCompletedToDos,
  completedToDos,
}: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editToDo, setEditToDo] = useState<string>(toDo.description);

  const handleDelete = async (id: number) => {
    const res = await deleteApi(id);
    if (res) {
      if (toDo.isDone) {
        setCompletedToDos(
          completedToDos.filter((todo: ToDo) => todo.id !== id)
        );
      } else {
        setToDos(toDos.filter((todo) => todo.id !== id));
      }
    } else return console.warn("error");
  };

  const handleEdit = async (e: React.FormEvent, id: number) => {
    e.preventDefault();
    await updateApi(id, editToDo, toDo.isDone);
    if (toDo.isDone) {
      setCompletedToDos(
        completedToDos.map((todo) =>
          todo.id === id ? { ...toDo, description: editToDo } : todo
        )
      );
    } else {
      setToDos(
        toDos.map((toDo) =>
          toDo.id === id ? { ...toDo, description: editToDo } : toDo
        )
      );
    }
    setEdit(!edit);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <Draggable key={toDo.id} draggableId={toDo.id.toString()} index={index}>
      {(provided, snapshot) => (
        <form
          className={`toDos__single ${snapshot.isDragging ? "drag" : ""}`}
          onSubmit={(e) => handleEdit(e, toDo.id)}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {edit ? (
            <input
              ref={inputRef}
              value={editToDo}
              onChange={(e) => setEditToDo(e.target.value)}
              className="todos_single--text"
            />
          ) : toDo.isDone ? (
            <>
              <span className="toDos__single--text">{toDo.description}</span>
              <span
                className="icon"
                onClick={() => {
                  if (!edit && !toDo.isDone) {
                    setEdit(!edit);
                  } else {
                    setEdit(!edit);
                  }
                }}
              >
                <AiFillEdit />
              </span>
              <span className="icon" onClick={() => handleDelete(toDo.id)}>
                <AiFillDelete />
              </span>
              <span
                className="icon"
                onClick={async () => await handleDone(toDo.id, toDo.isDone)}
              >
                <IoCloseOutline />
              </span>
            </>
          ) : (
            <>
              <span className="toDos__single--text">{toDo.description}</span>
              <span
                className="icon"
                onClick={() => {
                  if (!edit && !toDo.isDone) {
                    setEdit(!edit);
                  } else {
                    setEdit(!edit);
                  }
                }}
              >
                <AiFillEdit />
              </span>
              <span className="icon" onClick={() => handleDelete(toDo.id)}>
                <AiFillDelete />
              </span>
              <span
                className="icon"
                onClick={async () => await handleDone(toDo.id, toDo.isDone)}
              >
                <MdDone />
              </span>
            </>
          )}
        </form>
      )}
    </Draggable>
  );
};

export default SingleToDo;
