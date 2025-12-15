import { useState } from "react";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import { productList } from "./data/productsList";
import Button from "./components/ui/Button";

function App() {
  //**------------STATE--------- */
  const [isOpen, setIsOpen] = useState(false);

  //**------------HANDLER--------- */

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  //**------------RENDER--------- */
  const renderProducts = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
  return (
    <>
      <main className="container mx-auto p-4 md:p-8 lg:p-16 xl:p-24">
        <Button
          className="bg-indigo-600 hover:bg-indigo-400"
          width="w-full"
          onClick={() => open()}
        >
          Add
        </Button>
        <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md ">
          {renderProducts}
        </div>

        <Modal isOpen={isOpen} close={close} title="ADD A NEW PRODUCT">
          <div className="flex items-center space-x-3 text-white">
            <Button
              className="bg-indigo-600 hover:bg-indigo-400"
              width="w-full"
            >
              Submit
            </Button>
            <Button className="bg-red-600 hover:bg-red-400" width="w-full">
              Cancel
            </Button>
          </div>
        </Modal>
      </main>
    </>
  );
}

export default App;
