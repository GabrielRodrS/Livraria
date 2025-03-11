"use client";

import Header from "../../Components/Header";
import BlocoPerfil from "../../Components/BlocoPerfil";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AltNome() {
  const [nome, setNome] = useState("");
  const lab = "Novo telefone:";

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
        <div className="h-3/5 w-full flex flex-col pl-10 py-5 space-y-5">
          <form onSubmit={confirmar}>
            <div className="my-5">
              <label className="text-black font-bold mr-3">{lab}</label>
              <input
                className="border-3 border-black rounded-md py-2 px-3 text-gray-800 w-60"
                type="text"
                placeholder="Seu nome"
                maxLength={40}
                value={nome}
                onChange={(e) => {
                  setNome(e.target.value);
                }}
              ></input>
            </div>
          </form>
        </div>
      </BlocoPerfil>
    </Header>
  );
}
