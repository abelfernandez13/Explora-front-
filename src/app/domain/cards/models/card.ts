export interface Card {
  id: number;
  title: string;
  description: string;
  price: number;
  rooms: number;
  address: string;
  imagePath?: string;
}
