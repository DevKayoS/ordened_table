interface SearchBarProps{
  searchTerm: string,
  setSearchTerm: (busca: string) => string
}

export function SearchBar({searchTerm, setSearchTerm}: SearchBarProps ){
  return (
    <div>
      <input type="text" 
      placeholder="Pesquisar..." 
      value={searchTerm} 
      onChange={(e) => setSearchTerm(e.target.value)}/>
    </div>
  )
}