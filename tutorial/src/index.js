
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css'
import {books} from './books' 
import Book from './Book'
import {testing} from './testing/testing'

/** setup variables
 * const title='Seo Pro (All in One Seo Module)'
 *  const author='JK Rowlings'
 *  const img='https://addons.prestashop.com/1526883-pbig/seo-pro-all-in-one-url-cleaner-redirects-sitemaps.jpg'
 * */

function BookList() {
    console.log(testing)
    return (
        <section className="booklist">
           {books.map((book)=>{
               return <Book key={book.id} {...book} ></Book>;
           })}

        </section>
    );
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