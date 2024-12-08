

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
  
  export type List = {
    id?: string,
    name: string,
    salary: number,
    company: number,
    is_selected: boolean,
    created_at?: Date,
    updated_at?: Date,
  }
}

