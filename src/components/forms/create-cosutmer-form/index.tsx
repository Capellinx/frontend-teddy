import {zodResolver} from '@hookform/resolvers/zod';
import {ChangeEvent, Dispatch, SetStateAction, useState} from 'react';
import {useForm} from 'react-hook-form';
import {z} from 'zod';
import {useCostumerContext} from '../../../hooks/use-costumer.ts';
import {formatCurrencyToReal} from '../../../utils/format-currency-to-real.ts';
import {Input} from '../../input';
import {useRegisterCostumer} from './hooks/use-register-costumer.ts';
import {registerCostumerSchema} from './schema/register-costumer-schema.ts';

interface CreateCostumerFormProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export function CreateCostumerForm({ setIsOpen }: CreateCostumerFormProps) {
  const [formattedValue, setFormattedValue] = useState({
    salary: "",
    company: ""
  });
  
  const { handleRegister } = useRegisterCostumer();
  
  const { handleSubmitCostumer } = useCostumerContext();
  
  const { register, handleSubmit, setValue } = useForm<z.infer<typeof registerCostumerSchema>>({
    mode: 'onChange',
    defaultValues: {
      name: '',
    },
    resolver: zodResolver(registerCostumerSchema),
  });

  function onSubmit({ name, salary, company }: z.infer<typeof registerCostumerSchema>) {
    handleRegister({
      name,
      salary,
      company,
    });
    
    handleSubmitCostumer({
      name,
      salary,
      company,
    });
    
    setIsOpen(false);
  }
  
  const handleFieldChange = (event: ChangeEvent<HTMLInputElement>, field: "salary" | "company") => {
    const rawValue = event.target.value.replace(/\D/g, "")
    
    const numericValue = Number(rawValue) / 100
    
    const formatted = formatCurrencyToReal(numericValue)
    
    setFormattedValue((prev) => ({
      ...prev,
      [field]: formatted
      
    }));
    
    setValue(field, numericValue * 100);
  };
  
  return (
    <form className="flex flex-col w-full gap-6" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input
          type="text"
          {...register('name')}
          placeholder="Digite seu nome:"
        />
      </div>
      <div>
        <Input
          type="text"
          placeholder="Digite seu salário:"
          value={formattedValue.salary}
          onChange={(e) => handleFieldChange(e, 'salary')}
        />
      </div>
      <div>
        <Input
          type="text"
          value={formattedValue.company}
          onChange={(e) => handleFieldChange(e, 'company')}
          placeholder="Digite o valor da sua empresa:"
        />
      </div>
      <button
        type="submit"
        className="w-full text-white bg-orange-500 border-orange-500 rounded-md p-2 hover:bg-orange-700 transform transition duration-300"
      >
        Criar cliente
      </button>
    </form>
  );
}
