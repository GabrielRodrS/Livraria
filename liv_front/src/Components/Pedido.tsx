import Image from "next/image";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Pedido() {
  const [quant, setQuant] = useState(1);
  const router = useRouter();
  return (
    <div className="h-45 w-full bg-white flex flex-row border-y-2 border-black py-2 justify-around">
      <Image
        src="/livro10.jpg"
        alt="Livro"
        width={170}
        height={170}
        onClick={() => {
          router.push("/Informacoes");
        }}
        className="cursor-pointer"
      ></Image>
      <aside className="flex flex-col items-center text-black justify-center font-semibold break-words max-w-[163px] space-y-3">
        <p className="w-full truncate">Baby shark</p>
        <p className="w-full truncate">R$ 46,50</p>
        <div className="flex flex-row w-full">
          <p>Quantidade: {quant}</p>
          <button>
            <Plus
              className="p-1 ml-2 bg-amber-400 rounded-sm cursor-pointer hover:text-white"
              onClick={() => setQuant(quant + 1)}
            ></Plus>
          </button>
          <button>
            <Minus
              className="p-1 bg-amber-300 rounded-sm cursor-pointer hover:text-white"
              onClick={() => {
                if (quant > 1) {
                  setQuant(quant - 1);
                }
              }}
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
