import React from "react";
import SkillBar from 'react-skillbars';
import data from "../data/data.json";
import "./css/About.css";

const Education = () => {
    return (
        <div id="education">
            <div className="content-section">
                <h1>Education</h1>
                <h3>Texas A&M University, 2020-2024</h3>
                <h4>Bachelor of Science in Computer Science<br/>
                    GPA 4.0 / 4.0</h4>
                <h3>Relevant Coursework</h3>
                <ul className="course">
                    <li>Computation (Python)</li>
                    <li>Introduction to Programing design and Concepts (C++)</li>
                </ul>
            </div>
        </div>
    );
}

const skills = [
    {type: "C++", level: 90},
    {type: "Java", level: 80},
    {type: "Python", level: 90},
    {type: "HTML+CSS", level: 100},
    {type: "Javascript", level: 90},
    {type: "React.js", level: 90},
    {type: "Firebase", level: 80}
];

const colors = {
    bar: '#7C7C7C',
    title: {
        background: {
            hue: 359,
            saturation:0,
            level:50
        }
    }
}

const Skills = () => {
    return (
        <div id="skills">
            <div className="content-section">
                <h1>Skills</h1>
                <SkillBar skills={skills} colors={colors} />

            </div>
        </div>
    );
}

const Experience = () => {
    return (
        <div id="experience">
            <div className="content-section">
                <h1>Experience</h1>
                {data.experience.slice(0).reverse().map(experience => (
                    <div className="experience-section">
                        <h3 className="experience">{experience.title}</h3>
                        <h4 className="title">{experience.jobTitle}</h4>
                        <h4 className="date">{experience.date}</h4>
                        <ul className="description" >
                            {experience.description.map(des => (
                                <li>
                                    {des}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

const Projects = () => {
    return (
        <div id="projects">
            <div className="content-section">
                <h1>Projects</h1>
                {data.projects.slice(0).reverse().map(project => (
                    <div className="experience-section">
                        <h3 className="experience">{project.title}</h3>
                        <h4 className="title">{project.jobTitle}</h4>
                        <h4 className="date">{project.date}</h4>
                        <ul className="description" >
                            {project.description.map(project => (
                                <li>
                                    {project}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

const About = () => {
    console.log(data);
    return (
        <div className="about">
            <Education />
            <Skills />
            <Experience />
            <Projects />
        </div>
    );
}

export default About;