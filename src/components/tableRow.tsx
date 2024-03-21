interface TableRowProps {
  name: string,
  age: number,
  cargo: string
}

export function TableRow({name, age, cargo}: TableRowProps){
  return (
    <tr className="even:bg-slate-400 cursor-pointer">
        <td className="p-2">{name}</td>
        <td className="p-2">{age}</td>
        <td className="p-2">{cargo}</td>
      </tr>
  )
}