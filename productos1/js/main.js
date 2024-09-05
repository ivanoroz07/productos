let divData= document.getElementById("divData")

function getData(){
    const promesa = fetch ("https://freetestapi.com/api/v1/products",{method: "GET"});
    promesa.then( (response)=> {
        response.json().then(
            (data)=>{
                console.log(data);
                createCards(data);
            }).catch((error)=> console.log("Problema con el json", error));
    }).catch((err)=> console.log("Existio un problema con la solicitus", err)); 
} //get data

function createCards(products){
    console.log(products.length);
    console.log(products[0].name);
    divData.innerHTML= "";
    
    products.forEach(product => {
        let card = `
            <div class="card" style="width: 18rem;">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text">Precio: $${product.price}</p>
                    <a href="#" class="btn btn-primary">Añadir al carrito</a>
                </div>
            </div>
        `;
        divData.insertAdjacentHTML("beforeend", card);
    });

    //crear una card para cada producto con sus datos esenciales
    // de preferencia foreach: name, description, image, price
}//createCards
getData();