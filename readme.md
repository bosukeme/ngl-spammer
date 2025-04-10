# NGL Spammer
A playful Node.js application built with Express that sends anonymous messages to NGL profiles multiple times. Designed for educational and experimental use only.

## Features
Submit spam messages to an NGL user

Flash message UI feedback for success and error

Form validation with Joi

Secure sessions with express-session

View rendering using EJS

## Tech Stack
- **Backend**: Node.js, Express
- **Templating**: EJS
- **Validation**: Joi
- **HTTP Client**: Axios
- **Flash Messages**: connect-flash & express-session

## Installation

### Getting Started

1. Clone the Repo

    ```bash
    git clone https://github.com/bosukeme/ngl-spammer.git
    cd ngl-spammer
    ```

2. Install Dependencies

    ```bash
    npm install
    ```

3. Configure Environment
    Set up `.env` file at the base directory
    ```bash
    FLASH_SECRET=your_secret
    PORT=3000
    NODE_ENV=development
    ```

4. Start the App
    ```bash
    npm run dev 
    ```
    Visit http://localhost:3000 in your browser.


## Usage
Open the form in your browser

Enter the NGL username (e.g., yournglname)

Type your message

Submit — the message will be sent multiple times


## ⚠️ Disclaimer
This project is for educational purposes only. Please respect NGL’s terms of service and privacy policies. Do not use this to harass or spam real users.

## Contributing
If you would like to contribute, please follow these steps:

- Fork the repository.
- Create a new branch for your feature or bugfix.
- Submit a pull request.

## Authors

Ukeme Wilson

- <a href="https://www.linkedin.com/in/ukeme-wilson-4825a383/">Linkedin</a>.
- <a href="https://medium.com/@ukemeboswilson">Medium</a>.
- <a href="https://www.ukemewilson.sbs/">Website</a>.
