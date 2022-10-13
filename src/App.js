import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Addveiculos from "./pages/Addveiculo";
import Dashboard from "./pages/Dashboard";
import Detalheveiculos from "./pages/Detalhesveiculos";
import Listarveiculos from "./pages/Listaveiculos";

export default function App() {
  return (
    <div>

    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/listar" element={<Listarveiculos/>} />
        <Route path="/novo" element={<Addveiculos/>} />
        <Route path="/detalhes" element={<Detalheveiculos/>} />
        

      </Routes>
    </BrowserRouter>
    </div>
  );
}


