import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, del, comp } from "./TodoSlice";
import "./App.css";
// const List = ({ type }) => {
//   const value = useSelector((state) => state.todo);
//   const dispatch = useDispatch();
//   return <div></div>;
// };
const Todo = () => {
  const value = useSelector((state) => state.todo);
  const [input, setinput] = useState("");
  const [type, settype] = useState("all");
  const dispatch = useDispatch();
  //   console.log(value);

  return (
    <div>
      <h1 className="title">TO DO LIST</h1>
      <div className="inputdiv">
        <input
          type="text"
          name="input"
          id="input"
          value={input}
          onChange={() => {
            setinput(event.target.value);
          }}
        />
        <button
          onClick={() => {
            if (input !== "") {
              dispatch(add(input));
              setinput("");
            }
          }}
        >
          Add To do
        </button>
      </div>

      <div className="nav">
        <span
          onClick={() => {
            settype("incomp");
          }}
          style={type === "incomp" ? { color: "red" } : {}}
        >
          Incompleted
        </span>
        <span
          onClick={() => {
            settype("comp");
          }}
          style={type === "comp" ? { color: "red" } : {}}
        >
          Completed
        </span>
        <span
          onClick={() => {
            settype("all");
          }}
          style={type === "all" ? { color: "red" } : {}}
        >
          All
        </span>
      </div>

      <div>
        <div className="list">
          {value
            .filter((e) => {
              if (type === "all") return true;
              if (type === "comp") return e.comp === true;
              if (type === "incomp") return e.comp === false;
              return true;
            })
            .map((e, i) => {
              return (
                <li key={i} className="listitem">
                  <div className="text">
                    {i + 1} .{e.text}
                  </div>
                  {"   "}&ensp;
                  {e.comp ? (
                    <button
                      onClick={() => {
                        dispatch(del(e.text));
                        console.log(e.text);
                      }}
                      className="delete"
                    >
                      delete
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        dispatch(comp(e.text));
                      }}
                      className="mac"
                    >
                      mark as complete
                    </button>
                  )}
                </li>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Todo;
