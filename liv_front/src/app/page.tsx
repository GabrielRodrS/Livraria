"use client";
import { FormEvent, useState } from "react";
import Formulario from "../Components/Formulario";
import { useRouter } from "next/navigation";

export default function Login() {
  const [msg, setMsg] = useState("");

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const titulo = "Login";

  const router = useRouter();

  const realizarLogin = async (e: FormEvent) => {
    e.preventDefault();

    if (email === "" || senha === "") {
      setMsg("Preencha todos os campos!");
      return;
    }

    router.push("./InterfaceP");
  };
  return (
    <Formulario titulo={titulo}>
      <form onSubmit={realizarLogin}>
        <section className="flex flex-col items-center justify-center my-10 space-y-10">
          <div className=" space-x-2 ">
            <label className="text-black font-bold ">E-mail:</label>
            <input
              className="border-3 border-black rounded-md py-2 px-3 text-gray-800 w-60"
              type="text"
              placeholder="Inserir e-mail"
              maxLength={50}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </div>
          <div className=" space-x-2 ">
            <label className="text-black font-bold ">Senha:</label>
            <input
              className="border-3 border-black rounded-md py-2 px-3 text-gray-800 w-60"
              type="password"
              placeholder="Inserir senha"
              maxLength={20}
              value={senha}
              onChange={(e) => {
                setSenha(e.target.value);
              }}
            ></input>
          </div>
        </section>
        <section className="flex flex-col items-center mb-10">
          <div className="flex flex-row space-x-10">
            <button
              className="bg-red-500 py-2 px-3 rounded-md cursor-pointer hover:text-gray-700"
              type="button"
              onClick={() => {
                router.push("/Cadastro");
              }}
            >
              Cadastrar
            </button>
            <button
              className="bg-green-500 py-2 px-3 rounded-md cursor-pointer hover:text-gray-700"
              type="submit"
            >
              Login
            </button>
          </div>

          {msg && <p className="font-bold text-red-700 mt-8">{msg}</p>}
          <button
            className="bg-yellow-500 py-2 px-3 rounded-md cursor-pointer hover:text-gray-700 mt-5"
            type="button"
            onClick={() => {
              router.push("/RecuperarSenha");
            }}
          >
            Recuperar senha
          </button>
        </section>
      </form>
    </Formulario>
  );
}
