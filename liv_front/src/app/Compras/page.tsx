"use client";
import Header from "../../Components/Header";
import {
  Calendar,
  Layers,
  DollarSign,
  Truck,
  Ticket,
  CheckCheck,
  ShoppingBag,
  Search,
} from "lucide-react";
import PedidoHistorico from "../../Components/PedidoHistorico";
import { useState } from "react";

export default function Compras() {
  const [filtro, setFiltro] = useState("");

  return (
    <Header>
      <main className="w-full h-10/11 flex flex-row">
        <nav className="w-1/6 h-full flex flex-col bg-gray-900 py-5">
          <div className="flex flex-col w-full h-2/10 space-y-5 items-center">
            <p className=" w-full text-amber-600 font-bold text-2xl text-center">
              Filtrar histórico
            </p>
            <div
              className={
                "w-7/8 bg-white  text-black flex flex-row items-center py-2 rounded-xl"
              }
            >
              <input
                type="text"
                placeholder="Buscar"
                className="flex-grow mx-1 pl-1 outline-none"
                maxLength={50}
              ></input>
              <button type="button" className="absolute left-44">
                <Search className="text-gray-800 hover:text-amber-400 cursor-pointer"></Search>
              </button>
            </div>
          </div>
          <div className="flex flex-col border-y-2 border-white-600 w-full h-3/10 pl-3 pt-3  text-white">
            <button
              className={`flex flex-row items-center space-x-4 cursor-pointer hover:text-amber-400 ${
                filtro === "data" ? "text-amber-400" : "text-white"
              }`}
              value={filtro}
              onClick={() => setFiltro("data")}
            >
              <Calendar></Calendar>
              <p className="  py-3">Data recente</p>
            </button>
            <button
              className={`flex flex-row items-center space-x-4 cursor-pointer hover:text-amber-400 ${
                filtro === "preco" ? "text-amber-400" : "text-white"
              }`}
              value={filtro}
              onClick={() => setFiltro("preco")}
            >
              <DollarSign></DollarSign>
              <p className="  py-3">Preço de compra</p>
            </button>
            <button
              className={`flex flex-row items-center space-x-4 cursor-pointer hover:text-amber-400 ${
                filtro === "quantidade" ? "text-amber-400" : "text-white"
              }`}
              value={filtro}
              onClick={() => setFiltro("quantidade")}
            >
              <Layers></Layers>
              <p className="  py-3">Quantidade comprada</p>
            </button>
          </div>
          <div className="flex flex-col border-y-2 border-white-600 w-full h-3/10 pl-3 pt-3  text-white">
            <div
              className={`flex flex-row items-center space-x-4 cursor-pointer hover:text-amber-400 ${
                filtro === "solicitado" ? "text-amber-400" : "text-white"
              }`}
              onClick={() => setFiltro("solicitado")}
            >
              <Ticket></Ticket>
              <p className=" w-full py-3">Solicitado</p>
            </div>
            <div
              className={`flex flex-row items-center space-x-4 cursor-pointer hover:text-amber-400 ${
                filtro === "transporte" ? "text-amber-400" : "text-white"
              }`}
              onClick={() => setFiltro("transporte")}
            >
              <Truck></Truck>
              <p className=" w-full py-3">Em transporte</p>
            </div>
            <div
              className={`flex flex-row items-center space-x-4 cursor-pointer hover:text-amber-400 ${
                filtro === "entregue" ? "text-amber-400" : "text-white"
              }`}
              onClick={() => setFiltro("entregue")}
            >
              <CheckCheck></CheckCheck>
              <p className=" w-full py-3">Entregue</p>
            </div>
          </div>
        </nav>
        <div className="flex flex-col w-full h-full">
          <header className="bg-gray-900 w-3/6 h-2/12 my-auto mx-auto shadow-2xl rounded-t-md mt-10 flex flex-row items-center justify-center space-x-2 text-amber-400">
            <ShoppingBag height={40} width={40}></ShoppingBag>
            <p className="font-bold text-2xl">Suas compras</p>
          </header>
          <section className="bg-gray-200 w-3/6 h-10/12 my-auto mx-auto overflow-y-scroll  shadow-2xl rounded-b-sm mb-10">
            <PedidoHistorico></PedidoHistorico>
            <PedidoHistorico></PedidoHistorico>
            <PedidoHistorico></PedidoHistorico>
            <PedidoHistorico></PedidoHistorico>
          </section>
        </div>
      </main>
    </Header>
  );
}
