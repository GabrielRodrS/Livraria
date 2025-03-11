"use client";

import { Search, ShoppingCart, Album, User } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface HeaderProps {
  children: ReactNode;
}

export default function Header({ children }: HeaderProps) {
  const router = useRouter();

  return (
    <div className="h-screen w-screen bg-white overflow-hidden">
      <header className="h-1/11 bg-purple-800 flex flex-row justify-between items-center px-12 border-b-1 border-black">
        <button
          type="button"
          className="cursor-pointer"
          onClick={() => {
            router.push("/InterfaceP");
          }}
        >
          <Image
            src="/LogoNewBook.png"
            height={100}
            width={140}
            alt="Logo do site"
          ></Image>
        </button>
        <button
          type="button"
          className="hover:text-amber-400 cursor-pointer "
          onClick={() => {
            router.push("/Carrinho");
          }}
        >
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
          <button type="button">
            <Search className="text-gray-800 ml-auto hover:text-amber-400 cursor-pointer"></Search>
          </button>
        </div>

        <button
          type="button"
          className="hover:text-amber-400 cursor-pointer"
          onClick={() => {
            router.push("/Compras");
          }}
        >
          <div className="flex flex-col items-center space-y-1">
            <Album height={30} width={30}></Album>
            <p>Compras</p>
          </div>
        </button>
        <button
          type="button"
          className="hover:text-amber-400 cursor-pointer"
          onClick={() => {
            router.push("/Perfil");
          }}
        >
          <div className="flex flex-col items-center space-y-1">
            <User height={30} width={30}></User>
            <p>Minha conta</p>
          </div>
        </button>
      </header>
      {children}
    </div>
  );
}
