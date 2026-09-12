import "./App.css";
import Home from "./app/pages/Home";
import Navbar from "./app/components/navigation";
import Footer from "./app/components/footer";
import { useEffect } from "react";
import AOS from "aos";

function App() {
    useEffect(() => {
        AOS.init({
            once: true,
            duration: 800,
            easing: "ease-in-out",
        });
    }, []);

    return (
        <>
            <Navbar></Navbar>
            <Home></Home>
            <Footer></Footer>
        </>
    );
}

export default App;
