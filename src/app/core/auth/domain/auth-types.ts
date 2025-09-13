export type AuthProvider = 'email' | 'google' | 'github';

export interface AuthCredentials {
  email?: string;
  password?: string;
}

export interface User {
  id: string;
  email: string;
  displayName?: string;
  photoURL?: string;
}
