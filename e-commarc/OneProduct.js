
const body = document.querySelector('body')
let quaries = new URLSearchParams(location.search)
let pid = quaries.get('id')
let getData = async ()=>{
    let result = await fetch('https://dummyjson.com/products/'+pid)
    let product = await result.json()
    console.log(product)
    body.innerHTML=`
    <h1>${product.title}</h1>
    <p>${product.price} EGP</p>
    <img src="${product.thumbnail}" alt="${product.title}"/>
    `
}
getData()