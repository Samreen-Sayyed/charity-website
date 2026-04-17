import React, { useState } from "react";
import { motion } from "framer-motion";
import "./MemberData.css";

const MemberData = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const members = [
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
  ];

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

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search members..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      {/* FILTER */}
      <div className="filters">
        <button onClick={() => setFilter("All")} className={filter==="All" ? "active" : ""}>All</button>
        <button onClick={() => setFilter("Normal")} className={filter==="Normal" ? "active" : ""}>Normal</button>
        <button onClick={() => setFilter("Elite")} className={filter==="Elite" ? "active" : ""}>Elite</button>
      </div>

      {/* CARDS */}
      <div className="card-grid">
        {filteredMembers.length > 0 ? (
          filteredMembers.map((m, index) => (
            <motion.div
              key={index}
              className="member-card"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1
             }} 
              viewport={{ once: false }}
              whileHover={{
                scale: 1.05,
                y: -8
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
          <p style={{ textAlign: "center" }}>No members found</p>
        )}
      </div>

    </section>
  );
};

export default MemberData;