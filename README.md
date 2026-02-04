# Taskly 📝

A simple and elegant task management mobile application built with React Native and Expo.

## 🌟 Features

- **Task Display**: View your tasks in a clean, organized interface
- **Task Deletion**: Delete tasks with confirmation alert to prevent accidental deletions
- **Responsive Design**: Optimized UI for both iOS and Android platforms
- **Modern UI**: Clean and minimalist design with smooth interactions

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [Bun](https://bun.sh/) (optional, as an alternative to npm/yarn)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Expo Go](https://expo.dev/client) app on your mobile device (for testing)

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd taskly
```

2. Install dependencies:

```bash
bun install
# or
npm install
```

### Running the Application

Start the development server:

```bash
bun start
# or
npm start
```

Run on specific platforms:

```bash
# iOS
bun run ios

# Android
bun run android

# Web
bun run web
```

## 📱 Platform Support

- ✅ iOS
- ✅ Android
- ✅ Web

## 🛠️ Built With

- **[React Native](https://reactnative.dev/)** - Mobile app framework
- **[Expo](https://expo.dev/)** - Development platform for React Native
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[React](https://react.dev/)** - UI library

## 📂 Project Structure

```
taskly/
├── App.tsx           # Main application component
├── index.ts          # Entry point
├── app.json          # Expo configuration
├── package.json      # Dependencies and scripts
├── tsconfig.json     # TypeScript configuration
├── eslint.config.js  # ESLint configuration
└── assets/           # Images and icons
```

## 🎨 Key Components

### App Component

The main component that handles:

- Task display in a list format
- Delete functionality with confirmation alert
- Styled UI with custom components

### Delete Confirmation

When attempting to delete a task:

1. A confirmation alert appears
2. User can confirm or cancel the deletion
3. Prevents accidental data loss

## 🔧 Scripts

- `bun start` - Start the Expo development server
- `bun run android` - Run on Android device/emulator
- `bun run ios` - Run on iOS device/simulator
- `bun run web` - Run in web browser
- `bun run lint` - Run ESLint for code quality checks

## 🏗️ Future Enhancements

- [ ] Add new tasks functionality
- [ ] Edit existing tasks
- [ ] Task categories and tags
- [ ] Due dates and reminders
- [ ] Task completion/check-off
- [ ] Data persistence (AsyncStorage/SQLite)
- [ ] Task search and filtering
- [ ] Dark mode support

## 📝 License

This project is private and not licensed for public use.

## 👨‍💻 Development

### Code Quality

The project uses ESLint for maintaining code quality. Run linting:

```bash
bun run lint
```

### TypeScript

This project is built with TypeScript for type safety. The configuration can be found in `tsconfig.json`.

## 🤝 Contributing

This is a private project. If you have access and want to contribute:

1. Create a new branch for your feature
2. Make your changes
3. Test thoroughly on all platforms
4. Submit a pull request

## 📧 Contact

For questions or support, please contact the project maintainer.

---

Made with ❤️ using React Native and Expo
