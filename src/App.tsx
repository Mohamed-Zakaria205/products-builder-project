import ProductCard from "./components/ui/ProductCard";
import { productList } from "./data/productsList";

function App() {
  const renderProducts = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
  return (
    <>
      <main className="container mx-auto ">
        <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 xl:grid-cols-4  md:gap-4 p-2 rounded-md ">
          {renderProducts}
        </div>
      </main>
    </>
  );
}

export default App;
