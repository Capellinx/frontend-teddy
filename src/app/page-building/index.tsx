
export function ConstructionPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FDF8F5] relative">
      <div className="absolute top-10 right-10 w-2 h-2 rounded-full bg-orange-400" />
      <div className="absolute top-20 left-20 w-2 h-2 rounded-full bg-orange-400" />
      <div className="absolute bottom-10 right-20 w-2 h-2 rounded-full bg-orange-400" />
      <div className="absolute bottom-20 left-10 w-2 h-2 rounded-full bg-orange-400" />
      
      <div className="text-center px-4">
        <svg
          className="w-64 h-64 mx-auto mb-8"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 80h60L50 20 20 80z" fill="#FFA500" />
          <path d="M50 20L20 80h30V20z" fill="#FF8C00" />
          <rect x="45" y="70" width="10" height="30" fill="#8B4513" />
          <circle cx="50" cy="35" r="8" fill="#FFD700" />
          <path d="M50 31v8M46 35h8" stroke="#000" strokeWidth="2" />
        </svg>
        
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Página em construção
        </h2>
        <p className="text-gray-600 mb-8 max-w-md">
          Estamos trabalhando para trazer algo incrível.
          Por favor, volte em breve.
        </p>
        <button
          onClick={() => window.history.back()}
          className="px-6 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-colors duration-300"
        >
          Voltar
        </button>
      </div>
    </div>
  );
};

