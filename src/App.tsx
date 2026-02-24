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
import type { TInputName } from "./types";
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
  const [products, setProducts] = useState<IProduct[]>(productList);
  const [product, setProduct] = useState<IProduct>(defaultProductObj);
  const [productToEdit, setProductToEdit] =
    useState<IProduct>(defaultProductObj);
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    price: "",
    imageURL: "",
    colors: "",
  });
  const [tempColors, setTempColors] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<ICategory>(
    categories[0],
  );
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);

  console.log(productToEdit);
  //**------------HANDLER--------- */
  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };
  const openEditModal = () => {
    setIsOpenEditModal(true);
  };

  const closeEditModal = () => {
    setIsOpenEditModal(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };
  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProductToEdit({ ...productToEdit, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const onCancel = () => {
    setProduct(defaultProductObj);
    setTempColors([]);
    setErrors({
      title: "",
      description: "",
      price: "",
      imageURL: "",
      colors: "",
    });
    close();
  };
  const onEditCancel = () => {
    setProduct(defaultProductObj);
    setTempColors([]);
    setErrors({
      title: "",
      description: "",
      price: "",
      imageURL: "",
      colors: "",
    });
    closeEditModal();
  };
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { title, description, price, imageURL } = product;
    const errors = productValidation({
      title,
      description,
      price,
      imageURL,
      colors: tempColors,
    });

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
  const submitEditHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { title, description, price, imageURL } = productToEdit;
    const errors = productValidation({
      title,
      description,
      price,
      imageURL,
      colors: tempColors,
    });

    const hasErrorMsg =
      Object.values(errors).some((error) => error == "") &&
      Object.values(errors).every((error) => error == "");

    if (!hasErrorMsg) {
      setErrors(errors);
      return;
    }

    setProductToEdit(defaultProductObj);
    setTempColors([]);
    closeEditModal();
  };

  //**------------RENDER--------- */
  const renderProducts = products.map((product) => (
    <ProductCard
      key={product.id}
      product={product}
      setProductToEdit={setProductToEdit}
      openEditModal={openEditModal}
    />
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
        setErrors({ ...errors, colors: "" });
        if (tempColors.includes(color)) {
          setTempColors((prev) => prev.filter((c) => c !== color));
        } else {
          setTempColors((prev) => [...prev, color]);
        }
      }}
    />
  ));

  const renderEditFormInputWithErrorMsg = (
    label: string,
    id: string,
    name: TInputName,
  ) => {
    return (
      <div className="flex flex-col">
        <label htmlFor={id} className=" font-medium text-gray-700 text-sm">
          {label}
        </label>

        <Input
          type={"text"}
          name={name}
          id={id}
          value={productToEdit[name]}
          onChange={handleEditChange}
        />
        <ErrorMessage msg={errors[name]} />
      </div>
    );
  };
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
        //*------------Add Modal--------- */
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
            {errors.colors && <ErrorMessage msg={errors.colors} />}

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
        //*------------Edit Modal--------- */
        <Modal
          isOpen={isOpenEditModal}
          close={closeEditModal}
          title="EDIT A PRODUCT"
        >
          <form className="space-y-3" onSubmit={submitEditHandler}>
            {renderEditFormInputWithErrorMsg("Title", "edit-title", "title")}
            {renderEditFormInputWithErrorMsg(
              "Description",
              "edit-description",
              "description",
            )}
            {renderEditFormInputWithErrorMsg("Price", "edit-price", "price")}
            {renderEditFormInputWithErrorMsg(
              "Image URL",
              "edit-imageURL",
              "imageURL",
            )}
            {/* <div>
              <Select
                selected={selectedCategory}
                setSelected={setSelectedCategory}
              />
            </div>
            <div className="flex flex-wrap items-center justify-start space-x-2 mt-4">
              {renderColors}
            </div>
            {errors.colors && <ErrorMessage msg={errors.colors} />}

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
            </div> */}
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
                onClick={onEditCancel}
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
