import { Container, Row, Col, Image } from "react-bootstrap"
import TextData from '../strings/strings';
import "../css/App.css";
import "../css/Home.css";

export const Home = () => {
    const tech = [...TextData.tech];

    const techImages = tech.map((value)=> {
        return (
            <Image className="techImage" src={"/images/tech/" + value} alt=""/>
        );
    })

    return (
        <Container className="center">
            <Row>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                    <div>
                        <h1>Nicol Kevin Lee</h1><h2>Programmer</h2>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                    <div className="techContainer">
                        {techImages}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}