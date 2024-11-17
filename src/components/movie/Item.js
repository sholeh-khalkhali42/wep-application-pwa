import  {Link } from 'react-router-dom';
export default function({img,title,year,id}){
    
     return(
     <div className="col-sm-3 my-2">
               
    <div className="card" >
            <img src={img} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <div className="card-text">
                   <h3>{title}</h3>
                    {year}
                </div>
                <Link to={"movie-detail/"+id}>جزییات بیشتر</Link>
            </div>
        </div>
     </div>
     )
}