# 🚀 Tasker - Modern PWA Task Manager

> A beautiful, responsive Progressive Web App (PWA) for task management with real-time sync and offline capabilities.

[![PWA Ready](https://img.shields.io/badge/PWA-Ready-brightgreen.svg)](https://web.dev/pwa-checklist/)
[![React](https://img.shields.io/badge/React-18.x-blue.svg)](https://reactjs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-10.x-orange.svg)](https://firebase.google.com/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF.svg)](https://vitejs.dev/)

## ✨ Features

- 📱 **Progressive Web App** - Install as native app on any device
- 🔄 **Real-time Sync** - Tasks sync instantly across all devices
- 📴 **Offline Support** - Works without internet connection
- 🎨 **Modern UI** - Beautiful glassmorphism design with smooth animations
- 🔐 **Secure Authentication** - Google OAuth integration
- 📊 **Progress Tracking** - Visual progress indicators and statistics
- ⚡ **Fast Performance** - Optimized with code splitting and caching
- 📱 **Responsive Design** - Perfect on mobile, tablet, and desktop
- 🌓 **Modern Animations** - Smooth transitions and micro-interactions

## 🎯 Live Demo

[**🚀 Try Tasker Live**](https://your-tasker-app.web.app) *(Replace with your deployed URL)*

## 📸 Screenshots

| Mobile View | Desktop View | PWA Install |
|-------------|--------------|-------------|
| ![Mobile](./screenshots/mobile.png) | ![Desktop](./screenshots/desktop.png) | ![Install](./screenshots/install.png) |

## 🛠️ Tech Stack

- **Frontend:** React 18 + Vite
- **Styling:** CSS-in-JS with modern design system
- **Backend:** Firebase Firestore (NoSQL)
- **Authentication:** Firebase Auth (Google OAuth)
- **Icons:** Lucide React
- **PWA:** Service Worker + Web App Manifest
- **Hosting:** Firebase Hosting (recommended)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Firebase account

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/tasker-pwa.git
cd tasker-pwa
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Firebase Setup

1. Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication (Google provider)
3. Enable Firestore Database
4. Copy your Firebase config

### 4. Environment Variables

Create a `.env` file in the root directory:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### 5. Add Required Icons

Place your PWA icons in `public/icons/`:
- `192x192.png`
- `512x512.png`

### 6. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see your app! 🎉

## 📱 PWA Installation

### For Users:
1. Visit the app in Chrome/Edge/Safari
2. Click the install prompt or
3. Menu → "Install Tasker" / "Add to Home Screen"

### For Developers:
```bash
# Build for production
npm run build

# Test PWA features locally
npm run preview
```

## 🏗️ Project Structure

```
tasker-pwa/
├── public/
│   ├── icons/              # PWA icons (192x192, 512x512)
│   ├── manifest.json       # PWA manifest
│   └── service-worker.js   # Service worker for offline support
├── src/
│   ├── App.jsx            # Main app component
│   ├── App.css            # Styles
│   ├── main.jsx           # React entry point
│   └── index.css          # Global styles
├── .env                   # Environment variables (not in repo)
├── index.html            # PWA-ready HTML template
├── vite.config.js        # Vite configuration
└── README.md             # You are here!
```

## 🔧 Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

### PWA Testing

1. **Chrome DevTools:**
   - Application → Manifest ✅
   - Application → Service Workers ✅
   - Lighthouse → PWA audit ✅

2. **Mobile Testing:**
   - Use `npm run dev` with `--host` flag
   - Access via your local IP on mobile device

## 🚢 Deployment

### Firebase Hosting (Recommended)

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase
firebase init hosting

# Build and deploy
npm run build
firebase deploy
```

### Other Platforms

The app works on any static hosting service:
- Vercel
- Netlify  
- GitHub Pages
- AWS S3

## 🎨 Customization

### Branding
- Update app name in `manifest.json`
- Replace icons in `public/icons/`
- Modify colors in `App.jsx` styles object
- Update meta tags in `index.html`

### Features
- Add new task categories
- Implement task priorities
- Add due dates and reminders
- Integrate push notifications

## 📋 Firebase Setup Guide

### 1. Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project"
3. Follow the setup wizard

### 2. Enable Authentication
1. Authentication → Sign-in method
2. Enable "Google" provider
3. Add your domain to authorized domains

### 3. Setup Firestore
1. Firestore Database → Create database
2. Start in production mode
3. Choose your region

### 4. Security Rules
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /todos/{document} {
      allow read, write: if request.auth != null && request.auth.uid == resource.data.userId;
    }
  }
}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Sagar Hodar**
- Email: [hodarsagar@gmail.com](mailto:hodarsagar@gmail.com)
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- Firebase for backend services
- React team for the amazing framework
- Lucide React for beautiful icons
- Vite for lightning-fast development

## 🐛 Known Issues

- Service worker updates may require manual refresh in some browsers
- iOS Safari may have limitations with PWA features

## 🔮 Roadmap

- [ ] Dark mode support
- [ ] Task categories and tags
- [ ] Push notifications
- [ ] Collaborative task sharing
- [ ] Task export/import
- [ ] Advanced statistics
- [ ] Voice commands
- [ ] AI-powered task suggestions

---

⭐ **Star this repo if you found it helpful!** ⭐

Made with ❤️ by [Sagar Hodar](mailto:hodarsagar@gmail.com)
