const DATA = {
    "React Basics": [
        {
            name: "useState",
            content: "useState React me state update aur store karne ke liye hota hai.",
            code: `import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}`
        },

        {
            name: "useEffect",
            content: "useEffect side effects jaise API calls ke liye use hota hai.",
            code: `import { useEffect, useState } from "react";

export default function Users() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(json => setData(json));
  }, []);

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}`
        },

        {
            name: "useContext",
            content: "useContext global data share karne ke liye best hook hai.",
            code: `import { createContext, useContext } from "react";

const UserContext = createContext("Guest");

export default function App() {
  return (
    <UserContext.Provider value="Avinash">
      <Child />
    </UserContext.Provider>
  );
}

function Child() {
  const user = useContext(UserContext);
  return <h2>Logged in as: {user}</h2>;
}`
        },

        {
            name: "useRef",
            content: "useRef DOM access aur previous values store karta hai.",
            code: `import { useRef } from "react";

export default function InputFocus() {
  const inputRef = useRef(null);

  return (
    <>
      <input ref={inputRef} placeholder="Type here..." />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </>
  );
}`
        },

        {
            name: "Props",
            content: "Props parent se child component ko data pass karte hain.",
            code: `function Greeting({ name }) {
  return <h2>Hello {name}</h2>;
}

export default function App() {
  return <Greeting name="Avinash" />;
}`
        },

        {
            name: "JSX",
            content: "JSX HTML + JS mixture syntax hai.",
            code: `export default function JSXExample() {
  const name = "React";
  return <h2>Welcome to {name} 🚀</h2>;
}`
        },

        {
            name: "Lifecycle",
            content: "React lifecycle ko useEffect control karta hai.",
            code: `useEffect(() => {
  console.log("Component Mounted");
  return () => console.log("Component Unmounted");
}, []);`
        },

        {
            name: "Conditional Rendering",
            content: "Condition ke basis par component render hota hai.",
            code: `export default function Login() {
  const loggedIn = false;
  return loggedIn ? <h2>Welcome back!</h2> : <h2>Please Login</h2>;
}`
        },

        {
            name: "Lists & Keys",
            content: "List rendering ke liye key required hoti hai.",
            code: `export default function List() {
  const fruits = ["Apple", "Orange", "Mango"];
  return (
    <ul>
      {fruits.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}`
        },

        {
            name: "Custom Hooks",
            content: "Custom hooks reusable logic store karte hain.",
            code: `import { useState } from "react";

function useToggle() {
  const [state, setState] = useState(false);
  return [state, () => setState(!state)];
}

export default function App() {
  const [open, toggle] = useToggle();
  return <button onClick={toggle}>{open ? "ON" : "OFF"}</button>;
}`
        }
    ],

    "Git & Version Control": [
        {
            name: "Commit",
            content: "Commit code save karta hai message ke saath.",
            code: `git add .
git commit -m "Initial Commit"`
        },
        {
            name: "Push",
            content: "Push remote repo me changes upload karta hai.",
            code: `git push origin main`
        },
        {
            name: "Pull",
            content: "Pull remote changes local me lata hai.",
            code: `git pull origin main`
        },
        {
            name: "Clone",
            content: "Clone remote repo download karta hai.",
            code: `git clone https://github.com/user/repo.git`
        },
        {
            name: "Merge",
            content: "Merge branches combine karta hai.",
            code: `git checkout main
git merge feature-branch`
        },
        {
            name: "Branch",
            content: "Branch new feature ke liye banai jati hai.",
            code: `git branch dev
git checkout dev`
        },
        {
            name: "Rebase",
            content: "Rebase clean timeline banata hai.",
            code: `git rebase main`
        },
        {
            name: "Stash",
            content: "Stash code temporarily save karta hai.",
            code: `git stash
git stash apply`
        },
        {
            name: "Reset",
            content: "Reset commit history undo karta hai.",
            code: `git reset --hard HEAD~1`
        },
        {
            name: "Fork",
            content: "Fork kisi repo ka personal copy banata hai.",
            code: `Github UI → Fork Button`
        }
    ],

    "NodeJS Backend": [
        {
            name: "Express Basics",
            content: "Express backend banane ke liye framework hai.",
            code: `import express from "express";
const app = express();

app.get("/", (req, res) => res.send("Hello Backend"));

app.listen(3000, () => console.log("Server Running"));
`
        },

        {
            name: "Middleware",
            content: "Middleware request ke pehle run hota hai.",
            code: `app.use((req, res, next) => {
  console.log("Request Received");
  next();
});`
        },

        {
            name: "Routing",
            content: "Router endpoints define karte hain.",
            code: `app.get("/users", (req, res) => {
  res.json([{ name: "Avinash" }]);
});`
        },

        {
            name: "API",
            content: "API request-response handle karta hai.",
            code: `app.post("/login", (req, res) => {
  res.send("Logged In");
});`
        },

        {
            name: "Postman Testing",
            content: "Postman API test karne ke liye tool hai.",
            code: `1. Open Postman
2. Create GET request -> http://localhost:3000`
        },

        {
            name: "Mongoose",
            content: "MongoDB ke liye ORM hai.",
            code: `import mongoose from "mongoose";
mongoose.connect("mongodb://localhost:27017/test");`
        },

        {
            name: "Authentication",
            content: "JWT login ke liye use hota hai.",
            code: `import jwt from "jsonwebtoken";
const token = jwt.sign({ id: 1 }, "secret");`
        },

        {
            name: "File Upload",
            content: "Multer file upload karne ke liye hota hai.",
            code: `import multer from "multer";
const upload = multer({ dest: "uploads/" });
app.post("/upload", upload.single("file"), (req, res) => res.send("Uploaded"));`
        },

        {
            name: "Error Handling",
            content: "Error handling backend me important hai.",
            code: `app.use((err, req, res, next) => {
  res.status(500).send("Error: " + err.message);
});`
        },

        {
            name: "Cors",
            content: "CORS cross-origin request allow karta hai.",
            code: `import cors from "cors";
app.use(cors());`
        }
    ],


    "Frontend Styling": [
        {
            name: "CSS Basics",
            content: "CSS pages style karne ke liye use hota hai.",
            code: `h1 { color: blue; }`
        },

        {
            name: "Flexbox",
            content: "Flexbox layout system hai.",
            code: `.container {
  display: flex;
  justify-content: center;
}`
        },

        {
            name: "Grid Layout",
            content: "Grid layout complex UI ke liye use hota hai.",
            code: `.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}`
        },

        {
            name: "Tailwind CSS",
            content: "Tailwind utility-first CSS framework hai.",
            code: `<h1 class="text-3xl font-bold text-blue-500">Hello</h1>`
        },

        {
            name: "Animations",
            content: "CSS animation smooth UI banati hain.",
            code: `.btn:hover {
  transition: 0.3s;
  transform: scale(1.1);
}`
        },

        {
            name: "Media Queries",
            content: "Responsive design ke liye use hota hai.",
            code: `@media (max-width: 600px) {
  h1 { font-size: 16px; }
}`
        },

        {
            name: "Dark Mode",
            content: "CSS variable se theme control hota hai.",
            code: `body.dark { background: black; color: white; }`
        },

        {
            name: "Responsive Images",
            content: "Images responsive banane ke liye width:100%.",
            code: `<img src="pic.jpg" style="width:100%;" />`
        },

        {
            name: "SASS",
            content: "SASS CSS ka advance version hai.",
            code: `$primary: blue;

button {
  color: $primary;
}`
        },

        {
            name: "UI Libraries",
            content: "Ready-made component tools.",
            code: `import Button from "@mui/material/Button";`
        }
    ],


    "Database Knowledge": [
        {
            name: "SQL Basics",
            content: "SQL relational database query language hai.",
            code: `CREATE TABLE users (id INT, name VARCHAR(50));`
        },

        {
            name: "MongoDB",
            content: "MongoDB document based NoSQL database hai.",
            code: `db.users.insert({ name: "Avinash", age: 22 });`
        },

        {
            name: "Joins",
            content: "Join multiple tables combine karta hai.",
            code: `SELECT users.name, orders.product FROM users 
JOIN orders ON users.id = orders.user_id;`
        },

        {
            name: "Indexing",
            content: "Index query fast banata hai.",
            code: `db.users.createIndex({ name: 1 });`
        },

        {
            name: "Aggregate",
            content: "Aggregate data analysis ke liye hota hai.",
            code: `db.users.aggregate([{ $group: { _id: null, total: { $sum: 1 } } }]);`
        },

        {
            name: "Backup",
            content: "Backup DB recover ke liye important hai.",
            code: `mongodump --db=mydb`
        },

        {
            name: "Normalization",
            content: "Normalization data duplication remove karta hai.",
            code: `NF1, NF2, NF3 concepts`
        },

        {
            name: "Transactions",
            content: "Transaction multiple steps ko safe banata hai.",
            code: `session.startTransaction();`
        },

        {
            name: "Redis",
            content: "Redis fast cache system hai.",
            code: `SET user "Avinash"`
        },

        {
            name: "ORM",
            content: "ORM database handle karne ke liye hota hai.",
            code: `import prisma from "@prisma/client";`
        }
    ]
};

export default DATA;
