import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


//api call using thunk
export const fetchRestaurant = createAsyncThunk('restaurantSlice/fetchRestaurant',()=>{
const result=axios.get('/restaurant.json').then(response=>response.data.restaurants)
console.log(result);
return result

})


export const restaurantSlice = createSlice({
    name:'restaurantList',
    initialState:{
        //pending
        loading:false,
        //resolve
        allRestaurant:[],
        searchRestaurant:[],
        //reject
        error:''

    },
    //to change the state,have to call extrareducer 
    extraReducers:(builder)=>{
builder.addCase(fetchRestaurant.pending,(state)=>{
state.loading = true
    })

    builder.addCase(fetchRestaurant.fulfilled,(state,action)=>{
        state.loading=false
        state.allRestaurant = action.payload
        state.searchRestaurant = action.payload
        state.error = ""
    })
    builder.addCase(fetchRestaurant.rejected,(state,action)=>{
        state.loading = false
        state.allRestaurant = ""
        state.error = action.error.message
    })


    },
reducers:{

    search:(state,action)=>{
        state.allRestaurant= state.searchRestaurant.filter((items)=>items.neighborhood.toLowerCase().includes(action.payload))
    }
}

})


export const {search} = restaurantSlice.actions
export default restaurantSlice.reducer