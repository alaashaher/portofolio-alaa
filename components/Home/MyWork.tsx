"use client"
// import Image from 'next/image'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { DiGithub } from 'react-icons/di'
import { FaExternalLinkAlt } from 'react-icons/fa'

const MyWork = () => {

    const MyWorkArray = [
        {
            title: "Siru Map",
            description: "",
            image: "https://sirubabapi.sirubab.com/Invoices/sirumaplogo.png",
            tags: ["React", "SCSS"],
            liveUrl: "https://sirumap.com/",
            githubUrl: "",
        },
        {
            title: "Siru sloutions",
            description: "",
            image: "https://sirusolutions.com/static/media/sirulogo.e4426ab452242b226b18.png",
            tags: ["HTML", "CSS"],
            liveUrl: "https://sirusolutions.com/",
            githubUrl: "",
        },
        {
            title: "Noa-brand",
            description:
                "",
            image: "https://noa-brand.com/assets/images/logo/logo.png",
            tags: ["React", "SCSS"],
            liveUrl: "https://noa-brand.com/",
            githubUrl: "",
        },
        {
            title: "Realist",
            description:
                "",
            image: "https://www.realist-invest.com/_next/static/media/logo1.1c6b416f.svg",
            tags: ["Next Js", "Tilliwind"],
            liveUrl: "realist-invest.com",
            githubUrl: "",
        },
        {
            title: "Tlt Hotels",
            description:
                "",
            image: "http://tltsignaturehotel.tlt.co.com/assets/img1-2daf663a.png",
            tags: ["Next Js", "Tilliwind"],
            liveUrl: "http://tltsignaturehotel.tlt.co.com/",
            githubUrl: "",
        },
        {
            title: "Fatoorah",
            description:
                "",
            image: "https://fatoorah.ai/wp-content/uploads/2025/02/%D9%85%D9%86%D8%B5%D8%A9-%D9%81%D8%A7%D8%AA%D9%88%D8%B1%D8%A9.png",
            tags: ["Next Js", "Tilliwind"],
            liveUrl: "fatoorah.sa",
            githubUrl: "",
        },


         
    ]
    return (
        <section id="projects" className="py-20 bg-gray-900">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2
                        data-aos="fade-left" data-aos-delay="100"
                        className="text-3xl md:text-4xl font-bold mb-4 text-white"
                    >
                        My
                        <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"> Work</span>
                    </h2>
                    <p
                        data-aos="fade-right" data-aos-delay="100"
                        className="text-gray-400 max-w-2xl mx-auto"
                    >
                        Here are some of my recent projects. Each project showcases different skills and technologies I've worked
                        with.
                    </p>
                </div>

                <div

                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {MyWorkArray.map((work, index) => (
                        <div
                            key={work.title}
                            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} data-aos-delay="100"
                            className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300"
                        >
                            <div className="relative h-60 overflow-hidden d-flex items-center m-auto img-div">
                                <img
                                    src={work.image || "/placeholder.svg"}
                                    alt={work.title}
                                    className="object-cover transition-transform duration-500 hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-white">{work.title}</h3>
                                <p className="text-gray-400 mb-4">{work.description}</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {work.tags.map((tag) => (
                                        <span key={tag} className="px-3 py-1 bg-gray-700 text-white rounded-full text-xs">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    <a
                                        href={work.liveUrl}
                                        className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaExternalLinkAlt size={16} />
                                        Live Demo
                                    </a>
                                    {work.githubUrl != "" && (

                                        <a
                                            href={work.githubUrl}
                                            className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <DiGithub size={16} />
                                            Source Code
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MyWork