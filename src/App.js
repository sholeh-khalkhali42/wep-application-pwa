import {lazy, Suspense} from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
const Movie=lazy(()=> import('./components/movie/index.js'));
const RCounter=lazy(()=> import('./components/RCounter/index.js'));
const RCounterClass=lazy(()=> import("./components/RCounterClass/index"));
const UserComponent=lazy(()=> import("./components/user/index.js"));

const MovieDetail=lazy(()=> import("./components/MovieDetail/index.js"));



function App(){
  return (
    <div className="App">
       <Suspense  fallback={<p>loading.... please wait . !</p>}>
       <BrowserRouter>
        <Routes>
           
           <Route path="/" exact element={<Movie/>} />
           <Route path="/movie-detail/:id" element={<MovieDetail/>} />
           <Route path="/rcounter" exact element={<RCounter/>} />
           
           <Route path="/rcounter-class" exact element={<RCounterClass/>} />

           <Route path="/users" exact element={<UserComponent/>} />
           


        </Routes>
       
       </BrowserRouter>
       </Suspense> 

       <div id="install_banner">
          <span>آیا مایل به نصب این اپلیکشن هستید ؟</span>
          <button id="yes">بله</button>
          <button id="no">خیر</button>
         </div>  
 </div>
   
  );
}

export default App;
