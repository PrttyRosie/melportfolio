import { Facebook, Linkedin, Mail, Phone, Map, Send } from "lucide-react"
import { cn } from "@/lib/utils"
import { useToast} from "@/hooks/use-toast"
import { useState } from "react";
import { BiLogoDiscordAlt } from "react-icons/bi";



export const Contacts = () => {

    const {toast} = useToast();
    const {isSubmitting, setIsSubmitting} = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()

        setIsSubmitting(true);

        setTimeout(() => {
            toast({
                title: "Message Sent!",
                description: "Thank you for your message. I'll get back to you soon.",
            });
            setIsSubmitting(false);
        }, 1500);

        
    }

    return (
        <section className="py-24 px-4 relative bg-secondary/30">
            <div className="conatine3r mx-auto max-w-5xl">
            <h2 className="tex-3xl md:text-4xl font-bold mb-4 text-center">
                Get In <span className="text-primary text-glow"> Touch </span>
            </h2>

            <p className="text-center text-mute-foreground mb-12 max-w-2xl mx-auto">
                Have a project in mind or want to collaborate? Feel free to reach out.
                Let's connect and share ideas!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6"> 
                        Contact Information 
                    </h3>

                    <div className="space-y-6 justify-content">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Mail className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium"> Email </h4>
                                <a href="mailto:alonsagaymelrose@gmail.com" 
                                className="text-muted-foreground hover:text-primary transition-colors">
                                    alonsagaymelrose@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Phone className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium"> Phone </h4>
                                <a href="tel:09282306793" 
                                className="text-muted-foreground hover:text-primary transition-colors">
                                    +63 928 230 6793
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Map className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium text-center"> Location </h4>
                                <a className="text-muted-foreground hover:text-primary transition-colors">
                                    Iloilo, Western Visayas, Philippines
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8">
                        <h4 cla font-medium mb-4> Connect with Me </h4>
                        <div className="flex space-x-4 justify-center">
                            <a 
                            href="https://www.linkedin.com/in/alonsagay-melrose-a-b43294371/"
                            target="_blank">
                                <Linkedin />
                            </a>
                            <a 
                            href="https://discord.com"
                            target="_blank">
                                <BiLogoDiscordAlt size={25} />
                            </a>
                            <a 
                            href="https://web.facebook.com/hanami.roseaa/"
                            target="_blank">
                                <Facebook />
                            </a>
                        </div>
                    </div>
                </div>
                    <div className="bg-card p-8 rounded-lg shadow-xs" onSubmit={handleSubmit}>
                        <h3 className="text-2xl font-semibold mb-6"> Send a Message </h3>

                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2"> Name </label>
                                <input 
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlined-hidden focus:ring-2 focus:ring-primary"
                                placeholder="Melrose..."
                                 />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2"> Email </label>
                                <input 
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlined-hidden focus:ring-2 focus:ring-primary"
                                placeholder="youremail@gmail.com..."
                                 />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2"> Message </label>
                                <textarea 
                                id="message"
                                name="message"
                                required
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlined-hidden focus:ring-2 focus:ring-primary resize-none"
                                placeholder="Hello! I would like to talk about..."
                                 />
                            </div>
                                <button 
                                type="submit" 
                                disabled={isSubmitting}
                                className={cn(
                                    "cosmic-button w-full flex items-center justify-center gap-2",
                                    )}> {isSubmitting ? "Sending..." : "Send Message"}
                                        <Send size={16} />
                                    </button>

                        </form>
                    </div>

            </div>
            </div>
        </section>
    )
}