import { category } from "./category.model"

export interface product {
  id: string | number,
  title: string,
  price: number,
  description: string,
  category: category,
  images: string[]
}
