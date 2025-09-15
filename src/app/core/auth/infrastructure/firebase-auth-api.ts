import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  onAuthStateChanged,
  signOut,
  User as FirebaseUser,
  AuthProvider as FirebaseProvider,
} from 'firebase/auth';
import { AuthApi } from '../application/api';
import { User, AuthProvider, AuthCredentials } from '../domain/auth-types';
import { firebaseAuth } from '@core/firebase/config';

export class FirebaseAuthApi implements AuthApi {
  async signIn(provider: AuthProvider, credentials?: AuthCredentials): Promise<User> {
    switch (provider) {
      case 'email': {
        this.ensureCredentials(credentials);
        const { user } = await signInWithEmailAndPassword(
          firebaseAuth,
          credentials.email,
          credentials.password
        );
        return this.mapUser(user);
      }
      case 'google':
        return this.signInWithProvider(new GoogleAuthProvider());
      case 'facebook':
        return this.signInWithProvider(new FacebookAuthProvider());
      default:
        throw new Error(`Proveedor no soportado: ${provider}`);
    }
  }

  async signUp(credentials?: AuthCredentials): Promise<User> {
    this.ensureCredentials(credentials);
    const { user } = await createUserWithEmailAndPassword(
      firebaseAuth,
      credentials.email,
      credentials.password
    );
    return this.mapUser(user);
  }

  async signOut(): Promise<void> {
    await signOut(firebaseAuth);
  }

  onAuthStateChanged(cb: (user: User | null) => void): void {
    onAuthStateChanged(firebaseAuth, (fbUser) => {
      cb(fbUser ? this.mapUser(fbUser) : null);
    });
  }

  private async signInWithProvider(provider: FirebaseProvider): Promise<User> {
    const { user } = await signInWithPopup(firebaseAuth, provider);
    return this.mapUser(user);
  }

  private ensureCredentials(
    credentials?: AuthCredentials
  ): asserts credentials is Required<AuthCredentials> {
    if (!credentials?.email || !credentials?.password) {
      throw new Error('Se requieren email y contraseña');
    }
  }

  private mapUser(fbUser: FirebaseUser): User {
    return {
      id: fbUser.uid,
      email: fbUser.email ?? '',
      displayName: fbUser.displayName ?? '',
      photoURL: fbUser.photoURL ?? '',
    };
  }
}
