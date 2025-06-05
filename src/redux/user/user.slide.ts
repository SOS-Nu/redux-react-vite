import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IUser {
  id: number;
  name: string;
  email: string;
}
const initialState: {
  listUser: IUser[];
  isCreateSuccess: boolean;
  isEditSuccess: boolean;
  isDeleteSuccess: boolean;
} = {
  listUser: [],
  isCreateSuccess: false,
  isEditSuccess: false,
  isDeleteSuccess: false,
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

export const editUser = createAsyncThunk(
  "users/editUser",
  async (payload: IUser, thunkAPI) => {
    const res = await fetch(`http://localhost:8000/users/${payload.id}`, {
      method: "PUT",
      body: JSON.stringify({
        name: payload.name,
        email: payload.email,
      }),
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

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (payload: IUser, thunkAPI) => {
    const res = await fetch(`http://localhost:8000/users/${payload.id}`, {
      method: "DELETE",
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
    resetEdit(state) {
      state.isEditSuccess = false;
    },
    resetDelete(state) {
      state.isDeleteSuccess = false;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchListUsers.fulfilled, (state, action) => {
      // Add user to the state array
      state.listUser = action.payload;
    }),
      builder.addCase(editUser.fulfilled, (state, action) => {
        // Add user to the state array
        state.isEditSuccess = true;
      }),
      builder.addCase(createNewUser.fulfilled, (state, action) => {
        // Add user to the state array
        state.isCreateSuccess = true;
      });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      // Add user to the state array
      state.isDeleteSuccess = true;
    });
  },
});

// Action creators are generated for each case reducer function
export const { resetCreate, resetEdit, resetDelete } = userSlide.actions;

export default userSlide.reducer;
