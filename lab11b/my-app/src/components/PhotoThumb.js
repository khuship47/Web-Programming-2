const PhotoThumb = props => { 
    const imgURL = 'https://www.randyconnolly.com/funwebdev/3rd/images/travel/square150/5855174537.jpg'
    
    return (
        <div className="photoBox">
            <figure>
                <img src={imgURL} className="photoThumb" alt="later" />
            </figure> 
            <div>
                <h3>title</h3>
                <p>city, country</p>
                <button >View</button>
                <button >❤</button>
            </div>
        </div>
    ); 
}
export default PhotoThumb;