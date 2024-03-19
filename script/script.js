//editar eliminar agregar lectura
// crud, basically

function showSearchBar() {
    var searchBar = document.getElementById("searchBar");
    if (searchBar.style.display === "none") {
        searchBar.style.display = "block";
    } else {
        searchBar.style.display = "none";
    }
}