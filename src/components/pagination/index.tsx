
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  goToNextPage: () => void;
  goToPreviousPage: () => void;
}

export function Pagination ({currentPage, totalPages, goToPreviousPage, goToNextPage}: PaginationProps) {
  
  
  return (
    <div className="flex items-center justify-between space-x-4 p-4">
      <button
        onClick={goToPreviousPage}
        disabled={currentPage === 1}
        className="px-4 py-2 text-sm font-medium text-white bg-orange-500 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Voltar
      </button>
      <span className="text-sm font-medium">
        {currentPage} / {totalPages}
      </span>
      <button
        onClick={goToNextPage}
        disabled={currentPage === totalPages}
        className="px-4 py-2 text-sm font-medium text-white bg-orange-500 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Próximo
      </button>
    </div>
  );
};


