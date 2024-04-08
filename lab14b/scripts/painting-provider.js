const path = require("path");
const sqlite3 = require("sqlite3").verbose();

const DB_PATH = path.join(__dirname, "../data/art.db");
const db = new sqlite3.Database(DB_PATH);


let sql = `SELECT PaintingID, Paintings.ArtistID AS ArtistID, 
            FirstName, LastName, Nationality, YearOfBirth, YearOfDeath, Details, ArtistLink,
            Paintings.GalleryID, GalleryName, GalleryCity, GalleryAddress, GalleryCountry,
            Latitude, Longitude, GalleryWebSite,
            ImageFileName, Title, MuseumLink, AccessionNumber, CopyrightText, 
            Description, Excerpt, YearOfWork, Width, Height, Medium, Cost, MSRP, 
            GoogleLink, WikiLink, JsonAnnotations 
            FROM Paintings 
            INNER JOIN Artists ON Artists.ArtistID = Paintings.ArtistID
            INNER JOIN Galleries ON Galleries.GalleryID = Paintings.GalleryID
            `; 

// Retrieve all paintings                       
const retrievePaintings = (req, resp) => {    
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        console.log('getting all paintings...');
        const paintings = rows.map(row =>convertRecordToJson(row));
        resp.json( paintings );
    });
};


// retrieve just a single painting based on the id
const retrieveSinglePainting = (req, resp) => {
	let mySQL = sql + " WHERE PaintingID=?";
    db.get(mySQL, [req.params.id], (err, row) => {
        if (err) {
            throw err;
        }
        console.log('getting single painting...');
        resp.json( convertRecordToJson(row) );      
    });
};



// helper function to convert a database record into its JSON representation
const convertRecordToJson = (row) => {
    if (! row) return;
    const obj =  {
        "id" : row.PaintingID,
        "title" : row.Title,
        "artist" : {
            "id": row.ArtistID,
            "first": row.FirstName,
            "last": row.LastName,
            "nationality": row.Nationality,
            "yearBirth": row.YearOfBirth,
            "yearDeath": row.YearOfDeath,
            "link": row.ArtistLink,
            "details": row.Details
        },
        "gallery": {
            "id": row.GalleryID,
            "name": row.GalleryName,
            "city": row.GalleryCity,
            "address": row.GalleryAddress,
            "country": row.GalleryCountry,
            "latitude": row.Latitude,
            "longitude": row.Longitude,
            "link": row.GalleryWebSite
        },                
        "year": row.YearOfWork,
        "width": row.Width,
        "height": row.Height,
        "excerpt" : row.Excerpt,
        "filename": row.ImageFileName,
        "medium": row.Medium,   
        "accession": row.AccessionNumber,        
        "description": row.Description,     
        "links": {
            "gallery": row.MuseumLink,
            "google": row.GoogleLink,
            "wikipedia": row.WikiLink
        }
    };
    obj.annotations = JSON.parse(row.JsonAnnotations);
    return obj;
};   


module.exports = {
    retrievePaintings,
    retrieveSinglePainting
 };