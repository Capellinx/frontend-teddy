import {Dispatch, SetStateAction} from 'react';
import {useForm} from 'react-hook-form';
import {Costumer} from '../../../@types/costumer';
import {useDeleteCostumer} from './hooks/use-delete-costumer.ts';


interface CreateCostumerFormProps {
  setIsOpenDelete: Dispatch<SetStateAction<boolean>>;
  costumer: Costumer.List;
}

export function DeleteCostumerForm({setIsOpenDelete, costumer}: CreateCostumerFormProps ) {
  const { handleSubmit } = useForm()
  const { handleDelete } = useDeleteCostumer()
  
  function onSubmit(){
    setIsOpenDelete(false);
  
    handleDelete({
      id: costumer.id as string,
    })
  }
  
  return (
    <form
      className="flex flex-col w-full gap-6"
      onSubmit={handleSubmit(onSubmit)}
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