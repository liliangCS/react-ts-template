import { configureStore } from "@reduxjs/toolkit"

import homeReducer from "./modules/home"
import aboutReducer from "./modules/about"

const store = configureStore({
  reducer: {
    home: homeReducer,
    about: aboutReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
