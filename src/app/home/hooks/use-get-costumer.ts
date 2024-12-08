import {useQuery} from '@tanstack/react-query';
import {api} from '../../../service/api.ts';


export const useGetCostumer = () => {
  const {data} = useQuery({
    queryKey: ['costumer'],
    queryFn: async () => handleGetCostumers(),
  })
  
  
  async function handleGetCostumers() {
    try {
      const {data} = await api.get('/costumer');
      
      
      return data
    } catch (error) {
      console.log(error)
    }
  }
  
  return {
    costumers: data ?? [],
  }
}