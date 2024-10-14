# Donicci - Sock Selling Website

Welcome to **Donicci**, a stylish online store for all your sock needs! This project is built using React for the frontend and Node.js for the backend, with HTML and Bootstrap 5 for the design.

![image](https://github.com/user-attachments/assets/3133a0d4-7de9-4679-96d9-e271a1c39f05)


## Table of Contents
1. [Project Description](#project-description)
2. [Technologies Used](#technologies-used)
3. [Installation](#installation)
4. [Backend Setup](#backend-setup)
5. [Frontend Setup](#frontend-setup)
6. [Usage](#usage)
7. [Project Structure](#project-structure)
8. [Contributing](#contributing)
9. [License](#license)
10. [Contact](#contact)

## Project Description

Donicci is an e-commerce platform that focuses on selling a variety of stylish and comfortable socks. Users can browse products, add them to their cart, and make purchases seamlessly.

## Technologies Used

- **Frontend:** React, HTML, Bootstrap 5
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Libraries and Middleware:**
  - `express`
  - `mongoose`
  - `cors`
  - `dotenv`
  - Custom routes: `userRoutes`, `productRoutes`, `categoryRoutes`, `orderRoutes`, `reviewRoutes`, `cartRoutes`, `offerRoutes`, `saleRouter`
  - Middleware: `authenticateToken`, `notFoundHandler`, `errorHandler`

## Installation

### Prerequisites

Make sure you have the following installed:
- Node.js and npm
- Git

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/donicci.git
   cd donicci/backend
   ```

2. Install the backend dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the backend directory.
   - Add your environment variables (e.g., MongoDB connection string).

4. Start the backend server:
   ```bash
   npm run start
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```

2. Install the frontend dependencies:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```

## Usage

Once both the backend and frontend are running, open your web browser and navigate to:
```
http://localhost:3000
```
You should see the Donicci website where you can explore and shop for socks.

## Project Structure

```
/backend
    ├── models
    ├── routes
    ├── controllers
    ├── middlewares
    ├── .env
    ├── index.js
    └── uploads

/frontend
    ├── src
        ├── components
        ├── pages
        ├── Rtk
        └── App.js
```

## Contributing

We welcome contributions to Donicci! If you'd like to contribute, follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch-name`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch-name`).
5. Create a new Pull Request.

## License
This project does not currently have a license. If you're interested in using or contributing to this project, please contact the project owner.


