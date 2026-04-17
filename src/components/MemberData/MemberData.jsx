import React, { useState } from "react";
import { motion } from "framer-motion";
import "./MemberData.css";

const MemberData = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [members, setMembers] = useState([
    {
      name: "Ali Khan",
      email: "ali@gmail.com",
      type: "Normal",
      status: "Active",
      image: "https://i.pravatar.cc/150?img=1",
      desc: "Active community member supporting education initiatives."
    },
    {
      name: "Sara Sheikh",
      email: "sara@gmail.com",
      type: "Elite",
      status: "Active",
      image: "https://i.pravatar.cc/150?img=5",
      desc: "Dedicated volunteer contributing to scholarship programs."
    },
    {
      name: "Ahmed Shaikh",
      email: "ahmed@gmail.com",
      type: "Normal",
      status: "Inactive",
      image: "https://i.pravatar.cc/150?img=8",
      desc: "Previously active member involved in outreach activities."
    },
    {
      name: "Zoya Khan",
      email: "zoya@gmail.com",
      type: "Elite",
      status: "Active",
      image: "https://i.pravatar.cc/150?img=12",
      desc: "Elite member supporting events and educational growth."
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "Normal",
    status: "Active",
    image: "",
    desc: "",
    hobbies: "",
    facebook: "",
    linkedin: "",
    github: "",
    youtube: "",
    instagram: ""
  });

  const [status, setStatus] = useState(""); // "", "sending", "success", "error"

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddMember = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setStatus("sending");

    try {
      // 1. SEND TO FORMSPREE
      const formSubmission = new FormData();
      Object.keys(formData).forEach(key => {
        formSubmission.append(key, formData[key]);
      });

      const response = await fetch("https://formspree.io/f/mlgabreo", {
        method: "POST",
        body: formSubmission,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("success");
        
        // 2. ADD TO LOCAL LIST (Dashboard feedback)
        const newMember = {
          ...formData,
          image: formData.image || `https://i.pravatar.cc/150?u=${formData.email}`
        };
        setMembers([newMember, ...members]);

        // 3. RESET FORM
        setFormData({
          name: "", email: "", type: "Normal", status: "Active", image: "",
          desc: "", hobbies: "", facebook: "", linkedin: "", github: "", 
          youtube: "", instagram: ""
        });

        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  const filteredMembers = members.filter((m) => {
    return (
      (m.name.toLowerCase().includes(search.toLowerCase()) ||
        m.email.toLowerCase().includes(search.toLowerCase())) &&
      (filter === "All" || m.type === filter)
    );
  });

  return (
    <section className="member-data">

      <h2>Member Dashboard</h2>

      {/* REGISTRATION FORM */}
      <motion.div
        className="registration-section"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="form-card">
          <div className="form-header">
            <h3>Member Registration</h3>
            <p>Enter the details below to register a new member</p>
          </div>

          <form onSubmit={handleAddMember} className="member-form">
            {/* PERSONAL INFORMATION */}
            <div className="form-section">
              <h4>Personal Information</h4>
              <div className="form-grid">
                <div className="field">
                  <label>Full Name *</label>
                  <input type="text" name="name" placeholder="Enter full name" value={formData.name} onChange={handleInputChange} required />
                </div>
                <div className="field">
                  <label>Email ID *</label>
                  <input type="email" name="email" placeholder="your@email.com" value={formData.email} onChange={handleInputChange} required />
                </div>
                <div className="field">
                  <label>Contact No</label>
                  <input type="text" name="contact" placeholder="+91 9876543210" value={formData.contact || ""} onChange={handleInputChange} />
                </div>
                <div className="field">
                  <label>Date of Birth</label>
                  <input type="date" name="dob" value={formData.dob || ""} onChange={handleInputChange} />
                </div>
              </div>
            </div>

            {/* ADDRESS INFORMATION */}
            <div className="form-section">
              <h4>Address Information</h4>
              <div className="form-grid">
                <div className="field full-width">
                  <label>Mumbai Address</label>
                  <input type="text" name="mumbaiAddress" placeholder="Enter Mumbai address" value={formData.mumbaiAddress || ""} onChange={handleInputChange} />
                </div>
                <div className="field full-width">
                  <label>Malegaon Address</label>
                  <input type="text" name="malegaonAddress" placeholder="Enter Malegaon address" value={formData.malegaonAddress || ""} onChange={handleInputChange} />
                </div>
                <div className="field">
                  <label>In Mumbai Since (Year)</label>
                  <input type="number" name="mumbaiSince" placeholder="e.g. 2020" value={formData.mumbaiSince || ""} onChange={handleInputChange} />
                </div>
              </div>
            </div>

            {/* PROFESSIONAL INFORMATION */}
            <div className="form-section">
              <h4>Professional Information</h4>
              <div className="form-grid">
                <div className="field">
                  <label>Profession</label>
                  <input type="text" name="profession" placeholder="e.g., Software Engineer" value={formData.profession || ""} onChange={handleInputChange} />
                </div>
                <div className="field">
                  <label>Years of Experience</label>
                  <input type="number" name="experience" placeholder="5" value={formData.experience || ""} onChange={handleInputChange} />
                </div>
                <div className="field">
                  <label>Member Type</label>
                  <select name="type" value={formData.type} onChange={handleInputChange}>
                    <option value="Normal">Normal Member</option>
                    <option value="Elite">Elite Member</option>
                  </select>
                </div>
                <div className="field">
                  <label>Status</label>
                  <select name="status" value={formData.status} onChange={handleInputChange}>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
                <div className="field full-width">
                  <label>Brief Description</label>
                  <textarea name="desc" placeholder="Tell us about the member..." value={formData.desc} onChange={handleInputChange} rows="2"></textarea>
                </div>
              </div>
            </div>

            {/* SOCIAL MEDIA & INTERESTS */}
            <div className="form-section">
              <h4>Social Media & Interests</h4>
              <div className="form-grid">
                <div className="field full-width">
                  <label>Hobbies</label>
                  <textarea name="hobbies" placeholder="Tell us about your hobbies and interests" value={formData.hobbies || ""} onChange={handleInputChange} rows="2"></textarea>
                </div>
                <div className="field">
                  <label>Facebook Profile</label>
                  <input type="url" name="facebook" placeholder="https://facebook.com/yourprofile" value={formData.facebook || ""} onChange={handleInputChange} />
                </div>
                <div className="field">
                  <label>LinkedIn Profile</label>
                  <input type="url" name="linkedin" placeholder="https://linkedin.com/in/yourprofile" value={formData.linkedin || ""} onChange={handleInputChange} />
                </div>
                <div className="field">
                  <label>GitHub Profile</label>
                  <input type="url" name="github" placeholder="https://github.com/yourusername" value={formData.github || ""} onChange={handleInputChange} />
                </div>
                <div className="field">
                  <label>YouTube Channel</label>
                  <input type="url" name="youtube" placeholder="https://youtube.com/@yourchannel" value={formData.youtube || ""} onChange={handleInputChange} />
                </div>
                <div className="field">
                  <label>Instagram Account</label>
                  <input type="url" name="instagram" placeholder="https://instagram.com/yourusername" value={formData.instagram || ""} onChange={handleInputChange} />
                </div>
              </div>
            </div>

            <div className="status-container">
              {status === "sending" && <p className="status-msg sending">Sending registration...</p>}
              {status === "success" && <p className="status-msg success">Registration sent successfully!</p>}
              {status === "error" && <p className="status-msg error">Error sending registration. Please try again.</p>}
            </div>

            <div className="form-actions">
              <button type="submit" className="add-btn" disabled={status === "sending"}>
                {status === "sending" ? "Registering..." : "Register as Member"}
              </button>
              <button type="button" className="connect-btn">Connect with Members</button>
            </div>
          </form>
        </div>
      </motion.div>

      {/* SEARCH & FILTERS */}
      <div className="controls-row">
        <input
          type="text"
          placeholder="Search members..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-bar"
        />

        <div className="filters">
          <button onClick={() => setFilter("All")} className={filter === "All" ? "active" : ""}>All</button>
          <button onClick={() => setFilter("Normal")} className={filter === "Normal" ? "active" : ""}>Normal</button>
          <button onClick={() => setFilter("Elite")} className={filter === "Elite" ? "active" : ""}>Elite</button>
        </div>
      </div>

      {/* CARDS */}
      <div className="card-grid">
        {filteredMembers.length > 0 ? (
          filteredMembers.map((m, index) => (
            <motion.div
              key={index}
              className="member-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 35px rgba(239, 95, 52, 0.15)"
              }}
            >
              <img src={m.image} alt={m.name} className="profile-img" />

              <h3>{m.name}</h3>

              <p className="desc">{m.desc}</p>

              <p className="email">{m.email}</p>

              <div className="badges">
                <span className={`type ${m.type.toLowerCase()}`}>
                  {m.type}
                </span>

                <span className={`status ${m.status.toLowerCase()}`}>
                  {m.status}
                </span>
              </div>

            </motion.div>
          ))
        ) : (
          <p className="no-results">No members found</p>
        )}
      </div>

    </section>
  );
};

export default MemberData;