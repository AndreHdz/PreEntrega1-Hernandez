import CartWidget from "./CartWidget"
import Logo from "../../assets/logo.png"

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white">
      <div className="flex justify-between items-center mx-auto p-3 max-w-7xl">
        <img className="w-28" src={Logo} alt="logo"/>
        <div className="flex justify-center">
          <p className="mx-5">INICIO</p>
          <p className="mx-5">COMEDOR</p>
          <p className="mx-5">RECAMARA</p>
          <p className="mx-5">SALA</p>
          <p className="mx-5">ACCESORIOS</p>
          <CartWidget/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar