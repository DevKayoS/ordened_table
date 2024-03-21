interface TableHeaderProps {
  onColumnClick: (head: string) => string
}

export function TableHeader({onColumnClick}: TableHeaderProps){
  return (
    <thead className="cursor-pointer">
      <tr className="border border-slate-500/60 text-left p-2">
        <th onClick={() => onColumnClick("nome")} className="border border-slate-500/60 text-left p-2 bg-slate-400/60">Nome</th>
        <th onClick={() => onColumnClick("idade")} className="border border-slate-500/60 text-left p-2 bg-slate-400/60">Idade</th>
        <th onClick={() => onColumnClick("cargo")} className="border border-slate-500/60 text-left p-2 bg-slate-400/60">Cargo</th>
      </tr>
    </thead>
  )
}