import { Injectable } from '@angular/core';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import { User } from "./../../interface/user"
import { PhoneAuthProvider, signInWithPhoneNumber } from '@angular/fire/auth';

// import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private recaptchaVerifier: firebase.auth.RecaptchaVerifier | null = null;
  private verificationId: string | null = null;
                                                                                                                                                                                                                                                                                                                                                

  constructor(private afAuth: AngularFireAuth) {}

  initializeRecaptcha(containerId: string) {
    console.log('Initializing ReCaptcha...');
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(containerId, {
      size: 'invisible'
    });
    this.recaptchaVerifier.render()
      .then(() => {
        console.log('ReCaptcha initialized successfully.');
      })
      .catch(error => {
        console.error('Error initializing ReCaptcha', error);
      });
  }
  

  sendLoginCode(phoneNumber: string): Promise<void> {
    if (!this.recaptchaVerifier) {
      throw new Error('Recaptcha not initialized');
    }

    return this.afAuth.signInWithPhoneNumber(phoneNumber, this.recaptchaVerifier)
      .then(confirmationResult => {
        this.verificationId = confirmationResult.verificationId;
        alert('Code sent successfully');
      })
      .catch(error => {
        console.error('SMS not sent', error);
        throw error;
      });
  }

  verifyLoginCode(verificationCode: string): Promise<void> {
    if (!this.verificationId) {
      throw new Error('No verification ID available');
    }

    const credential = firebase.auth.PhoneAuthProvider.credential(this.verificationId, verificationCode);

    return this.afAuth.signInWithCredential(credential)
      .then(result => {
        alert('Phone number verified successfully!');
      })
      .catch(error => {
        console.error('Error during verification', error);
        throw error;
      });
  }



getAuth() {

return getAuth

}


register(user: User) {

  return createUserWithEmailAndPassword(getAuth(), user.email, user.password)

}

logIn(user: User) {

return signInWithEmailAndPassword(getAuth(), user.email, user.password)

}

logInGoogle() {

return signInWithPopup(getAuth(), new GoogleAuthProvider())

}

// logInMsj() {

// return signInWithPhoneNumber(getAuth(), Auth, phoneNumber, appVerifier: ApplicationVerifier)

// }

logOut(){

  return signOut(getAuth())

}

isAuthenticated(){
  
  const user = getAuth().currentUser;
  return user !== null 


}


 
}
