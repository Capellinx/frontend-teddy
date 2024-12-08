import { ClipboardListIcon, PencilIcon, PlusIcon, Trash2} from 'lucide-react';
import {useState} from 'react';
import {Costumer} from '../../../@types/costumer';
import {DeleteCostumerForm} from '../../../components/forms/delete-costumer-form';
import {UpdateCostumerForm} from '../../../components/forms/update-costumer-form.tsx';
import {ModalCostumers} from '../../../components/modal/create-costumer-modal.tsx';


interface CostumersListProps {
  costumers: Costumer.List[];
}

export function CostumersList({costumers}: CostumersListProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  
  const [updateCostumer, setNewUpdateCostumer] = useState<Costumer.List>()
  const [deleteCostumer, setDeleteCostumer] = useState<Costumer.List>()
  
  function handleUpdateCostumer(costumer: Costumer.List) {
    setIsOpen(!isOpen);
    setNewUpdateCostumer(costumer)
  }
  
  function handleDeleteCostumer(costumer: Costumer.List) {
    setDeleteCostumer(costumer);
    setIsOpenDelete(!isOpenDelete)
  }
  
  return (
    <>
      {costumers.length === 0 ? (
        <div className="w-full h-96 mt-5 border-2 border-gray rounded-md flex flex-col items-center justify-center gap-3">
          <ClipboardListIcon size={60}/>
          <p>Nenhum cliente encontrado</p>
        </div>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {costumers.map((costumer: Costumer.List) => (
            <li
              key={costumer.id}
              className="bg-[#ffff] text-center p-6 rounded-md mt-2.5 font-inter"
            >
              <div className="flex flex-col gap-2.5 text-[16px]">
                <p>
                  <strong>{costumer.name}</strong>
                </p>
                <p>{costumer.salary}</p>
                <p>{costumer.company}</p>
              </div>
              <div className="flex costumers-center justify-between mt-4">
                <button>
                  <PlusIcon/>
                </button>
                <button>
                  <PencilIcon
                    onClick={() => handleUpdateCostumer(costumer)}
                  />
                </button>
                <button>
                  <Trash2
                    onClick={() => handleDeleteCostumer(costumer)}
                    className="text-red"/>
                </button>
              </div>
            </li>
          ))}
          {isOpen && (
            <ModalCostumers
              title="Editar cliente:"
              setIsOpen={setIsOpen}>
              <UpdateCostumerForm
                setIsOpen={setIsOpen}
                updateCostumer={updateCostumer!}
              />
            </ModalCostumers>
          )}
          
          {isOpenDelete && (
            <ModalCostumers
              title="Excluir cliente:"
              setIsOpen={setIsOpenDelete}>
              <DeleteCostumerForm
                setIsOpenDelete={setIsOpenDelete}
                costumer={deleteCostumer!}
              />
            </ModalCostumers>
          )}
        </ul>
      )}
    </>
  )
}