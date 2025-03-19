"use client";

import Header from "../../Components/Header";
import InformacoesLivro from "../../Components/InformacoesLivro";
import { useState, useEffect } from "react";
import axios from "axios";
import { Livro } from "../InterfaceP/page";

export default function Informacoes() {
  const nav1 = "Adicionar ao carrinho";
  const nav2 = "Comprar produto";
  const navr1 = "/Carrinho";
  const navr2 = "/Comprar";
  const [codigo, setCodigo] = useState(null);
  const [livro, setLivro] = useState<Livro | null>(null);

  useEffect(() => {
    const cod = localStorage.getItem("codigoLivro");

    if (cod) {
      setCodigo(JSON.parse(cod));
    }
  }, []);

  useEffect(() => {
    if (codigo) {
      axios
        .get(`http://localhost:3000/livros/selecionado/${codigo}`)
        .then((response) => {
          console.log("Livro selecionado:", response.data);
          setLivro(response.data);
        })
        .catch((error) => {
          console.error(
            "Erro ao buscar livro selecionado!",
            error.response?.data || error.message || error
          );
        });
    }
  }, [codigo]);

  if (!livro) {
    return <div>Carregando...</div>;
  }

  return (
    <Header>
      <InformacoesLivro
        nav1={nav1}
        nav2={nav2}
        navr1={navr1}
        navr2={navr2}
        livro={livro}
      >
        <div className="flex flex-col border-b-2 border-black space-y-2 py-3">
          <p className="text-amber-700">Código do livro: {livro?.codigo}</p>
          <p>Quantidade disponível: {livro?.disponiveis}</p>
          <p>Quantidade de vendas: {livro?.vendas}</p>
          <p>Data de publicação: {livro?.publicacao.slice(0, 10)}</p>
        </div>
      </InformacoesLivro>
    </Header>
  );
}
