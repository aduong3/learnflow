import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./firebase";
import { FirebaseError } from "firebase/app";

export const signInWithGoogle = async (): Promise<{ id: string; name: string; email: string } | undefined> => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        const user = result.user;

        return {
            id: user.uid,
            name: user.displayName || "Anonymous",
            email: user.email || "No email provided",
        };
    } catch (error){
        if( error instanceof FirebaseError){
            console.error("Firebase login error:", error.code, error.message);
        } else if (error instanceof Error){
            console.error("Unexpected error:", error.message);
        } else {
            console.error("Unknown error occurred.");
        }
    }
}
 