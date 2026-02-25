import Image from "./Image";
import type { IProduct } from "../interfaces";
import Button from "./ui/Button";
import CircleColor from "./CircleColor";
import { txtSlicer, numberWithCommas } from "../utils/functions";
interface IProps {
  product: IProduct;
  setProductToEdit: (product: IProduct) => void;
  setProductToEditIdx: (idx: number) => void;
  idx: number;
  openEditModal: () => void;
  openRemoveModal: () => void;
}

const ProductCard = ({
  product,
  setProductToEdit,
  setProductToEditIdx,
  idx,
  openEditModal,
  openRemoveModal,
}: IProps) => {
  const { description, title, price, imageURL, colors, category } = product;

  //**------------RENDER--------- */
  const renderColors = colors.map((color) => (
    <CircleColor key={color} color={color} />
  ));

  //**------------HANDLER--------- */

  const onEdit = () => {
    setProductToEdit(product);
    setProductToEditIdx(idx);
    openEditModal();
  };

  const onRemove = () => {
    setProductToEdit(product);
    openRemoveModal();
  };
  return (
    <div className=" max-w-sm mx-auto md:max-w-lg md:mx-0 border border-gray-200 rounded-md p-2 flex flex-col">
      <Image
        imageURL={imageURL}
        alt={title}
        className="rounded-md mb-2 w-full h-52 lg:object-cover"
      />
      <h3 className="text-center font-semibold mb-3 ">
        {txtSlicer(title, 25)}
      </h3>
      <p className="text-xm text-gray-500">{txtSlicer(description)}</p>
      <div className="flex flex-wrap items-center justify-start space-x-2 mt-4">
        {renderColors}
      </div>

      <div className="flex items-center justify-between">
        <span className="text-indigo-600 font-semibold text-lg">
          ${numberWithCommas(price)}
        </span>

        <div className="flex items-center space-x-2">
          <span className="text-md">{category.name}</span>
          <Image
            imageURL={category.imageURL}
            alt={category.name}
            className="h-10 w-10 rounded-full object-cover"
          />
        </div>
      </div>

      <div className="flex items-center justify-between text-white space-x-2 mt-4">
        <Button
          className="bg-indigo-700 hover:bg-indigo-500"
          width="w-full"
          onClick={onEdit}
        >
          Edit
        </Button>
        <Button
          className="bg-red-700 hover:bg-red-500"
          width="w-full"
          onClick={onRemove}
        >
          Remove
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
