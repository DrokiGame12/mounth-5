import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk(
  "getPosts",
  async function (info, { dispatch }) {
    try {
      dispatch(setLoading(true));

      const responce = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
			
			// проверка на завершение
      if (responce.status >= 200 || responce.status <= 204) {
        const posts = await responce.json();
        dispatch(setLoading(false));
        dispatch(getPostsInfo(posts));
      }
    } catch (error) {
      throw error;
    } finally {
    }
  }
);

const postSlice = createSlice({
  name: "postSlice",
  initialState: {
    posts: [],
    loading: false,
  },
  reducers: {
    getPostsInfo: (state, action) => {
      state.posts = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { getPostsInfo, setLoading } = postSlice.actions;

export default postSlice.reducer;
