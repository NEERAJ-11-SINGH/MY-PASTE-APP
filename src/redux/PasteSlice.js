
import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'
import Paste from '../components/Paste'

const initialState = {
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : []
}

export const PasteSlice = createSlice({
  name: 'paste',

  initialState,

  reducers: {

    addToPastes: (state, action) => {

      const paste = action.payload

      state.pastes.push(paste)

      localStorage.setItem(
        "pastes",
        JSON.stringify(state.pastes)
      )

      toast.success("paste added successfully")
    },

    updateToPastes: (state, action) => {
     
       const paste = action.payload
       const index = state.pastes.findIndex((item) => item._id === paste._id)

       if (index >=0) {  
        state.pastes[index] = paste
        localStorage.setItem(
          "pastes",
          JSON.stringify(state.pastes)
        )
        toast.success("paste updated successfully")
       }

    },

    resetAllPastes: (state, action) => {

      state.pastes=[]
      localStorage.removeItem("pastes")
    },


    removeFromPastes: (state, action) => {

     const pasteId = action.payload

     console.log(Paste)
     const index = state.pastes.findIndex((item)=> item._id === pasteId)

      if (index >=0){
        state.pastes.splice(index,1)
        localStorage.setItem("pastes", JSON.stringify(state.pastes)
      )
      toast.success("paste remove successfully")
      }
    },

  },
})

export const {
  addToPastes,
  updateToPastes,
  resetAllPastes,
  removeFromPastes
} = PasteSlice.actions

export default PasteSlice.reducer
