import { useState ,useEffect} from "react";

const Play = () => {

    const [content , setContent] = useState("");
    
    useEffect(()=>{
        fetch('https://api.github.com/repos/ajkumarray/react-portfolio/contents/src/App.js')
        .then(response => response.json())
        .then(data => {
          // Extract and decode the base64 encoded content
          const base64Content = atob(data.content);
          // Update state with the decoded content
          setContent(base64Content);
        })
        .catch(error=>console.log('Error : ',error));
    },[]);
    
    const handleChangeTyping=(e)=>{
        //check if it matches the corresponding letter in content and accordingly change the color of the text 
        let i;
        
    }

    //timer 
    const [timer,setTimer] = useState(0);

    // const setTimer()=>{

    // }

    return (
        <div className="play">
            <h1 className="heading">Typing Master</h1>
            

            <div className="clock">
                {timer}
            </div>

            <pre className="text">{content}</pre>

            <div className='inputForm'>
                <input type='text' onChange={handleChangeTyping}></input>
            </div>

        </div>
        
    )
}

export default Play;
