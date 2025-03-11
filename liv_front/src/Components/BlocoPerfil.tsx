"use client";

import { User } from "lucide-react";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface BlocoPerfilProps {
  children: ReactNode;
  voltar: string;
  proximo: string;
  voltnav: string;
  confirmar?: () => void;
}

export default function BlocoPerfil({
  children,
  proximo,
  voltar,
  voltnav,
  confirmar,
}: BlocoPerfilProps) {
  const router = useRouter();
  return (
    <main className="flex h-9/10 w-full items-center justify-center">
      <section className=" w-2/6 h-5/6">
        <div className="h-1/5 w-full bg-gray-300 flex flex-col items-center justify-center rounded-t-md">
          <User height={40} width={40} className="text-black"></User>
        </div>
        <div className="shadow-2xl rounded-b-md">{children}</div>
        <div className="h-1/5 w-full flex flex-row items-center justify-center shadow-2xl rounded-b-md py-5 space-x-20 text-black bg-gray-300 ">
          <button
            type="button"
            className="bg-red-500 py-2 px-3 rounded-md hover:text-white cursor-pointer "
            onClick={() => {
              router.push(voltnav);
            }}
          >
            {voltar}
          </button>
          <button
            type="button"
            className="bg-amber-300 py-2 px-3 rounded-md hover:text-white cursor-pointer "
            onClick={confirmar}
          >
            {proximo}
          </button>
        </div>
      </section>
    </main>
  );
}
