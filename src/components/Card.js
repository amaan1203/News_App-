import React from 'react';
import { useState } from 'react';

const Card = (props) => {

    const article=props.article;
    const[readmore,setReadmore] = useState(false);
    const description = readmore ? article?.content :`${article?.content.substring(0,150)}....`;
    function readmoreHandler() {
      setReadmore(!readmore);
  }


  return (
    <div className="card  h-max flex flex-col">
      <div><img   className="image" src={article?.urlToImage} ></img></div>
      <br></br>
      <div>
      <p> <italic>by-</italic> <span className=' font-extrabold text-[#9c0000]'>{article?.author}</span></p>
      </div>
      <br></br>
      <div>
      <p className='font-bold text-3xl'>{article?.title}</p>
      </div>
      <br></br>
       <div>
       <p className="description w-full h-max " >
      {description}
      <span className="read-more" onClick={readmoreHandler}>
        {readmore ? `Show Less`: `Read Summary`}
        </span>
       </p>
       <br></br>
       </div>
        <div className= 'h-max  p-5'>
         <p> <a className="btn-red"  href={article?.url}  target="_blank"  >Read More</a> </p>
       </div>
    </div>
  )
}

export default Card