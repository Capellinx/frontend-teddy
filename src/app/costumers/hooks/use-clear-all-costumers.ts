import {useMutation, useQueryClient} from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { api } from '../../../service/api';

export const useClearAllCostumers = () => {
  
  const queryClient = useQueryClient()
  
  const mutate = useMutation({
    mutationKey: ['register'],
    mutationFn: async () => {
      await handleSelectCostumer()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['costumer'],
      })
    }
  })
  
  const handleSelectCostumer = async () => {
    try {
      return await api.post(`/costumer/clear`)
      
    } catch (error) {
      throw error;
    }
  };
  
  const handleClearAllSelect = async () => {
    await toast.promise(
      mutate.mutateAsync(),
      {
        loading: 'Limpando...',
        success: 'Limpou com sucesso!',
        error: 'Erro ao limpar.',
      },
    );
  };
  
  
  return {
    handleClearAllSelect
  }
}