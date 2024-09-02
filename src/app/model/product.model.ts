export interface IProduct {
  id: number;
  description: string;
  name: string;
  imageName: string;
  part: string;
  price: number;
  discount?: number;
}
