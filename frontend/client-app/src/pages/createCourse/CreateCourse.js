import React from 'react';
import styles from './CreateCourse.module.css';

function CreateCourse() {
  return (
    <div className={styles.createCourseContainer}>
      <h2>Create Course</h2>
      <form>
        <div className={styles.formGroup}>
          <label htmlFor="course_name">Course Name:</label>
          <input type="text" id="course_name" name="course_name" required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="course_description">Course Description:</label>
          <textarea id="course_description" name="course_description" required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="category">Category:</label>
          <select id="category" name="category" required>
            <option value="">Select Category</option>
            <option value="1">Category 1</option>
            <option value="2">Category 2</option>
            <option value="3">Category 3</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="subcategory">Subcategory:</label>
          <select id="subcategory" name="subcategory" required>
            <option value="">Select Subcategory</option>
            <option value="1">Subcategory 1</option>
            <option value="2">Subcategory 2</option>
            <option value="3">Subcategory 3</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="course_duration">Course Duration:</label>
          <select id="course_duration" name="course_duration" required>
            <option value="">Select Duration</option>
            <option value="1">1 Month</option>
            <option value="2">2 Months</option>
            <option value="3">3 Months</option>
            <option value="4">4 Months</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="course_img">Course Image:</label>
          <input type="file" id="course_img" name="course_img" accept=".jpg,.jpeg,.png" required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="course_video">Course Video:</label>
          <input type="file" id="course_video" name="course_video" accept="video/*" required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="objectives">Objectives:</label>
          <input type="text" id="objective1" name="objective1" required />
          <input type="text" id="objective2" name="objective2" required />
          <input type="text" id="objective3" name="objective3" required />
          <input type="text" id="objective4" name="objective4" required />
          <input type="text" id="objective5" name="objective5" required />
          <input type="text" id="objective6" name="objective6" required />
          <input type="text" id="objective7" name="objective7" required />
          <input type="text" id="objective8" name="objective8" required />
        </div>

        <button type="submit">Create Course</button>
      </form>
    </div>
  );
}

export default CreateCourse;

