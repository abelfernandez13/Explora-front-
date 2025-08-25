export interface Photo  {
    id: string;
    title: string;
    description: string;
    precio:number;
    habitaciones:number;
    huespedes: number;
    imagePaths: string[];
    ubicacion: string; 
    lat: number,
    lng: number,
}