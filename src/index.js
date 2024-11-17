import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/css/bootstrap.min.css';
import './assets/css/bootstrap.rtl.min.css';
import {createStore} from 'redux';
import  {Provider}  from 'react-redux';
import {configureStore} from '@reduxjs/toolkit'
import rootReducers from './redux/reducers';
import { UsersData } from './UserData';
import userReducer from './features/Users';
import movieReducer from './features/Movie';
const root = ReactDOM.createRoot(document.getElementById('root'));
const store=configureStore({
  reducer:{
     users:userReducer,
     movies:movieReducer
  }
});

root.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);


if("serviceWorker" in navigator){
  navigator.serviceWorker.register('/sw.js').then((res)=>{
    if(res.installing){
      console.log('installing')
    }

    if(res.waiting){
      console.log('waiting')
    }
    if(res.active){
      console.log('active')
    }
  }).catch(rej=>{
    console.log('register has error')
  })
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


if("serviceWorker" in navigator){
  navigator.serviceWorker.register("/sw.js")
  .then((res)=>{
   if(res.installing){
    //  console.log("installing")
   }
   if(res.waiting){
    //  console.log("watting")
   }
   if(res.active){
    //  console.log("active")
   }
  })
  .catch(rej=>{
    console.log("buy")
  })

}


window.addEventListener("beforeinstallprompt", (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  let deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
  let addBtn=document.getElementById('install_banner');
  let yesBtn=document.getElementById('yes');
  let noBtn=document.getElementById('no');
  addBtn.style.display = "block";

  yesBtn.addEventListener("click", (e) => {
    // hide our user interface that shows our A2HS button
    addBtn.style.display = "none";
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the A2HS prompt");
      } else {
        console.log("User dismissed the A2HS prompt");
      }
      deferredPrompt = null;
    });
  });


  noBtn.addEventListener('click',(e)=>{
    addBtn.style.display = "none";
  })
});