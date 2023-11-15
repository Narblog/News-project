import React, { useState } from 'react'
import {CommentProps} from "../NewsCard/NewsCard.interface"
import styles from './Comment.module.css'

const Comment: React.FC<CommentProps> | any  = ({comments}) => {

    const [comment,setComment]=useState<Comment[]>([])
  

   
  return (
    <div  className={styles.comment} >
        <h2>Comment</h2>
        {
            comments.map((item)=>{
               return <div>
                 <div className={styles.boximg}>
                <img src={item.author.image} alt="image" className={styles.imagecoment}/>
                <span>{item.author.name}</span>
            </div>

            <p>{item.text}</p>
            <p>{item.date}</p>
               
                </div>
              
            })
        }
     <textarea  
     />
      <button>SUBMIT</button>
    </div>
  )
}

export default Comment