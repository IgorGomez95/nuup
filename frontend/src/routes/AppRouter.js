import { Routes, Route, BrowserRouter } from "react-router-dom";

import { EliminadosScreen } from "../components/eliminados/EliminadosScreen";
import { PlaguicidasScreen } from "../components/plaguicidas/PlaguicidasScreen";
import NavBar from "../components/ui/NavBar";

export const AppRouter = () => {
  // Creación de rutas por medio de react router dom
  return (
    <BrowserRouter>
      {/* Se agrega el componente navbar */}
      <NavBar/>
      <section className="mt-10 bg-white lg:max-w-6xl md:max-w-3xl max-w-xl overflow-hidden mx-auto rounded-md p-5">
        <Routes>
          <Route path="/" element={<PlaguicidasScreen />} />
          <Route path="/eliminados" element={<EliminadosScreen />} />
        </Routes>
      </section>
    </BrowserRouter>
  )
}
