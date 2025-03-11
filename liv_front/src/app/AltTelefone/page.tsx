"use client";

import Header from "../../Components/Header";
import BlocoPerfil from "../../Components/BlocoPerfil";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AltTelefone() {
  const [telefone, setTelefone] = useState("");
  const lab = "Novo telefone:";

  const proximo = "Confirmar";
  const voltar = "Voltar ao perfil";
  const voltnav = "/Perfil";

  const formatarTelefone = (valor: string): string => {
    valor = valor.replace(/\D/g, "");

    if (valor.length > 10) {
      return valor.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (valor.length > 6) {
      return valor.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (valor.length > 2) {
      return valor.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
    } else {
      return valor;
    }
  };

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
                className="border-3 border-black rounded-md py-2 px-3 text-gray-800 w-55"
                type="text"
                placeholder="Seu Telefone"
                value={telefone}
                onChange={(e) => {
                  setTelefone(formatarTelefone(e.target.value));
                }}
              ></input>
            </div>
          </form>
        </div>
      </BlocoPerfil>
    </Header>
  );
}
