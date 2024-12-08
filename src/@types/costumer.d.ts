import {number} from 'zod';


export namespace Costumer {
  export type Create = {
    id?: number
    name: string;
    salary: number;
    company: number;
  }
  
  export type Update = {
    id?: string
    name?: string;
    salary?: number;
    company?: number;
  }
  
  export type List = {
    id?: string,
    name: string,
    salary: number,
    company: number,
    is_selected: boolean,
    created_at?: Date,
    updated_at?: Date,
  }
  
  export type Meta = {
    totalItems: number;
    itemCount: number;
    itemsPerpage: number;
    totalPages: number;
    currentPage: number;
  }
}

