// Types for your API responses
export interface User {
  id: number;
  email: string;
  name: string;
}

// Types for creating new records
export interface CreateUserPayload {
  name: string;
  email: string;
}