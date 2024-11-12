import {Container, ToggleButton } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GalleryEntry from "./GalleryEntry";
import TextData from '../strings/strings';
import { useState } from 'react';
import "../css/Gallery.css";

function Gallery() {
    const [currentProjectType, setCurrentProjectType] = useState("All");
    const [currentSkill, setCurrentSkill] = useState("All");
    const portfolioData = [...TextData.portfolio];
    const projectType = ["All", "Professional", "Personal"];
    
    const handleTypeChange = (e) => { setCurrentProjectType(e.target.value)};
    const handleSkillChange = (e) => { setCurrentSkill(e.target.value)};

    let skills = [].concat.apply(["All"], portfolioData.map((data) => data.skills));
    const allSkills = skills.filter((value, index, array) => array.indexOf(value) === index);

    let filteredPorfolio = portfolioData.filter((data, index, array) => {
        let isFilterIn = false;
        if(currentProjectType !== "All"){
            if(currentProjectType === "Professional" && data.isProfessional) isFilterIn = true;
            else if(currentProjectType === "Personal" && !data.isProfessional) isFilterIn = true;
        }
        else isFilterIn = true;
        if(currentSkill !== "All" && isFilterIn){
            isFilterIn = data.skills.includes(currentSkill);
        }
        return isFilterIn;
    });

    const row1 = filteredPorfolio.map((data, index) => {
        return (<Col key={index} xs={12} sm={12} md={6} lg={6} xl={4} xxl={3}><GalleryEntry data={data}/></Col>)
    });

    const projectTypeButtons = projectType.map((s, index) => {
        return (
            <ToggleButton key={index} 
                          variant="outline-primary"
                          name="type-options"
                          className="filterButton"
                          id={"tbg-radio-type-filter" + index}  
                          type="radio" 
                          size="sm"
                          value={s} 
                          checked={s===currentProjectType}
                          onChange={handleTypeChange}>
                {s}
            </ToggleButton>
        )
    })

    const filterSkillButtons = allSkills.map((s, index) => {
        return (
            <ToggleButton key={index} 
                          variant="outline-primary"
                          name="skill-options"
                          className="filterButton"
                          id={"tbg-radio-skill-filter" + index}  
                          type="radio"
                          size="sm"
                          value={s} 
                          checked={s===currentSkill}
                          onChange={handleSkillChange}>
                {s}
            </ToggleButton>
        )
    })


    return (
        <div className="galleryContainer" >
            <div className="filterGroup">
                <Container>
                    {projectTypeButtons}
                </Container>
            </div>
            <div className="filterGroup">
                <Container>
                    {filterSkillButtons}
                </Container>
            </div>
            <Container fluid>
                <Row>
                    {row1}
                </Row>
            </Container>
        </div>
    );
}

export default Gallery;