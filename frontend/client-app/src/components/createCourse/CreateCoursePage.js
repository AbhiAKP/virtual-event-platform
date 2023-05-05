import React, { useState } from "react";
import styles from "./CreateCoursePage.module.css";

const CreateCoursePage = () => {
  const accessToken = localStorage.getItem("accessToken");

  const [courseData, setCourseData] = useState({
    course_name: "",
    course_desc: "",
    category: "",
    subcategory: "",
    course_duration: "",
    course_objective: {
      objective1: "",
      objective2: "",
      objective3: "",
      objective4: "",
      objective5: "",
      objective6: "",
      objective7: "",
      objective8: "",
    },
    course_img: null,
    course_video: null,
    course_keywords: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // Define a regular expression to check for allowed characters
    const allowedRegex = /^[a-zA-Z0-9.,/\\;'!"@$&()\[\]%*\-+^# ]+$/;

    if (allowedRegex.test(value)) {
      setCourseData({ ...courseData, [name]: value });
    } else {
      window.alert(`Input for ${name} contains disallowed characters`);
    }
  };

  const handleObjectiveChange = (event, key) => {
    const value = event.target.value;
    setCourseData({
      ...courseData,
      course_objective: { ...courseData.course_objective, [key]: value },
    });
  };

  const handleFileInputChange = (event) => {
    const { name } = event.target;
    const file = event.target.files[0];

    // Define a regular expression to check for allowed extensions
    const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.mp4|\.avi|\.mov|\.webm)$/i;

    if (file) {
      // If file exists and extension is allowed, update state with new file
      if (allowedExtensions.test(file.name)) {
        const formData = new FormData();
        formData.append(name, file);
        setCourseData((courseData) => ({ ...courseData, [name]: formData }));
      } else {
        // If file extension is not allowed, show error message
        window.alert(`File type for ${name} is not allowed`);
        event.target.value = null; // Clear the file input
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("course_name", courseData.course_name);
    formData.append("course_desc", courseData.course_desc);
    formData.append("category", courseData.category);
    formData.append("subcategory", courseData.subcategory);
    formData.append("course_duration", courseData.course_duration);
    formData.append(
      "course_objective",
      JSON.stringify(courseData.course_objective)
    );
    formData.append("course_keywords", courseData.course_keywords);
    formData.append("course_img", courseData.course_img.get("course_img"));
    formData.append(
      "course_video",
      courseData.course_video.get("course_video")
    );
    console.log(formData);

    try {
      const response = await fetch("http://localhost:3000/create-course", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Error creating course");
      }

      window.alert("Course created successfully");
    } catch (error) {
      console.error(error);
      window.alert("Error creating course");
    }
  };

  return (
    <div className={styles.createcourse}>
      <form className={styles.createcoursemodal} onSubmit={handleSubmit}>
        <div className={styles.courseDetails}>
          <b>COURSE DETAILS</b>
        </div>
        <div className={styles.coursename}>
          <label htmlFor="course_name" className={styles.courseName}>
            Course Name
          </label>
          <input
            className={styles.inputfield}
            type="text"
            placeholder="Course Title  [10-70] characters"
            maxLength={70}
            minLength={10}
            id="course_name"
            name="course_name"
            value={courseData.course_name}
            onChange={handleInputChange}
            required
            autoFocus
          />
        </div>
        <div className={styles.coursename}>
          <label htmlFor="course_desc" className={styles.courseName}>
            Course Description
          </label>
          <textarea
            className={styles.inputfield1}
            placeholder="Add Detailed Description of the course being created."
            maxLength={150}
            id="course_desc"
            name="course_desc"
            value={courseData.course_desc}
            onChange={handleInputChange}
            required
            autoFocus
          />
        </div>
        <div className={styles.coursedropdownsection}>
          <div className={styles.coursename}>
            <label htmlFor="category" className={styles.courseName}>
              Category
            </label>
            <select
              className={styles.dropdown}
              id="category"
              name="category"
              value={courseData.category}
              onChange={handleInputChange}
              required
              autoFocus
            >
              <option value="data science">data science</option>
              <option value="web development">web development</option>
              <option value="devops engineering">devops engineering</option>
              <option value="cyber security">cyber security</option>
            </select>
          </div>
          <div className={styles.coursename}>
            <label htmlFor="subcategory" className={styles.courseName}>
              Sub Category
            </label>
            <select
              className={styles.dropdown}
              id="subcategory"
              name="subcategory"
              value={courseData.subcategory}
              onChange={handleInputChange}
              required
              autoFocus
            >
              <option value="analytics">analytics</option>
              <option value="frontend">frontend</option>
              <option value="backend">backend</option>
            </select>
          </div>
          <div className={styles.coursename}>
            <label htmlFor="course_duration" className={styles.courseName}>
              Course Duration
            </label>
            <select
              className={styles.dropdown}
              id="course_duration"
              name="course_duration"
              value={courseData.course_duration}
              onChange={handleInputChange}
              required
              autoFocus
            >
              <option value="1">1 month</option>
              <option value="2">2 months</option>
              <option value="3">3 months</option>
            </select>
          </div>
        </div>
        <div className={styles.courseobjectives}>
          <label htmlFor="objectives" className={styles.courseName}>
            Course Objectives
          </label>
          {Object.keys(courseData.course_objective).map((key, index) => (
            <div key={index}>
              <input
                className={styles.inputfield}
                type="text"
                placeholder={`Objective ${index + 1}`}
                maxLength={70}
                minLength={10}
                id={`objective${index + 1}`}
                name={key}
                value={courseData.course_objective[key]}
                required={index < 3}
                autoFocus
                onChange={(event) => handleObjectiveChange(event, key)}
              />
            </div>
          ))}
        </div>
        <div className={styles.coursefileuploadsection}>
          <div className={styles.coursename}>
            <label htmlFor="course_img" className={styles.courseName}>
              Course Banner Image
            </label>
            <input
              className={styles.fileselect}
              type="file"
              id="course_img"
              name="course_img"
              accept=".jpg,.jpeg,.png"
              onChange={handleFileInputChange}
              required
              autoFocus
              defaultChecked={true}
            />
          </div>
          <div className={styles.coursename}>
            <label htmlFor="course_video" className={styles.courseName}>
              Course Overview Video
            </label>
            <input
              className={styles.fileselect}
              type="file"
              id="course_video"
              name="course_video"
              accept=".mp4,.avi,.mov,.webm"
              onChange={handleFileInputChange}
              required
              autoFocus
              defaultChecked={true}
            />
          </div>
        </div>
        <div className={styles.coursename}>
          <label htmlFor="course_keywords" className={styles.courseName}>
            Course Keywords
          </label>
          <input
            className={styles.inputfield}
            type="text"
            placeholder="Enter relevant keywords separated by comma"
            maxLength={100}
            minLength={3}
            id="course_keywords"
            name="course_keywords"
            value={courseData.course_keywords}
            onChange={handleInputChange}
            required
            autoFocus
          />
        </div>
        <button className={styles.button} type="submit">
          <b className={styles.createCourse}>CREATE COURSE</b>
        </button>
      </form>
    </div>
  );
};

export default CreateCoursePage;
