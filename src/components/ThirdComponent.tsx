import { Link } from "react-router-dom";

export const ThirdComponent = (props: {data : any}) => {
    const {data} = props
    return(
        <div>
            {!data || data.length === 0 ? <div/> :
                <Link to={`/secondpage/${data.name}`}>
                    <div className="secondpage-images">
                        <img src={data.flickr_images}/>
                        <h2 className='image-name'>{data.name}</h2>
                    </div>
                </Link>
            }
        </div>
    )
}