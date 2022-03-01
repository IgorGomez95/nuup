import { Routes, Route, BrowserRouter } from "react-router-dom";

import { EliminadosScreen } from "../components/eliminados/EliminadosScreen";
import { PlaguicidasScreen } from "../components/plaguicidas/PlaguicidasScreen";
import NavBar from "../components/ui/NavBar";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<PlaguicidasScreen />} className="text-base font-medium text-white hover:text-gray-900" />
        <Route path="/eliminados" element={<EliminadosScreen />} />
      </Routes>
    </BrowserRouter>
  )
}
