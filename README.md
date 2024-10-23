# Project Title

EASER

## Overview

<p>The Daily Motivation & Reflection Tracker is a web application primarily designed for mobile devices that helps users improve their emotional well-being. The app provides daily motivational quotes and a platform for self-reflection, allowing users to track their moods and journal about their day. Additionally, it offers insights and visualizations of their emotional experiences over time, all optimized for a seamless mobile experience.</p>
<br/>
<p>Disclaimer: This application is currently under development and features may change at any time.</p>

### Problem Space

Many people struggle to maintain emotional well-being due to busy schedules and stress, often neglecting self-reflection and personal growth. Existing tools for journaling or mood tracking can be either too complex or lack motivation. The Daily Motivation & Reflection Tracker simplifies this process by combining daily motivational quotes with easy journaling, mood tracking, helping users build self-awareness and improve their mental health.

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

Description: The landing page greets users with a daily motivational quote. Users can input their current mood (e.g., feeling content, angry, crying, etc.) and optionally enter a journal entry about their day or moment. This page serves as the primary entry point for daily reflections.
an overview of the Easer, to log mood and journal.

Mood page
The Mood page starts with a **Mood Box** where users can log their current mood. Following this, the MoodHistory sub-page displays all previous mood logs, organized from the latest to the earliest. Next, the Analytics section presents a pie chart summarizing the overall mood analytics. Additionally, there is an individual mood sub-page that visualizes specific moods against months and years, offering deeper insight into emotional trends over time.

Journal Page

Updated description:

This page greets users with a **Journal Box** where they can log a new journal entry with a title. Below, users can view a list of their previous journal entries. Each journal can be edited or deleted, giving users the flexibility to update or remove their reflections as needed.

Home Page
├── Mood Tracker Page
└── Journal Page

### Mockups

![landing](/src/assets/images/landing.png)
![journal](/src/assets/images/journal.png)
![tracker](/src/assets/images/tracker.png)

### Data

Journal Entry:-

Attributes:
entryId: Unique identifier for each journal entry
entryText: The text of the journal entry
createdAt: Date and time when the journal entry was created

Mood Entry:-

Attributes:
moodId: Unique identifier for each mood entry
createdAt: Date and time when the mood entry was recorded

### Endpoints

----------------Journal Entry Endpoints----------------

GET /api/journal

Description: Retrieve all journal entries for a user.
[
{
"userId": "12345",
"entryId": "001",
"title": "Productive Day at Work",
"entryJournal": "Today, I felt extremely productive and was able to finish several tasks ahead of schedule. I feel accomplished and motivated for the rest of the week.",
"createdAt": 1729063500000
},
{
"userId": "12345",
"entryId": "002",
"title": "Afternoon Walk in the Park",
"entryJournal": "Took a walk in the park today during my break. The fresh air and sunshine lifted my mood, and I feel more relaxed now.",
"createdAt": 1729150800000
}
]

POST /api/journal
Description: Create a new journal entry.

Post body:

{
"userId": 12345,
"title": optional
"entryJournal": "This one is for example journal !"

}

Response body:

{
"message": "Journal entry added successfully.",
"newJournal": {
"userId": 12345,
"entryId": "82816d15-2562-418b-ae9e-501227e568ab",
"title": "unknown-title",
"entryJournal": "This one is for example journal !",
"createdAt": 1729348739864
}
}

DELETE /api/journal/:entryId

Description: Delete a specific journal entry.
Parameters:
entryId (string, required)

Response body:

{
"message": "Journal entry deleted successfully."
}

UPDATE /api/journal/:entryId

Description: Update a specific journal entry.
Parameters:
entryId (string, required)

Update body:

{

"title": (optional),
"entryJournal": (optional)

}

Response body:
{
"message": "Journal entry updated successfully.",
"updatedJournal": {
"userId": "12345",
"entryId": "7b87e9f8-a2a5-477d-a679-8772a514f784",
"title": "Teee",
"entryJournal": "hello how about superman",
"createdAt": 1729297471007,
"updatedAt": 1729298202655
}
}

----------------Mood Entry Endpoints----------------
GET /api/mood

Description: Retrieve all mood entries for a user.

Response body:
[
{
"userId": "12345",
"moodId": "m2",
"moodName": "content",
"createdAt": 1727962226189
},
{
"userId": "12345",
"moodId": "m1",
"moodName": "joyful",
"createdAt": 1729171826189
},
...
]

POST /api/mood

Description: Create a new mood entry.
Parameters: entryId (string, required)

Post body:

{
"userId": "12345",
"moodId": "m2",
"moodName": "content"
}

Response body:
{
"message": "Mood added successfully.",
"newMood": {
"userId": "12345",
"moodId": "m2",
"moodName": "content",
"createdAt": 1729348064921
}
}

## Roadmap

Week 1 <br/>
Day 1-2: Project Setup and Basic Server Implementation <br/>
Tasks:
Set up the project repository and initialize the file structure.
Initialize the Express.js server.
Create basic endpoints for fetching quotes and storing journal/mood entries. <br/>
Outcome: A functioning server with basic routes set up. <br/>
Day 3-4: Journal Entry Functionality <br/>
Tasks:
Implement endpoints for creating and retrieving journal entries.
Develop the frontend components for journal entry forms and lists. <br/>
Outcome: Users can create and view journal entries. <br/>
Day 5: Mood Entry Functionality <br/>
Tasks:
Implement endpoints for creating and retrieving mood entries.
Create frontend components for mood entry and history display. <br/>
Outcome: Users can log their mood and view mood entries.
Day 6: Integrate Motivational Quotes API <br/>
Tasks:
Choose and implement a motivational quotes API.
Display a new motivational quote on the home page each day. <br/>
Outcome: Users receive daily motivational quotes. <br/>
Day 7: Testing and Refinement <br/>
Tasks:
Write tests for backend endpoints.
Perform manual testing to ensure all features are functioning. <br/>
Outcome: All features should be working correctly with any bugs fixed. <br/>
<br/>
Week 2 <br/>
Day 8: Mood Tracker and Basic Analytics<br/>
Tasks:
Create a simple history view for mood entries.
Develop basic logic to display mood trends (e.g., most common mood).<br/>
Outcome: Users can view their mood history. <br/>
Day 9: Reminders & Notifications <br/>
Tasks:
Implement a simple notification system for daily reminders (browser notifications).
Create settings for users to adjust reminders.<br/>
Outcome: Users receive notifications to prompt daily reflection.<br/>
Day 10: Responsive Design and UI Enhancements<br/>
Tasks:
Improve UI for mobile responsiveness.
Style the application using SCSS to enhance aesthetics. <br/>
Outcome: A visually appealing, user-friendly interface. <br/>
Day 11: Final Touches and Feature Enhancements <br/>
Tasks:
Add any additional features based on user feedback.
Ensure that the app meets all project requirements. <br/>
Outcome: Finalized application with all planned features. <br/>
Day 12: Deployment Preparation <br/>
Tasks:
Prepare the app for deployment on Heroku or Vercel.
Document the deployment process. <br/>
Outcome: App is ready for deployment. <br/>
Day 13-14: Deployment and Documentation <br/>
Tasks:
Deploy the app.
Write final project documentation (README.md, API documentation, user guide). <br/>
Outcome: Project is live and fully documented. <br/>
Milestones <br/>
End of Week 1: Basic functionality (journal entries, mood tracking, and quotes) implemented. <br/>
End of Week 2: All features refined, tested, and deployed with complete documentation. <br/>

---

## Future Implementations

-daily motivational quotes with the option to mark it as a favorite for future reference

-Personal Goals: Users can set and track goals for emotional well-being, marking them as complete when achieved.

- add authentications

-establish the database in MySQL with primary userID key, with relation between Mood, and journal entry

-give an emoji picker to chose mood

- add sort/search options for the journal
- add visual notifications on forms
- add error handling style to forms
