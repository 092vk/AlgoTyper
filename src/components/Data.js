import React,{useState,useEffect} from "react";

const Data=()=>{
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

    return(
        <>
            <h1>hello</h1>
        </>
    );
}

export default Data;
