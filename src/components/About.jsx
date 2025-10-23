import { LayoutPanelTop, Code, PencilRuler  } from "lucide-react"



export const About = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary text-glow"> Me </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">An aspiring Front-End Developer</h3>

                    <p className="text-muted-foreground"> 
                         I am an IT student not by choice, and still currently learning and discovering this field.
                        And as I progress, I could tell that I've unlocked a new ability to create and solve solutions with the means of technology, 
                        thus creating elegant and innovative designs are what I focused on doing.
                    </p>

                    <p className="text-muted-foreground">
                        I occasionally struggle with frontend concepts but I believe my artistic eye and my logical thinking will shine through. 
                        The same talent that once brought pencil and paper to life now fuels my journey in web development. 
                        With growing motivation, I am determined to create stunning digital experiences that merge technical skill with beautiful design.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button"> 
                            Get in Touch
                        </a>

                        <a href="https://drive.google.com/file/d/1HSWFtjWktx3sOxQ0XbPVOBzebfNvAZUr/view?usp=sharing" target="_blank" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            Download CV
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <LayoutPanelTop className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Front-end Development </h4>
                                <p className="text-muted-foreground">
                                    Creating beautiful, functional websites that users see 
                                    and interact with directly.
                                    </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                         <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <PencilRuler  className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Graphic Design </h4>
                                <p className="text-muted-foreground">
                                    The art of visually communicating ideas 
                                    through typography, imagery, and color.
                                    </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                         <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Web Development </h4>
                                <p className="text-muted-foreground">
                                    Creating responsive websites and web applications
                                    with modern frameworks.
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>

                </div>
            </div>
        </section>
    )
}