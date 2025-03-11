"use client";

import Header from "../../Components/Header";
import InformacoesLivro from "../../Components/InformacoesLivro";

export default function Informacoes() {
  const nav1 = "Voltar aos pedidos";
  const nav2 = "Cancelar pedido";
  const navr1 = "/Compras";
  const navr2 = "/Compras";
  return (
    <Header>
      <InformacoesLivro nav1={nav1} nav2={nav2} navr1={navr1} navr2={navr2}>
        <div className="flex flex-col border-b-3 border-black space-y-2 py-3">
          <p className="text-amber-700">Código do pedido: 538291</p>
          <p>Preço total: R$ 59:98</p>
          <p>Quantidade: 2</p>
          <p>Data: 24/02/2025</p>
        </div>
      </InformacoesLivro>
    </Header>
  );
}
