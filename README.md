# projetfinal

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
# Quizz Application

## Description

Quizz Application is a web-based platform designed to provide users with an engaging and interactive experience of taking quizzes on various topics and difficulty levels. The application features user authentication, quiz creation and management by admin users, instant feedback on quiz responses, and leaderboards to foster a competitive environment. Built using Vue.js 3 and Firebase 8, the application ensures a responsive design optimized for desktops, tablets, and smartphones.

## Features

### User Authentication
- **Sign Up, Log In, and Log Out:** Secure user authentication implemented with Firebase Authentication.
- **User Profiles:** Each user has a profile where they can track their quiz performance and score history.

### Quiz Creation
- **Admin Dashboard:** Admin users have access to a dashboard for managing quizzes.
- **Quiz Creation:** Admins can create quizzes by adding questions, options, and correct answers.
- **Quiz Categorization:** Quizzes can be categorized by topics or difficulty levels.
- **Edit and Delete Quizzes:** Admin users can edit or delete existing quizzes through the dashboard.

### Quiz Management
- **Question Types:** Supports multiple-choice, true/false, and other question formats.

### Quiz Taking
- **Quiz Selection:** Users can browse and select available quizzes.
- **User-Friendly Interface:** Quizzes are presented one question at a time in a clear and intuitive interface.
- **Instant Feedback:** Users receive immediate feedback on their answers.

### Scoring and Results
- **Score Calculation:** Scores are calculated based on the number of correct answers.
- **Results Display:** Users can view their scores and detailed results, including correct and incorrect answers.
- **Score History:** Users' quiz results are stored in their profiles for progress tracking.

### Leaderboard
- **Global Leaderboard:** Displays top performers across all quizzes.
- **Quiz-Specific Leaderboard:** Shows how users' scores compare to others who have taken the same quiz.
- **Real-Time Updates:** Leaderboards are updated in real-time.

### Responsive Design
- **Multi-Device Support:** The application is optimized for various devices, ensuring a seamless experience on desktops, tablets, and smartphones.

### Data Storage
- **Firebase Cloud Firestore:** Securely stores quiz questions, user responses, and leaderboard data.

### Home Page
- **Popular Quizzes:** The home page displays popular quizzes available on the platform.

### Quiz Details
- **Quiz Description:** Before taking a quiz, users can view the quiz details page, which includes a description of the quiz.
- **Local Leaderboard:** The quiz details page also shows the local leaderboard for the current quiz.

## How It Works

1. **User Authentication:**
   - Users sign up or log in using Firebase Authentication.
   - Authenticated users can access their profiles, take quizzes, and view their score history.

2. **Admin Functions:**
   - Admin users log in to access the Admin Dashboard.
   - From the dashboard, admins can create new quizzes by adding questions, possible answers, and marking the correct answer.
   - Admins can categorize quizzes based on topics or difficulty levels, edit existing quizzes, or delete quizzes as needed.

3. **Taking Quizzes:**
   - Users browse available quizzes and select one to take.
   - The quiz interface presents one question at a time.
   - Users select their answers and submit them for immediate feedback.
   - At the end of the quiz, users see their total score and detailed results.

4. **Leaderboards and Score Tracking:**
   - Users can view the global leaderboard to see top performers.
   - Each quiz also has its own leaderboard.
   - Leaderboards update in real-time to reflect the latest scores.

## Testing

### Admin Account for Testing
To test the admin functionalities, please use the following credentials:
- **Email:** admin@example.com
- **Password:** adminpassword

### Testing Process

1. **Admin Login:**
   - Log in with the provided admin credentials.
   - Access the Admin Dashboard to create, edit, or delete quizzes.

2. **Creating a Quiz:**
   - Navigate to the "Create Quiz" section.
   - Add a new quiz by specifying the title, topic, difficulty level, and questions.
   - For each question, provide options and indicate the correct answer.

3. **Taking a Quiz:**
   - Log in as a regular user.
   - Browse and select a quiz from the available options.
   - Answer the questions one by one, receiving instant feedback after each submission.
   - Complete the quiz to view the final score and detailed results.

4. **Viewing Leaderboards:**
   - After taking a quiz, navigate to the leaderboard section to see your ranking.
   - Compare your score with others on the global leaderboard and quiz-specific leaderboards.

## Libraries Used

```json
{
  "name": "projetfinal",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build"
  },
  "dependencies": {
    "@coreui/coreui": "^5.0.2",
    "@coreui/vue": "^5.1.0",
    "core-js": "^3.8.3",
    "firebase": "^8.0.0",
    "swiper": "^11.1.4",
    "vue": "^3.2.13",
    "vue-router": "^4.0.3"
  },
  "devDependencies": {
    "@vue/cli-plugin-babel": "~5.0.0",
    "@vue/cli-plugin-router": "~5.0.0",
    "@vue/cli-service": "~5.0.0",
    "autoprefixer": "^10.4.19",
    "postcss": "^8.4.38",
    "tailwindcss": "^3.4.4",
    "vue-style-loader": "^4.1.3"
  },
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not dead",
    "not ie 11"
  ]
}
