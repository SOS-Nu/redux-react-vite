import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IUser {
  id: number;
  name: string;
  email: string;
}
const initialState: {
  listUser: IUser[];
  isCreateSuccess: boolean;
} = {
  listUser: [],
  isCreateSuccess: false,
};

interface IUserPayload {
  email: string;
  name: string;
}

// First, create the thunk
export const fetchListUsers = createAsyncThunk(
  "users/fetchListUsers",
  async (userId: number, thunkAPI) => {
    const res = await fetch("http://localhost:8000/users");
    const data = await res.json();
    return data;
  }
);
export const createNewUser = createAsyncThunk(
  "users/createNewUser",
  async (payload: IUserPayload, thunkAPI) => {
    const res = await fetch("http://localhost:8000/users", {
      method: "POST",
      body: JSON.stringify({ ...payload }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log("check ", data);
    thunkAPI.dispatch(fetchListUsers());
    return data;
  }
);

export const userSlide = createSlice({
  name: "counter",
  initialState,
  reducers: {
    resetCreate(state) {
      state.isCreateSuccess = false;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchListUsers.fulfilled, (state, action) => {
      // Add user to the state array
      state.listUser = action.payload;
    }),
      builder.addCase(createNewUser.fulfilled, (state, action) => {
        // Add user to the state array
        state.isCreateSuccess = true;
      });
  },
});

// Action creators are generated for each case reducer function
export const { resetCreate } = userSlide.actions;

export default userSlide.reducer;
