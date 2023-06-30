import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home";

function App() {
  const menuItems = [
    { value: "About us", href: "/" },
    { value: "Services", href: "/" },
    { value: "Use Cases", href: "/" },
    { value: "Pricing", href: "/" },
    { value: "Blog", href: "/" },
  ];
  return (
    <div className='wrapper'>
      <Header  menuItems={menuItems}/>
      <main className="main">
        <Home />
      </main>
      <Footer menuItems={menuItems}/>
    </div>
  );
}

export default App;