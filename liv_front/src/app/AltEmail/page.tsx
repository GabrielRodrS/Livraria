"use client";

import Header from "../../Components/Header";
import BlocoPerfil from "../../Components/BlocoPerfil";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AltEmail() {
  const [senha, setSenha] = useState("");
  const [email, setEmail] = useState("");
  const lab = "Novo email:";

  const proximo = "Confirmar";
  const voltar = "Voltar ao perfil";
  const voltnav = "/Perfil";

  const router = useRouter();

  const confirmar = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    router.push("/Perfil");
  };

  return (
    <Header>
      <BlocoPerfil proximo={proximo} voltar={voltar} voltnav={voltnav}>
        <div className="h-3/5 w-full flex flex-col pl-10 py-5 space-y-5 items-end pr-24">
          <form onSubmit={confirmar}>
            <div className="my-5  ">
              <label className="text-black font-bold mr-3">Sua senha:</label>
              <input
                className="border-3 border-black rounded-md py-2 px-3 text-gray-800 w-60"
                type="text"
                placeholder="Senha"
                maxLength={20}
                value={senha}
                onChange={(e) => {
                  setSenha(e.target.value);
                }}
              ></input>
            </div>
            <div className="my-5 ">
              <label className="text-black font-bold mr-3">{lab}</label>
              <input
                className="border-3 border-black rounded-md py-2 px-3 text-gray-800 w-60"
                type="text"
                placeholder="Seu email"
                maxLength={50}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></input>
            </div>
          </form>
        </div>
      </BlocoPerfil>
    </Header>
  );
}
