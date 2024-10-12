# IndusAi
internship program for full stack development

Task 1
objective : payment landing page using html, css and js
Design Choices & Challenges for the Payments Web Application Landing Page:
1. Clean and Professional Look
2. Structure : page includes a header, hero section, features section, testimonials section, contact section, and footer.
3. Responsiveness :  fully responsive to ensure usability across various devices (desktops, tablets, and mobile phones).

Challenges Faced :

1. Ensuring a Professional formate
2. Responsive Design Implementation
3. Functionality Without Frameworks:
4. Content Organization


Task 2
objective: Create a basic web page using html , css and js , Where when the users press on a certain key, a of sound of drum kit should be played .

Design Choices:
Simple, Professional Layout: The webpage has a minimalist design to keep the focus on interactivity. A grid layout was used for the drum keys, ensuring clarity and ease of use.
Responsive Design: CSS media queries ensure the page looks good on all devices. The font size and padding for the keys adjust depending on the screen size.
Clear Key Mapping: The keys are labeled (A, S, D, etc.) to ensure users know which key triggers which sound. This avoids any confusion and enhances the user experience.
No Animations: Since you requested no need for animations, the only visual feedback is a color change when a key is pressed.
Challenges:

Mapping Sounds: Ensuring that each key press correctly triggered the associated sound required careful handling of the key codes in JavaScript.
Responsive Design: Making the grid flexible enough to adjust on smaller screens while keeping the layout visually balanced was slightly tricky but achieved using media queries.


Task 3rd description :

Objective:
Create a scalable backend as for the details specified in the Readme file of the specified Github repo.

Project Description:
Todo Application Backend with User Authentication

Overview :
This project implements a RESTful API for a Todo Application using Node.js, Express.js, and MongoDB. It allows users to manage their tasks while ensuring secure access through user authentication with JSON Web Tokens (JWT).

Key Features :
User Registration and Authentication: Users can register and log in, receiving a JWT for secure access.

Todo Management: Users can create, read, update, and delete todos, with support for filtering by status, priority, and category.

MongoDB Integration: The application uses Mongoose for seamless interaction with a MongoDB database.

Environment Configuration: Sensitive data, including the MongoDB URI and JWT secret, is stored in a .env file.


API Endpoints :
POST /register: Register a new user.

POST /login: Authenticate a user and return a JWT.

GET /todos: Retrieve todos with optional filtering.

GET /todos/:todoId: Retrieve a specific todo by ID.

POST /todos: Create a new todo.

PUT /todos/:todoId: Update an existing todo.

GET /agenda: Retrieve todos due on a specific date.


Conclusion :
The Todo Application Backend provides a secure and efficient solution for task management, demonstrating the practical use of Node.js, Express, and MongoDB in building a comprehensive web API.
