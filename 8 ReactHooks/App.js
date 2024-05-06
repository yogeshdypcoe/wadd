
import './App.css';
import React,{useState} from 'react';  // useState is a hook

function App() {
  const [name, setName] = useState("Yogesh");
  return (
    <div className="App">
     <h1>Hello {name}</h1>
     <button id='changeName' onClick={()=> setName("Sai")}>Change Name</button>
    </div>
  );
}

export default App;
