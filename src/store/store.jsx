import { configureStore } from '@reduxjs/toolkit'
import movieReducers from './reducers/movieSlice'
import tvshowsReducers from './reducers/tvSilce'
import personReducers from './reducers/personSlice'


export const store = configureStore({
  reducer: {
    movie:movieReducers,
    tv:tvshowsReducers,
    person:personReducers
  },
})