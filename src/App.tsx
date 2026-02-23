import { useState } from "react";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import { formInputsList, productList } from "./data";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import type { IProduct } from "./interfaces";
import { productValidation } from "./validation";
import ErrorMessage from "./components/ErrorMessage";
function App() {
  const defaultProductObj: IProduct = {
    title: "",
    description: "",
    price: "",
    imageURL: "",
    colors: [],
    category: { name: "", imageURL: "" },
  };
  //**------------STATE--------- */
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProducts] = useState<IProduct>(defaultProductObj);
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    price: "",
    imageURL: "",
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
    setErrors({ ...errors, [name]: "" });
  };

  const onCancel = () => {
    console.log("cancel");
    setProducts(defaultProductObj);
    close();
  };
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { title, description, price, imageURL } = product;
    const errors = productValidation({ title, description, price, imageURL });
    console.log(errors);

    const hasErrorMsg =
      Object.values(errors).some((error) => error == "") &&
      Object.values(errors).every((error) => error == "");

    if (!hasErrorMsg) {
      setErrors(errors);
      return;
    }

    console.log("Send Product To Server");
  };

  //**------------RENDER--------- */
  const renderProducts = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  const renderFormInputList = formInputsList.map((input) => (
    <div className="flex flex-col" key={input.id}>
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
      <ErrorMessage msg={errors[input.name]} />
    </div>
  ));
  return (
    <>
      <main className="container mx-auto p-4 md:p-8 lg:p-16 xl:p-24 flex flex-col items-center">
        <Button
          className="bg-indigo-600 hover:bg-indigo-400 text-white font-medium text-md mb-5 px-8 py-3 rounded-lg "
          width="w-fit"
          onClick={() => open()}
        >
          Build Product
        </Button>
        <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4  rounded-md ">
          {renderProducts}
        </div>

        <Modal isOpen={isOpen} close={close} title="ADD A NEW PRODUCT">
          <form className="space-y-3" onSubmit={submitHandler}>
            {renderFormInputList}
            <div className="flex items-center space-x-3 text-white ">
              <Button
                className="bg-indigo-600 hover:bg-indigo-400"
                width="w-full"
              >
                Submit
              </Button>
              <Button
                className="bg-red-600 hover:bg-red-400"
                width="w-full"
                onClick={onCancel}
              >
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
