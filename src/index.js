import React from 'react';
import ReactDOM from 'react-dom';

import './index.css'

const firstBook={
    img: 'https://addons.prestashop.com/1526883-pbig/seo-pro-all-in-one-url-cleaner-redirects-sitemaps.jpg',
    title:'Seo Pro (All in One Seo Module)',
    author:'JK Rowlings' 
}
//setup variables
// const title='Seo Pro (All in One Seo Module)'
// const author='JK Rowlings'
// const img='https://addons.prestashop.com/1526883-pbig/seo-pro-all-in-one-url-cleaner-redirects-sitemaps.jpg'

function BookList(){
    return (
    <section className="booklist">
        <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}/>
      
       
    </section>
    );
}
const Book=(props)=>{
    const {img,title,author} = props;
    return (
        <article className='book'>
           <img style={{height:'200px'}} src={img} alt="book"/>
           <h2>{title}</h2>
           <h4>{author.toUpperCase()}</h4>
           <p>{props.job}</p>
           {/* <p>{let x=6}</p> */}
        </article>
    )
}

// const Image=()=>{
//     return(
       
//     )
// }

// const Title=()=>{
//     return (
       
//     )
// }

// const Author =() =>{
//     return (
      
//     )
// }



ReactDOM.render(<BookList />, document.getElementById('root')); 