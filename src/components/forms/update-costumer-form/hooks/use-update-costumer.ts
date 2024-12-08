import {useMutation, useQueryClient} from '@tanstack/react-query';
import toast from 'react-hot-toast';
import {Costumer} from '../../../../@types/costumer';
import {api} from '../../../../service/api.ts';

export const useUpdateCostumer = () => {
  
  const queryClient = useQueryClient()
  
  const mutate = useMutation({
    mutationKey: ['update'],
    mutationFn: async ({name, salary, company, id}: Costumer.Update) => {
      await handleUpdateCostumer({name, salary, company, id})
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['costumer'],
      })
    },
  })
  
  const handleUpdateCostumer = async ({name, salary, company, id}: Costumer.Update) => {
    try {
      return await api.patch(`/costumer/${id}`, {
        name,
        salary,
        company
      })
      
    } catch (error) {
      throw error;
    }
  };
  
  const handleUpdate = async ({name, salary, company, id}: Costumer.Update) => {
    await toast.promise(
      mutate.mutateAsync({name, salary, company, id}),
      {
        loading: 'Atualizando...',
        success: 'Atualizado com sucesso!',
        error: 'Erro ao registrar.',
      },
    );
  };
  
  
  return {
    handleUpdate,
  }
}