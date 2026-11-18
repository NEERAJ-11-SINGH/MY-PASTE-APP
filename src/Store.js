import { configureStore } from '@reduxjs/toolkit'
import PasteSlicereducer from './redux/PasteSlice'

export const store = configureStore({
  reducer: {
     paste: PasteSlicereducer
  }
})