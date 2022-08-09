import React,{useState} from 'react'; 
import './App.css';

function App() {
  const [content, setContent] = useState('Hello World!');
  return (
    <div className="App" data-testid="container"
      onClick={()=>{
        setContent('Hello Jack!')
      }}
    >
       {content}
    </div>
  );
}

export default App;
