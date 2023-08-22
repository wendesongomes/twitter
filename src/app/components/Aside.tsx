'use client'

import HomeIcon from '@mui/icons-material/Home'
import SearchIcon from '@mui/icons-material/Search'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import VerifiedIcon from '@mui/icons-material/Verified'
import ViewTimelineIcon from '@mui/icons-material/ViewTimeline'
import HistoryEduIcon from '@mui/icons-material/HistoryEdu'
import Image from 'next/image'

export default function Aside(props: { toggleActive: () => void }) {
  return (
    <div className="text-white flex flex-col justify-between sm:px-5 py-3 h-screen lg:w-4/12 min-w-[50px] lg:items-end items-center top-0 sticky">
      <div className="flex flex-col gap-3 w-5/12 min-w-[50px] lg:min-w-[200px] max-w-[280px]">
        <div className="flex w-10">
          <div className="flex items-center justify-center cursor-pointer p-2 hover:bg-stone-800 rounded-full">
            <Image src={'/logo-x.png'} width={25} height={25} alt="" />
          </div>
        </div>
        <div className="flex gap-2 cursor-pointer hover:bg-stone-800 rounded-full items-center w-10 lg:w-full p-2">
          <HomeIcon />
          <a href="#" className="font-bold text-lg lg:block hidden">
            Pagina Inicial
          </a>
        </div>
        <div className="flex gap-2 cursor-pointer hover:bg-stone-800 rounded-full items-center w-10 lg:w-full p-2">
          <SearchIcon />
          <a href="#" className="font-medium text-lg lg:block hidden">
            Explorar
          </a>
        </div>
        <div className="flex gap-2 cursor-pointer hover:bg-stone-800 rounded-full items-center w-10 lg:w-full p-2">
          <NotificationsNoneIcon />
          <a href="#" className="font-medium text-lg lg:block hidden">
            Notificacoes
          </a>
        </div>
        <div className="flex gap-2 cursor-pointer hover:bg-stone-800 rounded-full items-center w-10 lg:w-full p-2">
          <MailOutlineIcon />
          <a href="#" className="font-medium text-lg lg:block hidden">
            Mensagens
          </a>
        </div>
        <div className="flex gap-2 cursor-pointer hover:bg-stone-800 rounded-full items-center w-10 lg:w-full p-2">
          <ViewTimelineIcon />
          <a href="#" className="font-medium text-lg lg:block hidden">
            Listas
          </a>
        </div>
        <div className="flex gap-2 cursor-pointer hover:bg-stone-800 rounded-full items-center w-10 lg:w-full p-2">
          <BookmarkBorderIcon />
          <a href="#" className="font-medium text-lg lg:block hidden">
            Itens Salvos
          </a>
        </div>
        <div className="flex gap-2 cursor-pointer hover:bg-stone-800 rounded-full items-center w-10 lg:w-full p-2">
          <VerifiedIcon />
          <a href="#" className="font-medium text-lg lg:block hidden">
            Verificadas
          </a>
        </div>
        <div className="flex gap-2 cursor-pointer hover:bg-stone-800 rounded-full items-center w-10 lg:w-full p-2">
          <PersonOutlineIcon />
          <a href="#" className="font-medium text-lg lg:block hidden">
            Perfil
          </a>
        </div>
        <div className="flex gap-2 cursor-pointer hover:bg-stone-800 rounded-full items-center w-10 lg:w-full p-2">
          <MoreHorizIcon className="border-2 rounded-full" />
          <a href="#" className="font-medium text-lg lg:block hidden">
            Mais
          </a>
        </div>
        <button
          onClick={props.toggleActive}
          className="font-medium flex justify-center items-center gap-2 text-white text-sm bg-[#4e84f8] rounded-full w-10 lg:w-full mb-2 py-3"
        >
          <HistoryEduIcon className="text-base " />
          <p className="lg:block hidden">Postar</p>
        </button>
      </div>

      <div className="flex flex-col gap-3 w-5/12 min-w-[50px] lg:min-w-[200px] max-w-[280px]">
        <div className="flex w-full justify-between items-center hover:bg-stone-800 rounded-full cursor-pointer">
          <div className="flex items-center lg:gap-3 p-2">
            <Image
              src="/fotoPerfil.jpg"
              width={40}
              height={40}
              alt="Foto Perfil"
              className="rounded-full"
            />
            <div>
              <p className="font-medium text-sm lg:flex hidden">Wendeson</p>
              <p className="font-light text-sm lg:flex hidden">@WendesonJS</p>
            </div>
          </div>
          <p className="mb-2 mr-2 lg:flex hidden">...</p>
        </div>
      </div>
    </div>
  )
}
