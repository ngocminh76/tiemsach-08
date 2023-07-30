import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/sildes/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})