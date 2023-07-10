import '../menuNav/style.css'

const Navbar = () => {
    return (
        <nav className="nav">
            <ul>
                <li className="item1">Samsung</li>
                <li className="item2">Apple</li>
                <li className="item3">Motorola</li>
                <img src="../imagenes/cel.png" alt="Phone" className="img-cart"></img>
            </ul>
        </nav>

    )
}

export default Navbar;