
export namespace Manager {
  export type Register = {
    name: string;
    password: string;
  }
  
  export type Login = {
    token: string;
    expiresIn: number;
    name: string;
  }
}
