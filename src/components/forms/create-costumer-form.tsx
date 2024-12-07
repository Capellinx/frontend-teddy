import {ChangeEvent, FormEvent, useState} from 'react';
import {Input} from '../input';

interface CostumerState {
  name: string;
  salary: string;
  company: string;
}

export function CreateCostumerForm() {
  const [costumer, setCostumer] = useState<CostumerState>({
    name: "",
    salary: "",
    company: "",
  });
  
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    console.log(costumer);
  }
  
  function handleChangeCostumerInformation(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setCostumer({ ...costumer, [name]: value });
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
          value={costumer.name}
          onChange={handleChangeCostumerInformation}
          placeholder="Digite seu nome:"
        />
      </div>
      <div>
        <Input
          required
          type="text"
          name="salary"
          value={costumer.salary}
          onChange={handleChangeCostumerInformation}
          placeholder="Digite seu salário:"
        />
      </div>
      <div>
        <Input
          required
          type="text"
          name="company"
          value={costumer.company}
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