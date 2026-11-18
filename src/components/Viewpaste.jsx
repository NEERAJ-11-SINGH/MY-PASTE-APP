import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'



const Viewpaste = () => {
 
   const {id} = useParams()
  
   const allPastes = useSelector((state)=> state.paste.pastes)

   const paste = allPastes.filter((p)=> p._id === id)[0]

   console.log("final paste: ",paste)


  return (
    <div>

      <div className='view-title-row flex gap-5 justify-center items-center'>

        <input
          className='view-title-input mt-5 border-2 border-black rounded-md p-2 w-[25%]'
          type="text"
          placeholder='enter title here'
          value={paste.title}
          disabled
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* <button
          className='mt-5 border-2 border-black rounded-xl p-2 text-white bg-blue-600 font-bold hover:bg-blue-800 hover:border-blue-700'
          onClick={createpaste}
        >
          {pasteId ? "Update My Paste" : "Create My Paste"}
        </button> */}

      </div>

      <div>
        <textarea
          className='view-textarea mt-5 border-2 border-black rounded-md p-4 min-w-[500px]'
          placeholder='enter your paste here'
          value={paste.content}
          disabled
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        />
      </div>

    </div>
  )
}

export default Viewpaste