export interface Product {
  name: string;
  img: string;
  price: string;
  finalprice: string;
  qty: number;
  offer: number;
}
export interface Category {
  id: number;
  label: string;
  img: string;
}
export interface Store {
  id: number;
  img: string;
  name: string;
  itemCount: number;
  lat: string;
  lng: string;
}
