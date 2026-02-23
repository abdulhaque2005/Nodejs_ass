
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const students = [
    {
        id: 1,
        name: "Aarav Sharma",
        branch: "CSE",
        semester: 8,
        cgpa: 9.3
    },
    {
        id: 2,
        name: "Ishita Verma",
        branch: "IT",
        semester: 7,
        cgpa: 9.9
    },
    {
        id: 3,
        name: "Rohan Kulkarni",
        branch: "ECE",
        semester: 6,
        cgpa: 8.4
    },
    {
        id: 4,
        name: "Meera Iyer",
        branch: "CSE",
        semester: 8,
        cgpa: 9.1
    },
    {
        id: 5,
        name: "Kunal Deshmukh",
        branch: "IT",
        semester: 5,
        cgpa: 7.8
    },
    {
        id: 6,
        name: "Ananya Reddy",
        branch: "CSE",
        semester: 6,
        cgpa: 8.7
    },
    {
        id: 7,
        name: "Vikram Patil",
        branch: "ECE",
        semester: 7,
        cgpa: 8.2
    },
    {
        id: 8,
        name: "Priyanka Nair",
        branch: "AI",
        semester: 4,
        cgpa: 8.8
    },
    {
        id: 9,
        name: "Harsh Mehta",
        branch: "Data Science",
        semester: 5,
        cgpa: 8.0
    },
    {
        id: 10,
        name: "Ankit",
        branch: "Data Science",
        semester: 2,
        cgpa: 4.0
    },
    {
        id: 11,
        name: "Arjun",
        branch: "Data Science",
        semester: 4,
        cgpa: 8.2
    },
    {
        id: 12,
        name: "Neha Gupta",
        branch: "CSE",
        semester: 6,
        cgpa: 7.9
    }
];


app.get("/", (req, res) => {
    res.status(200).json("Server is running!");
})

app.get("/students", (req, res) => {
    res.status(200).json(students);
})


app.get("/students/topper", (req, res) => {
    if (students.length === 0) {
        return res.status(404).json("User not found!")
    }

    let max = -Infinity;
    let topper = null;

    for (let i = 0; i < students.length; i++) {
        if (students[i].cgpa > max) {
            max = students[i].cgpa;
            topper = students[i]
        }
    }

    return res.status(200).json(topper)

})

app.get("/students/average", (req, res) => {
    let sum = 0;
    let avg = 0;
    for (let s of students) {
        sum += s.cgpa;
    }
    avg = sum / students.length;
    res.status(200).json({
        "averageCGPA": avg
    })

})

app.get("/students/count", (req, res) => {
    let count = students.length;
    res.status(200).json({
        "totalStudents": count
    })

})

app.get("/students/:id", (req, res) => {
    let ids = students.find((i) => {
        return i.id === Number(req.params.id)
    })
    if (!ids) {
        return res.status(404).json("Students id not found")
    }
    res.status(200).json(ids);
})

app.get("/students/branch/:branchName", (req, res) => {
    let branchs = students.filter((b) => {
        return b.branch.toUpperCase() === (req.params.branchName).toUpperCase()
    })
    if (branchs.length === 0) {
         return res.status(400).json({
            message: "branch is not found!"
        })
    }
    res.status(200).json(branchs);

})

app.listen(2000, () => {
    console.log("server is started in 2000 port!")
})
