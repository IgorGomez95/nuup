// Pantalla para los elementos eliminados
import { useMemo } from "react";
import { useFetch } from "../../hooks/useFetch"

import { DataTablePlaguicidas } from "../ui/DataTablePlaguicidas";

export const EliminadosScreen = () => {
  const { loading, data } = useFetch('http://localhost/nuup/backend/public/api/v1/plaguicidasDeleted');

  const columns = useMemo(() => [
    {
      name: 'Nombre Comercial',
      selector: row => row.nombre_comercial,
      sortable: true
    },
    {
      name: 'Ingrediente Activo',
      selector: row => row.ingrediente_activo,
      sortable: true
    },
    {
      name: 'Porcentaje Concentración',
      selector: row => row.porcentaje_concentracion,
      sortable: true
    },
    {
      cell: (row) => <button className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium bg-green-500 text-white hover:bg-green-800" onClick={() => handleAction(row,'restore')}>Restaurar</button>,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    }
  ],[]);


  const handleAction = (row,action) => {
    console.log(row)
    console.log(action);
  }

  return (
    <div>
      <h1 className="text-black text-2xl font-semibold">Plaguicidas Eliminados</h1>
      <hr/>
      {
        data?.data && <DataTablePlaguicidas data={data.data} columns={columns}/> 
      }
    </div>
  )
}
