import { Card } from "react-bootstrap";
import "../css/GalleryEntry.css"

function GalleryEntry(props) {
    const skills = props.data.skills;
    
    return (
        <Card className="galleryEntryContainer">
            <Card.Img className="galleryEntryImage" src={props.data.image ? "./images/works/"+ props.data.image : "./images/works/not-available.png" } alt="" fluid />
            <Card.ImgOverlay className="galleryEntryHover">
                <div className="galleryEntryTitle">{props.data.project}</div>
                <div className="galleryEntrySkills">
                    {skills.map((s) => (<div className="galleryText" size="sm"> {s}</div>))}
                </div>
                {props.data.url && <a href={props.data.url} className="stretched-link" rel="noreferrer" target="_blank"/>}
            </Card.ImgOverlay>
        </Card>
    );
}

export default GalleryEntry;