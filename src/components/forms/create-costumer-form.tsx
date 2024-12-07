import {ChangeEvent, FormEvent, useState} from 'react';
import {Costumer} from '../../@types/costumer';
import {useCostumerContext} from '../../hooks/use-costumer.ts';
import { Input } from '../input';

export function CreateCostumerForm() {
  const [newCostumer, setNewCostumer] = useState<Costumer.Create>({
    name: "",
    salary: "",
    company: "",
  })
  
  const { handleSubmitCostumer} = useCostumerContext()
  
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    handleSubmitCostumer(newCostumer);
  }
  
  function handleChangeCostumerInformation(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setNewCostumer({ ...newCostumer, [name]: value });
  }
  
  return (
    <form
      className="flex flex-col w-full gap-6"
      onSubmit={handleSubmit}
    >
      <div>
        <Input
          required
          type="text"
          name="name"
          value={newCostumer.name}
          onChange={handleChangeCostumerInformation}
          placeholder="Digite seu nome:"
        />
      </div>
      <div>
        <Input
          required
          type="text"
          name="salary"
          value={newCostumer.salary}
          onChange={handleChangeCostumerInformation}
          placeholder="Digite seu salário:"
        />
      </div>
      <div>
        <Input
          required
          type="text"
          name="company"
          value={newCostumer.company}
          onChange={handleChangeCostumerInformation}
          placeholder="Digite o valor da sua empresa:"
        />
      </div>
      <button
        type="submit"
        className="w-full text-white bg-orange-500  border-orange-500 rounded-md p-2 hover:bg-orange-700 transform transition duration-300"
        >
        Criar cliente
      </button>
    </form>
  )
}