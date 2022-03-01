import { useFetch } from "../../hooks/useFetch"
import { Form } from "../ui/Form";

export const PlaguicidasScreen = () => {
  const { loading, data } = useFetch('http://localhost/nuup/backend/public/api/v1/plaguicidas');
  // console.log(data);
  return (
    <div>
      <h1 className="text-black text-2xl font-semibold">Plaguicidas</h1>
      <hr/>
      <Form/>
    </div>
  )
}
