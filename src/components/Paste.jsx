
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { removeFromPastes } from '../redux/PasteSlice'
import { Pencil, Eye, Trash2, Share2, Copy } from 'lucide-react'

const Paste = () => {

  const pastes = useSelector((state) => state.paste.pastes)

  const [search, setSearch] = useState("")

  const dispatch = useDispatch()

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(search.toLowerCase())
  )

  function handledelete(pasteId) {
    dispatch(removeFromPastes(pasteId))
  }

  return (
    <div className="w-full">

      {/* Search Bar */}
      <div className="flex justify-center">
        <input
          className=" paste-search p-3 border-2 rounded-xl mt-5 w-full max-w-[900px] border-black text-black font-bold"
          type="text"
          placeholder="Search here"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className=" paste-container mt-2 border-2 border-black p-5">

        <h1>ALL PASTES</h1>

        {/* Paste Cards */}
        <div className=" paste-card flex flex-col gap-3">

          {filteredData.length > 0 ? (

            filteredData.map((paste) => {

              return (
                <div
                  className="border-2 border-black rounded-xl p-3"
                  key={paste._id}
                >

                  <div className=" paste-card-layout flex flex-col sm:flex-row justify-between items-start gap-4">

                    {/* Left Side: Title and Content */}
                    <div className="paste-card-content flex-1 min-w-0 w-full ">

                      <h1 className="text-2xl font-bold m-2 p-2 border-b-2 border-white/30 w-fit text-black truncate">
                        {paste.title}
                      </h1>

                      <p className="text-base whitespace-pre-wrap break-words text-left overflow-hidden line-clamp-2 text-white">
                        {paste.content}
                      </p>

                    </div>

                    {/* Right Side: Buttons and Date */}
                    <div className="paste-card-side flex flex-col items-end gap-3 shrink-0">

                      {/* Buttons */}
                      <div className="paste-card-buttons flex justify-end gap-3 flex-wrap">

                        <button className="bg-blue-500 text-white px-3 py-1.5 rounded-xl hover:bg-blue-600 transition">
                          <a href={`/?pasteId=${paste._id}`}>
                            <Pencil size={17} />
                          </a>
                        </button>

                        <button className="bg-green-500 text-white px-3 py-1.5 rounded-xl hover:bg-green-600 transition">
                          <a href={`/paste/${paste._id}`}>
                            <Eye size={17} />
                          </a>
                        </button>

                        <button
                          className="bg-red-500 text-white px-3 py-1.5 rounded-xl hover:bg-red-600 transition"
                          onClick={() => handledelete(paste._id)}
                        >
                          <Trash2 size={17} />
                        </button>

                        <button
                          className="bg-purple-500 text-white px-3 py-1.5 rounded-xl hover:bg-purple-600 transition"
                          onClick={async () => {

                            const shareUrl =
                              `${window.location.origin}/paste/${paste._id}`

                            try {
                              await navigator.clipboard.writeText(shareUrl)
                              toast.success("Link copied successfully!")
                            } catch (error) {
                              toast.error("Unable to copy link")
                            }

                          }}
                        >
                          <Share2 size={17} />
                        </button>

                        <button
                          className="bg-yellow-500 text-white px-3 py-1.5 rounded-xl hover:bg-yellow-600 transition"
                          onClick={async () => {
                            try {
                              await navigator.clipboard.writeText(paste.content)
                              toast.success("Copied to clipboard")
                            } catch (error) {
                              toast.error("Unable to copy content")
                            }
                          }}
                        >
                          <Copy size={17} />
                        </button>

                      </div>

                      {/* Date */}
                      <div className="paste-card-date text-sm text-gray-300 text-right">

                        {new Date(paste.date).toLocaleString("en-IN", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: true
                        })}

                      </div>

                    </div>

                  </div>

                </div>
              )
            })

          ) : (

            <h2 className="text-center text-xl font-semibold mt-10">
              No Paste Found
            </h2>

          )}

        </div>

      </div>

    </div>
  )
}

export default Paste
