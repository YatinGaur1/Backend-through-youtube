import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [jokes, setjokes] = useState([]);
  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setjokes(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  })
  return (
    <>
      <h2>this is frontend connect to backend</h2>
      <p>Jokes:{jokes.length}</p>

      {jokes.map((joke) => (
        <div key={joke.id}>
          <p>{joke.content}</p>
        </div>
      ))
      }
    </>
  );
}

export default App;
