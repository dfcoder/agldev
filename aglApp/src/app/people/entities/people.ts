import { IPet } from './pet';


export interface IPeople {
    name: string;
    gender: string;
    age: number;
    pets: IPet[];
}