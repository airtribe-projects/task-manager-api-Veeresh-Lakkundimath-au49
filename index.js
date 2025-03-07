const express = require("express");
const app = express();

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server listining to port ${PORT}`);
});

app.use(express.json());

const data = {
  tasks: [
    {
      id: 1,
      title: "Set up environment",
      description: "Install Node.js, npm, and git",
      completed: true,
      priority: "low",
      creaatedAt: new Date(),
    },
    {
      id: 2,
      title: "Create a new project",
      description:
        "Create a new project using the Express application generator",
      completed: true,
      priority: "medium",

      creaatedAt: new Date(),
    },
    {
      id: 3,
      title: "Install nodemon",
      description: "Install nodemon as a development dependency",
      completed: true,
      priority: "high",

      creaatedAt: new Date(),
    },
    {
      id: 4,
      title: "Install Express",
      description: "Install Express",
      completed: false,
      priority: "low",
      creaatedAt: new Date(),
    },
    {
      id: 5,
      title: "Install Mongoose",
      description: "Install Mongoose",
      completed: false,
      priority: "medium",
      creaatedAt: new Date(),
    },
    {
      id: 6,
      title: "Install Morgan",
      description: "Install Morgan",
      completed: false,
      priority: "high",
      creaatedAt: new Date(),
    },
    {
      id: 7,
      title: "Install body-parser",
      description: "Install body-parser",
      completed: false,
      priority: "low",
      creaatedAt: new Date(),
    },
    {
      id: 8,
      title: "Install cors",
      description: "Install cors",
      completed: false,
      priority: "medium",
      creaatedAt: new Date(),
    },
    {
      id: 9,
      title: "Install passport",
      description: "Install passport",
      completed: false,
      priority: "high",
      creaatedAt: new Date(),
    },
    {
      id: 10,
      title: "Install passport-local",
      description: "Install passport-local",
      completed: false,
      priority: "low",
      creaatedAt: new Date(),
    },
    {
      id: 11,
      title: "Install passport-local-mongoose",
      description: "Install passport-local-mongoose",
      completed: false,
      priority: "medium",
      creaatedAt: new Date(),
    },
    {
      id: 12,
      title: "Install express-session",
      description: "Install express-session",
      completed: false,
      priority: "high",
      creaatedAt: new Date(),
    },
    {
      id: 13,
      title: "Install connect-mongo",
      description: "Install connect-mongo",
      completed: false,
      priority: "low",
      creaatedAt: new Date(),
    },
    {
      id: 14,
      title: "Install dotenv",
      description: "Install dotenv",
      completed: false,
      priority: "medium",
      creaatedAt: new Date(),
    },
    {
      id: 15,
      title: "Install jsonwebtoken",
      description: "Install jsonwebtoken",
      completed: false,
      priority: "high",
      creaatedAt: new Date(),
    },
  ],
};

app.get("/tasks", (req, res) => {
  return res.status(200).send({ tasks: data.tasks });
});

app.get("/tasks/:id?/level", (req, res) => {
  const id = req.params.id;
  let response = {};
  for (let i = 0; i < data.tasks.length; i++) {
    if (data.tasks[i].id == id) {
      response = data.tasks[i];
    }
  }
  return res.status(200).send({ tasks: response });
});

app.post("/tasks", (req, res) => {
  console.log("req.body: ", req.body);
  const { title, description, completed } = req.body;

  if (
    (title && title == "") ||
    (description && description == "") ||
    is_boolean(completed)
  ) {
    return res.status(400).send({ message: "Invalid input" });
  }

  const info = {
    id: data.tasks.length + 1,
    title: title,
    description: description,
    completed: completed,
  };

  data.tasks.push(info);
  return res.status(200).send({ message: "task created successfully!" });
});

app.delete("/tasks/:id", (req, res) => {
  const id = req.params.id;
  const curr_status = data.tasks.length;
  for (let i = 0; i < data.tasks.length; i++) {
    if (data.tasks[i].id == id) {
      const index = data.tasks.indexOf(data.tasks[i]);
      console.log("index: ", index);
      data.tasks.splice(index, 1);
      break;
    }
  }
  if (data.tasks.length == curr_status) {
    return res.status(404).send({ message: "no data found" });
  }
  return res.status(200).send({ message: data.tasks });
});

app.put("/tasks/:id", (req, res) => {
  const id = req.params.id;
  let status = false;
  for (let i = 0; i < data.tasks.length; i++) {
    if (data.tasks[i].id == id) {
      status = true;
      data.tasks[i] = req.body;
    }
  }
  if (!status) {
    return res.status(404).send({ message: "ID does not exist" });
  }
  return res.status(200).send({ message: "Tasks updated successfully!" });
});

app.get("/tasks/?completed", (req, res) => {
  const completed = req.query.completed;
  if (!is_boolean(completed)) {
    return res.status(400).send({ message: "Invalid input" });
  }
  const response = data.tasks.map((item) => {
    if (item.completed === completed) {
      return completed;
    }
  });
  return res.status(200).send({ tasks: response });
});

function is_boolean(str) {
  return str === true || str === false;
}
