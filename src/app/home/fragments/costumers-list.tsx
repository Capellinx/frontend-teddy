import {PencilIcon, PlusIcon, Trash2} from 'lucide-react';
import {costumersList} from '../index.tsx';


interface CostumersListProps {
  costumers: typeof costumersList;
}

export function CostumersList({costumers}: CostumersListProps) {
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
            <p>{item.salário}</p>
            <p>{item.Empresa}</p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <button>
              <PlusIcon/>
            </button>
            <button>
              <PencilIcon/>
            </button>
            <button>
              <Trash2 className="text-red" />
            </button>
          </div>
        </li>
      ))}
 
    </ul>
  )
}