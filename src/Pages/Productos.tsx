import Filters from "../Components/Filters";
import Navbar from "../Components/Navbar";
import ProductsList from "../Components/ProductsList";
import './Productos.css'
export default function Productos() {
    return (
        <>
            <div className="general-container">
                <Navbar />
                <div className="product-container">
                    <Filters />
                    <ProductsList />
                </div>
            </div>
        </>
    );
}
