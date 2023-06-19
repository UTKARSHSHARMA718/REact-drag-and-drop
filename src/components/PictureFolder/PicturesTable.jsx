import React, { useState } from "react";
import "./PicturesTable.css";
import Picture from "../PicturesComponent/Picture";
import { PicturesList } from "../../Constant/TableDummyData";
import { useDrop } from "react-dnd";

const PicturesTable = () => {
  const [{ isOver }, drop] = useDrop(() => {
    return {
      accept: "image",
      drop: (item) => {
        console.log(item);
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
      <h1>PicturesTable</h1>
      <div className="container">
        {PicturesList.map((picture) => {
          return <Picture ImgUrl={picture.img} key={picture.id} id={picture.id} />;
        })}
      </div>

      <h1>Dropping Component</h1>
      <div
        className="dropping-box"
        ref={drop}
        style={{ background: isOver ? "yellow" : "white" }}
      >
        {board.map((item) => {
          return <img imgUrl={item.img} key={item.id} ref={drop} />;
        })}
      </div>
    </>
  );
};

export default PicturesTable;
