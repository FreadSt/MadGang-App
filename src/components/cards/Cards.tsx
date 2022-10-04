import React, {useState, useEffect} from "react"
import Axios from "axios"
import { IData } from "../interfaces"
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./style.scss"

export const Cards = () => {
    const [objectData, setObjectData] = useState<IData[]>([])
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex: any) => {
        setIndex(selectedIndex);
    };
    useEffect(() => {
        Axios.get(`https://api.spacexdata.com/v4/dragons/5e9d058759b1ff74a7ad5f8f`)
        .then(res=> {
            console.log(res.data, "res") 
            setObjectData([...objectData, res.data])
            console.log(objectData, "objData")
            return res    
        })
        /*<Card  key={postData.name}>
										<Card.Img variant="top" src={postData.flickr_images.map((item: string, index: number) => 
                                                                  <img src={item} style={{width: "200px", height:"200px"}} className="d-block w-100"/>  

									</Card> */
    },[])
    return(
        <div className="carousel-main">
            {objectData.map((postData) => {
								console.log(postData);
								return (
                                    <div className="image-container">
                                        <Carousel>
                                                {postData.flickr_images.map((item: string, index: number) => 
                                                                                                {
                                                                                                    console.log(item, "item")
                                                                                                    return(
                                                                                                        <Carousel.Item>
                                                                                                            <img src={item}  className="image-slide"/>
                                                                                                        </Carousel.Item> 
                                                                                                    )
                                                                                                })}
                                        </Carousel>
                                    </div>
			
                                    
								);
							})}
        </div>                    
    )
}

/*  <div>
            <Container fluid={true}>
					<Row>
						<div className=' no-gutters '>
							{objectData.map((postData) => {
								console.log(postData);
								return (
                                    <div>
                                        <Card  key={postData.name}>
										<Card.Img variant="top"/>
									    </Card>

                                        <div>
                                            {postData.flickr_images.map((item: string, index: number) => 
                                                                                                {
                                                                                                    console.log(item, "item")
                                                                                                    return(
                                                                                                        <div>
                                                                                                            <img src={item} style={{width: "200px"}}/>
                                                                                                        </div>
                                                                                                    )
                                                                                                })}
                                        </div>
                                    </div>
			
                                    
								);
							})}
						</div>
					</Row>
				</Container>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                            {postData.flickr_images.map((item: string) => 
                                {
                                    console.log(item, "item")
                                    return(
                                        <div>
                                                <img src={item} style={{width: "200px"}}/>
                                        </div>
                                        )
                                })}
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
        </div>*/



        /* return(
        <div>
                {objectData.map((postData) => {
                                    console.log(postData);
                                    return (
                                            <div className="carousel-images">
                                                {postData.flickr_images.map((item: string, index: number) => {
                                                        console.log(item, "item")
                                                        return(
                                                            <Carousel>
                                                                <Carousel.Item>
                                                                    <img src={item} style={{width: "200px", height:"200px"}} className="d-block w-100"/>
                                                                    <Carousel.Caption>
                                                                        <h3>First slide label</h3>
                                                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                                                     </Carousel.Caption>
                                                                </Carousel.Item>
                                                            </Carousel>
                                                        )
                                                })}
                                            </div>                
                                    );
                })}
        </div>
    )*/

    /*return(
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                {objectData.map((postData) => {
                                        console.log(postData);
                                        return (
                                                <div className="carousel-images">
                                                    {postData.flickr_images.map((item: string, index: number) => {
                                                            console.log(item, "item")
                                                            return(
                                                                    <img src={item} style={{width: "200px", height:"200px"}} className="d-block w-100"/>    
                                                            )
                                                    })}
                                                </div>                
                                        );
                })}
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    ) */