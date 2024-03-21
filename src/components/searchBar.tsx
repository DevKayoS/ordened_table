interface SearchBarProps{
  searchTerm: string,
  setSearchTerm: (busca: string) => string
}

export function SearchBar({searchTerm, setSearchTerm}: SearchBarProps ){
  return (
    <div className="w-full ">
      <input type="text" 
      className="outline-none border-b-2 bg-gray-200  border-black w-full text-xl "
      placeholder="Pesquisar..." 
      value={searchTerm} 
      onChange={(e) => setSearchTerm(e.target.value)}/>
    </div>
  )
}