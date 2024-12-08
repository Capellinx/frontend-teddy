import {useState} from 'react';
import {Costumer} from '../../@types/costumer';
import {CreateCostumerForm} from '../../components/forms/create-cosutmer-form';
import {Header} from '../../components/header';
import {
  ModalCostumers,
} from '../../components/modal/create-costumer-modal.tsx';
import {CostumersList} from './fragments/costumers-list.tsx';
import {useGetCostumer} from './hooks/use-get-costumer.ts';

export function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  
  const { costumers } = useGetCostumer()
  
  return (
    <main>
      <Header/>
      <section className="w-5/6 mx-auto mt-8 ">
        <header
          className="flex flex-col gap-3 pb-3 justify-between items-center sm:flex-row sm:gap-0 sm:p-0">
          <span>
            <strong>{costumers.length}</strong> clientes econtrados:
          </span>
          <div className="flex items-center justify-center gap-3">
            <label>Clientes por página:</label>
            <select id="cars" name="cars" className="border-2 border-gray rounded-md bg-white w-10">
              {costumers.map((costumer: Costumer.List) => (
                <option value="volvo" key={costumer.id}>{costumer.id}</option>
              ))}
            </select>
          </div>
        </header>
        <CostumersList costumers={costumers}/>
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