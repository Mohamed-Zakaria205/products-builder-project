import Image from "./Image";
import type { IProduct } from "../../interfaces";
import Button from "./Button";
import { txtSlicer } from "../../utils/functions";
interface IProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProps) => {
  const { description, title, price, imageURL } = product;
  return (
    <div className=" max-w-sm mx-auto md:max-w-lg md:mx-0 border border-gray-200 rounded-md p-2 flex flex-col">
      <Image
        imageURL={imageURL}
        alt={title}
        className="rounded-md mb-2 w-full h-52 lg:object-cover"
      />
      <h3> {title}</h3>
      <p>{txtSlicer(description)}</p>
      <div className="flex items-center my-4 space-x-2">
        <span className="w-5 h-5 bg-indigo-600 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-amber-300 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-red-600 rounded-full cursor-pointer" />
      </div>

      <div className="flex items-center justify-between">
        <span>${price}</span>
        <Image
          imageURL={imageURL}
          alt={title}
          className="h-10 w-10 rounded-full object-cover"
        />
      </div>

      <div className="flex items-center justify-between text-white space-x-2 my-4">
        <Button
          className="bg-red-400"
          width="w-full"
          onClick={() => {
            console.log("Clicked");
          }}
        >
          Delete
        </Button>
        <Button className="bg-indigo-400" width="w-full">
          Edit
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
