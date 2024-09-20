import React from "react";
import "./ResumeCard.css";

const ResumeCard = () => {

    const resumeInfo = {
        contact: {
            myName: "Michael McCully",
            myEmail: "michaelmccully00@gmail.com",
            myPhoneNum: "609-226-3684",
            myLinkedIn: "linkedin.com/in/michael-mccully-246261277/",
            myGithub: "github.com/mikemnj"
        },
        Summary: {
            summary: "My name is Michael McCully, and I am a twenty-two-year-old student currently studying Information Systems at the University of Delaware. As an Information Systems student, I am dedicated to developing proficiency in various skills including programming, mathematics, accounting, and business administration, all while approaching these concepts from a systems perspective. My time working in the service industry began at the age of fifteen, where I have held roles such as busser, bar-back, prep-cook, and delivery driver. Through these experiences, I have gained excellent interpersonal, problem-solving, and leadership skills, which I believe are invaluable in a professional setting. In addition to my academic pursuits and work experience, I am an active member of the Delta Chi Fraternity at the University of Delaware, where I have had the privilege of serving on the Executive Board and Judicial Boards. This role has provided me with valuable insights into organizational responsibilities, including member conflict resolution, event coordination, and financial accountability. I am passionate about leveraging my professional experiences and skill set to make meaningful contributions in both academic and professional settings, and I am excited about the opportunities that lie ahead."
        },
        education: [
            {
                school: "University of Delaware",
                degree: "Computer Information Systems",
                gradYear: 2025
            },
            {
                school: "Mainland Regional High School",
                gradYear: 2021
            }
        ],
        occupationalExperience: [
            {
                position: "Sales/Inventory Associate",
                company: "Margate Gardens Wine & Spirits",
                location: "Ventnor, NJ",
                dates: "June 2024 - Present",
                reference: "Stacy Blacker - Owner - (609) "
            },
            {
                position: "Bartender",
                company: "Aroma Di Mare",
                location: "Ventnor, NJ",
                dates: "June 2024 - August 2024",
                reference: "Griffin Egan - Bar Manager - (609) 703-4583"
            },
            {
                position: "Prep Cook/Delivery Driver",
                company: "Eat at Joe’s",
                location: "Egg Harbor Township, NJ",
                dates: "June 2022 - September 2023",
                reference: "Alberto Pelaez - Manager - (609)-553-3947"
            },
            {
                position: "Bar Back/Food Runner",
                company: "Icona Avalon",
                location: "Avalon, NJ",
                dates: "July 2021 - August 2022",
                reference: "Alyssa Murray - Manager - (267)-563-0664 - amurray@icona.com"
            },
            {
                position: "Fry Cook",
                company: "Dino’s Subs and Pizza",
                location: "Margate City, NJ",
                dates: "July 2020 - October 2020"
            },
            {
                position: "Food Runner/Busser",
                company: "Atlantic City Country Club",
                location: "Northfield, NJ",
                dates: "May 2018 - June 2020"
            }
        ]
    }

    return (
        <div className="resume-card">
            <h2>{resumeInfo.contact.myName}</h2>
            <div className="contact-section">
                <div className="contact-card">
                    <p>Email: {resumeInfo.contact.myEmail}</p>
                </div>
                <div className="contact-card">
                    <p>Phone: {resumeInfo.contact.myPhoneNum}</p>
                </div>
                <div className="contact-card">
                    <p>LinkedIn: {resumeInfo.contact.myLinkedIn}</p>
                </div>
                <div className="contact-card">
                    <p>Github: {resumeInfo.contact.myGithub}</p>
                </div>
            </div>
            <h3>Summary:</h3>
            <div className="summary-section">
                <div className="summary-card">
                    <p>{resumeInfo.Summary.summary}</p>
                </div>
            </div>
            <h3>Education</h3>
            <div className="education-section">
                {resumeInfo.education.map((edu, index) => (
                    <div key={index} className="education-card">
                        <p><strong>{edu.school}</strong> - {edu.degree || "N/A"} (Graduated: {edu.gradYear})</p>
                    </div>
                ))}
            </div>
            <h3>Occupational Experience</h3>
            <div className="experience-section">
                {resumeInfo.occupationalExperience.map((exp, index) => (
                    <div key={index} className="experience-card">
                        <p><strong>{exp.position}</strong></p>
                        <p>{exp.company}, {exp.location}</p>
                        <p>{exp.dates}</p>
                        {exp.reference && <p>Reference: {exp.reference}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ResumeCard;
