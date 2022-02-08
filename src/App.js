import './App.css';
import React, {useState} from "react";


function App() {

  const [value, setvalue] = useState("");
  const [imgresult, setimgresult] = useState([]);   

  const fetchData= async()=>{

    const result=await fetch(`https://api.unsplash.com/search/photos?client_id=Oao-1ry9nWlaBUiADQzwqNMPx5rLUrHytv4SfVhu9-Q&query=${value}&orientation=squarish`)
    const json=await result.json();
    //console.log(json);    
    setimgresult(json.results)
  }

  const handleChange=(e)=>{
    return setvalue(e.target.value);
  }

  return (
    <>
      <div className="mydiv">
        <input type="text" placeholder='Search..' value={value} onChange={handleChange} />
        <button onClick={fetchData}><strong>Send</strong></button>
      </div>


      <div className="gallery">
        {
          imgresult.map((items)=>{
            return <img src={items.urls.regular} key={items.id} alt={value}></img>
          })
        }
      </div>
    </>
   
  );
}

export default App;
