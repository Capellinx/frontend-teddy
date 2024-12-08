import {useState} from 'react';
import {CreateCostumerForm} from '../../components/forms/create-cosutmer-form';
import {Header} from '../../components/header';
import {
  ModalCostumers,
} from '../../components/modal/create-costumer-modal.tsx';
import {CostumersList} from './fragments/costumers-list.tsx';

export const costumersList = [
  {
    id: 1,
    name: 'Lucas Capella',
    salary: 'R$ 7.500,00',
    company: 'Loonic',
  },
  {
    id: 2,
    name: 'Gabriel Capella',
    salary: 'R$ 7.500,00',
    company: 'IQVIA',
  },
  {
    id: 3,
    name: 'Maria Capella',
    salary: 'R$ 7.500,00',
    company: 'Ifood',
  },
  {
    id: 4,
    name: 'Patricia Capella',
    salary: 'R$ 7.500,00',
    company: 'Prefeitura',
  },
]


export function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <main>
      <Header/>
      <section className="w-5/6 mx-auto mt-8 ">
        <header
          className="flex flex-col gap-3 pb-3 justify-between items-center sm:flex-row sm:gap-0 sm:p-0">
          <span>
            <strong>{costumersList.length}</strong> clientes econtrados:
          </span>
          <div className="flex items-center justify-center gap-3">
            <label>Clientes por página:</label>
            <select id="cars" name="cars" className="border-2 border-gray rounded-md bg-white w-10">
              {costumersList.map((item) => (
                <option value="volvo" key={item.id}>{item.id}</option>
              ))}
            </select>
          </div>
        </header>
        <CostumersList costumers={costumersList}/>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-transparent w-full border-2 text-orange-500 border-orange-500 rounded-md mt-5 p-2 hover:bg-orange-700 hover:border-orange-700 hover:text-white transform transition duration-300">
          <strong>
            Criar cliente
          </strong>
        </button>
      </section>
      {isOpen && (
        <ModalCostumers
          setIsOpen={setIsOpen}
          title="Cadastrar cliente:"
        >
          <CreateCostumerForm setIsOpen={setIsOpen}/>
        </ModalCostumers>
      )}
    </main>
  )
}