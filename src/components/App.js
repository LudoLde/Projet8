import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Home from "../pages/Home";
import APropos from "../pages/APropos";
import NotFound from "./Error";
import Logements from "../pages/Logements";

const App = () => {
   return (
      <div>
         <NavBar />
         <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/logements/:id" element={<Logements />}></Route>
            <Route path="/a-propos" element={<APropos />}></Route>
            <Route path="*" element={<NotFound />}></Route>
         </Routes>
         <Footer />
      </div>
   );
};
export default App;
