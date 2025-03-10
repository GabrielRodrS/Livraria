import Header from "../../Components/Header";
import {
  Calendar,
  Layers,
  DollarSign,
  Truck,
  Ticket,
  CheckCheck,
} from "lucide-react";
import Pedido from "../../Components/Pedido";
import PedidoHistorico from "../../Components/PedidoHistorico";

export default function Compras() {
  return (
    <Header>
      <main className="w-full h-9/10 flex flex-row">
        <nav className="w-1/6 h-full flex flex-col bg-gray-900 py-5">
          <p className="h-1/10 w-full text-amber-600 font-bold text-2xl text-center">
            Filtrar histórico
          </p>
          <div className="flex flex-col border-y-2 border-white-600 w-full h-3/10 pl-5 pt-3  text-white">
            <button className="flex flex-row items-center space-x-4 cursor-pointer hover:text-amber-400">
              <Calendar></Calendar>
              <p className="  py-3">Data recente</p>
            </button>
            <button className="flex flex-row items-center space-x-4 cursor-pointer hover:text-amber-400">
              <DollarSign></DollarSign>
              <p className="  py-3">Preço de compra</p>
            </button>
            <button className="flex flex-row items-center space-x-4 cursor-pointer hover:text-amber-400">
              <Layers></Layers>
              <p className="  py-3">Quantidade comprada</p>
            </button>
          </div>
          <div className="flex flex-col border-y-2 border-white-600 w-full h-3/10 pl-5 pt-3  text-white">
            <div className="flex flex-row items-center space-x-4 cursor-pointer hover:text-amber-400">
              <Ticket></Ticket>
              <p className=" w-full py-3">Solicitado</p>
            </div>
            <div className="flex flex-row items-center space-x-4 cursor-pointer hover:text-amber-400">
              <Truck></Truck>
              <p className=" w-full py-3">Em transporte</p>
            </div>
            <div className="flex flex-row items-center space-x-4 cursor-pointer hover:text-amber-400">
              <CheckCheck></CheckCheck>
              <p className=" w-full py-3">Entregue</p>
            </div>
          </div>
        </nav>
        <section className="bg-gray-200 w-3/6 h-9/10 my-auto mx-auto overflow-y-scroll  shadow-2xl rounded-sm">
          <PedidoHistorico></PedidoHistorico>
          <PedidoHistorico></PedidoHistorico>
          <PedidoHistorico></PedidoHistorico>
          <PedidoHistorico></PedidoHistorico>
        </section>
      </main>
    </Header>
  );
}
