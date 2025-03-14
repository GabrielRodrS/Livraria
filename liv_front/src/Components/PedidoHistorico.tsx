import Image from "next/image";
import { useRouter } from "next/navigation";

export default function PedidoHistorico() {
  const router = useRouter();
  return (
    <div className="flex flex-row justify-center border-b-3 border-gray-900">
      <div className="h-45 w-full bg-white flex flex-row py-2 justify-start space-x-4">
        <Image
          src="/livro10.jpg"
          alt="Livro"
          width={170}
          height={170}
          className="ml-4 cursor-pointer"
          onClick={() => {
            router.push("/Pedido");
          }}
        ></Image>

        <aside className="flex flex-col items-center text-black justify-center font-semibold break-words max-w-[220px] space-y-2">
          <p className="w-full truncate">Baby Shark</p>
          <p className="w-full truncate">R$ 46,50</p>
          <p className="w-full truncate">Quantidade: 20</p>
          <p className="w-full truncate text-amber-600">
            Código do pedido: 10562
          </p>
          <p className="w-full truncate text-green-600">Status: entregue!</p>
        </aside>
      </div>
      <aside className=" w-2/5 flex flex-col items-center justify-center space-y-5 ">
        <button
          type="button"
          className="bg-gray-400 py-2 px-3 rounded-md cursor-pointer text-black hover:text-white mx-5"
          onClick={() => router.push("/Pedido")}
        >
          Informações do pedido
        </button>
        <button
          type="button"
          className="bg-red-500 py-2 px-3 rounded-md cursor-pointer text-black hover:text-white mx-5"
        >
          Cancelar pedido
        </button>
      </aside>
    </div>
  );
}
