"use client";

import Header from "../../Components/Header";
import InformacoesLivro from "../../Components/InformacoesLivro";

export default function Informacoes() {
  const nav1 = "Adicionar ao carrinho";
  const nav2 = "Comprar produto";
  const navr1 = "/Carrinho";
  const navr2 = "/Comprar";
  return (
    <Header>
      <InformacoesLivro nav1={nav1} nav2={nav2} navr1={navr1} navr2={navr2}>
        <div className="flex flex-col border-b-3 border-black space-y-2 py-3">
          <p className="text-amber-700">Código do livro: 10874</p>
          <p>Quantidade disponível: 6</p>
          <p>Quantidade de vendas: 74</p>
          <p>Data de publicação: 20/06/2023</p>
        </div>
      </InformacoesLivro>
    </Header>
  );
}
