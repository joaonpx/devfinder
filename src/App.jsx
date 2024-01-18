import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import "./App.css";

export function App() {
  return (
    <>
      <div className="font-mono h-screen w-screen bg-slate-900 text-slate-50 flex justify-center items-center flex-col">
        <header className="w-3/5">
          <div className="flex justify-between items-center mb-6">
            <h1 className="font-bold text-2xl">devfinder</h1>
            {/* <button className="flex items-center gap-2 font-bold uppercase tracking-widest text-slate-500 hover:text-slate-50 ease-in duration-200">
              Light <SunIcon />
            </button> */}
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <MagnifyingGlassIcon className="absolute w-9 h-9 pt-3 pl-3" />
              <input
                type="text"
                className="w-full bg-blue-950 pl-12 p-3 rounded-md"
                placeholder="Pesquise um nome de usuário do GitHub…"
              />
            </div>

            <button className="w-full border p-3 rounded-md uppercase tracking-widest hover:bg-slate-50 hover:text-slate-900 ease-in duration-200">
              Buscar
            </button>
          </div>
        </header>

        <main className="w-3/5 flex items-center"></main>
      </div>
    </>
  );
}
