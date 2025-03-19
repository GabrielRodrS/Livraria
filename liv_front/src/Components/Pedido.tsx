import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import { useRouter } from "next/navigation";
import { Item } from "../app/Carrinho/page";

interface PedidoProps {
  item: Item;
}

export default function Pedido({ item }: PedidoProps) {
  const router = useRouter();
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
      <aside className="flex flex-col items-center text-black justify-center font-semibold break-words max-w-[163px] space-y-3">
        <p className="w-full truncate">{item.nome}</p>
        <p className="w-full truncate">{item.preco}</p>
        <div className="flex flex-row w-full">
          <p>Quantidade: {item.quantidade}</p>
          <button>
            <Plus className="p-1 ml-2 bg-amber-400 rounded-sm cursor-pointer hover:text-white"></Plus>
          </button>
          <button>
            <Minus
              className="p-1 bg-amber-300 rounded-sm cursor-pointer hover:text-white"
              onClick={() => {}}
            ></Minus>
          </button>
        </div>
        <div className="w-full">
          <button className="text-black bg-red-500 p-2 rounded-md cursor-pointer hover:text-white">
            Excluir item
          </button>
        </div>
      </aside>
    </div>
  );
}
