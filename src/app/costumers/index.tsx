import {Header} from '../../components/header';
import {useGetCostumer} from '../home/hooks/use-get-costumer.ts';
import {SelectCostumerList} from './fragments/costumers-list.tsx';


export function CostumersPage() {
  const { costumers } = useGetCostumer()
  
  return (
    <main>
      <Header/>
      <section className="w-5/6 mx-auto mt-8">
        <header>
          <h1 className="text-2xl">
            <strong>Clientes selecionados:</strong>
          </h1>
        </header>
        <SelectCostumerList costumers={costumers} />
        <button
          className="bg-transparent w-full border-2 text-orange-500 border-orange-500 rounded-md mt-5 p-2 hover:bg-orange-700 hover:border-orange-700 hover:text-white transform transition duration-300">
          <strong>
            Limpar clientes selecionados
          </strong>
        </button>
      </section>
    </main>
  )
}