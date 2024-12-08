import {useState} from 'react';
import {AlignJustify, ArrowLeft, Grid2x2, House, UserRound} from 'lucide-react';
import {useNavigate} from 'react-router-dom';
import {useAuthContext} from '../../hooks/use-auth.ts';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const {user, handleUserLogout} = useAuthContext()
  
  const navigate = useNavigate();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  return (
    <>
      <header className="flex items-center justify-between bg-[#ffff] p-7">
        <div className="flex items-center gap-6 mx-auto md:m-0">
          {isMenuOpen
            ? null
            : <AlignJustify
              cursor="pointer"
              onClick={toggleMenu}
            />
          }
          <img src="/logo.svg" alt="Company logo"/>
        </div>
        <ul className="hidden items-center gap-6 md:flex">
          <li>
            <p
              onClick={() => navigate("/home")}
              className="cursor-pointer hover:text-orange-500 hover:underline transform transition duration-100"
              >Clientes</p>
          </li>
          <li>
            <p
              onClick={() => navigate("/costumers")}
              className="cursor-pointer hover:text-orange-500 hover:underline transform transition duration-100"
            >
              Clientes Selecionados</p>
          </li>
          <li>
            <p
              onClick={handleUserLogout}
              className="cursor-pointer hover:text-orange-500 hover:underline transform transition duration-100"
            >
              Sair
            </p>
          </li>
        </ul>
        <span className="hidden md:block">
          Olá, <strong>{user.name}!</strong>
        </span>
      </header>
      
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeMenu}
      >
        <div
          className={`absolute bottom-0 left-0 right-0 bg-white h-5/6 shadow-lg rounded-t-lg p-5 transform transition-transform duration-300 ${
            isMenuOpen ? 'translate-y-0' : 'translate-y-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="absolute -top-4 right-4 bg-black p-2 rounded-full cursor-pointer"
            onClick={closeMenu}
          >
            <ArrowLeft className="text-white"/>
          </div>
          
          <ul className="space-y-6 pt-10">
            <li className="flex items-center gap-4 text-lg">
              <House/>
              <a href="#">Home</a>
            </li>
            <li className="flex items-center gap-4 text-lg">
              <UserRound/>
              <a href="#">Clientes</a>
            </li>
            <li className="flex items-center gap-4 text-lg">
              <Grid2x2/>
              <a href="#">Produtos</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
