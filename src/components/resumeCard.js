const ResumeCard = () => {

    const resumeInfo = {
        contact: {
            myName: "Michael McCully",
            myEmail: "michaelmccully00@gmail.com",
            myPhoneNum: "609-226-3684",
            myLinkedIn: "linkedin.com/in/michael-mccully-246261277/",
            myGithub: "github.com/mikemnj"
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
                position: "Prep Cook/Delivery Driver",
                company: "Eat at Joe’s",
                location: "Egg Harbor Township, NJ",
                startDate: "June 2022",
                endDate: "September 2023",
                reference: {
                    name: "Alberto Pelaez",
                    role: "Manager",
                    phone: "(609)-553-3947"
                }
            },
            {
                position: "Bar Back/Food Runner",
                company: "Icona Avalon",
                location: "Avalon, NJ",
                startDate: "July 2021",
                endDate: "August 2022",
                reference: {
                    name: "Alyssa Murray",
                    role: "Manager",
                    phone: "(267)-563-0664",
                    email: "amurray@icona.com"
                }
            },
            {
                position: "Fry Cook",
                company: "Dino’s Subs and Pizza",
                location: "Margate City, NJ",
                startDate: "July 2020",
                endDate: "October 2020"
            },
            {
                position: "Food Runner/Busser",
                company: "Atlantic City Country Club",
                location: "Northfield, NJ",
                startDate: "May 2018",
                endDate: "June 2020"
            }
        ]
    }

    return (
        <div className="resume-card">
            <h2>{resumeInfo.contact.myName}</h2>
            <div>
                <p>Email: {resumeInfo.contact.myEmail}</p>
                <p>Phone: {resumeInfo.contact.myPhoneNum}</p>
                <p>LinkedIn: {resumeInfo.contact.myLinkedIn}</p>
                <p>Github: {resumeInfo.contact.myGithub}</p>
            </div>
            <h3>Education</h3>
            <div>
                {resumeInfo.education.map((edu, index) => (
                    <div key={index}>
                        <p><strong>{edu.school}</strong> - {edu.degree} (Graduated: {edu.gradYear})</p>
                    </div>
                ))}
            </div>
            <h3>Occupational Experience</h3>
            <div>
                {resumeInfo.occupationalExperience.map((exp, index) => (
                    <div key={index}>
                        <p><strong>{exp.position}</strong></p>
                        <p>{exp.company}, {exp.location}</p>
                        <p>{exp.startDate} - {exp.endDate}</p>
                        {exp.reference && (
                            <p>Reference: {exp.reference.name} - {exp.reference.role} - {exp.reference.phone} {exp.reference.email && (`- ${exp.reference.email}`)}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ResumeCard;