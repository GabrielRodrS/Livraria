"use client";
import Header from "../../Components/Header";
import { User } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Perfil() {
  const router = useRouter();

  return (
    <Header>
      <main className="flex h-9/10 w-full items-center justify-center">
        <section className=" w-2/6 h-5/6">
          <div className="h-1/5 w-full bg-gray-300 flex flex-col items-center justify-center rounded-t-md">
            <User height={40} width={40} className="text-black"></User>
          </div>
          <div className="shadow-2xl rounded-b-md">
            <div className="h-3/5 w-full flex flex-col pl-10 py-5 space-y-5">
              <p className="font-bold text-xl  text-purple-800 ">
                Dados de usuário:
              </p>
              <div className="text-black flex flex-row space-x-2 items-center">
                <label className="font-bold">Nome:</label>
                <p>Gabriel Rodrigues Siqueira</p>
                <button
                  type="button"
                  className="py-1 px-2 bg-amber-400 cursor-pointer rounded-md hover:text-white"
                  onClick={() => router.push("AltNome")}
                >
                  alterar
                </button>
              </div>
              <div className="text-black flex flex-row space-x-2 items-center">
                <label className="font-bold">Telefone:</label>
                <p>(44) 99999-9999</p>
                <button
                  type="button"
                  className="py-1 px-2 bg-amber-400 cursor-pointer rounded-md hover:text-white"
                  onClick={() => router.push("AltTelefone")}
                >
                  alterar
                </button>
              </div>
              <div className="text-black flex flex-row space-x-2 items-center">
                <label className="font-bold">E-mail:</label>
                <p>gsiqueira394@gmail.com</p>
                <button
                  type="button"
                  className="py-1 px-2 bg-amber-400 cursor-pointer rounded-md hover:text-white"
                  onClick={() => router.push("AltEmail")}
                >
                  alterar
                </button>
              </div>
              <div className="text-black flex flex-row space-x-2 items-center">
                <label className="font-bold">Senha:</label>
                <p>12345678</p>
                <button
                  type="button"
                  className="py-1 px-2 bg-amber-400 cursor-pointer rounded-md hover:text-white"
                  onClick={() => router.push("AltSenha")}
                >
                  alterar
                </button>
              </div>
              <p className="font-bold text-amber-600">
                Gênero de livro favorito: Ficcção Cientítica.
              </p>
            </div>
          </div>
          <div className="h-1/5 w-full flex flex-row items-center justify-center shadow-2xl rounded-b-md py-5 space-x-20 text-black bg-gray-300 ">
            <button
              type="button"
              className="bg-red-500 py-2 px-3 rounded-md hover:text-white cursor-pointer "
              onClick={() => {
                router.push("/ExcluirConta");
              }}
            >
              Excluir conta
            </button>
            <button
              type="button"
              className="bg-amber-300 py-2 px-3 rounded-md hover:text-white cursor-pointer "
              onClick={() => {
                router.push("/");
              }}
            >
              Sair da sessão
            </button>
          </div>
        </section>
      </main>
    </Header>
  );
}
