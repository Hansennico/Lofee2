const Product = [
    {
        id: 0,
        image: 'asset/nugget.jpg',
        title: 'Chicken Nugget',
        price: 18000,
        category: "Recomended",
    },
    {
        id: 1,
        image: 'asset/cake.jpeg',
        title: 'Moon Cake',
        price: 23000,
        category: "HotDrinks",
    },
    {
        id: 2,
        image: 'asset/bread.jpg',
        title: 'Bread',
        price: 15000,
        category: "ColdDrinks",
    },
    {
        id: 3,
        image: 'asset/friednoodle.jpg',
        title: 'Fried Noodle',
        price: 26000,
        category: "TeaDrinks",
    },
    {
        id: 4,
        image: 'asset/nugget.jpg',
        title: 'Chicken Nugget',
        price: 18000,
        category: "Recomended",
    },
    {
        id: 5,
        image: 'asset/cake.jpeg',
        title: 'Moon Cake',
        price: 23000,
        category: "HotDrinks",
    },
    {
        id: 6,
        image: 'asset/bread.jpg',
        title: 'Bread',
        price: 15000,
        category: "ColdDrinks",
    },
    {
        id: 7,
        image: 'asset/friednoodle.jpg',
        title: 'Fried Noodle',
        price: 26000,
        category: "TeaDrinks",
    },
    {
        id: 8,
        image: 'asset/nugget.jpg',
        title: 'Chicken Nugget',
        price: 18000,
        category: "Recomended",
    },
    {
        id: 9,
        image: 'asset/cake.jpeg',
        title: 'Moon Cake',
        price: 23000,
        category: "HotDrinks",
    },
    {
        id: 10,
        image: 'asset/bread.jpg',
        title: 'Bread',
        price: 15000,
        category: "ColdDrinks",
    },
    {
        id: 11,
        image: 'asset/friednoodle.jpg',
        title: 'Fried Noodle',
        price: 26000,
        category: "TeaDrinks",
    }
];

const categories = [...new Set(Product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('Products').innerHTML = categories.map((item)=>
{
    var {image, title, price, category} = item;
    return(
        `<div id='${category}'>
            <div class='card'>
                <div class='img-box'>
                    <img class='card-img' src=${image}></img>
                </div>
            <div class='bottom'>
            <h3>${title}</h3>
            <p>Rp. ${price},-</p>`+
            "<button class ='cart-btn' onclick='addtocart("+(i++)+")'>Add to cart</button>"+
            `</div>
            </div>
        </div>
        `
    )
}).join('')

var cart =[];

function addtocart(a){
    tempAlert("Succesfully added to cart", 2000);
    cart.push({...categories[a]});
    displaycart();
}

function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let m = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "Rp. "+0+",-";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "Rp. "+total+",-";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <h3 style='font-size:15px;'>${title}</h3>
                <p class='cart-price' style='font-size: 15px;'>Rp. ${price},-</p>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (m++) +")'></i></div>"
            );
        }).join('');
    }   
}

function tempAlert(msg,duration){
    var el = document.createElement("div");
    el.setAttribute("style","position:absolute;bottom:0%;right:1%;background-color:white;font-size:xx-large");
    el.innerHTML = msg;
    setTimeout(function(){
    el.parentNode.removeChild(el);
    },duration);
    document.body.appendChild(el);
}