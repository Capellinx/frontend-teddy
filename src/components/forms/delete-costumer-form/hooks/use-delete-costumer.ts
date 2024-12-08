import {useMutation, useQueryClient} from '@tanstack/react-query';
import toast from 'react-hot-toast';
import {api} from '../../../../service/api.ts';

export const useDeleteCostumer = () => {
  const queryClient = useQueryClient();
  
  const mutate = useMutation({
    mutationKey: ['delete'],
    mutationFn: async ({ id }: { id: string }) => {
      await handleDeleteCostumer({ id })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["costumer"],
      })
    }
  })
  
  const handleDeleteCostumer = async ({ id }: { id: string }) => {
    try {
      return await api.delete(`/costumer/${id}`)
      
    } catch (error) {
      throw error;
    }
  };
  
  const handleDelete = async ({ id }: { id: string }) => {
    await toast.promise(
      mutate.mutateAsync({ id }),
      {
        loading: 'Registrando...',
        success: 'Registrado com sucesso!',
        error: 'Erro ao registrar.',
      },
    );
  };
  
  
  return {
    handleDelete,
  }
}