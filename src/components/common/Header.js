import { useState } from "react"

 export function Header(){
    
   const [value, setValue] = useState('');
    const changeText= (e) =>{
       setValue(e.target.value);
    } 

    const searchFunc=()=>{
        alert(value);
    }
   return (

       <div className="header">

          <div className="input-group mb-3 mx-auto  text-center" >
            <div className="input-group-prepend">
            <button className="btn btn-success" onClick={searchFunc}>جستجو</button>
     
            </div>
            <input type="text" onChange={changeText} placeholder="لطفا نام فیلم را وارد کنید" />
     </div>
     </div>
   );

 }