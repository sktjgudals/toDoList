import React, { useRef } from 'react'
import "./style.css";

interface Props {
    toDo: string;
    setToDo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputFeild: React.FC<Props> = ({ toDo, setToDo, handleAdd }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <form className="input" onSubmit={(e) => {
            handleAdd(e);
            inputRef.current?.blur();
            // inputRef.current?.focus();
        }}>
            <input type="input"
                ref={inputRef}
                value={toDo}
                onChange={(e) => setToDo(e.target.value)}
                placeholder="Enter a task"
                className="input__box" />
            <button className="input__submit" type="submit">Submit</button>
        </form>
    )
}

export default InputFeild
