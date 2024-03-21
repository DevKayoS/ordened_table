import { useState } from "react";
import { SearchBar } from "./components/searchBar";
import { TableHeader } from "./components/tableHeader";
import { TableRow } from "./components/tableRow";

export function App() {
  const [data, setData] = useState([
    { nome: "Kayo", idade: 18, cargo: "Estagiário"},
    { nome: "Julia", idade: 19, cargo: "Professora" },
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
  const [sortConfig, setSortConfig] = useState("")

  const sortedData = [...data].sort((a,b) => {
    if(sortConfig !== null) {
      if(a[sortConfig.key] < b[sortConfig.key]){
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if(a[sortConfig.key] > b[sortConfig.key]){
        return sortConfig.direction === "ascending" ? 1 : -1
      }
    }

    return 0;
  })

  const filteredData = sortedData.filter((row) => row.nome.toLowerCase().includes(searchTerm.toLowerCase()) || row.cargo.toLowerCase().includes(searchTerm.toLowerCase()) )

  const onColumnClick = (key) => {
    let direction = "ascending"

    if(sortConfig && sortConfig.key === key && sortConfig.direction === "ascending"){
      direction = "descending"
    }

    setSortConfig({key, direction})
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-4 max-w-[800px] m-auto mt-10">
      <h1 className="text-3xl">Tabela de Usuários</h1>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <table className="w-full border-collapse mt-5 border m-auto rounded-md overflow-hidden shadow-md shadow-black">
        <TableHeader onColumnClick={onColumnClick}/>
        <tbody>
          {filteredData.map((dados, index)=> 
           <TableRow key={index} name={dados.nome} age={dados.idade} cargo={dados.cargo}/>
          )}
        </tbody>
      </table>
    </div>
  )
}


