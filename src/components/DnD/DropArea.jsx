import React, { useState } from "react";
import "./DropArea.css";
import { useDrop } from "react-dnd";
import Picture from "../PicturesComponent/Picture";
const DropArea = () => {
  const [{ isOver }, drop] = useDrop(() => {
    return {
      accept: "image",
      drop: (item) => {
        console.log(item)
        return addImageToTheBoard(item.id);
      },
      collect: (monitor) => {
        return {
          isOver: !!monitor.isOver(),
        };
      },
    };
  });

  const [board, setBoard] = useState([]);

  const addImageToTheBoard = (id) => {
    console.log(id);
  };
  return (
    <>
      <h1>Dropping Component</h1>
      <div className="dropping-box" ref={drop} style={{background:isOver ? 'yellow':'white'}}>
        {board.map((item) => {
          return <Picture imgUrl={item.img} id={item.id} key={item.id}/>;
        })}
      </div>
    </>
  );
};

export default DropArea;
