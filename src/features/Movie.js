import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';

export const fetchMovie=createAsyncThunk('get/fetch',async ()=>{
   const response= await fetch("https://parseapi.back4app.com/classes/film",{
        
        headers:{
                "X-Parse-Application-Id": "ynw5l9xJjhSfrmK6n3U6v0krZBJf6mKiVywNNKtG",
        "X-Parse-REST-API-Key":"3jTFIn0TkJA22iw9uPUWvz2vIARAFKeM2VN8I2B9",
            }
        })

    const data=await response.json();
    
    return data;
});

const movieSlice=createSlice({
    name:'movie',
    initialState:{
        movieList:[],
        loading:false,
        errorMessage:null
    },
    extraReducers:{
        [fetchMovie.fulfilled]:(state,action)=>{
            state.movieList=action.payload;
             state.loading=false;
        },
        [fetchMovie.pending]:state=>{
             state.loading=true;
        },
        [fetchMovie.rejected]:state=>{
            // state.loading=false;
            state.errorMessage='something is wrong ..';
       },
    }

});


export default movieSlice.reducer;