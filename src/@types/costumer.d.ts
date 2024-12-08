

export namespace Costumer {
  export type Create = {
    id?: number
    name: string;
    salary: number;
    company: number;
  }
  
  export type Update = {
    id?: number
    name?: string;
    salary?: string;
    company?: string;
  }
}

