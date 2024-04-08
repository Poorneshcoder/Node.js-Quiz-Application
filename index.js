const express = require('express');
const app = express();
const cors = require("cors");
const PORT = 3001;

// Use the cors middleware
app.use(cors());

// Serve static files from the "public" directory
app.use(express.static('public'));

// Endpoint to serve questions data
app.get('/api/questions', (req, res) => {
    const questions = generateQuestions();
    res.json(questions);
});

// Function to generate questions and answers dynamically
function generateQuestions() {
    const questions = [
        {
            question: "What is the purpose of a Node.js module?",
            answers:[
                {text:"To encapsulate code into reusable units",correct:true},
                {text:"To handle asynchronous operations",correct:false},
                {text:"To manage database connections",correct:false},
                {text:"To generate HTML templates",correct:false}
            ]
        },
        {
            question: "Which of the following is true about the event loop in Node.js?",
            answers:[
                {text:"It runs asynchronously to handle I/O operations",correct:true},
                {text:"It executes JavaScript code line by line",correct:false},
                {text:"It is a feature of the V8 JavaScript engine",correct:false},
                {text:"It only supports single-threaded execution",correct:false}
            ]
        },
        {
            question: "What is a callback function in Node.js?",
            answers:[
                {text:"A function that is executed immediately after it is defined",correct:false},
                {text:"A function used to handle errors in asynchronous operations",correct:false},
                {text:"A function that returns a promise object",correct:false},
                {text:"A function passed as an argument to another function, to be executed later",correct:true}
            ]
        },
        {
            question: "How can you include external modules in a Node.js application?",
            answers:[
                {text:"By copying and pasting the module code into your application",correct:false},
                {text:"Using the 'require' function",correct:true},
                {text:"Using the 'import' statement",correct:false},
                {text:"By defining the module inline using a special syntax",correct:false}
            ]
        },
        {
            question: "Which method is used to handle errors in Node.js asynchronous operations?",
            answers:[
                {text:"catchError",correct:false},
                {text:"callback parameter",correct:false},
                {text:"errorHandler",correct:false},
                {text:"try...catch block",correct:true}
            ]
        },
        {
            question: "What is the purpose of the process object in Node.js?",
            answers:[
                {text:"To provide information about the current Node.js process",correct:true},
                {text:"To manage browser processes",correct:false},
                {text:"To handle file system operations",correct:false},
                {text:"To manage child processes in a Node.js application",correct:false}
            ]
        },
        {
            question: "Which of the following is a built-in module in Node.js?",
            answers:[
                {text:"mysql",correct:false},
                {text:"http",correct:true},
                {text:"react",correct:false},
                {text:"express",correct:false}
            ]
        },
        {
            question: "How can you terminate a Node.js process?",
            answers:[
                {text:"Using the exit method of the process object",correct:true},
                {text:"Calling the terminate function",correct:false},
                {text:" Using the kill command in the terminal",correct:false},
                {text:"There is no built-in method to terminate a Node.js process",correct:false}
            ]
        },
        {
            question: "What is the purpose of the fs module in Node.js?",
            answers:[
                {text:"To manage network connections",correct:false},
                {text:"To perform mathematical calculations",correct:false},
                {text:"To interact with the file system",correct:true},
                {text:"To handle HTTP requests",correct:false}
            ]
        },
        {
            question: "Which of the following is an example of a core module in Node.js?",
            answers:[
                {text:"lodash",correct:false},
                {text:"express",correct:false},
                {text:"mongoose",correct:false},
                {text:"path",correct:true}
            ]
        },
    ];
    return questions;
}

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
