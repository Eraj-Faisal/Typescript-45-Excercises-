// make a function
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
//calling 3 functions and creating 3 variables with different values
var album1 = make_album("Hamza", "Album title 1");
var album2 = make_album("Habib", "Album title 2");
var album3 = make_album("Faisal", "Album title 3", 5);
//printing the variables.
console.log(album1);
console.log(album2);
console.log(album3);
