//*Routes and Components
import Footer from "./components/pages/Footer";
import Layout from "./components/pages/Layout";
import Navbar from "./components/pages/Navbar";
import Sidebar from "./components/pages/Sidebar";
//*Components
import Inicio from "./components/pages/sections/Inicio";

//*Fuctions
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="grid min-h-screen grid-rows-layout">
        <Navbar />
        <div className="relative flex">
          <Sidebar />
          <main className="flex-1 overflow-auto bg-slate-500">
            <Layout>
              <h1>APP.TSX</h1>
            </Layout>
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
