import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        userInfo: null,
    },
    reducers: {
        setUserInfo: (state, action) => {
            state.userInfo = action.payload;
        },
        removeUserInfo: (state) => {
            state.userInfo = null;
        },
    },
});

export const { setUserInfo, removeUserInfo } = authSlice.actions;
export default authSlice.reducer;
