import { User, AuthProvider, AuthCredentials } from '../domain/auth-types';

export abstract class AuthApi {
  abstract signIn(provider: AuthProvider, credentials?: AuthCredentials): Promise<User>;
  abstract signOut(): Promise<void>;
  abstract onAuthStateChanged(cb: (user: User | null) => void): void;
}
