import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Home from "../pages/Home";
import APropos from "../pages/APropos";
import Logements from "../pages/Logements";
import ErrorPage from "../pages/ErrorPage";

const App = () => {
   return (
      <div>
         <NavBar />
         <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/logements/:id" element={<Logements />}></Route>
            <Route path="/a-propos" element={<APropos />}></Route>
            <Route path="*" element={<ErrorPage />}></Route>
         </Routes>
         <Footer />
      </div>
   );
};
export default App;
