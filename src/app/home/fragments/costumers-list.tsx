import {PencilIcon, PlusIcon, Trash2} from 'lucide-react';
import {useState} from 'react';
import {Costumer} from '../../../@types/costumer';
import {DeleteCostumerForm} from '../../../components/forms/delete-costumer-form.tsx';
import {UpdateCostumerForm} from '../../../components/forms/update-costumer-form.tsx';
import {ModalCostumers} from '../../../components/modal/create-costumer-modal.tsx';
import {costumersList} from '../index.tsx';


interface CostumersListProps {
  costumers: typeof costumersList;
}

export function CostumersList({costumers}: CostumersListProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  
  const [updateCostumer, setNewUpdateCostumer] = useState<Costumer.Update>()
  const [deleteCostumer, setDeleteCostumer] = useState<Costumer.Create>()
  
  function handleUpdateCostumer(costumer: Costumer.Update) {
    setIsOpen(!isOpen);
    setNewUpdateCostumer(costumer)
  }
  
  function handleDeleteCostumer(costumer: Costumer.Create) {
    setDeleteCostumer(costumer);
    setIsOpenDelete(!isOpenDelete)
  }
  
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {costumers.map((costumer) => (
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
  )
}