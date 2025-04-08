import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { useEffect } from "react";
import { Button } from "react-native-paper";
import { signInWithCredential, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";

WebBrowser.maybeCompleteAuthSession();

export default function GoogleSignIn() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: "YOUR_EXPO_CLIENT_ID.apps.googleusercontent.com",
    androidClientId: "YOUR_ANDROID_CLIENT_ID.apps.googleusercontent.com",
    webClientId: "YOUR_WEB_CLIENT_ID.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential)
        .then(() => alert("Signed in!"))
        .catch((e) => alert("Sign-in failed: " + e.message));
    }
  }, [response]);

  return (
    <Button
      mode="contained"
      onPress={() => promptAsync()}
      style={{ marginTop: 16 }}
    >
      Sign Up with Google
    </Button>
  );
}
