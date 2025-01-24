import './NavBar.css';
import CartWidget from "./../CartWidget/CartWidget";

function NavBar() {

    return (
        <div className="navbar">
            <div className="navbar">
                <h1>Tienda VisionAG</h1>
                <div>
                    <button> Computadoras </button>
                    <button> Perifericos </button>
                    <button> Setups Completos</button>
                </div>

                <div className="cart-widget">
                    <CartWidget />
                </div>
            </div>

        </div>
    )

}

export default NavBar;