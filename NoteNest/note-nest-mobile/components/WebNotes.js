import { WebView } from "react-native-webview";

export default function WebNotes() {
  return (
    <WebView
      source={{ uri: "https://note-nest-5qq9.vercel.app/" }}
      style={{ flex: 1 }}
    />
  );
}
