import CloseIcon from '@mui/icons-material/Close'
import ImageIcon from '@mui/icons-material/Image'
import GifBoxIcon from '@mui/icons-material/GifBox'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt'
import WorkHistoryIcon from '@mui/icons-material/WorkHistory'
import LocationOnIcon from '@mui/icons-material/LocationOn'

import Image from 'next/image'
import React from 'react'

export default function Modal(props) {
  const modalVisibility = () => {
    return props.modalVisibility ? ' flex' : ' hidden'
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (props.value !== undefined && props.setValue !== undefined) {
      props.setTodos([
        ...props.todos,
        {
          text: props.value,
          isLiked: false,
        },
      ])
      props.setValue('')
    }
  }

  return (
    <div
      className={
        `w-[600px] bg-stone-900 absolute mt-20 left-0 right-0 top-1/4 rounded-xl m-auto -translate-y-2/4 z-10` +
        modalVisibility()
      }
    >
      <div className="w-full h-full flex flex-col justify-around">
        <button
          onClick={props.toggleActive}
          className="flex justify-center items-center rounded-full w-5 h-5 m-4"
        >
          <CloseIcon className="m-3 text-white" />
        </button>

        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault()
            handleSubmit(e)
          }}
          className="flex flex-col text-white"
        >
          <div className="flex items-start">
            <Image
              src="/fotoPerfil.jpg"
              width={40}
              height={40}
              alt="Foto Perfil"
              className="rounded-full m-5"
            />
            <textarea
              rows={10}
              value={props.value}
              onChange={(e) => props.setValue(e.target.value)}
              placeholder="O que está acontecendo?"
              className="bg-stone-900 w-5/6 mt-5 outline-none break-all resize-none"
            />
          </div>

          <div className="flex justify-between items-center border-t-[1px] py-3 border-stone-700">
            <div className="ml-4 flex gap-3 justify-center items-center">
              <ImageIcon className="text-base cursor-pointer text-blue-400" />
              <GifBoxIcon className="text-base cursor-pointer text-blue-400" />
              <FormatListBulletedIcon className="text-base cursor-pointer text-blue-400" />
              <SentimentSatisfiedAltIcon className="text-base cursor-pointer text-blue-400" />
              <WorkHistoryIcon className="text-base cursor-pointer text-blue-400" />
              <LocationOnIcon className="text-base cursor-pointer text-blue-900" />
            </div>
            <button
              type="submit"
              disabled={props.disabledButtons}
              onClick={props.toggleActive}
              className="font-bold disabled:bg-[#3f89dd5e] disabled:text-[#ffffff7e] text-white text-sm py-2 px-5 bg-blue-400 rounded-2xl mb-2 mr-4 hover:bg-blue-500"
            >
              Postar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}