export interface INavButton {
  icon?: string;
  title: string;
  to?: string;
}

export interface IProductsApi {
  id: string;
  title: string;
  image: string;
  desc?: string;
  ingredients?: Array<string>;
  fullDec?: string;
  rate?: number;
  price?: number;
  allergents?: Array<string>;
  status?: string;
  size?: string;
}
