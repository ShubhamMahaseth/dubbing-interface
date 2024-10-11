Mobile Web-Based Dubbing Interface
This project was bootstrapped with Create React App.

Overview
This is a mobile web-based dubbing interface prototype. The application allows video playback, audio recording, dialogue editing, and navigation between multiple dialogues. It is built with React, Web Audio API, and Tailwind CSS to provide a responsive, mobile-first experience.

Available Scripts
In the project directory, you can run:

npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

npm test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

npm run eject
Note: this is a one-way operation. Once you eject, you can't go back!

If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

npm run build fails to minify
This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify.

Features
Video Player: Play, pause, and seek functionality with a 30-second sample video.
Audio Recording: Record and playback audio using the Web Audio API, with waveform visualization.
Dialogue Display: Editable fields for "Original Text" and "Translated Text".
Mobile-First Design: Tailwind CSS for responsive design.
State Management: React Context API to manage global state.
Navigation: Move between multiple dialogues (mock data for 3-5 dialogues).