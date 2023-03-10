import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {

    addUser: (state, action) => {
      state.push(action.payload)
      // localStorage.setItem("userDetails", state);
      // localStorage.setItem('userDetails', state.push(action.payload));
    },
    editUser: (state, action) => {
      const { id, name, email } = action.payload;
      const existingUser = state.find(user => user.id === id);
      if (existingUser) {
        existingUser.name = name;
        existingUser.email = email;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const existingUser = state.find(user => user.id === id);
      if (existingUser) {
        return state.filter(user => user.id !== id);
      }
    }
  },


});
//MIDDLEWARE
export const middlewareLocalstorage = ({ getState }) => {
  return next => action => {
    const result = next(action);
    localStorage.setItem('applicationState', JSON.stringify(getState()));
    return result;
  };
};
//preloaded
export const preloadedLocalstorage = () => {
  if (localStorage.getItem('applicationState') !== null) {
    return JSON.parse(localStorage.getItem('applicationState')); // re-hydrate the store
  }
};

export const { addUser, editUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
// export default localStorageMiddleware,reHydrateStore;

