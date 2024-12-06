import { AlignJustify } from "lucide-react";


export function Header() {
  
  return (
    <header className="flex items-center justify-between bg-[#ffff] p-7">
      <div className="flex items-center gap-6">
        <AlignJustify cursor="pointer" />
        <img src="/logo.svg" alt="Company logo"/>
      </div>
      <ul className="flex items-center gap-6">
        <li>
          <a href="#">
            Clientes
          </a>
        </li>
        <li>
          <a href="#">
            Clientes Selecionados
          </a>
        </li>
        <li>
          <a href="#">
            Sair
          </a>
        </li>
      </ul>
      <span>Olá, <strong>Usuário!</strong></span>
    </header>
  )
}