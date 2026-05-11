import "./TalentForm.css";
import React, { useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const TalentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    course: "",
    yearlevel: "",
    talent: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation (important based on transcript)
    if (!formData.talent) {
      alert("Please select talent before submitting!");
      return;
    }

    try {
      // Send the form data to the Express backend.
      await axios.post(`${API_URL}/talent/add`, {
        name: formData.name,
        age: formData.age,
        email: formData.email,
        course: formData.course,
        yearlevel: formData.yearlevel,
      });

      alert("Talent form submitted successfully!");

      // Reset form after successful submit.
      setFormData({
        name: "",
        age: "",
        email: "",
        course: "",
        yearlevel: "",
        talent: "",
      });
    } catch (error) {
      console.error("Submit error:", error);
      alert("Failed to submit talent form. Please try again.");
    }
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h1>Talent Form for PUPBC</h1>
        <p>Fill out the details below if you're interested</p>

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="form-field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Age */}
          <div className="form-field">
            <label>Age</label>
            <input
              type="number"
              name="age"
              placeholder="Enter your age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="form-field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Course */}
          <div className="form-field">
            <label>Course</label>
            <input
              type="text"
              name="course"
              placeholder="Enter your course"
              value={formData.course}
              onChange={handleChange}
              required
            />
          </div>

          {/* Year Level */}
          <div className="form-field">
            <label>Year Level</label>
            <input
              type="text"
              name="yearlevel"
              placeholder="Enter your year level"
              value={formData.yearlevel}
              onChange={handleChange}
              required
            />
          </div>

          {/* Talent */}
          <div className="form-field">
            <label>Talent</label>
            <select
              name="talent"
              value={formData.talent}
              onChange={handleChange}
              required
            >
              <option value="">
                Select your talent
              </option>
              <option value="Singing">Singing</option>
              <option value="Dancing">Dancing</option>
              <option value="Poetry">Poetry</option>
            </select>
          </div>

          {/* Submit */}
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TalentForm;
