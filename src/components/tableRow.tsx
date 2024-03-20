interface TableRowProps {
  name: string,
  age: number,
  cargo: string
}

export function TableRow({name, age, cargo}: TableRowProps){
  return (
    <tr>
        <td className="border border-slate-500/60 text-left p-2">{name}</td>
        <td className="border border-slate-500/60 text-left p-2">{age}</td>
        <td className="border border-slate-500/60 text-left p-2">{cargo}</td>
      </tr>
  )
}