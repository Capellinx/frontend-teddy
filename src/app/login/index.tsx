import {useNavigate} from 'react-router-dom';


export function LoginPage() {
  
  const navigate = useNavigate();
  
  return (
    <main className="w-full flex flex-col items-center justify-center h-screen">
      <div className="w-1/5 flex flex-col items-center justify-center gap-6 ">
        <h1 className="text-3xl font-inter font-light">Olá, seja bem-vindo</h1>
        <input
          type="text"
          placeholder="Digite seu nome:"
          className="w-full bg-transparent border-2 border-gray rounded-sm p-2 focus:outline-orange-500"
        />
        <button
          className="w-full p-2 rounded-sm text-white bg-orange-500 focus:outline-black hover:bg-orange-700"
          onClick={() => navigate('/home')}
        >
          Entrar
        </button>
      </div>
    </main>
  )
}