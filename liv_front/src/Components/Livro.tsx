import Image from "next/image";

export default function Livro() {
  return (
    <button className="cursor-pointer">
      <div className="h-100">
        <div className="flex flex-col items-center space-y-5">
          <Image src="/livro5.jpg" alt="Livro" width={170} height={170}></Image>
          <div className="flex flex-col justify-evenly font-semibold">
            <p>A misteriosa floresta</p>
            <p>R$ 46,50</p>
            <p>144 páginas</p>
          </div>
        </div>
      </div>
    </button>
  );
}
