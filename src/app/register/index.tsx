import {zodResolver} from '@hookform/resolvers/zod';
import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import {useRegisterManager} from './hooks/use-register-manager.ts';
import { Eye, EyeOff } from 'lucide-react';
import {registerManagerSchema, TRegisterManager} from './schema/register-manager.schema.ts';

export function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  
  const { register, handleSubmit, formState: { errors, isValid } } = useForm<TRegisterManager>({
    defaultValues: {
      name: '',
      password: '',
    },
    mode: 'onChange',
    resolver: zodResolver(registerManagerSchema),
  });
  
  const { handleRegister } = useRegisterManager();
  const navigate = useNavigate();
  
  
  function onSubmit(manager: TRegisterManager) {
    handleRegister({
      name: manager.name,
      password: manager.password,
    });
  }
  
  function leaveUserToLoginPage() {
    navigate('/');
  }
  
  return (
    <main className="w-full h-screen flex flex-col justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-sm flex flex-col items-center justify-center gap-6 p-6 bg-white shadow-lg rounded-lg"
      >
        <h1 className="text-3xl font-inter font-light text-center">
          Olá, faça seu registro
        </h1>
        
        <div className="w-full">
          <input
            type="text"
            {...register("name")}
            placeholder="Digite seu nome"
            className={`w-full bg-transparent border-2 rounded-sm p-2 focus:outline-orange-500 ${errors.name ? 'border-red-500' : 'border-gray'}`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
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
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>
        
        <button
          type="submit"
          disabled={!isValid}
          className={`w-full p-2 rounded-sm text-white ${isValid ? 'bg-orange-500 hover:bg-orange-700' : 'bg-gray-300 cursor-not-allowed'}`}
        >
          Registrar
        </button>
      </form>
      
      <p className="mt-3 flex items-center justify-center gap-3">
        já possui uma conta?
        <span
          className="text-orange-500 underline cursor-pointer"
          onClick={leaveUserToLoginPage}
        >
          Entrar
        </span>
      </p>
    </main>
  );
}
