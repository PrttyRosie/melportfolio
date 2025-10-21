import { useState } from "react";
import { cn } from "@/lib/utils";
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiReact, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiMongodb, 
  SiExpress, 
  SiFigma, 
  SiGithub
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";

// Add this icon mapping object
const skillIcons = {
  "HTML/CSS": <><SiHtml5 className="text-orange-500" /><SiCss3 className="text-blue-500" /></>,
  "JavaScript": <SiJavascript className="text-yellow-400" />,
  "React": <SiReact className="text-cyan-400" />,
  "TailwindCSS": <SiTailwindcss className="text-cyan-500" />,
  "Node.js": <SiNodedotjs className="text-green-500" />,
  "MongoDB": <SiMongodb className="text-green-400" />,
  "Express.js": <SiExpress className="text-gray-400" />,
  "Figma": <SiFigma className="text-purple-500" />,
  "Github": <SiGithub className="text-gray-700" />,
  "VS Code": <BiLogoVisualStudio className="text-blue-500" />,
};

const skills = [
    //Frontend
    {name: "HTML/CSS" , level: 90, category: "frontend"},
    {name: "JavaScript", level: 75, category: "frontend"},
    {name: "React", level: 85, category: "frontend"},
    {name: "TailwindCSS", level: 92, category: "frontend"},

    //Backend
    {name: "Node.js", level: 83, category: "backend"},
    {name: "MongoDB", level: 80, category: "backend"},
    {name: "Express.js", level: 78, category: "backend"},

    //Tools
    {name: "Figma", level: 90, category: "tools"},
    {name: "Github", level: 93, category: "tools"},
    {name: "VS Code", level: 95, category: "tools"},
];

const categories = ["all", "frontend", "backend", "tools"];

export const Skills = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter (
        (skill) => activeCategory === "all" || skill.category === activeCategory);

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary text-glow">Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button 
                        key={key}
                        onClick={() => setActiveCategory(category)} 
                        className={cn(
                            "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            activeCategory === category ? "bg-primary text-primary-foreground" : 
                            "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}>
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div 
                        key={key} 
                        className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4 flex items-center gap-3">
                                <span className="flex items-center gap-1 text-xl">
                                    {skillIcons[skill.name]}
                                </span>
                                <h3 className="font-semibold text-lg"> {skill.name} </h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div 
                            className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out"
                            style={{width: skill.level + "%"}}
                            />
                            </div>
                            
                            <div className="text-right mt-1"> 
                                <span className="text-sm text-muted-foreground"> 
                                    {skill.level}% 
                                </span>
                            </div>
                            </div>
                    ))}
                </div>
            </div>
        </section>
    )
}