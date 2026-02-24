import { useState } from "react";
import { v4 as uuid } from "uuid";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import { categories, colors, formInputsList, productList } from "./data";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import type { ICategory, IProduct } from "./interfaces";
import { productValidation } from "./validation";
import ErrorMessage from "./components/ErrorMessage";
import CircleColor from "./components/CircleColor";
import Select from "./components/ui/Select";
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
  const [products, setProducts] = useState<IProduct[]>(productList);
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState<IProduct>(defaultProductObj);
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    price: "",
    imageURL: "",
  });
  const [tempColors, setTempColors] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<ICategory>(
    categories[0],
  );
  console.log(tempColors);
  //**------------HANDLER--------- */
  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const onCancel = () => {
    console.log("cancel");
    setProduct(defaultProductObj);
    setTempColors([]);
    setErrors({
      title: "",
      description: "",
      price: "",
      imageURL: "",
    });
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

    setProducts((prev) => [
      {
        ...product,
        colors: tempColors,
        id: uuid(),
        category: selectedCategory,
      },
      ...prev,
    ]);

    setProduct(defaultProductObj);
    setTempColors([]);
    close();
  };

  //**------------RENDER--------- */
  const renderProducts = products.map((product) => (
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

  const renderColors = colors.map((color) => (
    <CircleColor
      key={color}
      color={color}
      onClick={() => {
        if (tempColors.includes(color)) {
          setTempColors((prev) => prev.filter((c) => c !== color));
        } else {
          setTempColors((prev) => [...prev, color]);
        }
      }}
    />
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

            <div>
              <Select
                selected={selectedCategory}
                setSelected={setSelectedCategory}
              />
            </div>
            <div className="flex flex-wrap items-center justify-start space-x-2 mt-4">
              {renderColors}
            </div>
            <div className="flex flex-wrap items-center justify-start space-x-2 mt-4">
              {tempColors.map((color) => (
                <span
                  key={color}
                  className=" px-1 py-1 rounded-md mb-1 "
                  style={{ backgroundColor: color }}
                >
                  {color}
                </span>
              ))}
            </div>
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
