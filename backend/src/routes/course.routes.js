const express = require("express");

const router = express.Router();

const courseController=require("../controllers/course.controller");

const authMiddleware=require("../middleware/auth.middleware");
const roleMiddleware = require("../middleware/role.middleware");

router.get("/",courseController.getAllCourses);
router.get("/:courseId",courseController.getCoursesById);
router.post("/",authMiddleware,roleMiddleware(["ADMIN"]),courseController.createCourse);

router.put("/:courseId",courseController.updateCourse);
router.delete("/:courseId",courseController.deleteCourse);

module.exports=router;