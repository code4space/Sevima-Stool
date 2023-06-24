const route = require("express").Router();
const validation = require('../helper/authentication')
const AI = require("../controllers/ai");
const TeacherController = require("../controllers/teacher");
const StudentController = require("../controllers/student");
const Note = require("../controllers/note");

// Login/Register API
route.post("/teacher/login", TeacherController.login);
route.post("/teacher/register", TeacherController.register);

route.post("/student/login", StudentController.login);
route.post("/student/register", StudentController.register);

route.use(validation)

// Task
route.post("/task", TeacherController.addTask);
route.patch("/comment", TeacherController.addComment);
route.get("/completed-task", TeacherController.completedTask);
route.patch("/do-task", StudentController.doTask);
route.get("/student/task", StudentController.getMyTask);

// notification
route.get("/notification", StudentController.getMyNotification);
route.patch("/notification", StudentController.readNotification);

// AI API
route.post("/ask-ai", AI.askAI);

module.exports = route;
