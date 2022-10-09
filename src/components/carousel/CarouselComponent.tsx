import React, {useState, useEffect} from "react"
import Axios from "axios"
import { IData } from "../interfaces"
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.scss"

export const CarouselComponent = () => {
    const [objectData, setObjectData] = useState<IData[]>([])   
    useEffect(() => {
        Axios.get(`https://api.spacexdata.com/v4/dragons/5e9d058759b1ff74a7ad5f8f`)
        .then(res=> {
            console.log(res.data, "res") 
            setObjectData([...objectData, res.data])
            console.log(objectData, "objData")
            return res    
        })
    },[])
    return(
        <div className="carousel-block">
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
        </div>                    
    )
}
