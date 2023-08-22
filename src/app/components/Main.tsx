import Image from 'next/image'
import ImageIcon from '@mui/icons-material/Image'
import GifBoxIcon from '@mui/icons-material/GifBox'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt'
import WorkHistoryIcon from '@mui/icons-material/WorkHistory'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import ChatIcon from '@mui/icons-material/Chat'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FileUploadIcon from '@mui/icons-material/FileUpload'
import EqualizerIcon from '@mui/icons-material/Equalizer'
import RepeatIcon from '@mui/icons-material/Repeat'
import DeleteIcon from '@mui/icons-material/Delete'
import FavoriteIcon from '@mui/icons-material/Favorite'
import React from 'react'

interface Todo {
  text: string
  isLiked: boolean
  isUserModalOpen: boolean
}

interface Props {
  todos: Todo[]
  setTodos: (todos: Todo[]) => void
  value: string
  setValue: (value: string) => void
  disabledButtons: boolean
}

export default function Main(props: Props) {
  const mouseEnter = (index: number) => {
    const updatedTodos = [...props.todos]
    updatedTodos[index].isUserModalOpen = true
    props.setTodos(updatedTodos)
  }

  const mouseExit = (index: number) => {
    const updatedTodos = [...props.todos]
    updatedTodos[index].isUserModalOpen = false
    props.setTodos(updatedTodos)
  }

  const deleteTodo = (key: number) => {
    const newTodo = props.todos.filter((item, index) => index !== key)
    props.setTodos(newTodo)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (props.value !== '') {
      props.setTodos([
        ...props.todos,
        {
          text: props.value,
          isLiked: false,
          isUserModalOpen: false,
        },
      ])
      props.setValue('')
    }
  }

  const changeLike = (id: number) => {
    const updateItems = props.todos.map((item, index) => {
      if (index === id) {
        return { ...item, isLiked: !item.isLiked }
      }
      return item
    })
    props.setTodos(updateItems)
  }

  return (
    <div className="text-white sm:min-w-[600px] w-full md:mr-0 mr-4 md:w-2/6 border-stone-700 border-r-[1px] border-l-[1px]">
      <div className="flex flex-col gap-1 w-full top-0 sticky backdrop-blur-md">
        <h1 className="font-bold text-xl mx-3 my-2">Página Inicial</h1>
        <div className="w-full flex stify-between border-b-[1px] border-stone-700">
          <div className="w-3/6 flex flex-col justify-center items-center font-bold hover:bg-stone-600">
            <input
              type="radio"
              name="forYou"
              id="forYou"
              defaultChecked
              className="w-0 h-0 checked:opacity-100 opacity-0 before:w-16 before:h-1 before:top-[110px] before:-ml-8 before:bg-blue-400 before:fixed before:rounded-md"
            />
            <label
              htmlFor="forYou"
              className="cursor-pointer w-full h-full p-5 flex justify-center items-center"
            >
              Para você
            </label>
          </div>
          <div className="w-3/6 flex flex-col justify-center items-center font-bold hover:bg-stone-600">
            <input
              type="radio"
              name="forYou"
              id="seguindo"
              className="w-0 h-0 checked:opacity-100 opacity-0 before:w-16 before:h-1 before:top-[110px] before:-ml-8 before:bg-blue-400 before:fixed before:rounded-md"
            />
            <label
              htmlFor="seguindo"
              className="cursor-pointer w-full h-full p-5 flex justify-center items-center"
            >
              Seguindo
            </label>
          </div>
        </div>
      </div>

      <form
        action=""
        onSubmit={(e) => handleSubmit(e)}
        className="border-b-[1px] border-stone-700 flex flex-col justify-between"
      >
        <div className="flex items-start mt-2">
          <Image
            src="/twitter/fotoPerfil.jpg"
            width={40}
            height={40}
            alt="Foto Perfil"
            className="rounded-full m-5"
          />
          <textarea
            value={props.value}
            onChange={(e) => props.setValue(e.target.value)}
            placeholder="O que está acontecendo?"
            className="bg-stone-950 w-full mt-5 outline-none break-all resize-y"
          />
        </div>
        <div className="flex justify-between">
          <div className="ml-20 flex gap-3 justify-center items-center">
            <ImageIcon className="text-base cursor-pointer text-blue-400" />
            <GifBoxIcon className="text-base cursor-pointer text-blue-400" />
            <FormatListBulletedIcon className="text-base cursor-pointer text-blue-400" />
            <SentimentSatisfiedAltIcon className="text-base cursor-pointer text-blue-400" />
            <WorkHistoryIcon className="text-base cursor-pointer text-blue-400" />
            <LocationOnIcon className="text-base cursor-pointer text-blue-900" />
          </div>
          <button
            type="submit"
            className="font-bold disabled:bg-[#3f89dd5e] disabled:text-[#ffffff7e] text-white text-sm py-2 px-5 bg-blue-400 rounded-2xl mb-2 mr-4 hover:bg-blue-500"
            disabled={props.disabledButtons}
          >
            Postar
          </button>
        </div>
      </form>

      <div className="flex flex-col-reverse">
        {props.todos.map(
          ({ text, isLiked, isUserModalOpen }: Todo, index: number) => (
            <div
              key={index}
              className="flex w-full items-start gap-3 p-3 border-b-[1px] border-stone-700"
            >
              <Image
                src={'/twitter/fotoPerfil.jpg'}
                width={35}
                height={35}
                alt="Perfil Replay"
                className=" rounded-full"
              />

              <div className="flex flex-col w-full">
                <div className="flex justify-between">
                  <div className="flex gap-2 items-center">
                    <a
                      onMouseEnter={() => mouseEnter(index)}
                      onMouseLeave={() => mouseExit(index)}
                      href="#"
                      className="font-bold hover:underline"
                    >
                      Wendeson
                    </a>
                    <div
                      className={`absolute mt-56 bg-stone-950 p-5 gap-3 shadow-stone-800 shadow-2xl rounded-lg flex-col ${
                        isUserModalOpen ? 'flex' : 'hidden'
                      }`}
                    >
                      <Image
                        src="/twitter/fotoPerfil.jpg"
                        width={60}
                        height={60}
                        alt="Foto Perfil"
                        className="rounded-full "
                      />
                      <div>
                        <p className="font-bold hover:underline text-sm">
                          Wendeson
                        </p>
                        <p className="font-light text-xs text-stone-500 cursor-pointer">
                          @WendesonJS
                        </p>
                      </div>
                      <p className="text-xs">FrontEnd Developer</p>
                      <div className="flex gap-6 text-xs">
                        <div className="flex gap-1">
                          <p className="font-bold">98</p>
                          <p>Seguindo</p>
                        </div>
                        <div className="flex gap-1">
                          <p className="font-bold">66</p>
                          <p>Seguidores</p>
                        </div>
                      </div>
                    </div>
                    <p className="font-light text-sm text-stone-500 cursor-pointer">
                      @WendesonJS
                    </p>
                  </div>
                  <button
                    onClick={() => deleteTodo(index)}
                    className="cursor-pointer text-[#ffffff80] hover:text-[#f34646]"
                  >
                    <DeleteIcon className="text-base" />
                  </button>
                </div>

                <p className="break-all whitespace-pre-wrap text-sm">{text}</p>

                <div className="flex justify-between mt-3">
                  <div className="p-1 rounded-full cursor-pointer hover:bg-[#4377e725] text-[#ffffff80] hover:text-[#46bcf3] ">
                    <ChatIcon className="text-xl rounded-full" />
                  </div>
                  <div className="p-1 flex items-center rounded-full cursor-pointer hover:bg-[#56e74325] text-[#ffffff80] hover:text-[#46f34f] ">
                    <RepeatIcon className="text-xl rounded-full" />
                  </div>
                  <button
                    onClick={(e) => changeLike(index)}
                    className="p-1 rounded-full cursor-pointer hover:bg-[#e7434325] text-[#ffffff80] hover:text-[#f34646] "
                  >
                    {isLiked ? (
                      <FavoriteIcon className="text-red-700" />
                    ) : (
                      <FavoriteBorderIcon />
                    )}
                  </button>
                  <div className="p-1 rounded-full cursor-pointer hover:bg-[#4377e725] text-[#ffffff80] hover:text-[#46bcf3] ">
                    <EqualizerIcon className="text-xl rounded-full" />
                  </div>
                  <div className="p-1 rounded-full cursor-pointer hover:bg-[#4377e725] text-[#ffffff80] hover:text-[#46bcf3] ">
                    <FileUploadIcon className="text-xl rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  )
}
