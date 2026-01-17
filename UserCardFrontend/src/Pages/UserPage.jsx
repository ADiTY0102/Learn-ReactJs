import React from 'react'
import UserCard from '../Components/UserCard'
import { Header } from '../Components/Header'

const UserPage = () => {
    const users = [
        {
            status: "avaliable",
            name: "Aditya Binjagermath",
            role: "UI/UX Designer",
            tag: "Visual Madness",
            rate: 22,
            currency: "USD",
            billing: "hr",
            skills: ["ui-ux", "webdesigner", "prototyping","+4"],
            description: "Designs clean, conversion-focused interfaces with tight attention to typography and spacing.",
            image: "https://i.pinimg.com/1200x/17/c0/d1/17c0d1bfcef18ad4a83d5b5b95f328df.jpg",
        },
        {
            status: "avaliable",
            name: "Sara Nandekar",
            role: "Frontend Developer",
            tag: "Epic Coder",
            rate: 18,
            currency: "USD",
            billing: "hr",
            skills: ["frontend developer", "ui-ux", "webdesigner","+8"],
            description: "Builds pixel-perfect, responsive frontends with smooth animations and accessible components.",
            image: "https://i.pinimg.com/736x/06/23/98/062398d189fd5fb4ece14364ef199144.jpg",

        },
        {
            status: "avaliable",
            name: "Rohan Kulkarni",
            role: "Backend Engineer",
            tag: "Freelancer",
            rate: 25,
            currency: "USD",
            billing: "hr",
            skills: ["backend developer", "database", "api design","+5"],
            description: "Specializes in scalable REST APIs and database schemas optimized for performance and reliability.",
            image: "https://i.pinimg.com/1200x/d5/79/50/d5795056333e908134bcc6c5e87ac0c9.jpg",
        },
        {
            status: "unavaliable",
            name: "Meera Shah",
            role: "Full‑Stack Developer",
            tag: "Product Hacker",
            rate: 28,
            currency: "USD",
            billing: "hr",
            skills: ["frontend developer", "backend developer", "webdesigner","+12"],
            description: "Ships end‑to‑end features, from database models to polished UI, with a strong product sense.",
            image: "https://i.pinimg.com/736x/ce/e8/94/cee894e5c8181e63be04083462e7af31.jpg"
        },
        {
            status: "unavaliable",
            name: "Kunal Patil",
            role: "Database Specialist",
            tag: "Data Whisperer",
            rate: 24,
            currency: "USD",
            billing: "hr",
            skills: ["database", "os", "performance tuning","+9"],
            description: "Designs normalized schemas, writes complex queries, and tunes indexes for heavy traffic systems.",
            image: "https://i.pinimg.com/736x/07/20/18/072018ecf71710af4e9c65107ae8e5c7.jpg"
        },
        {
            status: "avaliable",
            name: "Aisha Khan",
            role: "Network Engineer",
            tag: "Packet Ninja",
            rate: 26,
            currency: "USD",
            billing: "hr",
            skills: ["network engineer", "os", "security","+3"],
            description: "Builds secure, fault‑tolerant networks and monitors traffic to keep latency low and uptime high.",
            image: "https://i.pinimg.com/736x/7d/98/f1/7d98f113ffa974a2210811bad0e1cdce.jpg"
        },
        {
            status: "avaliable",
            name: "Vikram Desai",
            role: "Systems Engineer",
            tag: "Freelancer",
            rate: 20,
            currency: "USD",
            billing: "hr",
            skills: ["os", "backend developer", "automation","+1"],
            description: "Automates deployments, configures servers, and keeps services healthy with solid observability.",
            image: "https://i.pinimg.com/1200x/01/c2/ef/01c2ef68dc0996940c516fb0e3f013e5.jpg"
        },
        {
            status: "unavaliable",
            name: "Neha Jagtap",
            role: "Web Designer",
            tag: "Visual Madness",
            rate: 16,
            currency: "USD",
            billing: "hr",
            skills: ["webdesigner", "ui-ux", "branding","+3"],
            description: "Creates visually rich landing pages and marketing sites aligned with modern brand guidelines.",
            image: "https://i.pinimg.com/736x/1c/9e/bd/1c9ebd78cbd0667baacda07f182dfe37.jpg"
        },
        {
            status: "avaliable",
            name: "Pranav Iyer",
            role: "Cloud Backend Developer",
            tag: "Epic Coder",
            rate: 30,
            currency: "USD",
            billing: "hr",
            skills: ["backend developer", "database", "network engineer","+5"],
            description: "Builds cloud‑native services with robust APIs, secure networking, and efficient data layers.",
            image: "https://i.pinimg.com/736x/bd/e0/2e/bde02e31309fa9e3538a4452dabcc2d5.jpg"
        },
    ];

    return (
        <div className="min-h-screen bg-black">
            <Header />

            <div className="bg-black h-auto p-5 mb-5 flex justify-center">
                <div className="mt-10 grid gap-6 w-full max-w-6xl 
                  sm:grid-cols-2 
                  lg:grid-cols-3">
                    {users.map(function (user) {
                        return <UserCard 
                        userName={user.name} 
                        image={user.image}
                        role={user.role}
                        tag={user.tag} 
                        rate={user.rate}
                        description={user.description} 
                        status={user.status}
                        skills={user.skills}
                        />
                        
                    })}

                </div>
            </div>

        </div>
    )
}

export default UserPage
