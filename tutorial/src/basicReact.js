import React from 'react';
import ReactDOM from 'react-dom';

//its stateless functional component 
// always return jsx

// function Greeting() {
//     return <h4>Hi </h4>;
// }


/** ****************
 * this is recommended
 * always wrap with single element 
 * div / section /article  or Fragment
 * use camelCase for html attributes
 * className instead of class 
 * close every element 
 * formatting
 * ********************/

function Greeting(){
    return (
    <div>
      <h1>Hello people </h1> 
      <ul>
          <li>
              <a href="/jp">hello world</a>
          </li>
          <li>
              <a href="/jp"><Person/></a>
          </li>
      </ul>
    </div>
    );
}

const Person=()=>{
    return (<h1>Hi I am Jp</h1>)
}


// const Greeting=()=>{
//     return React.createElement('h1',{},"helloworld")
// }


// const Greeting=()=>{
//     return React.createElement(
//         'div',
//         {},
//         React.createElement('h1',{},"helloworld")
//         )
// }


ReactDOM.render(<Greeting />, document.getElementById('root')); 