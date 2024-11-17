import {useSelector, useDispatch} from 'react-redux';
import {updateUserName, deleteUser,addUser, userSlice } from '../../features/Users';
import AddUser from './AddUser';
import {useState} from 'react';
export default function UserComponent(){
    
    const [name,setName]=useState("");
    const [username,setUserName]=useState("");
    const [NewUsername,setNewUsername]=useState("");


    
    const userList=useSelector((state)=>state.users.value);

    const dispatch= useDispatch();
    return (
        <div className="p-5">
        
        <div className="py-2">
            
            <input type="text" onChange={e=>{setName(e.target.value) }}  placeholder="enter name" />
            <input type="text" onChange={e=>{setUserName(e.target.value) }}  placeholder="enter username" />
            <button  onClick={()=>{
                dispatch(
                    addUser({
                        id:userList.length,
                        name,
                        username

            
                    })
                );
            }} className="btn btn-success" >add user</button>
        </div>


            
            {userList.map((usr)=>{

                    return(
                   <div className="p-2 mt-2 rounded bg-warning">
                       
                       <h2>{usr.username} - {usr.name}</h2>

                       <button onClick={()=>dispatch(deleteUser({id:usr.id})) }>del</button>
                        <input type="text" placeholder="enter new username" onChange={
                            (e)=>{ setNewUsername(e.target.value);  }
                        } />
                       <button onClick={()=> {
                           console.log(NewUsername);
                           dispatch(updateUserName({id:usr.id, username : NewUsername}))} }>edit</button>
                        

                   </div>  
                   
                   )  
            })
            }
        </div>
    )
} 