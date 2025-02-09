// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist?z name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

//Defining the make_album function
function make_album(artist_name: string, album_title: string, tracks?: number){
    let album: {artist: string, title: string, tracks?: number} = {
        artist: artist_name,
        title: album_title,
    };

    if(tracks !== undefined){
        album.tracks = tracks;
    };

    return album;
}

//Calling three functions and creating 3 variable with different values

let alnum1 = make_album("Sajjad Ali", "Rangeen")

let album2 = make_album("Ahmed Jahanzaib", "Kaho Ik Din")

//Calling a make_album function with third parameter
let album3 = make_album("Junoon", "Parastish", 10)


console.log(alnum1);
console.log(album2);
console.log(album3);
