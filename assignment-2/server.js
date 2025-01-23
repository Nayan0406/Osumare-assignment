const express = require('express');
const app = express();
const port = 4000;

app.listen(port, () => {
    console.log(`API is running at http://localhost:${port}`);
});

app.use(express.json());

let task = [];
let currentId = 1;

function findTaskById(id) {
    return task.find(task => task.id === id);
}

app.get('/task', (req, res) => {
    res.status(200).json(task);
});

app.get('/task/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const task = findTaskById(id);

    if (!task) {
        return res.status(404).json({ error: "Task not found" });
    }

    res.status(200).json(task);
});

app.post('/task', (req, res) => {
    const { name, email, title, description } = req.body;

    if(!title || !description) {
        return res.status(400).json({ error :"Name, Email, Title and Description are required" });
    }

    const newTask = {
        id: currentId++,
        name,
        email,
        title,
        description
    };

    task.push(newTask);
    res.status(201).json(newTask);
});

app.put('/task/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { name, email, title, description } = req.body;

    const task = findTaskById(id);
    if(!task) {
        return res.status(404).json({ error: "Task not found" });
    }

    if(!title || !description) {
        return res.status(400).json({ error: "Name, Email, Title, Description are required" });
    }

    task.name = name;
    task.email = email;
    task.title = title;
    task.description = description;

    res.status(200).json(task);
});

app.delete('/task/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const taskIndex = task.findIndex(task => task.id === id);

    if(taskIndex === -1) {
        return res.status(404).json({ error: "Task not found" });
    }

    task.splice(taskIndex, 1);
    res.status(204).send();
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "something went wromg" });
});

