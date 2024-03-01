// Array of band names
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

//remove articles form modified name
function strip(name) {
	//A , An and The
    return name.replace(/^(a |the |an )/i, '').trim();
}

// Sorting the given array
touristSpots.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

// Get the ul element 
const bandsList = document.getElementById('bands');

// Create 'li' elements for each and every sorted name
touristSpots.forEach(spot => {
    const li = document.createElement('li');
    li.textContent = spot;
    bandsList.appendChild(li);
});
