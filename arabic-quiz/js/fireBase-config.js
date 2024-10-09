
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCCm-VBBYOTmB3AJMaxTlgy4fC_avX_SDw",
    authDomain: "arabic-quiz-609ad.firebaseapp.com",
    projectId: "arabic-quiz-609ad",
    storageBucket: "arabic-quiz-609ad.appspot.com",
    messagingSenderId: "1074312246554",
    appId: "1:1074312246554:web:5f7f38312d259f5f5e28a3",
    measurementId: "G-0B41W17B34"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
