import { ExternalLink, Github, ArrowRight } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "MyWay",
        description: "A website that lets you discover your ideal career path.",
        image: "/projects/MyWay.png",
        tags: ["React", "Tailwind", "Supabase", "Express"],
        demoUrl: "https://my-way-frontend.vercel.app/",
        githubUrl: "https://github.com/keirtwilliams/My_Way.git",  
    },
    {
        id: 2,
        title: "UpTalk",
        description: "A messaging web app that you can communicate with your feelings",
        image: "/projects/Uptalk.png",
        tags: ["React", "Vite", "Tailwind", "MongoDB", "Express", "Node.js"],
        demoUrl: "#",
        githubUrl: "https://github.com/Xeph19/UpTalk.git",  
    },
    {
        id: 3,
        title: "Product Card",
        description: "A simple design of a product card that features a song.",
        image: "/projects/ProductCard.jpg",
        tags: ["Figma"],
        demoUrl: "https://www.figma.com/design/4G0jZuOlubEOI1L94mrCAS/MelroseAlonsagay_UIChallenge2?node-id=0-1&t=YgkraBxqeNqXsr5f-1",
        githubUrl: "#", 
    },
    {
        id: 4,
        title: "Awakenly",
        description: "An app prototype for tracking habits.",
        image: "/projects/Awakenly.jpg",
        tags: ["Figma"],
        demoUrl: "https://www.figma.com/design/OpiCxfs4XNXk7BO3DDdslw/MelroseAlonsagay_HCI?node-id=71-2494&t=YgkraBxqeNqXsr5f-1",
        githubUrl: "#",  
    },
    {
        id: 5,
        title: "Moodify Login Page",
        description: "A sample login page for a music app.",
        image: "/projects/Moodify.png",
        tags: ["HTML", "CSS"],
        demoUrl: "#",
        githubUrl: "https://github.com/PrttyRosie/Login-Page.git",  
    },
]

export const Projects = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> 
                    Featured <span className="text-primary text-glow"> Projects </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my projects. Each project features how I have progressed during
                    the time learning web development. More projects are coming soon in the near future. 
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground"> {tag} </span>
                                    ))}
                                
                            </div>
                                <h3 className="text-xl font-semibold mb-1"> {project.title} </h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a href={project.demoUrl} 
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <ExternalLink size={20}/>
                                        </a>
                                        <a href={project.githubUrl} 
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <Github size={20} />
                                        </a>
                                    </div>
                                 </div>
                            </div>

                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2"
                    target="_blank"
                    href="https://github.com/PrttyRosie">
                        Check my Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    )
}