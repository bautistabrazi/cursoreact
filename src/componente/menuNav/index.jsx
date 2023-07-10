import '../menuNav/style.css'

const Navbar = () => {
    return (
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categorias
                </a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Samsung</a></li>
                    <li><a class="dropdown-item" href="#">Motorola</a></li>
                    <li><a class="dropdown-item" href="#">Iphone</a></li>
                </ul>
                <li><img className="img-cart" src="../imagenes/cel.png" alt="" /></li>
            </ul>
            </div>
        </div>
    </nav>
    )
}

export default Navbar;