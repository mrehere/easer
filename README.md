# Project Title

EASER

## Overview

The Daily Motivation & Reflection Tracker is a web application that helps users improve their emotional well-being by providing daily motivational quotes and a platform for self-reflection. Users can track their moods, journal about their day, and set personal goals, with the app offering insights and visualizations of their emotional trends over time.

### Problem Space

Many people struggle to maintain emotional well-being due to busy schedules and stress, often neglecting self-reflection and personal growth. Existing tools for journaling or mood tracking can be either too complex or lack motivation. The Daily Motivation & Reflection Tracker simplifies this process by combining daily motivational quotes with easy journaling, mood tracking, and goal setting, helping users build self-awareness and improve their mental health.

### User Profile

Target Users
The Daily Motivation & Reflection Tracker is for individuals focused on improving their emotional well-being, including busy professionals, students, and those pursuing personal growth.

Usage
Users will log in daily to receive motivational quotes, journal reflections, track moods, and set personal goals. They can review emotional trends over time through data visualizations.

Special Considerations
Simplicity: The app must be easy to use and fit into busy schedules.
Privacy: Secure storage and privacy are essential for personal reflections.
Mobile-Friendly: The app should work seamlessly on mobile devices.

### Features

Daily Motivational Quotes: Users will receive a new motivational quote each day.

Journal Entry: Users can write journal entries or respond to prompts reflecting on their day.

Mood Tracking & History: Users can rate their mood on a scale, allowing them to track emotional trends over time.

## Implementation

### Tech Stack

Frontend:-

React: For building the user interface and managing state.
SCSS: For styling and ensuring a responsive, mobile-first design.

Backend:-

Node.js with Express.js: To handle server-side logic and API requests, managing user data and journaling functionality.

Data Storage:-

JSON Files: To store user data, journal entries, and mood tracking data in a lightweight, file-based format.

### APIs

https://github.com/lukePeavey/quotable
https://api.quotable.io/random
https://zenquotes.io/

### Sitemap

Home Page

Description: The landing page greets users with a daily motivational quote. Users can input their current mood (e.g., feeling happy, sad, anxious) and optionally enter a journal entry about their day or moment. This page serves as the primary entry point for daily reflections.
Mood Tracker Page

Description: This page displays users' mood history. Users can view a list of their past mood ratings, providing insight into emotional trends over time. It allows users to track how their mood fluctuates daily.
Journal Page

Description: Users can view their previous journal entries on this page. It provides an organized list of past reflections, allowing users to revisit their thoughts and experiences.

Home Page
├── Mood Tracker Page
└── Journal Page

### Mockups

![landing](/client/assets/images/landing.png)
![journal](/client/assets/images/journal.png)
![tracker](/client/assets/images/tracker.png)

### Data

Journal Entry:-

Attributes:
entryId: Unique identifier for each journal entry
entryText: The text of the journal entry
createdAt: Date and time when the journal entry was created

Mood Entry:-

Attributes:
moodId: Unique identifier for each mood entry
moodRating: Numerical representation of the user's mood (e.g., 1-5 scale)
createdAt: Date and time when the mood entry was recorded

### Endpoints

--Journal Entry Endpoints--

POST /api/journal
Description: Create a new journal entry.
Parameters: entryText (string, required)
{
"message": "Journal entry created successfully.",
"entryId": "67890",
"createdAt": "2024-10-15T12:00:00Z"
}

GET /api/journal

Description: Retrieve all journal entries for a user.
[
{
"entryId": "67890",
"entryText": "Today was a good day.",
"createdAt": "2024-10-15T12:00:00Z"
},
{
"entryId": "67891",
"entryText": "Learned something new today.",
"createdAt": "2024-10-14T12:00:00Z"
}
]

DELETE /api/journal/

Description: Delete a specific journal entry.
Parameters:
entryId (string, required)

{
"message": "Journal entry deleted successfully."
}

--Mood Entry Endpoints--
POST /api/mood

Description: Create a new mood entry.
Parameters: moodRating (integer, required; e.g., 1-5)
{
"message": "Mood entry recorded successfully.",
"moodId": "54321",
"createdAt": "2024-10-15T12:00:00Z"
}

GET /api/mood

Description: Retrieve all mood entries for a user.

[
{
"moodId": "54321",
"moodRating": 4,
"createdAt": "2024-10-15T12:00:00Z"
},
{
"moodId": "54322",
"moodRating": 3,
"createdAt": "2024-10-14T12:00:00Z"
}
]

DELETE /api/mood/

Description: Delete a specific mood entry.
Parameters:
moodId (string, required)

{
"message": "Mood entry deleted successfully."
}

## Roadmap

Week 1
Day 1-2: Project Setup and Basic Server Implementation
Tasks:
Set up the project repository and initialize the file structure.
Initialize the Express.js server.
Create basic endpoints for fetching quotes and storing journal/mood entries.
Outcome: A functioning server with basic routes set up.
Day 3-4: Journal Entry Functionality
Tasks:
Implement endpoints for creating and retrieving journal entries.
Develop the frontend components for journal entry forms and lists.
Outcome: Users can create and view journal entries.
Day 5: Mood Entry Functionality
Tasks:
Implement endpoints for creating and retrieving mood entries.
Create frontend components for mood entry and history display.
Outcome: Users can log their mood and view mood entries.
Day 6: Integrate Motivational Quotes API
Tasks:
Choose and implement a motivational quotes API.
Display a new motivational quote on the home page each day.
Outcome: Users receive daily motivational quotes.
Day 7: Testing and Refinement
Tasks:
Write tests for backend endpoints.
Perform manual testing to ensure all features are functioning.
Outcome: All features should be working correctly with any bugs fixed.
Week 2
Day 8: Mood Tracker and Basic Analytics
Tasks:
Create a simple history view for mood entries.
Develop basic logic to display mood trends (e.g., most common mood).
Outcome: Users can view their mood history.
Day 9: Reminders & Notifications
Tasks:
Implement a simple notification system for daily reminders (browser notifications).
Create settings for users to adjust reminders.
Outcome: Users receive notifications to prompt daily reflection.
Day 10: Responsive Design and UI Enhancements
Tasks:
Improve UI for mobile responsiveness.
Style the application using SCSS to enhance aesthetics.
Outcome: A visually appealing, user-friendly interface.
Day 11: Final Touches and Feature Enhancements
Tasks:
Add any additional features based on user feedback.
Ensure that the app meets all project requirements.
Outcome: Finalized application with all planned features.
Day 12: Deployment Preparation
Tasks:
Prepare the app for deployment on Heroku or Vercel.
Document the deployment process.
Outcome: App is ready for deployment.
Day 13-14: Deployment and Documentation
Tasks:
Deploy the app.
Write final project documentation (README.md, API documentation, user guide).
Outcome: Project is live and fully documented.
Milestones
End of Week 1: Basic functionality (journal entries, mood tracking, and quotes) implemented.
End of Week 2: All features refined, tested, and deployed with complete documentation.

---

## Future Implementations

-daily motivational quotes with the option to mark it as a favorite for future reference
-mood statistics where user can see a chart or trend to follow the mode history
-Personal Goals: Users can set and track goals for emotional well-being, marking them as complete when achieved.

- add authentications

-establish the database in MySQL with primary userID key, with relation between Mood, and journal entry
-give an emoji picker to chose mood
