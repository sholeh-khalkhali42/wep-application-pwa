
import { Header } from "../common/Header"
import Item  from "./Item"
import {useEffect,useState} from "react"
import {useDispatch,useSelector} from "react-redux";
import {fetchMovie} from "../../features/Movie"
function Movie (){

    // const [data,setData]=useState([])
    // const [loading ,setLoading]=useState(false)
    const dispatch=useDispatch()
let data=useSelector(state=>state?.movies?.movieList);



const loading=useSelector(state=>state?.movies?.loading)


console.log(loading);
console.log(data);
//in mount and pending phase data is an empty array 
if(!Array.isArray(data)){
    data=data.results
}
useEffect(()=>{
        if(data){
            dispatch(fetchMovie())
        }

    },[])

    
return(<>
<Header/>
<div className="container">
<div className="row">

{loading? <p className="loading">درحال دریافت داده می باشیم لطفا منتظر بمانید</p>: 

data ?data.map((i,index)=><Item key={index} id={i.objectId} img={i.img} title={i.name} year={i.year}/>):null}
</div></div></>)

}

export default Movie