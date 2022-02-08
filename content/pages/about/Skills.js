import React, { useState } from "react";
import { Grid, Flex, Box } from "theme-ui";

const tableStyle = {
  border: "1px solid",
  borderCollapse: "collapse",
};

const tableCell = {
  border: "1px solid",
  borderCollapse: "collapse",
};

const SkillTable = () => {
  const table = [
    {
      title: "Core Technologies",
      data: [
        "Python",
        "Golang",
        "Node js",
        "Java",
        "Redis",
        "Php",
        "PostgreSql",
        "Ruby",
      ],
    },
    {
      title: "Frameworks",
      data: [
        "Django & Django REST",
        "Gorilla",
        "Vue js, Vue Router & Vuex",
        "Redux, Saga js",
        "Laravel",
        "React",
        "Ruby on Rails"
      ],
    },
    {
      title: "Tools & Workflow",
      data: [
        "Git",
        "Docker",
        "Nginx",
        "Lambda functions",
        "GCP",
        "AWS S3 & ecs",
        "Firebase"
      ],
    },
  ];
  return (
    <>
      <Grid width={[128, null, 192]}>
        {table.map((t, _) => (
          <table style={tableStyle}>
            <tr>
              <th>{t.title}</th>
            </tr>
            {t.data.map((d, _) => (
              <tr>
                <td style={tableCell}>{d}</td>
              </tr>
            ))}
          </table>
        ))}
      </Grid>
    </>
  );
};

const CertificateTable = () => {
  const table = [
    {
      name: "Blockchain Basics",
      link: "https://coursera.org/share/b47a9bd5c4a18dc26c94282cceaf0c31",
      description: "Fundamentals of blockchains and cryptocurrency",
    },
    {
      name: "Smart Contracts",
      link: "https://coursera.org/share/6a77c1ba934e2aae0fa0550d86581a71",
      description: "Creating solidity scripts for automating transaction logic on ethereum blockchain",
    },
    {
      name: "Essentials of GCP",
      link: "https://coursera.org/share/13ce090f36951ef06c62d728ecc9d059",
      description: "Fundamentals of Google Cloud Platform",
    },
    {
      name: "Architecting with Google Compute Engine",
      link: "https://coursera.org/share/ab075d0292c66fd339e9d64d53d5ff50",
      description: "Building and deploying applications using Google Compute engine services",
    },
    {
      name: "Scaling and Automation with GCP",
      link: "https://coursera.org/share/0ed47a10c3cb835ca4f32822dce886b7",
      description: "Performing and automating platform scaling using Google Cloud platform technologies",
    },
  ];

  return (
    <table style={tableStyle}>
      <tr>
        <th style={tableCell}>Certificates <span role="img" aria-label="certificates"> 📝 </span> </th>
        <th style={tableCell}>Description</th>
      </tr>
      {table.map((d, _) => (
        <tr>
          <td style={tableCell}>
            <a href={d.link} style={{ ':visited': { color: 'pink' } }}> {d.name} </a>
          </td>
          <td style={tableCell}>{d.description}</td>
        </tr>
      ))}
    </table>
  );
};

const RESUME_LINK = "https://drive.google.com/file/d/1-30-lQQDTlTlg4RYLaxor-BToSGZ2gag/view?usp=sharing"

const Skill = () => {
  const [showSkill, setShowSkill] = useState(false);

  return (
    <>
      <button
        style={{
          display: "inline",
          borderStyle: "dashed",
          borderWidth: "thin",
        }}
        onClick={() => setShowSkill(!showSkill)}
      >
        {showSkill ? "Hide" : "Show my Skills 🔨"}
      </button>
      <Flex
        style={{
          flexDirection: "column",
          marginTop: "3rem",
          justifyContent: "space-between",
        }}
      >
        <div data="myfile.pdf" type="application/pdf" width="100%" height="100%">
          <p>You can find my <a href={RESUME_LINK} target="_blank">Resume Here</a></p>
        </div>
        {showSkill && (
          <>
            <Box p={2} sx={{ flex: '1 1 auto', justifyContent: 'space-between', marginBottom: '2rem' }}>
              <SkillTable />
            </Box>
            <Box>
              <CertificateTable />
            </Box>
          </>
        )}
      </Flex>
    </>
  );
};

export default Skill;
