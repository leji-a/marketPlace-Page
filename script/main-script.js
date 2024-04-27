function showSearchBar() {
  var searchBar = document.getElementById("searchBar")
  if (searchBar.style.display === "none") {
    searchBar.style.display = "block"
  } else {
    searchBar.style.display = "none"
  }
}

async function mostrarElementos() {
  const response = await fetch('https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products')
  const datos = await response.json()

  for (const notebook of datos) {
    const img = document.createElement('img')
    img.src = notebook.image_url

    const titulo = document.createElement('strong')
    titulo.textContent = notebook.title

    const link = document.createElement('a')
    link.href = 'productos.html'
    link.appendChild(img)
    link.appendChild(titulo)

    const divContentPreview = document.createElement('div')
    divContentPreview.className = 'productsPreview'
    divContentPreview.appendChild(link)

    document.getElementById('listProducts').appendChild(divContentPreview)
  }
}
mostrarElementos()