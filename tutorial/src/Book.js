import React from 'react'

const Book = (props) => {
    const clickHandler = (e) => {
        console.log(e);
        console.log(e.target);
    }
    const eventHandler=(title)=>{
       alert(title)
      
    }
    const {img,title,author,children} = props;
    return (
        <article className='book' onMouseOver={()=>{ console.log(title);}}>
            <img src={img} alt="book" />
            <h2>{title}</h2>
            <h4>{author.toUpperCase()}</h4>
            {children}
            <button type="button"  onClick={()=> {eventHandler(title)} }    >example</button>
            <button type="button"  onClick={clickHandler}    >example</button>
           
            {/* <p>{props.job}</p> */}
            {/* <p>{let x=6}</p> */}
        </article>
    )
}

export default Book
