import React ,{useState} from 'react';

export default function TextForm(props) {


  let words
  const [text, setText] = useState("");

  const handleUpper = () => {
    let newText = text.toUpperCase();
    setText(newText)
  }
  
  const handleLower = () => {
    let newText = text.toLowerCase();
    setText(newText)
  }

  const handleOnChange = (event) =>{
    setText(event.target.value)
    // if(text.length>0){
    //   words = 0
    //   console.log("Itz 0 Now")
    // }else{
    //   words = text.split(" ").length
    // }
  }

  const handleOnClear = () =>{
    setText("")
  }

  return (
    <>
    <div className="mb-3 my-3">
        <h2 style={{color : props.mode==='light'?'black':'white'}}>{props.title}</h2>
        {/* <label for="exampleFormControlTextarea1" class="form-label">{props.title}</label> */}
        <textarea className="form-control my-3" style={{backgroundColor : props.mode==='light'?'white':'#413f3f' , color : props.mode==='light'?'black':'white'}} id="exampleFormControlTextarea1" onChange={handleOnChange} rows="3" value={text}></textarea>
    </div>
    <div className="myButtons">  
      <button type="button" className={`btn btn-${props.mode==='light'?'primary':'dark'} mr-3 my-1`} onClick={handleUpper}>UpperCase</button>
      <button type="button" className={`btn btn-${props.mode==='light'?'primary':'dark'} mx-3 my-1`} onClick={handleLower}>LowerCase</button>
      <button type="button" className={`btn btn-${props.mode==='light'?'primary':'dark'} mx-3 my-1`} onClick={handleOnClear}>Clear All</button>
    </div>
    <div className="containern my-4">
      <h3 style={{color : props.mode==='light'?'black':'white'}}>Your Text Summary : </h3>
      <p style={{color : props.mode==='light'?'black':'white'}}>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words {text.length} Characters</p>
    </div>   
    </>
  );
}
