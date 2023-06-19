import React from 'react'
import './PicturesTable.css'
import Picture from '../PicturesComponent/Picture'
const PicturesList = [
    {
        id:1,
        img:'https://images.unsplash.com/photo-1544211412-2a32426e7fd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=689&q=80'
    },
    {
        id:2,
        img:'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=786&q=80'
    },
    {
        id:3,
        img:'https://plus.unsplash.com/premium_photo-1661847643150-4e06569d2ec1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=668&q=80'
    },
]
const PicturesTable = () => {
  return (
    <>
    <h1>PicturesTable</h1>
    <div className="container">
        {
            PicturesList.map((picture)=>{
                return <Picture key={picture.id} imgUrl={picture.img} id={picture.id}/>
            })
        }
    </div>
    
    </>
  )
}


export default PicturesTable