import { createSlice , createAsyncThunk  } from '@reduxjs/toolkit';
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    post:[],
    isLoading: false,
    error: null,
}

// action here...
export const allPost = createAsyncThunk('post/allPost', async () => {
    try {
        const response = await axios.get('http://localhost:30001/Posts');
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch posts.');
    }
});

export const newPost = createAsyncThunk('post/newPost', async (postobject) => {
    try {
        const newPostData = {
            id: uuidv4(), 
            ...postobject
          };
        const response = await axios.post('http://localhost:30001/Posts',newPostData);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch posts.');
    }
});


const PostSlice = createSlice({
    name:"post",
    initialState:initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(allPost.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(allPost.fulfilled, (state, action) => {
                state.isLoading = false;
                state.post = action.payload;
            })
            .addCase(allPost.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            .addCase(newPost.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(newPost.fulfilled, (state, action) => {
                state.isLoading = false;
                state.post = action.payload;
            })
            .addCase(newPost.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    }
})

export default PostSlice.reducer;