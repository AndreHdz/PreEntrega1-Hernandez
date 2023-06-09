import CartWidget from "./CartWidget"
import Logo from "../../assets/logo.png"

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white">
      <div className="flex justify-between items-center mx-auto p-3 max-w-7xl">
        <img className="w-28" src={Logo} alt="logo"/>
        <div className="flex justify-center">
          <a className="mx-5" href="#">INICIO</a>
          <a className="mx-5" href="#">COMEDOR</a>
          <a className="mx-5" href="#">RECAMARA</a>
          <a className="mx-5" href="#">SALA</a>
          <a className="mx-5" href="#">ACCESORIOS</a>
          <CartWidget/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar