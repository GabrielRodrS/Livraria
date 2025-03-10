"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { FileSpreadsheet } from "lucide-react";

import Header from "../../Components/Header";

export default function InterfaceP() {
  const router = useRouter();
  const [quantPag, setQuantPag] = useState(0);

  return (
    <Header>
      <div className="flex flex-row h-9/10">
        <nav className="h-full bg-white text-black w-2/13 flex flex-col justify-between items-center  border-purple-800 pt-5">
          <div className="flex flex-col space-y-2 h-5/10 items-center w-full">
            <p className="text-xl font-bold text-purple-800 mb-4">Gêneros</p>
            <div className="grid grid-cols-2 grid-rows-10 w-full h-3/4 overflow-y-auto px-2 pb-10 gap-10 rounded-md text-black border-y-3 font-bold">
              {[
                "Fantasia",
                "Ficção científica",
                "Romance",
                "Terror",
                "Suspense",
                "Aventura e ação",
                "Distopia",
                "Biografia",
                "Autoajuda",
                "Ciência e Tecnologia",
                "História",
                "Filosofia",
                "Poesia",
                "Infantil",
                "Graphic Novel/HQs",
                "Religioso",
              ].map((genero, index) => (
                <div
                  key={index}
                  className={`p-2 text-center cursor-pointer hover:text-amber-600 ${
                    genero.length > 10 ? "row-span-2" : ""
                  }`}
                >
                  {genero}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col space-y-2 h-3/10 items-center w-full">
            <p className="text-xl font-bold text-purple-800 mb-4"> Preço</p>
            <div className="grid grid-rows-3 grid-cols-2 border-y-3 gap-3 py-2 text-black rounded-md w-full h-3/5 font-bold">
              {[
                "R$ 20,00",
                "R$ 30,00",
                "R$ 40,00",
                "R$ 50,00",
                "R$ 100,00",
                "R$ 500,00",
              ].map((preco, index) => (
                <div
                  key={index}
                  className="text-center cursor-pointer hover:text-amber-600"
                >
                  {preco}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col space-y-2 items-center h-2/10">
            <p className="text-xl font-bold mt-3 text-purple-800">
              Quantidade de páginas
            </p>
            <input
              type="range"
              min="1"
              max="1000"
              className="w-2/3 accent-purple-800"
              value={quantPag}
              onChange={(e) => setQuantPag(Number(e.target.value))}
            />
            {quantPag !== 0 && (
              <div className="flex flex-row items-center space-x-2 mt-1">
                <FileSpreadsheet />
                <p>{quantPag}</p>
                <button
                  type="button"
                  className="py-1 px-2 rounded-md bg-green-300 cursor-pointer hover:text-white"
                >
                  Buscar
                </button>
              </div>
            )}
          </div>
        </nav>

        <main className="h-9/10 w-11/13">
          <nav className="w-full h-1/10 bg-amber-400 flex flex-row items-center justify-evenly text-black font-bold">
            {[
              "Mais vendidos",
              "Menores preços",
              "Maiores preços",
              "Quantidade disponível",
              "Disponíveis recentemente",
            ].map((item, index) => (
              <button
                key={index}
                className="cursor-pointer hover:text-purple-800"
              >
                <p>{item}</p>
              </button>
            ))}
          </nav>
          <div className="text-black w-full h-full overflow-y-auto grid grid-cols-4 gap-5 text-center justify-center px-6 pt-6">
            <div className="h-70 bg-gray-100 "></div>
            <div className="h-70 bg-gray-100 "></div>
            <div className="h-70 bg-gray-100 "></div>
            <div className="h-70 bg-gray-100 "></div>
            <div className="h-70 bg-gray-100 "></div>
            <div className="h-70 bg-gray-100 "></div>
            <div className="h-70 bg-gray-100 "></div>
            <div className="h-70 bg-gray-100 "></div>
            <div className="h-70 bg-gray-100 "></div>
            <div className="h-70 bg-gray-100 "></div>
            <div className="h-70 bg-gray-100 "></div>
          </div>
        </main>
      </div>
    </Header>
  );
}
