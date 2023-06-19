import React from 'react'
import { useDrag } from 'react-dnd'

const Picture = ({imgUrl,id}) => {
  const [{isDragging},drag] = useDrag(()=>{
    return {
      type:'image',
      collect:(monitor)=>{
        return {
          isDragging: !!monitor.isDragging(),
        }
      }
    }
  })
  return (
    <>
        <img src={imgUrl} ref={drag} alt="picture" style={{border: isDragging ? '5px solid red':''}}/>
    </>
  )
}

export default Picture