"use client";

import { ShoppingCart } from "lucide-react";
import Header from "../../Components/Header";
import { useRouter } from "next/navigation";
import Pedido from "../../Components/Pedido";

export default function Carrinho() {
  const router = useRouter();
  return (
    <Header>
      <main className="h-9/10 w-full flex items-center justify-center">
        <div className="w-3/10 h-9/10 flex flex-col items-center rounded-sm">
          <div className=" h-1/7 w-full flex flex-row space-x-3 items-center justify-center text-2xl font-bold bg-gray-900 rounded-t-sm  text-amber-400">
            <ShoppingCart width={35} height={35}></ShoppingCart>
            <p>Seu carrinho</p>
          </div>

          <section className="h-5/7 w-full grid grid-cols-1 rounded-b-sm bg-white shadow-2xl overflow-y-auto">
            <Pedido></Pedido>
            <Pedido></Pedido>
            <Pedido></Pedido>
            <Pedido></Pedido>
          </section>
          <div className="h-1/7 w-full bg-gray-300 rounded-b-sm flex flex-row items-center justify-center space-x-20">
            <button
              type="button"
              className="bg-purple-500 py-2 px-3 rounded-md cursor-pointer hover:text-amber-400"
              onClick={() => {
                router.push("/InterfaceP");
              }}
            >
              Voltar ao catálogo
            </button>
            <button
              type="button"
              className="bg-green-500 py-2 px-3 rounded-md cursor-pointer hover:text-amber-400"
            >
              Fazer pedido
            </button>
          </div>
        </div>
      </main>
    </Header>
  );
}
