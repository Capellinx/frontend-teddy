import {PencilIcon, PlusIcon, Trash2} from 'lucide-react';
import {useState} from 'react';
import {Costumer} from '../../../@types/costumer';
import {UpdateCostumerForm} from '../../../components/forms/update-costumer-form.tsx';
import {ModalCostumers} from '../../../components/modal/create-costumer-modal.tsx';
import {costumersList} from '../index.tsx';


interface CostumersListProps {
  costumers: typeof costumersList;
}

export function CostumersList({costumers}: CostumersListProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [updateCostumer, setNewUpdateCostumer] = useState<Costumer.Update>()
  
  function handleInviteCostumerEdit(costumer: Costumer.Update) {
    setIsOpen(!isOpen);
    setNewUpdateCostumer(costumer)
  }
  
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {costumers.map((item) => (
        <li
          key={item.id}
          className="bg-[#ffff] text-center p-6 rounded-md mt-2.5 font-inter"
        >
          <div className="flex flex-col gap-2.5 text-[16px]">
            <p>
              <strong>{item.name}</strong>
            </p>
            <p>{item.salary}</p>
            <p>{item.company}</p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <button>
              <PlusIcon/>
            </button>
            <button>
              <PencilIcon
                onClick={() => handleInviteCostumerEdit(item)}
              />
            </button>
            <button>
              <Trash2 className="text-red" />
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
    </ul>
  )
}