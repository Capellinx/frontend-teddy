import {ChangeEvent, Dispatch, SetStateAction, useState} from 'react';
import {useForm} from 'react-hook-form';
import {z} from 'zod';
import {Costumer} from '../../../@types/costumer';
import {formatCurrencyToReal} from '../../../utils/format-currency-to-real.ts';
import {Input} from '../../input';
import {useUpdateCostumer} from './hooks/use-update-costumer.ts';
import {updateCostumerSchema} from './schema/update-costumer-schema.ts';

interface UpdateCostumerFormProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  updateCostumer: Costumer.List;
}

export function UpdateCostumerForm({setIsOpen, updateCostumer}: UpdateCostumerFormProps ) {
  const [formattedValue, setFormattedValue] = useState({
    salary: updateCostumer.salary / 100,
    company : updateCostumer.company / 100,
  });
  
  const { handleUpdate} = useUpdateCostumer()
  
  const { register, handleSubmit, setValue } = useForm<z.infer<typeof updateCostumerSchema>>({
    values: {
      name: updateCostumer.name,
    }
  })
  
  function onSubmit({name, salary, company }: z.infer<typeof updateCostumerSchema> ) {
    handleUpdate({
      name,
      salary,
      company,
      id: updateCostumer.id!
    })
    
    setIsOpen(false)
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
    <form
      className="flex flex-col w-full gap-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <Input
          type="text"
          {...register("name")}
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
        className="w-full text-white bg-orange-500  border-orange-500 rounded-md p-2 hover:bg-orange-700 transform transition duration-300"
      >
        Editar cliente
      </button>
    </form>
  )
}