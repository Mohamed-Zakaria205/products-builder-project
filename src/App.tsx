import { useState } from "react";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import { formInputsList, productList } from "./data";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import type { IProduct } from "./interfaces";
function App() {
  //**------------STATE--------- */
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProducts] = useState<IProduct>({
    title: "",
    description: "",
    price: "",
    imageURL: "",
    colors: [],
    category: { name: "", imageURL: "" },
  });

  //**------------HANDLER--------- */
  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProducts({ ...product, [name]: value });
  };

  console.log(product);
  //**------------RENDER--------- */
  const renderProducts = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  const renderFormInputList = formInputsList.map((input) => (
    <div className="flex flex-col">
      <label htmlFor={input.id} className=" font-medium text-gray-700 text-sm">
        {input.label}
      </label>

      <Input
        type={input.type}
        name={input.name}
        id={input.id}
        value={product[input.name]}
        onChange={handleChange}
      />
    </div>
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
        <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4  rounded-md ">
          {renderProducts}
        </div>

        <Modal isOpen={isOpen} close={close} title="ADD A NEW PRODUCT">
          <form className="space-y-3">
            {renderFormInputList}
            <div className="flex items-center space-x-3 text-white ">
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
          </form>
        </Modal>
      </main>
    </>
  );
}

export default App;
