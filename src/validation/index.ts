export const productValidation = (product: {
  title: string;
  description: string;
  price: string;
  imageURL: string;
}) => {
  const errors: {
    title: string;
    description: string;
    price: string;
    imageURL: string;
  } = {
    title: "",
    description: "",
    price: "",
    imageURL: "",
  };

  const validUrl = /^(ftp|http|https):\/\/[^ "]+$/.test(product.imageURL);

  if (
    !product.title.trim() ||
    product.title.length < 10 ||
    product.title.length > 50
  ) {
    errors.title = "Title must be between 10 and 50 characters";
  }

  if (
    !product.description.trim() ||
    product.description.length < 20 ||
    product.description.length > 200
  ) {
    errors.description = "Description must be between 20 and 200 characters";
  }

  if (
    !product.price.trim() ||
    isNaN(Number(product.price)) ||
    Number(product.price) <= 0
  ) {
    errors.price = "Price must be a positive number";
  }

  if (!product.imageURL.trim() || !validUrl) {
    errors.imageURL = "Image URL is required and must be a valid URL";
  }

  return errors;
};
