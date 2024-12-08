import {ChangeEvent, useState} from 'react';
import {CreateCostumerForm} from '../../components/forms/create-cosutmer-form';
import {Header} from '../../components/header';
import {
  ModalCostumers,
} from '../../components/modal/create-costumer-modal.tsx';
import {CostumersList} from './fragments/costumers-list.tsx';
import {useGetCostumer} from './hooks/use-get-costumer.ts';

export function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [limitPage, setLimitPage] = useState<number>(12);
  
  const { costumers } = useGetCostumer({
    page: currentPage,
    limit: limitPage,
  })
  
  function goToPreviousPage() {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };
  
  function goToNextPage() {
    setCurrentPage((prev) => Math.min(prev + 1, costumers?.meta?.totalPages!));
  };
  
  function handleSelectLimitPage(event: ChangeEvent<HTMLSelectElement>) {
    setLimitPage(Number(event.target.value))
  }
  
  return (
    <main>
      <Header/>
      <section className="w-5/6 mx-auto mt-8 ">
        <header
          className="flex flex-col gap-3 pb-3 justify-between items-center sm:flex-row sm:gap-0 sm:p-0">
          <span>
            <strong>{costumers?.items?.length}</strong> clientes econtrados:
          </span>
          <div className="flex items-center justify-center gap-3">
            <label>Clientes por página:</label>
            <select
              onChange={handleSelectLimitPage}
              defaultValue={limitPage}
              className="border-2 border-gray rounded-md bg-white w-10">
                <option value="4">4</option>
                <option value="8">8</option>
                <option value="12">12</option>
                <option value="16">16</option>
            </select>
          </div>
        </header>
        <CostumersList
          costumers={costumers.items}
          meta={costumers.meta}
          goToNextPage={goToNextPage}
          goToPreviousPage={goToPreviousPage}
          currentPage={currentPage}
        />
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
          <CreateCostumerForm
            setIsOpen={setIsOpen}
          />
        </ModalCostumers>
      )}
    </main>
  )
}