import { MANGA_GENRES } from "@/lib/consts";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans  h-screen p-4   mx-auto overflow-hidden">
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="text-6xl text-center font-bold text-purple-500">
          MANGA CREATOR AI
        </h1>
        <div className="flex flex-col items-center  mt-[50px]">
          <p className="text-2xl text-center font-bold mb-5">Elige un género de manga <br/>
            <span className="text-xl">Y Continúa la historia como quieras: describe las acciones del personaje y la IA seguirá creando el manga contigo.</span>
          </p>
          <div className="flex justify-center flex-wrap items-start gap-7 w-[80%] mx-auto">
            {MANGA_GENRES.map((genre) => (
              <Link
                className=" rounded-sm bg-white/10 p-5  transition-all duration-300 ease-in-out hover:bg-purple-600/40 hover:scale-110 "
                href={`/create-manga/${genre}`}
                key={genre}
              >
                {genre}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
