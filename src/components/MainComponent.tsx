export const MainComponent = (props: {data : any}) => {
    const {data} = props
    return(
        <div className="user-data">
            <div className='des-text-container'>
                <img src={data.flickr_images}/>
                <h2 className='image-name'>{data.name}</h2>
                <div className='description'>Description: 
                    <p>{data.description}</p>
                </div>
                <a href={data.wikipedia}>Link to Wiki</a>
                <p>Date: {data.first_flight}</p>
                <p>Weight: {data.dry_mass_kg}</p>
                </div>
            </div>
    )
}