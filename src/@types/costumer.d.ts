

export namespace Costumer {
  export type Create = {
    name: string;
    salary: string;
    company: string;
  }
  
  export type Update = {
    name?: string;
    salary?: string;
    company?: string;
  }
}

