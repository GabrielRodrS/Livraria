"use client";

import { useEffect, useState } from "react";
import { FileSpreadsheet } from "lucide-react";
import Header from "../../Components/Header";
import Livro from "../../Components/Livro";
import axios from "axios";

export interface Livro {
  codigo: number;
  titulo: string;
  disponiveis: number;
  autor: string;
  genero: string[];
  preco: number;
  paginas: number;
  publicacao: string;
  vendas: number;
  source: string;
}

export default function InterfaceP() {
  const [quantPag, setQuantPag] = useState(0);
  const [generoLivro, setGeneroLivro] = useState("");
  const [precoLivro, setPrecoLivro] = useState("");
  const [livros, setLivros] = useState<Livro[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/livros/buscar")
      .then((response) => {
        setLivros(response.data);
      })
      .catch((error) => {
        console.error(
          error.response?.data?.message || "Erro ao buscar livros!"
        );
      });
  }, []);

  return (
    <Header>
      <div className="flex flex-row h-10/11">
        <nav className="h-full bg-white text-black w-2/13 flex flex-col justify-between items-center pt-5 border-r-2 border-black shadow-2xl">
          <div className="flex flex-col  h-7/12 items-center justify-start w-full">
            <p className="text-xl font-bold text-amber-800 border-b-3 border-amber-800">
              Gêneros
            </p>
            <div className="grid grid-cols-2 grid-rows-10 w-full h-full overflow-y-auto px-2  gap-2 rounded-md text-black  font-semibold mt-3">
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
                  className={` text-center cursor-pointer hover:text-amber-600 rounded-md ${
                    genero.length > 10 ? "row-span-2" : ""
                  } ${
                    generoLivro === genero
                      ? "text-amber-600 border-3"
                      : "text-black"
                  }`}
                >
                  {genero}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col h-3/12 items-center w-full ">
            <p className="text-xl font-bold text-amber-800 border-b-3 border-amber-800 mb-3">
              Preço
            </p>
            <div className="grid grid-rows-3 grid-cols-2 text-black w-full h-full font-semibold px-2">
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
                  className={`text-center cursor-pointer hover:text-amber-600 rounded-md ${
                    precoLivro === preco
                      ? "text-amber-600 border-3"
                      : "text-black"
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
            <p className="text-xl font-bold text-amber-800 ">
              Quantidade de páginas
            </p>
            <input
              type="range"
              min="1"
              max="1000"
              className="w-2/3 accent-amber-700"
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
                className="cursor-pointer hover:text-white h-full w-full border-b-1 border-black"
              >
                <p>{item}</p>
              </button>
            ))}
          </nav>
          <div className="text-gray-900 w-full h-full overflow-y-auto grid grid-cols-5 gap-5 items-start justify-center px-6 pt-6">
            {livros.length > 0
              ? livros.map((livro) =>
                  livro.codigo ? (
                    <Livro key={livro.codigo} livro={livro} />
                  ) : null
                )
              : null}
          </div>
        </main>
      </div>
    </Header>
  );
}
