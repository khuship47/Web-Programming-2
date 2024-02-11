const PhotoThumb = props => { 
    const imgURL = `https://www.randyconnolly.com/funwebdev/3rd/images/travel/square150/${props.photo.filename}`;
    
    return (
        <div className="photoBox">
            <figure>
                <img src={imgURL} className="photoThumb" title={props.photo.title} alt={props.photo.title} />
            </figure> 
            <div>
                <h3>{props.photo.title}</h3>
                <p>{props.photo.location.city}, {props.photo.location.country}</p>
                <button >View</button>
                <button >❤</button>
            </div>
        </div>
    ); 
}
export default PhotoThumb;