import { Button, Card, Image } from "react-bootstrap"
import "../css/App.css"
import "../css/Contact.css"

export const Contact = () => {
    return (
        <div className="center">
            <Card className="contactContainer">
                <Card.Header>Contact</Card.Header>
                <Card.Body>
                
                    <Card.Title>Email</Card.Title>
                    <p><a href="mailto:nicol.lee.91@gmail.com">nicol.lee.91@gmail.com</a></p>
                    <Card.Title>Resume</Card.Title>
                    <Button size="sm"><a href="./files/Nicol-Resume.pdf" download="Nicol-Resume.pdf">Download</a></Button>
                </Card.Body>
                <Card.Footer>
                    <div className="linksContainer">
                        <a href="https://www.linkedin.com/in/nicol-kevin-lee-0a0a608a" className="fa fa-linkedin sociallink" />
                        <a href="https://github.com/nicolkevinlee" className="sociallink"><Image className="linkIcon" src="./images/github-mark-white.png" alt=""/> </a>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    )
}