import {useMutation} from '@tanstack/react-query';
import toast from 'react-hot-toast';
import {z} from 'zod';
import {useAuthContext} from '../../../hooks/use-auth.ts';
import {api} from '../../../service/api.ts';
import {schemaLoginManager} from '../schema/schema-login-manager.ts';


export const useLoginManager = () => {
  const {saveInformationToLocalStorage} = useAuthContext()
  
  const mutate = useMutation({
    mutationKey: ['login'],
    onSuccess: () => {
    },
    mutationFn: async ({username, password}: z.infer<typeof schemaLoginManager>) => {
      await handleLoginManager({username, password})
    },
  })
  
  const handleLoginManager = async ({username, password}: z.infer<typeof schemaLoginManager>) => {
    try {
      const { data } = await api.post(`/admin/login`, {
        username,
        password
      })
      
      saveInformationToLocalStorage(data)
      
      return data
    } catch (error) {
      throw error;
    }
  };
  
  const handleLogin = async ({username, password}: z.infer<typeof schemaLoginManager>) => {
    await toast.promise(
      mutate.mutateAsync({username, password}),
      {
        loading: 'Acessando...',
        success: 'Acessou com sucesso!',
        error: 'Erro ao acessar.',
      },
    );
  };
  
  
  return {
    handleLogin
  }
}