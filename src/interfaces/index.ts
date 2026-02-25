import type { TInputName } from "../types";

export interface IProduct {
  id?: string | undefined;
  title: string;
  description: string;
  imageURL: string;
  price: string;
  colors: string[];
  category: ICategory;
}

export interface IFormInputs {
  label: string;
  type: string;
  id: string;
  name: TInputName;
}

export interface ICategory {
  id: string;
  name: string;
  imageURL: string;
}
