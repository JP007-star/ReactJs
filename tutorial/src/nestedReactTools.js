//nested components
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

ReactDOM.render(<Greeting />, document.getElementById('root')); 
