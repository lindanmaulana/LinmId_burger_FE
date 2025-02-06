import { image } from "./type-image";

export type statusDiscount = "active" | "expired" | "upcoming";

export interface categorie {
  description: string;
  name: string;
  _id: string;
}


export interface product {
  description: string;
  name: string;
  price: number;
  stock: number;
  _id: string;
  id_categorie: categorie;
  id_image: image;
}

export interface detailProduct extends product {
  createdAt: string;
  updatedAt: string;
  __v: number;
}
