import Image from "next/image";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface InformacoesLivroProps {
  children: ReactNode;
  nav1: string;
  nav2: string;
  navr1: string;
  navr2: string;
}
export default function InformacoesLivro({
  children,
  nav1,
  nav2,
  navr1,
  navr2,
}: InformacoesLivroProps) {
  const router = useRouter();
  return (
    <div className="h-10/11 w-full flex items-center justify-center">
      <main className="h-4/6 w-3/6 grid grid-cols-2 grid-rows-5  shadow-2xl rounded-sm">
        <section className="row-span-5 bg-gray-600 flex items-center justify-center">
          <Image
            src={"/livro10.jpg"}
            height={200}
            width={200}
            alt="livro"
          ></Image>
        </section>

        <aside className="row-span-4 bg-gray-300 justify-start   text-black font-bold p-5">
          <div className="flex flex-col border-b-3 border-black space-y-2 pb-3">
            <p className="text-xl  truncate border-b-3">Baby Shark</p>
            <p className="text-amber-700">R$ 29,99</p>
            <p>Quantidade de páginas: 3000</p>
            <p className="truncate">Autor: Gabigol</p>
            <p>Gênero: Suspense e mistério</p>
          </div>
          {children}
        </aside>
        <div className="row-span-1 flex items-center justify-around bg-gray-300">
          <button
            className="cursor-pointer p-2 rounded-md text-black hover:text-white bg-amber-500"
            onClick={() => router.push(navr1)}
          >
            {nav1}
          </button>
          <button
            className={`cursor-pointer p-2 rounded-md text-black hover:text-white  ${
              nav2 === "Cancelar pedido" ? "bg-red-500" : "bg-green-500"
            }`}
            onClick={() => router.push(navr2)}
          >
            {nav2}
          </button>
        </div>
      </main>
    </div>
  );
}
