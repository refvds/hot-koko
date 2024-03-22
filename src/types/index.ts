export interface INavButton {
  icon?: string;
  title: string;
  to?: string;
}

export interface IProductsApi {
  id: string;
  title: string;
  imageUrl: string;
  description?: string;
  ingredients?: Array<string>;
  fullDescription?: string;
  rate?: number;
  price?: number;
  allergents?: Array<string>;
  status?: string;
  size?: string;
}
