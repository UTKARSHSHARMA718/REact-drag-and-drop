import React from 'react';
import { useDrag } from "react-dnd";

const Picture = ({ImgUrl,id}) => {

  // console.log(id)
  const [{ isDragging }, drag] = useDrag(() => {
    return {
      type: "image",
      item:{id:id},// put all the things here that we want to pass as the arguments which we need at the dropping end
      collect: (monitor) => {
        return {
          isDragging: !!monitor.isDragging(),
        };
      },
    };
  });
  return (
    <>
        <img src={ImgUrl} ref={drag} alt="picture" style={{border: isDragging ? '5px solid red':''}}/>
    </>
  )
}

export default Picture