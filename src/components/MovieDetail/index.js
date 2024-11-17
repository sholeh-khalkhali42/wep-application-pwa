import {useEffect,useState} from 'react';

import {useParams} from 'react-router-dom';


export default function MovieDetail(){
  
    const[data, setData]=useState([]);
    const[Loading, setLoading]=useState(false);
   

    const param=useParams();
useEffect(()=>{
        console.log(param);
        fetch("https://parseapi.back4app.com/classes/film/"+param.id,{
        
        headers:{
                "X-Parse-Application-Id": "ynw5l9xJjhSfrmK6n3U6v0krZBJf6mKiVywNNKtG",
        "X-Parse-REST-API-Key":"3jTFIn0TkJA22iw9uPUWvz2vIARAFKeM2VN8I2B9",
            }
        }).then(
            res=>{
                
                res.json().then(info=>{
                    console.log(info);
                    setData(info);
                    setLoading(false);
                })
            },error=>{
                setLoading(false);
                alert('error');
                console.log(error);
            }
        )


    },[]);    


    return (
        <div className="container border text-center">
            <img  src={data.img}></img>
            <h1>{data.name}</h1>
            <small>{data.year}</small>
            <p>{data.des}</p>
        </div>
    );
}