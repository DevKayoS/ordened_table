import { useState } from "react";
import { SearchBar } from "./components/searchBar";
import { TableHeader } from "./components/tableHeader";
import { TableRow } from "./components/tableRow";

export function App() {
  const [data, setData] = useState([
    { nome: "Kayo", idade: 18, cargo: "Estagiário"},
    { nome: "Maria", idade: 30, cargo: "Gerente" },
    { nome: "João", idade: 22, cargo: "Analista" },
    { nome: "Pedro", idade: 28, cargo: "Desenvolvedor" },
    { nome: "Ana", idade: 35, cargo: "Coordenadora" },
    { nome: "Carlos", idade: 27, cargo: "Engenheiro" },
    { nome: "Fernanda", idade: 33, cargo: "Arquiteta" },
    { nome: "Rafael", idade: 29, cargo: "Designer" },
    { nome: "Lúcia", idade: 40, cargo: "Diretora" },
    { nome: "Paulo", idade: 31, cargo: "Analista de Sistemas" }
    
  ])

  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="flex flex-col items-center justify-center space-y-4 max-w-[800px] mx-5 my-auto">
      <h1 className="text-3xl">Tabela de Usuários</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <table className="w-full border-collapse mt-5 border m-auto">
        <TableHeader/>
        <tbody>
          {data.map((dados, index)=> 
           <TableRow key={index} name={dados.nome} age={dados.idade} cargo={dados.cargo}/>
          )}
        </tbody>
      </table>
    </div>
  )
}


