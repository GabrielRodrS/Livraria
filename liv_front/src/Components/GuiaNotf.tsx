export default function GuiaNotf() {
  return (
    <div className="h-9/10 w-full flex justify-end right-78 top-17.5  absolute ">
      <div className=" bg-white shadow-2xl h-50 w-80 flex flex-col text-center overflow-y-auto text-black">
        <div className="bg-green-300 py-2 w-full">
          Pedido realizado (nome do livro)
        </div>
        <div className="bg-red-300 py-2 w-full">
          Pedido cancelado (nome do livro)
        </div>
      </div>
    </div>
  );
}
