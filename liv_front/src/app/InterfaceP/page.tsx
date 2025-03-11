"use client";

import { useState } from "react";
import { FileSpreadsheet } from "lucide-react";
import Image from "next/image";
import Header from "../../Components/Header";
import Livro from "../../Components/Livro";

export default function InterfaceP() {
  const [quantPag, setQuantPag] = useState(0);
  const [generoLivro, setGeneroLivro] = useState("");
  const [precoLivro, setPrecoLivro] = useState("");

  return (
    <Header>
      <div className="flex flex-row h-10/11">
        <nav className="h-full bg-white text-black w-2/13 flex flex-col justify-between items-center pt-5 border-r-2 border-black shadow-2xl">
          <div className="flex flex-col  h-7/12 items-center justify-start w-full">
            <p className="text-xl font-bold text-purple-800 border-b-3 border-purple-800">
              Gêneros
            </p>
            <div className="grid grid-cols-2 grid-rows-10 w-full h-full overflow-y-auto px-2  gap-5 rounded-md text-black  font-semibold">
              {[
                "Fantasia",
                "Ficção científica",
                "Romance",
                "Terror",
                "Suspense",
                "Aventura e ação",
                "Biografia",
                "Ciência e Tecnologia",
                "História",
                "Filosofia",
                "Poesia",
                "Infantil",
                "Graphic Novel/HQs",
                "Religioso",
              ].map((genero, index) => (
                <button
                  type="button"
                  onClick={() =>
                    generoLivro !== genero
                      ? setGeneroLivro(genero)
                      : setGeneroLivro("")
                  }
                  key={index}
                  className={`p-2 text-center cursor-pointer hover:text-amber-600 ${
                    genero.length > 10 ? "row-span-2" : ""
                  } ${
                    generoLivro === genero ? "text-amber-600" : "text-black"
                  }`}
                >
                  {genero}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col h-3/12 items-center w-full ">
            <p className="text-xl font-bold text-purple-800 border-b-3 border-purple-800 mb-3">
              Preço
            </p>
            <div className="grid grid-rows-3 grid-cols-2 text-black w-full h-full font-semibold">
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
                  className={`text-center cursor-pointer hover:text-amber-600 ${
                    precoLivro === preco ? "text-amber-600" : "text-black"
                  }`}
                  onClick={() =>
                    precoLivro !== preco
                      ? setPrecoLivro(preco)
                      : setPrecoLivro("")
                  }
                >
                  {preco}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col space-y-1 items-center justify-start h-2/12">
            <p className="text-xl font-bold text-purple-800 ">
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

        <main className="h-10/11 w-11/13">
          <nav className="w-full h-1/11 bg-amber-400 flex flex-row items-center justify-evenly text-black font-semibold">
            {[
              "Mais vendidos",
              "Menores preços",
              "Maiores preços",
              "Quantidade disponível",
              "Disponíveis recentemente",
            ].map((item, index) => (
              <button
                key={index}
                className="cursor-pointer hover:text-purple-900 h-full w-full border-b-1 border-black"
              >
                <p>{item}</p>
              </button>
            ))}
          </nav>
          <div className="text-gray-900 w-full h-full overflow-y-auto grid grid-cols-5 gap-5 text-center justify-center px-6 pt-6">
            <button className="cursor-pointer">
              <div className="h-100">
                <div className="flex flex-col items-center space-y-5">
                  <Image
                    src="/livro1.jpg"
                    alt="Livro"
                    width={170}
                    height={170}
                  ></Image>
                  <div className="flex flex-col justify-evenly font-semibold space-y-1">
                    <p>Livro Mofado</p>
                    <p>R$ 20,00</p>
                    <p>100 páginas</p>
                  </div>
                </div>
              </div>
            </button>
            <button className="cursor-pointer">
              <div className="h-100">
                <div className="flex flex-col items-center space-y-5">
                  <Image
                    src="/livro2.jpg"
                    alt="Livro"
                    width={170}
                    height={170}
                  ></Image>
                  <div className="flex flex-col justify-evenly font-semibold space-y-1">
                    <p>Livro Rústico</p>
                    <p>R$ 30,00</p>
                    <p>60 páginas</p>
                  </div>
                </div>
              </div>
            </button>
            <div className="h-100">
              <div className="flex flex-col items-center space-y-5">
                <Image
                  src="/livro3.jpg"
                  alt="Livro"
                  width={170}
                  height={170}
                ></Image>
                <div className="flex flex-col justify-evenly font-semibold space-y-1">
                  <p>Xadrezki</p>
                  <p>R$ 43,99</p>
                  <p>137 páginas</p>
                </div>
              </div>
            </div>
            <div className="h-100">
              <div className="flex flex-col items-center space-y-5">
                <Image
                  src="/livro4.jpg"
                  alt="Livro"
                  width={170}
                  height={170}
                ></Image>
                <div className="flex flex-col justify-evenly font-semibold">
                  <p>Bruxaria e suas invocações</p>
                  <p>R$ 252,00</p>
                  <p>309 páginas</p>
                </div>
              </div>
            </div>
            <div className="h-100">
              <div className="flex flex-col items-center space-y-5">
                <Image
                  src="/livro5.jpg"
                  alt="Livro"
                  width={170}
                  height={170}
                ></Image>
                <div className="flex flex-col justify-evenly font-semibold">
                  <p>Mó paz nessa floresta</p>
                  <p>R$ 46,50</p>
                  <p>144 páginas</p>
                </div>
              </div>
            </div>
            <div className="h-100">
              <div className="flex flex-col items-center space-y-5">
                <Image
                  src="/livro6.jpg"
                  alt="Livro"
                  width={170}
                  height={170}
                ></Image>
                <div className="flex flex-col justify-evenly font-semibold">
                  <p>A misteriosa floresta</p>
                  <p>R$ 46,50</p>
                  <p>144 páginas</p>
                </div>
              </div>
            </div>
            <Livro></Livro>
            <div className="h-100">
              <div className="flex flex-col items-center space-y-5">
                <Image
                  src="/livro7.jpg"
                  alt="Livro"
                  width={170}
                  height={170}
                ></Image>
                <div className="flex flex-col justify-evenly font-semibold">
                  <p>A misteriosa floresta</p>
                  <p>R$ 46,50</p>
                  <p>144 páginas</p>
                </div>
              </div>
            </div>
            <div className="h-100">
              <div className="flex flex-col items-center space-y-5">
                <Image
                  src="/livro8.jpg"
                  alt="Livro"
                  width={170}
                  height={170}
                ></Image>
                <div className="flex flex-col justify-evenly font-semibold">
                  <p>A misteriosa floresta</p>
                  <p>R$ 46,50</p>
                  <p>144 páginas</p>
                </div>
              </div>
            </div>
            <div className="h-100">
              <div className="flex flex-col items-center space-y-5">
                <Image
                  src="/livro9.jpg"
                  alt="Livro"
                  width={170}
                  height={170}
                ></Image>
                <div className="flex flex-col justify-evenly font-semibold">
                  <p>A misteriosa floresta</p>
                  <p>R$ 46,50</p>
                  <p>144 páginas</p>
                </div>
              </div>
            </div>
            <div className="h-100">
              <div className="flex flex-col items-center space-y-5">
                <Image
                  src="/livro10.jpg"
                  alt="Livro"
                  width={170}
                  height={170}
                ></Image>
                <div className="flex flex-col justify-evenly font-semibold">
                  <p>Baby Shark</p>
                  <p>R$ 46,50</p>
                  <p>144 páginas</p>
                </div>
              </div>
            </div>
            <div className="h-100">
              <div className="flex flex-col items-center space-y-5">
                <Image
                  src="/livro11.jpg"
                  alt="Livro"
                  width={170}
                  height={170}
                ></Image>
                <div className="flex flex-col justify-evenly font-semibold">
                  <p>A misteriosa floresta</p>
                  <p>R$ 46,50</p>
                  <p>144 páginas</p>
                </div>
              </div>
            </div>
            <div className="h-100">
              <div className="flex flex-col items-center space-y-5">
                <Image
                  src="/livro12.jpg"
                  alt="Livro"
                  width={170}
                  height={170}
                ></Image>
                <div className="flex flex-col justify-evenly font-semibold">
                  <p>A misteriosa floresta</p>
                  <p>R$ 46,50</p>
                  <p>144 páginas</p>
                </div>
              </div>
            </div>
            <div className="h-100">
              <div className="flex flex-col items-center space-y-5">
                <Image
                  src="/livro6.jpg"
                  alt="Livro"
                  width={170}
                  height={170}
                ></Image>
                <div className="flex flex-col justify-evenly font-semibold">
                  <p>A misteriosa floresta</p>
                  <p>R$ 46,50</p>
                  <p>144 páginas</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Header>
  );
}
