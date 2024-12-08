import { ClipboardListIcon, MinusIcon} from 'lucide-react';
import {Costumer} from '../../../@types/costumer';
import {formatCurrencyToReal} from '../../../utils/format-currency-to-real.ts';
import {useSelectCostumer} from '../../../hooks/use-select-costumer.ts';

interface SelectCostumerListProps{
  costumers: Costumer.List[]
}

export function SelectCostumerList({costumers}: SelectCostumerListProps) {
  const newListCostumer = costumers?.filter(costumer => costumer?.is_selected)
  
  
  const {handleSelect} = useSelectCostumer()
  
  function handleChangeSelectStatus({id, status}: { id: string, status: boolean }) {
    handleSelect({
      id,
      status,
    })
  }
  
  return (
    <>
      {newListCostumer?.length === 0 ? (
        <div className="w-full h-96 mt-5 border-2 border-gray rounded-md flex flex-col items-center justify-center gap-3">
          <ClipboardListIcon size={60}/>
          <p>Nenhum cliente selecionado</p>
        </div>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {newListCostumer.map((costumer: Costumer.List) => (
            <li
              key={costumer?.id}
              className="bg-[#ffff] text-center p-6 rounded-md mt-2.5 font-inter"
            >
              <div className="flex flex-col gap-2.5 text-[16px]">
                <p>
                  <strong>{costumer?.name}</strong>
                </p>
                <p>Salário: {formatCurrencyToReal(costumer?.salary / 100)}</p>
                <p>Empresa: {formatCurrencyToReal(costumer?.company / 100)}</p>
              </div>
              <div className="flex costumers-center justify-end mt-4">
                <button>
                  <MinusIcon
                    onClick={() => handleChangeSelectStatus({
                      id: costumer?.id!,
                      status: false
                    })}
                    className="text-orange-500 hover:text-orange-500"
                  />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}