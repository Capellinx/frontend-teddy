import {Dispatch, FormEvent, SetStateAction} from 'react';
import {Costumer} from '../../@types/costumer';


interface CreateCostumerFormProps {
  setIsOpenDelete: Dispatch<SetStateAction<boolean>>;
  costumer: Costumer.Create;
}

export function DeleteCostumerForm({setIsOpenDelete, costumer}: CreateCostumerFormProps ) {
  
  function handleSubmit(event: FormEvent){
    event.preventDefault();
    setIsOpenDelete(false);
    console.log(`excluiu o usuário ${costumer.name} com sucesso`);
  }
  
  return (
    <form
      className="flex flex-col w-full gap-6"
      onSubmit={handleSubmit}
    >
      <p className="w-full">Você está prestes a excluir o cliente: <strong>{costumer.name}</strong></p>
      <button
        type="submit"
        className="w-full text-white bg-orange-500  border-orange-500 rounded-md p-2 hover:bg-orange-700 transform transition duration-300"
      >
        Excluir cliente
      </button>
    </form>
  )
}