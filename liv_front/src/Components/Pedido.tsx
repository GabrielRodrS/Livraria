import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import { useRouter } from "next/navigation";
import { Item } from "../app/Carrinho/page";
import axios from "axios";
import React, { useState } from "react";

interface PedidoProps {
  item: Item;
}

export default function Pedido({ item }: PedidoProps) {
  const router = useRouter();
  const [quantidade, setQuantidade] = useState(0);
  const [naoselecionados, setNaoSelecionados] = useState<number[]>([]);
  const [selecionados, setSelecionados] = useState<number[]>([]);
  const [preco, setPreco] = useState();

  async function alterarValor(idCarrinho: number, valor: number) {
    const dados = { idCarrinho: idCarrinho, valor: valor };
    try {
      axios.patch("http://localhost:3000/carrinhos/quantidade", dados);
      router.refresh();
    } catch (error) {
      console.error("Não foi possível alterar a quantidade!", error);
    }
  }

  async function excluirItem(idCarrinho: number) {
    try {
      await axios.delete(
        `http://localhost:3000/carrinhos/excluir/${idCarrinho}`
      );
      window.location.reload();
    } catch (error) {
      console.error("Não foi possível excluir este item!", error);
    }
  }

  console.log(naoselecionados);

  return (
    <div className="h-45 w-full bg-white flex flex-row border-y-2 border-black py-2 justify-around">
      <Image
        src={item.source}
        alt="Livro"
        width={170}
        height={170}
        onClick={() => {
          router.push("/Informacoes");
        }}
        className="cursor-pointer"
      ></Image>
      {naoselecionados.includes(item.idCarrinho) ? (
        <aside className="flex flex-col items-center text-black justify-center font-semibold break-words max-w-[163px] space-y-3 opacity-50">
          <p className="w-full truncate">{item.nome}</p>
          <p className="w-full truncate">{item.preco}</p>
          <div className="flex flex-row w-full">
            <p>Quantidade: {item.quantidade + quantidade}</p>
            <button disabled>
              <Plus
                className="p-1 ml-2 bg-amber-400 rounded-sm cursor-pointer hover:text-white"
                onClick={() => {
                  alterarValor(item.idCarrinho, 1);
                  setQuantidade(quantidade + 1);
                }}
              ></Plus>
            </button>
            <button disabled>
              <Minus
                className="p-1 bg-amber-300 rounded-sm cursor-pointer hover:text-white"
                onClick={() => {
                  alterarValor(item.idCarrinho, -1);
                  if (quantidade + item.quantidade > 1) {
                    setQuantidade(quantidade - 1);
                  }
                }}
              ></Minus>
            </button>
          </div>
          <div className="w-full flex flex-row space-x-3">
            <button
              disabled
              className="text-black bg-red-500 p-2 rounded-md cursor-pointer hover:text-white"
              onClick={() => {
                excluirItem(item.idCarrinho);
              }}
            >
              Excluir item
            </button>

            <button
              className="text-black bg-gray-300 p-2 rounded-md cursor-pointer hover:text-white "
              onClick={() => {
                setNaoSelecionados(
                  naoselecionados.filter((id) => id !== item.idCarrinho)
                );
              }}
            >
              Selecionar
            </button>
          </div>
        </aside>
      ) : (
        <aside className="flex flex-col items-center text-black justify-center font-semibold break-words max-w-[163px] space-y-3 ">
          <p className="w-full truncate">{item.nome}</p>
          <p className="w-full truncate">{item.preco}</p>
          <div className="flex flex-row w-full">
            <p>Quantidade: {item.quantidade + quantidade}</p>
            <button>
              <Plus
                className="p-1 ml-2 bg-amber-400 rounded-sm cursor-pointer hover:text-white"
                onClick={() => {
                  alterarValor(item.idCarrinho, 1);
                  setQuantidade(quantidade + 1);
                }}
              ></Plus>
            </button>
            <button>
              <Minus
                className="p-1 bg-amber-300 rounded-sm cursor-pointer hover:text-white"
                onClick={() => {
                  alterarValor(item.idCarrinho, -1);
                  if (quantidade + item.quantidade > 1) {
                    setQuantidade(quantidade - 1);
                  }
                }}
              ></Minus>
            </button>
          </div>
          <div className="w-full flex flex-row space-x-3">
            <button
              className="text-black bg-red-500 p-2 rounded-md cursor-pointer hover:text-white"
              onClick={() => {
                excluirItem(item.idCarrinho);
              }}
            >
              Excluir item
            </button>

            <button
              className="text-black bg-gray-300 p-2 rounded-md cursor-pointer hover:text-white"
              onClick={() => {
                setNaoSelecionados([item.idCarrinho]);
              }}
            >
              Não selecionar
            </button>
          </div>
        </aside>
      )}
    </div>
  );
}
