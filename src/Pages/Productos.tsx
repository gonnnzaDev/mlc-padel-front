import Navbar from "../Components/Navbar";
import ProductsList from "../Components/ProductsList";

export default function Productos() {
    return (
        <>
            <div className="general-container">
                <Navbar />
                <ProductsList />
            </div>
        </>
    );
}
