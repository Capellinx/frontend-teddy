import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import {Manager} from '../../@types/manager';
import {useRegisterManager} from './hooks/use-register-manager.ts';


export function RegisterPage() {
  const [newManager, setNewManager] = useState<Manager.Register>({
    name: "",
    password: "",
  });
  
  const { handleRegister } = useRegisterManager()
  
  const navigate = useNavigate();
  
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    handleRegister({
      name: newManager.name,
      password: newManager.password,
    });
  }
  
  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    
    const { name, value } = event.target;
    
    setNewManager({ ...newManager, [name]: value });
  }
  
  function handleNameInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório");
  }
  
  function leaveUserToLoginPage() {
    navigate("/");
  }
  
  return (
    <main className="w-full h-screen flex flex-col justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm flex flex-col items-center justify-center gap-6 p-6 bg-white shadow-lg rounded-lg"
      >
        <h1 className="text-3xl font-inter font-light text-center">
          Olá, faça seu registro
        </h1>
        <input
          name="name"
          value={newManager.name}
          required
          placeholder="Digite seu nome"
          type="text"
          onInvalid={handleNameInvalid}
          onChange={handleInputChange}
          className="w-full bg-transparent border-2 border-gray rounded-sm p-2 focus:outline-orange-500"
        />
        <input
          name="password"
          value={newManager.password}
          required
          placeholder="Digite sua senha"
          type="password"
          onInvalid={handleNameInvalid}
          onChange={handleInputChange}
          className="w-full bg-transparent border-2 border-gray rounded-sm p-2 focus:outline-orange-500"
        />
        <button className="w-full p-2 rounded-sm text-white bg-orange-500 focus:outline-black hover:bg-orange-700">
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
