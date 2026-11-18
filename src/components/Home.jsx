
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

// Import these from your paste slice
import { addToPastes, updateToPastes } from '../redux/PasteSlice'

const Home = () => {

  const [title, setTitle] = useState('')
  const [value, setValue] = useState('')

  const [searchParams, setSearchParams] = useSearchParams()

  const pasteId = searchParams.get("pasteId")

  const dispatch = useDispatch()

  const allPastes = useSelector((state)=> state.paste.pastes)

  useEffect(() => {
  if (pasteId) {
    const paste = allPastes.find((p) => p._id === pasteId)

    if (paste) {
      setTitle(paste.title)
      setValue(paste.content)
    }
  }
}, [pasteId, allPastes])
  

  function createpaste() {

    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      date: new Date().toISOString()
    }

    if (pasteId) {
      // Update paste
      dispatch(updateToPastes(paste))
    }
    else {
      // Create paste
      dispatch(addToPastes(paste))
    }


    // Clear all fields
    setTitle('')
    setValue('')
    setSearchParams({})
}

  return (
    <div >
  

      <div className=' home-form-row flex gap-5 justify-center items-center'>

        <input
          className='home-title-input mt-5 border-2 border-white rounded-md p-2 w-[60%] text-[#D4AF37] bg-black'
          type="text"
          placeholder='enter title here'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button
          className=' home-create-btn mt-5 p-2 bg-[linear-gradient(135deg,#60a5fa_0%,#2563eb_50%,#1d4ed8_100%)] text-white border border-white/30 rounded-xl shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),0_5px_20px_rgba(37,99,235,0.35)] transition-all duration-300 ease-in-out hover:-translate-y-[3px] hover:shadow-[0_8px_28px_rgba(59,130,246,0.5)]hover:border-blue-700'
          onClick={createpaste}
        >
          {pasteId ? "Update My Paste" : "Create My Paste"}
        </button>

      </div>

      <div>
        <textarea
          className=' home-textarea mt-5 border-2 border-white rounded-md p-4 w-[80%] bg-black'
          //  bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.20),transparent_35%),radial-gradient(circle_at_80%_90%,rgba(124,58,237,0.15),transparent_35%),linear-gradient(180deg,#a5c8ed,#456e90,#346fb7)] text-black 
           
          
          placeholder='enter your paste here '
          value={value}
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        />
      </div>

    </div>
  )
}

export default Home
