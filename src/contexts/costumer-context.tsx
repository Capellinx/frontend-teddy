import {createContext, ReactNode, useState} from 'react';
import {Costumer} from '../@types/costumer';

interface CostumerContextProps {
  costumer: Costumer.Create;
  setCostumer: (payload: Costumer.Create) => void;
  handleSubmitCostumer: (payload: Costumer.Create) => void;
}

export const CostumerContext = createContext({} as CostumerContextProps);

export function CostumerProvider({children}: { children: ReactNode }) {
  const [costumer, setCostumer] = useState<Costumer.Create>({
    name: '',
    salary: '',
    company: '',
  });
  
  
  function handleSubmitCostumer({ name, salary, company }: Costumer.Create) {
    console.log({name, salary, company});
  }
  
  return (
    <CostumerContext.Provider
      value={{
        costumer,
        setCostumer,
        handleSubmitCostumer
      }}
    >
      {children}
    </CostumerContext.Provider>
  );
}
