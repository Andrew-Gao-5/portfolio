"use client"
import React, {useTransition, useState } from 'react'
import Image from "next/image"
import TabButton from "./TabButton"
const TAB_DATA =[
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Node.js</li>
                <li>PostgreSQL</li>
                <li>C++</li>
                <li>C</li>
                <li>TypeScript</li>
                <li>Python</li>
                <li>React</li>
            </ul>
        )
    }, 

    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>University of Texas A&M, College Station</li>
                <li>Computer Science with minor in Cybersecurity</li>
                <li>COULD MAKE A TABLE OF ALL CLASSES IN THE FUTURE MAYBE</li>
                <li>Codepath</li>


            </ul>
        )
    },

    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li>AWS Cloud Practitioner</li>
                <li>Certified Entry-Level Python Programmer</li>
                <li>Envestnet - An Understanding of Managed Investment Solutions</li>


            </ul>
        )
    }

]

const AboutSection = () => {
    const[tab, setTab] = useState("skills")
    const [isPending, startTransition] = useTransition()

    const handleTabChange = (id) => {
        startTransition(()=> {
            setTab(id)
        })
    }
  return <section className="text-white">
    <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
    <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
        <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
        <p className="text-base md:text-lg">(fill this in later )</p>
    <div className="flex flex-row justify-start mt-8">
        <TabButton selectTab={() => handleTabChange("skills")} active={tab == "skills"}>
            {" "}Skills{" "}
            </TabButton>
        <TabButton selectTab={() => handleTabChange("education")} active={tab == "education"}>
            {" "}Education{" "}
            </TabButton>
        <TabButton selectTab={() => handleTabChange("certifications")} active={tab == "certifications"}
        certifications={tab == "certifications"}>
            {" "}Certifications{" "}
            </TabButton>
    </div>
    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
    </div>
    </div>
    </section>
  
}

export default AboutSection