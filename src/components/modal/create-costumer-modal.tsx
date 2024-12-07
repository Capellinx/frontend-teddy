import {Dispatch, ReactNode, SetStateAction, useEffect, useRef} from 'react'

interface CreateCostumerModalProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
  children: ReactNode;
}

export const ModalCostumers = ({ setIsOpen, title, children }: CreateCostumerModalProps) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    const handleOutClick = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    const handleEscapeClick = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    
    window.addEventListener("mousedown", handleOutClick);
    window.addEventListener("keydown", handleEscapeClick);
    
    return () => {
      window.removeEventListener("mousedown", handleOutClick);
      window.removeEventListener("keydown", handleEscapeClick);
    };
  }, []);
  
  return (
    <div
      role="dialog"
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <div
        ref={modalRef}
        className="bg-white w-11/12 sm:w-1/2 lg:w-1/3 rounded-lg p-6 shadow-lg"
      >
        <div className="flex items-center justify-between pb-4 mb-4">
          <p className="text-lg font-bold">{title}</p>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-800"
          >
            X
          </button>
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
};
