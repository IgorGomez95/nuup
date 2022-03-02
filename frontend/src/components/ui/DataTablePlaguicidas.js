import DataTable from 'react-data-table-component';

export const DataTablePlaguicidas = ({ data, columns }) => {

  return (
    <div className='mt-4'>
      <DataTable
        columns={columns}
        data={data}
        pagination
        fixedHeader
        fixedHeaderScrollHeight='600px'
      />
    </div>
  )
}
