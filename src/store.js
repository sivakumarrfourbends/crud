import { configureStore } from '@reduxjs/toolkit'
import { middlewareLocalstorage, preloadedLocalstorage } from './features/users/userSlice';
import usersReducer from './features/users/userSlice';


export const store = configureStore({
  reducer: {
    users: usersReducer
  },
  preloadedState: preloadedLocalstorage(),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(middlewareLocalstorage),
})