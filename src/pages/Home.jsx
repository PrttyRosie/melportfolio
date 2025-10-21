import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Contacts } from "../components/Contacts";
import { Footer } from "../components/Footer";
export const Home = () => {

    return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden ">

        {/* Theme Toggle */}
        <ThemeToggle />


        {/* Background Effects */}
        <StarBackground />

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main>
            <HeroSection />
            <About />
            <Skills />
            <Projects />
            <Contacts />
        </main>


        {/* Footer */}
        <Footer />

    </div>
    );
};