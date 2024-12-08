import {useMutation} from '@tanstack/react-query';
import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';
import {Manager} from '../../../@types/manager';
import {api} from '../../../service/api.ts';


export const useRegisterManager = () => {
  const navigate = useNavigate();
  
  const mutate = useMutation({
    mutationKey: ['register'],
    onSuccess: () => {
      navigate("/")
    },
    mutationFn: async ({name, password}: Manager.Register) => {
      await handleRegisterManager({name, password})
    },
  })
  
  const handleRegisterManager = async ({name, password}: Manager.Register) => {
    try {
      return await api.post(`/admin`, {
        name,
        password
      })
      
    } catch (error) {
      throw error;
    }
  };
  
  const handleRegister = async ({name, password}: Manager.Register) => {
    await toast.promise(
      mutate.mutateAsync({name, password}),
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