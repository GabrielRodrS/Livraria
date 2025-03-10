import Pedido from "./Pedido";

export default function PedidoHistorico() {
  return (
    <div className="flex flex-row justify-center border-b-3 border-gray-900">
      <Pedido></Pedido>
      <aside className=" w-3/5 flex flex-col items-center justify-center space-y-5 ">
        <button
          type="button"
          className="bg-gray-400 py-2 px-3 rounded-md cursor-pointer text-black hover:text-white"
        >
          Informações do pedido
        </button>
        <button
          type="button"
          className="bg-red-500 py-2 px-3 rounded-md cursor-pointer text-black hover:text-white"
        >
          Cancelar pedido
        </button>
      </aside>
    </div>
  );
}
