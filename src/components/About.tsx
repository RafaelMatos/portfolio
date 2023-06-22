export function About(){
  return (
    <div className="w-full p-2 flex items-center ">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 mb-[10%]">
        <div className="col-span-2">
          <p className="uppercase text-2xl tracking-widest text-purple-700">Sobre</p>
          <h2 className="py-4">Quem sou eu</h2>
          <p className="py-2 text-gray-600">⁄⁄ Não sou seu desenvolvedor comum</p>
          <p className="py-2 text-gray-600">
            Sou amante da vida, gamer entusiasta e apreciador de boas artes e música.
            Desenvolvedor de software, em busca sempre de algo novo 
            e inovador para o conhecimento no ramo do trabalho e da vida. 
          </p>
          <p className="py-2 text-gray-600">
            Por tanto, sempre tento extrair de minhas experiências uma melhor versão
            de mim mesmo, tanto pessoalmente quanto profissionalmente.
          </p>
          <p className="py-2 text-gray-600 cursor-pointer underline hover:text-purple-700 w-auto">Confira alguns dos meus últimos projetos.</p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-500 flex 
          items-center justify-center p-4 hover:scale-105 duration-300 rounded-xl">
          <img 
          className="rounded-xl"
          src="https://images.unsplash.com/photo-1620748229976-a78c7e0932a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" />
        </div>
      </div>
    </div>
  )
}