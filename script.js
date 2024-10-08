const tableData = [
    { semester: "First Year, First Semester", courses: [
        { course: "NSTP01", description: "Civic Welfare Training Service 1", unit: 3.0, grade: 1.20, remarks: "Passed", year: "First Semester A.Y 2022-2023" },
        { course: "SCITEC", description: "Science, Technology and Society", unit: 3.0, grade: 1.10, remarks: "Passed", year: "First Semester A.Y 2022-2023" },
        { course: "INTCOM", description: "Introduction to Computing", unit: 3.0, grade: 1.40, remarks: "Passed", year: "First Semester A.Y 2022-2023" },
        { course: "COPRO1", description: "Computer Programming 1", unit: 3.0, grade: 1.30, remarks: "Passed", year: "First Semester A.Y 2022-2023" },
        { course: "COMPOP", description: "Computer Operations: Office Productivity Software", unit: 3.0, grade: 1.50, remarks: "Passed", year: "First Semester A.Y 2022-2023" },
        { course: "PEDUC1", description: "Physical Activities Towards Health and Fitness 1", unit: 3.0, grade: 1.10, remarks: "Passed", year: "First Semester A.Y 2022-2023" },
        { course: "JRIZAL", description: "Life, Works and Writings of Jose Rizal", unit: 3.0, grade: 1.10, remarks: "Passed", year: "First Semester A.Y 2022-2023" }
    ]},
    { semester: "First Year, Second Semester", courses: [
        { course: "OOPROG", description: "Object-Oriented Programming", unit: 3.0, grade: 1.50, remarks: "Passed", year: "Second Semester A.Y 2022-2023" },
        { course: "ARTAPP", description: "Art Appreciation", unit: 3.0, grade: 1.00, remarks: "Passed", year: "Second Semester A.Y 2022-2023" },
        { course: "PURCOM", description: "Purposive Communication", unit: 3.0, grade: 1.30, remarks: "Passed", year: "Second Semester A.Y 2022-2023" },
        { course: "DSTRU1", description: "Discrete Structures 1", unit: 3.0, grade: 1.10, remarks: "Passed", year: "Second Semester A.Y 2022-2023" },
        { course: "PEDUC2", description: "Physical Activities Towards Health and Fitness 2", unit: 3.0, grade: 1.00, remarks: "Passed", year: "Second Semester A.Y 2022-2023" },
        { course: "COPRO2", description: "Computer Programming 2", unit: 3.0, grade: 1.20, remarks: "Passed", year: "Second Semester A.Y 2022-2023" },
        { course: "GEEL01", description: "General Education Elective 1", unit: 3.0, grade: 1.10, remarks: "Passed", year: "First Semester A.Y 2022-2023" }
    ]},
    { semester: "Second Year, First Semester", courses: [
        { course: "DATSTR", description: "Data Structures and Algorithms", unit: 3.0, grade: 1.30, remarks: "Passed", year: "First Semester A.Y 2023-2024" },
        { course: "MATH01", description: "Advanced Mathematics for IT", unit: 3.0, grade: 1.20, remarks: "Passed", year: "First Semester A.Y 2023-2024" },
        { course: "WEBDEV", description: "Web Development", unit: 3.0, grade: 1.10, remarks: "Passed", year: "First Semester A.Y 2023-2024" },
        { course: "PEDUC3", description: "Physical Activities Towards Health and Fitness 3", unit: 3.0, grade: 1.00, remarks: "Passed", year: "First Semester A.Y 2023-2024" },
        { course: "SYSANA", description: "Systems Analysis and Design", unit: 3.0, grade: 1.50, remarks: "Passed", year: "First Semester A.Y 2023-2024" },
        { course: "DSTRU2", description: "Discrete Structures 2", unit: 3.0, grade: 1.40, remarks: "Passed", year: "First Semester A.Y 2023-2024" }
    ]},
    { semester: "Second Year, Second Semester", courses: [
        { course: "NETPRO", description: "Network Programming", unit: 3.0, grade: 1.40, remarks: "Passed", year: "Second Semester A.Y 2023-2024" },
        { course: "HUMAN01", description: "Human Computer Interaction", unit: 3.0, grade: 1.10, remarks: "Passed", year: "Second Semester A.Y 2023-2024" },
        { course: "SOFTENG", description: "Software Engineering", unit: 3.0, grade: 1.30, remarks: "Passed", year: "Second Semester A.Y 2023-2024" },
        { course: "PEDUC4", description: "Physical Activities Towards Health and Fitness 4", unit: 3.0, grade: 1.00, remarks: "Passed", year: "Second Semester A.Y 2023-2024" },
        { course: "COPRO3", description: "Computer Programming 3", unit: 3.0, grade: 1.50, remarks: "Passed", year: "Second Semester A.Y 2023-2024" }
    ]},
    { semester: "Third Year, First Semester", courses: [
        { course: "PROEL2", description: "Professional Elective 2", unit: 3.0, grade: 1.30, remarks: "In Progress", year: "First Semester A.Y 2024-2025" },
        { course: "WEBTEC", description: "Web Technology	", unit: 3.0, grade: 1.20, remarks: "In Progress", year: "First Semester A.Y 2024-2025" },
        { course: "MOBAPP", description: "Mobile Application", unit: 3.0, grade: 1.10, remarks: "In Progress", year: "First Semester A.Y 2024-2025" },
        { course: "SYSINT", description: "Systems Integration and Architecture", unit: 3.0, grade: 1.30, remarks: "In Progress", year: "First Semester A.Y 2024-2025" },
        { course: "RESMET", description: "Research Methods in IT	", unit: 3.0, grade: 1.40, remarks: "In Progress", year: "First Semester A.Y 2024-2025" },
        { course: "SOFENG", description: "Software Engineering	", unit: 3.0, grade: 1.20, remarks: "In Progress", year: "First Semester A.Y 2024-2025" }
    ]},
    { semester: "Third Year, Second Semester", courses: [
        { course: "ARTINT", description: "Artificial Intelligence", unit: 3.0, grade: 1.40, remarks: "", year: "Second Semester A.Y 2024-2025" },
        { course: "CLOUDC", description: "Cloud Computing", unit: 3.0, grade: 1.10, remarks: "", year: "Second Semester A.Y 2024-2025" },
        { course: "INFSYS", description: "Information Systems", unit: 3.0, grade: 1.30, remarks: "", year: "Second Semester A.Y 2024-2025" },
        { course: "CAPST1", description: "Capstone Project 1", unit: 3.0, grade: 1.20, remarks: "", year: "Second Semester A.Y 2024-2025" },
        { course: "MATH03", description: "Numerical Analysis", unit: 3.0, grade: 1.50, remarks: "", year: "Second Semester A.Y 2024-2025" }
    ]},
    { semester: "Fourth Year, First Semester", courses: [
        { course: "CYBER", description: "Cybersecurity", unit: 3.0, grade: 1.20, remarks: "", year: "First Semester A.Y 2025-2026" },
        { course: "MATH04", description: "Operations Research", unit: 3.0, grade: 1.30, remarks: "", year: "First Semester A.Y 2025-2026" },
        { course: "SYSDEV", description: "Systems Development and Maintenance", unit: 3.0, grade: 1.10, remarks: "", year: "First Semester A.Y 2025-2026" },
        { course: "ETHICS", description: "Professional Ethics", unit: 3.0, grade: 1.40, remarks: "", year: "First Semester A.Y 2025-2026" },
        { course: "CAPST2", description: "Capstone Project 2", unit: 3.0, grade: 1.00, remarks: "", year: "First Semester A.Y 2025-2026" }
    ]},
    { semester: "Fourth Year, Second Semester", courses: [
        { course: "INTBIZ", description: "International Business", unit: 3.0, grade: 1.30, remarks: "", year: "Second Semester A.Y 2025-2026" },
        { course: "ENTREP", description: "Technopreneurship", unit: 3.0, grade: 1.20, remarks: "", year: "Second Semester A.Y 2025-2026" },
        { course: "INTERN", description: "Internship", unit: 6.0, grade: "1.00", remarks: "", year: "Second Semester A.Y 2025-2026" }
    ]}
    // Add more semesters and courses as necessary
];

const table = document.getElementById('gradeTable');

// Function to generate table rows
function generateTable() {
    tableData.forEach((semesterData) => {
        // Create semester title row
        let semesterRow = document.createElement('tr');
        let semesterTitle = document.createElement('th');
        semesterTitle.colSpan = 7;
        semesterTitle.className = "title";
        semesterTitle.innerText = semesterData.semester;
        semesterRow.appendChild(semesterTitle);
        table.appendChild(semesterRow);

        // Create table header row
        let headerRow = document.createElement('tr');
        const headers = ["Course", "Description", "Unit", "Grade", "Remarks", "Course", "Year"];
        headers.forEach(header => {
            let th = document.createElement('th');
            th.innerText = header;
            headerRow.appendChild(th);
        });
        table.appendChild(headerRow);

        // Generate rows for each course
        semesterData.courses.forEach(course => {
            let courseRow = document.createElement('tr');

            let backgroundColor = ""; // Initialize background color variable

            // Determine background color based on remarks
            if (course.remarks === "In Progress") {
                backgroundColor = "yellow"; // Set to yellow if remarks is "In Progress"
            } else if (course.remarks === "") {
                backgroundColor = "white"; // Set to white if remarks is empty
            }

            // Create inner HTML for the row with the determined background color
            courseRow.innerHTML = `
                <td style="background-color: ${backgroundColor};">${course.course}</td>
                <td style="background-color: ${backgroundColor};">${course.description}</td>
                <td style="background-color: ${backgroundColor};">${course.unit}</td>
                <td style="background-color: ${backgroundColor};">${course.grade}</td>
                <td style="background-color: ${backgroundColor};">${course.remarks}</td>
                <td style="background-color: ${backgroundColor};">${course.course}</td>
                <td style="background-color: ${backgroundColor};">${course.year}</td>
            `;

            table.appendChild(courseRow); 
        });
    });
}

// Call the function to populate the table
generateTable();