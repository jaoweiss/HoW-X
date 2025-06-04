import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/avisos">Avisos</Link> |{" "}
      <Link to="/contato">Contato</Link>
    </nav>
  )
}