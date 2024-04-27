async function cantidad(){
    let link = await fetch('https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/statistics')
    let cuerpo = await link.json()
    document.getElementById('statistics').innerHTML = cuerpo.amount_of_products
}

async function loadProductInfo(idDestino, linkDestino){
    try {
        let link = await fetch('https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products/' + linkDestino)
        let cuerpo = await link.json()
        let descriptionPartes = cuerpo.description.split('. ')
        let formateoDescripcion = descriptionPartes.join('.<br>')
        
        document.getElementById(idDestino).innerHTML = `
            <img src="${cuerpo.image_url}" alt="${cuerpo.name}"><br> 
            <div class='product-name'>${cuerpo.title}</div><br>
            <div>${formateoDescripcion}</div><br>
            <p>Distintas opciones de Memoria RAM</p>
            <div><b>Cantidad de RAM: </b>${cuerpo.notebooksTypes[0].ramAmount}</div>
            <p class='product-price'>$${cuerpo.notebooksTypes[0].price}</p>
            <div><b>Cantidad de RAM: </b>${cuerpo.notebooksTypes[1].ramAmount}</div>
            <p class='product-price'>$${cuerpo.notebooksTypes[1].price}</p>
        `
    } catch (error){
        console.error('Error: cargando elemento', error)
    }
}
cantidad()

loadProductInfo('productInfo', 1)
loadProductInfo('productInfo2', 2)
loadProductInfo('productInfo3', 3)
loadProductInfo('productInfo4', 4)
