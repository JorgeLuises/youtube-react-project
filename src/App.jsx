import NavBar from "./components/NavBar";
import Menu from "./components/Menu";
import Contenido from "./components/Contenido";

export default function App () {//Exportacion de un elemento de react
  return (
    //<main id="main-layout">
    <main className="w-full min-h-screen p-4 grid grid-cols-[20%_1fr] grid-rows-[3.2rem_1fr]">
      <NavBar />
      <Menu />
      <Contenido />
    </main>
  );
}
