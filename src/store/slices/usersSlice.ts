import { createSlice } from "@reduxjs/toolkit";

type User = {
    id: string;
    name: string;
    email: string
};

type UsersState = {
    currentUser: User | null;
};

const initialState: UsersState = {
    currentUser: null,
};

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUser: (users, action) => {
            users.currentUser = action.payload;

            console.log(action.payload)
        }
    }
},);

export const { setUser } = usersSlice.actions;
export const selectUsers = (state: { users: UsersState }) => state.users.currentUser;
export default usersSlice.reducer;