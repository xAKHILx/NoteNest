# 📓 NoteNest

A full-stack note-taking app built with:

- 🌐 **Next.js + Material UI (MUI)** for the web (Material Design 3 styling)
- 📱 **Expo (React Native)** for Android
- 🔐 **Firebase Authentication** with Google Sign-In
- 🌍 **WebView** integration to embed the web app inside the mobile app
- 🔔 **Firebase Cloud Messaging (FCM)** for push notifications (native integration)

---

## 📁 Folder Structure

note-nest/ ├── web-app/ # Next.js + MUI frontend ├── expo-app/ # Expo Android app with WebView + FCM

---

## 🚀 How to Run and Test

### ▶️ Web App (Next.js + MUI)

Navigate to the web app folder:

```bash
cd web-app

Install dependencies:
npm install

Create .env.local and add Firebase config:

NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

Start the development server:

npm run dev
Visit: http://localhost:3000

### 📱 Android App (Expo + WebView)

Navigate to the Expo project:
cd expo-app

Install dependencies:
npm install

Start Expo:
npx expo start

Open the app on:

Android Emulator

Expo Go app on your phone (scan QR code)

🧩 The app uses react-native-webview to display the deployed web app inside the mobile app.

---

## 🔐 Google Sign-In (Firebase)
Auth is handled through Firebase Authentication

Works across both the web and the mobile app

Make sure your Firebase project has Google Sign-In enabled and correct redirect URIs added

---

## 🔔 Push Notifications (FCM)
The app is integrated with native Firebase Cloud Messaging

Expo's push service is not used

You'll need to add your google-services.json and set up FCM configuration for full notification support

---

## 🌐 Live Project
Web: https://note-nest-5qq9.vercel.app/

GitHub Repo: https://github.com/xAKHILx/NoteNest

---

✅ Features
Material 3 UI using MUI

Google Sign-In (via Firebase)

Unified design across platforms

WebView integration for hybrid mobile experience

FCM push notifications support
