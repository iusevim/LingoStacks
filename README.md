This web application allows users to create, read, update, and delete flashcards for vocabulary practice. It was developed using Express.js and Pug as part of the Web Technologies module coursework.
The UI was inspired by Duolingo language learning platform and uses the same colors and font of the platform.
How to run:
1. Clone the repository:  
   `git clone https://github.com/iusevim/LingoStacks.git`
2. Go to directory:  
   `cd LingoStacks`
3. Install the dependencies:  
   `npm install pug express`
4. Run the main script:  
   `node index.js`
5. Open your browser and visit:  
   `http://localhost:3000`

Dependencies
- express
- pug

Links:
- GitHub Repository: [https://github.com/iusevim/LingoStacks](https://github.com/iusevim/LingoStacks)
- Hosted App: [https://lingostacks.onrender.com](https://lingostacks.onrender.com)

Project Structure:

/LingoSTacks ├── .idea │ ├── .gitignore │ ├── LingoStacks.iml │ ├── modules.xml │ ├── vcs.xml │ └── workspace.xml ├── index.js ├── package.json ├── package-lock.json ├── README.md ├── .gitignore ├── /public │ └── /styles │ └── styles.css ├── /routes │ ├── index.js │ └── flashcards.js ├── /views │ ├── index.pug │ ├── layout.pug │ └── flashcards.pug └── /controllers └── flashcardController.js
