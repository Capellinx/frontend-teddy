import {useMutation, useQueryClient} from '@tanstack/react-query';
import toast from 'react-hot-toast';
import {api} from '../service/api.ts';


export const useSelectCostumer = () => {
  
  const queryClient = useQueryClient()
  
  const mutate = useMutation({
    mutationKey: ['register'],
    mutationFn: async ({id, status}: {id: string, status: boolean}) => {
      await handleSelectCostumer({id, status})
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['costumer'],
      })
    }
  })
  
  const handleSelectCostumer = async ({id, status}: {id: string, status: boolean}) => {
    try {
      return await api.post(`/costumer/${id}?select=${status}`)
      
    } catch (error) {
      throw error;
    }
  };
  
  const handleSelect = async ({id, status}: {id: string, status: boolean}) => {
    if(status === false) {
      await toast.promise(
        mutate.mutateAsync({id, status}),
        {
          loading: 'Removendo...',
          success: 'Removido com sucesso!',
          error: 'Erro ao remover.',
        },
      );
      
      return
    }
    
    await toast.promise(
      mutate.mutateAsync({id, status}),
      {
        loading: 'Selecionando...',
        success: 'Selecionado com sucesso!',
        error: 'Erro ao selecionar.',
      },
    );
  };
  
  
  return {
    handleSelect
  }
}