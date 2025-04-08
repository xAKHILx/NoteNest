import { WebView } from "react-native-webview";

export default function WebNotes() {
  return (
    <WebView
      source={{ uri: "https://your-next-app.vercel.app" }}
      style={{ flex: 1 }}
    />
  );
}
