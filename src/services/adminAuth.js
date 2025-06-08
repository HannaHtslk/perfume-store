import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase';

export const loginAdmin = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredential.user;
};

export const logoutAdmin = async () => {
  await signOut(auth);
};
