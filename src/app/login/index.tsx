import {ChangeEvent, FormEvent, InvalidEvent, useState} from 'react';
import {useAuthContext} from '../../hooks/use-auth.ts';


export function LoginPage() {
  const [newName, setNewName] = useState('');
  
  const { saveInformationToLocalStorage } = useAuthContext()
  
  function handleSubmitName(event: FormEvent) {
    event.preventDefault()
    
    saveInformationToLocalStorage(newName)
  }
  
  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    
    setNewName(event.target.value)
  }
  
  
  function handleNameInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório')
  }
  
  return (
    <main className="w-full flex flex-col items-center justify-center h-screen">
      <form onSubmit={handleSubmitName} className="w-1/5 flex flex-col items-center justify-center gap-6 ">
        <h1 className="text-3xl font-inter font-light">Olá, seja bem-vindo</h1>
        <input
          required
          onChange={handleInputChange}
          onInvalid={handleNameInvalid}
          placeholder="Digite seu nome:"
          type="text"
          className="w-full bg-transparent border-2 border-gray rounded-sm p-2 focus:outline-orange-500"
        />
        <button
          className="w-full p-2 rounded-sm text-white bg-orange-500 focus:outline-black hover:bg-orange-700"
        >
          Entrar
        </button>
      </form>
    </main>
  )
}