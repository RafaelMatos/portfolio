import Link from "next/link";
import { IconList } from "./IconList";
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'

export function Contact() {
  return (
    <>
      <div className="w-full lg:h-screen">
        <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
          <p className="uppercase text-2xl tracking-widest text-purple-700">
            Contato
          </p>
          <h2 className="py-4 ml-2">Entre em contato</h2>
          <div className="grid lg:grid-cols-5 gap-8">
            {/* left */}
            <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
              <div className="lg:p-4 h-full">
                <div>
                  <img
                    className="rounded-xl hover:scale-105 ease-in duration-300"
                    src="https://images.unsplash.com/photo-1611175694989-4870fafa4494?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=674&q=80"
                    alt=""
                  />
                </div>
                <div className="pt-3">
                  <h2 className="py-2  tracking-widest">Rafael Matos</h2>
                  <p className=" tracking-widest pt-2 pb-3">
                    Desenvolvedor Front-end
                  </p>
                  <p>
                    Estou disponível para freelance ou contratação efetiva.
                    Entre em contato comigo e vamos conversar sobre o que iremos
                    fazer.
                  </p>
                </div>
                <div>
                  <p className="uppercase pt-8">Conecte-se comigo</p>
                  <div className="flex items-center justify-between m-auto py-4">
                    <IconList />
                  </div>
                </div>
              </div>
            </div>
            {/* right */}
            <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
              <div className="p-4">
                <form action="">
                  <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                    <div className="flex flex-col">
                      <label htmlFor="" className="uppercase text-sm py-2">
                        Nome
                      </label>
                      <input
                        type="text"
                        className="border-2 rounded-lg p-3 flex border-gray-300"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="" className="uppercase text-sm py-2">
                        Número
                      </label>
                      <input
                        type="text"
                        className="border-2 rounded-lg p-3 flex border-gray-300"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col py-2">
                    <label htmlFor="" className="uppercase text-sm py-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="border-2 rounded-lg p-3 flex border-gray-300 "
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label htmlFor="" className="uppercase text-sm py-2">
                      Assunto
                    </label>
                    <input
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-gray-300 "
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label htmlFor="" className="uppercase text-sm py-2">
                      Mensagem
                    </label>
                    <textarea
                      className="border-2 rounded-lg p-3 flex border-gray-300 max-h-full"
                      rows={10}
                    />
                  </div>
                  <button className="w-full p-4 text-gray-100 mt-4 hover:scale-[1.03] ease-in duration-300">Enviar Mensagem</button>
                </form>
              </div>
            </div>
          </div>
          <div className="flex justify-center py-12">
            <Link href={'/'}>
              <div className="rounded-full shadow-sm hover:shadow-lg
                 shadow-gray-400 p-3 cursor-pointer text-purple-500 hover:text-purple-800 
                 hover:scale-105 ease-in duration-500 ">
                <HiOutlineChevronDoubleUp size={30}/>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
