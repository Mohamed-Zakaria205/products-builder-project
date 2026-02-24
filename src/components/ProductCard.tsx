import Image from "./Image";
import type { IProduct } from "../interfaces";
import Button from "./ui/Button";
import CircleColor from "./CircleColor";
import { txtSlicer } from "../utils/functions";
interface IProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProps) => {
  const { description, title, price, imageURL, colors, category } = product;

  //**------------RENDER--------- */
  const renderColors = colors.map((color) => (
    <CircleColor key={color} color={color} />
  ));

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
        <span>${price}</span>
        <Image
          imageURL={category.imageURL}
          alt={category.name}
          className="h-10 w-10 rounded-full object-cover"
        />
      </div>

      <div className="flex items-center justify-between text-white space-x-2 mt-4">
        <Button
          className="bg-red-600"
          width="w-full"
          onClick={() => {
            console.log("Clicked");
          }}
        >
          Delete
        </Button>
        <Button className="bg-indigo-600" width="w-full">
          Edit
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
