import { useFetch } from "../../hooks/useFetch"

export const EliminadosScreen = () => {
  const { loading, data } = useFetch('http://localhost/nuup/backend/public/api/v1/plaguicidasDeleted');
  return (
    <div>
      <h1 className="text-black text-2xl font-semibold">Plaguicidas Eliminados</h1>
      <hr/>
    </div>
  )
}
