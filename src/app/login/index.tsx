import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/use-auth.ts";

export function LoginPage() {
  const [newName, setNewName] = useState("");
  
  const { saveInformationToLocalStorage } = useAuthContext();
  
  const navigate = useNavigate();
  
  function handleSubmitName(event: FormEvent) {
    event.preventDefault();
    
    saveInformationToLocalStorage(newName);
  }
  
  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    
    setNewName(event.target.value);
  }
  
  function handleNameInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório");
  }
  
  function leaveUserToRegisterPage() {
    navigate("/register");
  }
  
  return (
    <main className="w-full h-screen flex flex-col justify-center items-center">
      <form
        onSubmit={handleSubmitName}
        className="w-full max-w-sm flex flex-col items-center justify-center gap-6 p-6 bg-white shadow-lg rounded-lg"
      >
        <h1 className="text-3xl font-inter font-light text-center">
          Olá, seja bem-vindo
        </h1>
        <input
          required
          onChange={handleInputChange}
          onInvalid={handleNameInvalid}
          placeholder="Digite seu nome:"
          type="text"
          className="w-full bg-transparent border-2 border-gray rounded-sm p-2 focus:outline-orange-500"
        />
        <button className="w-full p-2 rounded-sm text-white bg-orange-500 focus:outline-black hover:bg-orange-700">
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
