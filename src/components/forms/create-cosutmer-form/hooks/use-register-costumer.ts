import {useMutation, useQueryClient} from '@tanstack/react-query';
import toast from 'react-hot-toast';
import {Costumer} from '../../../../@types/costumer';
import {api} from '../../../../service/api.ts';


export const useRegisterCostumer = () => {
  
  const queryClient = useQueryClient()
  
  const mutate = useMutation({
    mutationKey: ['register'],
    mutationFn: async ({name, salary, company}: Costumer.Create) => {
      await handleRegisterCostumer({name, salary, company})
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['costumer'],
      })
    }
  })
  
  const handleRegisterCostumer = async ({name, salary, company}: Costumer.Create) => {
    try {
      return await api.post(`/costumer`, {
        name,
        salary, company
      })
      
    } catch (error) {
      throw error;
    }
  };
  
  const handleRegister = async ({name, salary, company}: Costumer.Create) => {
    await toast.promise(
      mutate.mutateAsync({name, salary, company}),
      {
        loading: 'Registrando...',
        success: 'Registrado com sucesso!',
        error: 'Erro ao registrar.',
      },
    );
  };
  
  
  return {
    handleRegister
  }
}