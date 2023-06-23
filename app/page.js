import Image from 'next/image'
import Script from 'next/script'

export default function Home() {
  return (
    <main>
      <p className="mt-4 text-stone-300 text-center font-bold text-xs">Creado por Franco Piccirilli</p>
      <div className="flex flex-row mt-4 text-stone-500 justify-center text-center font-bold text-xs">
        <i class="fa-solid fa-keyboard mt-0.5 mr-2"></i>
        <p className="mb-2">Atajos de teclado: (Q) Crear nueva columna</p>
      </div>
      <div id="notification" className="hidden fixed top-0 right-0 m-4 w-80 bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-between px-4 py-2">
            <div className="text-lg font-medium text-gray-800" id="title-not">
              Guardado correctamente
            </div>
          </div>
          <div className="px-4 text-xs mb-2 py-2" id="desc-not">
            La tablatura se guardo en tu navegador
          </div>
        </div>
      <div>
        <h1 className="text-center mt-10 text-3xl" id="icon">🧉🥐</h1>
        <h1 className="text-center font-extrabold text-3xl mt-2">Creador de Tablaturas</h1>
        <h3 className="text-center font-bold text-xs text-stone-500">Gratis y simple</h3>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center mt-8 space-x-3 w-full max-w-screen-xs mr-5">
        <button id="tab-new" className="rounded-md bg-amber-300 ml-3 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-amber-600 transition ease-in-out duration-300 min-w-[200px] mb-3">
          <i className="fa-solid fa-trash"></i>
          <span className="ml-2" id="reset-tab">Reiniciar tablatura</span>
        </button>
        <button id="tab-add" className="rounded-md bg-amber-300 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-amber-600 transition ease-in-out duration-300 min-w-[200px] mb-3">
          <i className="fa-solid fa-square-plus"></i>
          <span className="ml-2">Crear columna</span>
        </button>
        <button id="tab-copy" className="rounded-md bg-amber-300 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-amber-600 transition ease-in-out duration-300 min-w-[200px] mb-3">
          <i className="fa-solid fa-copy"></i>
          <span className="ml-2">Copiar tablatura</span>
        </button>
      </div>
      <p className="text-center text-stone-400 text-xs mt-4">(/) Slide Up  (\) Slide Down  (h) Hammer On  (p) Pull Off  (b) Bend (r) Release (v) Vibrato</p>
      <Script src="javascript/tab.js" />
    </main>
  )
}
