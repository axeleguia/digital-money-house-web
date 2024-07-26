export type RegisterRequest = {
  dni: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  phone: string;
};

export type RegisterResponse = {
  account_id: number;
  email: string;
  user_id: number;
};
