import SearchIcon from '@mui/icons-material/Search'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className="flex-col w-2/6 md:flex hidden ">
      <div className="text-white items-center xl:flex hidden top-0 sticky bg-stone-950">
        <SearchIcon className="absolute ml-6 text-stone-500 " />
        <input
          type="text"
          placeholder="Search"
          className="bg-stone-800 min-w-3/6 w-[300px] m-4 placeholder:text-stone-500 outline-none rounded-full p-2 pl-10 focus:bg-stone-950 focus:border-blue-400 focus:border"
        />
      </div>

      <div className="bg-stone-800 min-w-3/6 w-[300px] m-4 xl:block hidden rounded-xl text-white">
        <h1 className="font-bold text-lg p-3">Quem seguir</h1>
        <div className="flex gap-5 justify-between items-center p-3">
          <div className="flex gap-2">
            <Image
              src={'/fotoPerfil_Leo.jpg'}
              width={40}
              height={30}
              alt="Foto do leo"
              className="rounded-full"
            />
            <div className="flex flex-col">
              <p className="font-bold">leozin</p>
              <p className="font-light text-xs">@leozindamaldade</p>
            </div>
          </div>
          <button className="bg-stone-200 text-black px-3 py-2 rounded-full text-xs font-bold hover:bg-stone-400">
            Seguir
          </button>
        </div>

        <div className="flex gap-5 justify-between items-center p-3">
          <div className="flex gap-2">
            <Image
              src={'/fotoPerfil_Leo.jpg'}
              width={40}
              height={30}
              alt="Foto do leo"
              className="rounded-full"
            />
            <div className="flex flex-col">
              <p className="font-bold">leozin</p>
              <p className="font-light text-xs">@leozindamaldade</p>
            </div>
          </div>
          <button className="bg-stone-200 text-black px-3 py-2 rounded-full text-xs font-bold hover:bg-stone-400">
            Seguir
          </button>
        </div>

        <div className="flex gap-5 justify-between items-center p-3">
          <div className="flex gap-2">
            <Image
              src={'/ImagePerfil_DomLucaz.png'}
              width={40}
              height={30}
              alt="Foto do leo"
              className="rounded-full"
            />
            <div className="flex flex-col">
              <p className="font-bold">DomLucaz</p>
              <p className="font-light text-xs">@DomLucaz</p>
            </div>
          </div>
          <button className="bg-stone-200 text-black px-3 py-2 rounded-full text-xs font-bold hover:bg-stone-400">
            Seguir
          </button>
        </div>
      </div>
    </div>
  )
}
