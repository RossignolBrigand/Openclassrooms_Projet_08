
import './_footer.scss'

function Footer() {
    return (
        <footer>
            <div class="footer-container">
                <div class="footer-links">
                    <a href="#hero-section">About Me</a>
                    <a href="#projects-section">Projects</a>
                    <a href="#contact-section">Contact</a>
                </div>
                <div class="footer-socials">
                    <a href="https://linkedin.com/in/yourname" target="_blank">LinkedIn</a>
                    <a href="https://github.com/yourusername" target="_blank">GitHub</a>
                </div>
                <div class="footer-cta">
                    <p>Have a project in mind? <a href="#contact">Let's talk!</a></p>
                </div>
                <div class="footer-bottom">
                    <p>© 2024 Thomas PINEAU. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
};

export default Footer;