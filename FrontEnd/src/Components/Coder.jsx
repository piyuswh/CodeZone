import React, { useEffect, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { cpp } from '@codemirror/lang-cpp';
import { java } from '@codemirror/lang-java';
import { python } from '@codemirror/lang-python';
import '../Stylesheets/Coder.css'
import Output from './Output'
import { useParams } from 'react-router-dom';


const Coder = ({ onCodeChange,lang }) => {
  const {id}=useParams()
  console.log(id);
  const [userInput, setUserInput] = useState('');
  
  const [code, setCode] = useState('// Write your code here');
  const [info,setInfo]=useState({})
  const [extension,setExtension]=useState([])
  const [langg,setLang]=useState('java')
   useEffect(() => {
    fetch(`http://localhost:3000/submission/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
    .then(res => res.json())
    .then(data => {
      setCode(data.code);
      setLang(data.language); 
    })
    .catch(err => console.log('Error loading attempt', err));
  }, [id]);
  async function apiHandler(){
    let obj={
      lang:lang||langg,
      code,
      input:userInput
    }
   try{

     let response=await fetch("http://localhost:3000/usercode",{
       method:'POST',
       headers:{
         'Content-Type':'application/json'
        },credentials:'include',
        body:JSON.stringify(obj)
      })
      let data=await response.json()
      setInfo(data)
    // console.log("output")
    // console.log(data);
    
    
    }
    catch(error){
      console.log("Execution Failed");
      
    }
  }
  
  useEffect(() => {
    switch (lang) {
      case 'cpp':
      case 'c':
        setExtension([cpp()]);
        setCode("#include <bits/stdc++.h>\nusing namespace std;\nint main()\n{\n//Write Here\n\n return 0;\n}")
        break;
      case 'java':
        setExtension([java()]);
                setCode("public class Main{\n public static void main(String[] args)\n{\n}\n}")

        break;
      case 'python':
        setExtension([python()]);
        setCode('#Write Your Python Script Here')
        break;
      default:
        setExtension([java()]);
                        setCode("public class Main{\n public static void main(String[] args)\n{\n}\n}")

    }
  }, [lang]);


function handleChange(value){
setCode(value)    
}

  return (
    <div className="min-h-screen w-full bg-zinc-700 px-4 py-6 flex flex-col gap-4">
  <h5 className="text-white text-xl font-semibold text-center">Write Your Logic in {lang?lang:'java'}</h5>
      <CodeMirror
        value={code}
        height="500px"
        theme="dark"
        extensions={extension} 

        onChange={handleChange}
      />
<div className='flex justify-center items-center gap-7 text-white text-xl'>
<h4 className='text-white mt-4'>Custom Input (stdin)</h4>
<textarea
  value={userInput}
  onChange={(e) => setUserInput(e.target.value)}
  placeholder="Enter input here (used as stdin)"
  rows={2}
   style={{ resize: "none" }}
  className="w-full bg-gray-800 text-white p-2 rounded resize-none"
/>


<button className='bg-red-700 hover:bg-green-600 text:black hover:text-white w-20 h-12 'style={{borderRadius:'10px'}} onClick={apiHandler}>Run</button>    
<button className='bg-gray-200 hover:bg-yellow-500 text-black hover:text-white w-20 h-12' style={{borderRadius:'10px'}} onClick={(e)=>{setCode("")}}>Reset</button>    
</div>
<div className='flex justify-center '>

<Output message={info} className='w-full'></Output>
</div>
</div>
  );
};

export default Coder;
