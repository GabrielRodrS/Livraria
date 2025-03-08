"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import {
  Search,
  Bell,
  ShoppingCart,
  Album,
  User,
  SlidersHorizontal,
  FileSpreadsheet,
} from "lucide-react";

export default function InterfaceP() {
  const router = useRouter();
  const [quantPag, setQuantPag] = useState(0);
  const [filtros, setFiltros] = useState(null);

  return (
    <div className="h-screen w-screen bg-gray-200">
      <header className="h-1/10 bg-purple-800 flex flex-row justify-between items-center px-10">
        <button
          type="button"
          className="cursor-pointer"
          onClick={() => {
            setFiltros(!filtros);
            router.push("/InterfaceP");
          }}
        >
          <img src="../../LogoNewBook.png" height={100} width={140}></img>
        </button>
        <button type="button" className="hover:text-yellow-400 cursor-pointer ">
          <div className="flex flex-col items-center space-y-1 ">
            <ShoppingCart height={30} width={30}></ShoppingCart>
            <p>Carrinho</p>
          </div>
        </button>
        <div className="w-2/7 h-4/7 bg-white rounded-xl text-black flex flex-row items-center px-2">
          <input
            type="text"
            placeholder="Buscar nome do livro ou autor"
            className="flex-grow mx-1 outline-none"
            maxLength={50}
          ></input>
          <button type="button ">
            <Search className="text-gray-800 ml-auto hover:text-yellow-400 cursor-pointer"></Search>
          </button>
        </div>
        <button type="button" className="hover:text-yellow-400 cursor-pointer">
          <Bell height={27} width={27}></Bell>
        </button>
        <button type="button" className="hover:text-yellow-400 cursor-pointer">
          <div className="flex flex-col items-center space-y-1">
            <Album height={30} width={30}></Album>
            <p>Compras</p>
          </div>
        </button>
        <button type="button">
          <div className="flex flex-col items-center space-y-1">
            <User height={30} width={30}></User>
            <p>Minha conta</p>
          </div>
        </button>
      </header>
      <div className="flex flex-row h-9/10">
        {filtros == true && (
          <nav className="h-full bg-white text-black w-1/5 flex flex-col justify-between items-center border-r-4 border-purple-800 pt-5">
            <div className="flex flex-col space-y-2 h-5/10 items-center w-full">
              <p className=" text-xl font-bold text-purple-800">Gêneros</p>
              <div className="grid grid-cols-2 grid-rows-10 w-full h-3/4 overflow-y-auto px-2 pb-10 gap-10  rounded-md text-black border-y-3 font-bold">
                <div className="p-2 text-center cursor-pointer hover:text-yellow-400 ">
                  Fantasia
                </div>
                <div className="p-2 text-center cursor-pointer hover:text-yellow-400 row-span-2">
                  Ficção científica
                </div>
                <div className="p-2 text-center cursor-pointer hover:text-yellow-400">
                  Romance
                </div>
                <div className="p-2 text-center cursor-pointer hover:text-yellow-400">
                  Terror
                </div>
                <div className="p-2 text-center cursor-pointer hover:text-yellow-400">
                  Suspense
                </div>
                <div className="p-2 text-center cursor-pointer hover:text-yellow-400 row-span-2">
                  Aventura e ação
                </div>
                <div className="p-2 text-center cursor-pointer hover:text-yellow-400">
                  Distopia
                </div>
                <div className="p-2 text-center cursor-pointer hover:text-yellow-400">
                  Biografia
                </div>
                <div className="p-2 text-center cursor-pointer hover:text-yellow-400">
                  Autoajuda
                </div>
                <div className="p-2 text-center cursor-pointer hover:text-yellow-400 row-span-2">
                  Ciência e Tecnologia
                </div>
                <div className="p-2 text-center cursor-pointer hover:text-yellow-400">
                  História
                </div>
                <div className="p-2 text-center cursor-pointer hover:text-yellow-400">
                  Filosofia
                </div>
                <div className="p-2 text-center cursor-pointer hover:text-yellow-400">
                  Poesia
                </div>
                <div className="p-2 text-center cursor-pointer hover:text-yellow-400">
                  Infantil
                </div>
                <div className="p-2 text-center cursor-pointer hover:text-yellow-400">
                  Graphic Novel/HQs
                </div>
                <div className="p-2 text-center cursor-pointer hover:text-yellow-400">
                  Religioso
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-2 h-3/10 items-center w-full">
              <p className=" text-xl font-bold text-purple-800">Preço</p>
              <div className="grid grid-rows-3 grid-cols-2 border-y-3 gap-3 py-2 text-black rounded-md w-full h-3/5 font-bold">
                <div className="text-center cursor-pointer hover:text-yellow-400">
                  R$ 20,00
                </div>
                <div className="text-center cursor-pointer hover:text-yellow-400">
                  R$ 30,00
                </div>
                <div className="text-center cursor-pointer hover:text-yellow-400">
                  R$ 40,00
                </div>
                <div className="text-center cursor-pointer hover:text-yellow-400">
                  R$ 50,00
                </div>
                <div className="text-center cursor-pointer hover:text-yellow-400">
                  R$ 100,00
                </div>
                <div className="text-center cursor-pointer hover:text-yellow-400">
                  R$ 500,00
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-2 items-center h-2/10">
              <p className=" text-xl font-bold mt-3 text-purple-800">
                Quantidade de páginas
              </p>
              <input
                type="range"
                min="1"
                max="1000"
                className="w-2/3 accent-purple-800"
                value={quantPag}
                onChange={(e) => {
                  setQuantPag(e.target.value);
                }}
              />

              {quantPag !== 0 && (
                <div className="flex flex-row items-center space-x-1">
                  <FileSpreadsheet></FileSpreadsheet>
                  <p>{quantPag}</p>
                </div>
              )}
            </div>
          </nav>
        )}
        <main className="h-9/10 w-full">
          <nav className="w-full h-1/10 bg-yellow-400 flex flex-row items-center justify-evenly text-black font-bold">
            <button
              type="button"
              className="cursor-pointer hover:text-purple-800"
              onClick={() => setFiltros(!filtros)}
            >
              <div className="flex flex-row space-x-2 items-center">
                <SlidersHorizontal height={30} width={30}></SlidersHorizontal>
                <p>Filtros</p>
              </div>
            </button>
            <button className="cursor-pointer hover:text-purple-800">
              <p>Mais vendidos</p>
            </button>
            <button className="cursor-pointer hover:text-purple-800">
              <p>Menores preços</p>
            </button>
            <button className="cursor-pointer hover:text-purple-800">
              <p>Maiores preços</p>
            </button>
            <button className="cursor-pointer hover:text-purple-800">
              <p>Maior disponibilidade</p>
            </button>
            <button className="cursor-pointer hover:text-purple-800">
              <p>Quantidade de páginas</p>
            </button>
          </nav>
        </main>
      </div>
    </div>
  );
}
