import {zodResolver} from '@hookform/resolvers/zod';
import {Eye, EyeOff} from 'lucide-react';
import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import {z} from 'zod';
import {useLoginManager} from './hooks/use-login-manager.ts';
import {schemaLoginManager} from './schema/schema-login-manager.ts';

export function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  
  const { handleLogin } = useLoginManager()

  const navigate = useNavigate();
  
  const {register, handleSubmit, formState: {errors} } = useForm<z.infer<typeof schemaLoginManager>>({
    defaultValues: {
      username: '',
      password: '',
    },
    mode: 'onChange',
    resolver: zodResolver(schemaLoginManager),
  })
  
  function onSubmit({username, password}: z.infer<typeof schemaLoginManager>) {
    handleLogin({username, password});
  }
  
  
  function leaveUserToRegisterPage() {
    navigate('/register');
  }
  
  return (
    <main className="w-full h-screen flex flex-col justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-sm flex flex-col items-center justify-center gap-6 p-6 bg-white shadow-lg rounded-lg"
      >
        <h1 className="text-3xl font-inter font-light text-center">
          Olá, seja bem-vindo
        </h1>
        <div className="w-full">
          <input
            type="text"
            {...register("username")}
            placeholder="Digite seu nome"
            className="w-full bg-transparent border-2 border-gray rounded-sm p-2 focus:outline-orange-500"
          />
        
        </div>
        <div className="w-full relative">
          <input
            type={showPassword ? 'text' : 'password'}
            {...register('password')}
            placeholder="Digite sua senha"
            className={`w-full bg-transparent border-2 rounded-sm p-2 focus:outline-orange-500 ${errors.password ? 'border-red-500' : 'border-gray'}`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-gray-500"
          >
            {showPassword ? <EyeOff size={20}/> : <Eye size={20}/>}
          </button>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>
        <button
          className="w-full p-2 rounded-sm text-white bg-orange-500 focus:outline-black hover:bg-orange-700">
          Entrar
        </button>
      </form>
      <p className="mt-3 flex items-center justify-center gap-3">
        Não possui um login?
        <span
          className="text-orange-500 underline cursor-pointer"
          onClick={leaveUserToRegisterPage}
        >
          Registe-se
        </span>
      </p>
    </main>
  );
}
