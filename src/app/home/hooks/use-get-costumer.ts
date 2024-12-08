import {useQuery} from '@tanstack/react-query';
import {api} from '../../../service/api.ts';


interface UseGetCostumerProps {
  page?: number;
  limit?: number;
}

export const useGetCostumer = ({page = 1, limit = 12}: UseGetCostumerProps) => {
  const {data} = useQuery({
    queryKey: ['costumer', page, limit],
    queryFn: () => handleGetCostumers({
      page,
      limit,
    }),
  })
  
  
  async function handleGetCostumers({page, limit}: UseGetCostumerProps) {
    try {
      const {data} = await api.get(`/costumer?limit=${limit}&page=${page}`);
      
      
      return data
    } catch (error) {
      console.log(error)
    }
  }
  
  return {
    costumers: data ?? [],
  }
}