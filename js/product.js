var data = [
    { "id": "p01", "name": "tesla 1", "pic": "tesla1.jpg", "price": 30000, "description": "Tesla is accelerating the world's transition to sustainable energy with electric cars, solar and integrated renewable energy solutions for homes and businesses.", "cat": "tesla" },

    { "id": "p02", "name": "tesla 2", "pic": "tesla2.jpg", "price": 45000, "description": "Tesla is accelerating the world's transition to sustainable energy with electric cars, solar and integrated renewable energy solutions for homes and businesses.", "cat": "tesla" },

    { "id": "p03", "name": "tesla 3", "pic": "tesla3.jpg", "price": 40000, "description": "Tesla is accelerating the world's transition to sustainable energy with electric cars, solar and integrated renewable energy solutions for homes and businesses.", "cat": "tesla" },

    { "id": "p11", "name": "vinfast 1", "pic": "vinfast1.jpg", "price": 25000, "description": "VinFast President is a large SUV with a luxurious, powerful and sporty design. The embossed veins, diamond-shaped grille and 18 unique colors make this the car impressive and highly distinctive.", "cat": "vinfast" },

    { "id": "p12", "name": "vinfast 2", "pic": "vinfast2.jpg", "price": 28000, "description": "VinFast President is a large SUV with a luxurious, powerful and sporty design. The embossed veins, diamond-shaped grille and 18 unique colors make this the car impressive and highly distinctive.", "cat": "vinfast" },

    { "id": "p13", "name": "vinfast 3", "pic": "vinfast3.jpg", "price": 30000, "description": "VinFast President is a large SUV with a luxurious, powerful and sporty design. The embossed veins, diamond-shaped grille and 18 unique colors make this the car impressive and highly distinctive.", "cat": "vinfast" },

    { "id": "p21", "name": "bmw 1", "pic": "bmw1.jpg", "price": 40000, "description": "Each Swarovski crystal starts its creation process in the glassworks, a harsh and hot environment, before it becomes more and more defined. It moves to the Crystal Factory of the Future to be cut and coated in the hands of a robot. But no crystal leaves the premises without being checked for quality – by an expert’s eye and under a precision magnifier, of course. By combining their respective expertise and transferring this elaborate process to vehicle headlights, Swarovski and BMW are setting new standards on the road in the luxury segment. Tom Binder, Head of Exterior Light Design at BMW, speaks of a step that no one has taken before: “Up to now, you have only seen homogeneous light strips on the road – the crystal headlights are the complete opposite of that. The dazzling, vibrant light image is a world apart from the familiar accurate light graphic. The precision is in the glass material, though, which can be machined much more finely and precisely than plastic.”", "cat": "bmw" },

    { "id": "p22", "name": "bmw 2", "pic": "bmw2.png", "price": 50000, "description": "Each Swarovski crystal starts its creation process in the glassworks, a harsh and hot environment, before it becomes more and more defined. It moves to the Crystal Factory of the Future to be cut and coated in the hands of a robot. But no crystal leaves the premises without being checked for quality – by an expert’s eye and under a precision magnifier, of course. By combining their respective expertise and transferring this elaborate process to vehicle headlights, Swarovski and BMW are setting new standards on the road in the luxury segment. Tom Binder, Head of Exterior Light Design at BMW, speaks of a step that no one has taken before: “Up to now, you have only seen homogeneous light strips on the road – the crystal headlights are the complete opposite of that. The dazzling, vibrant light image is a world apart from the familiar accurate light graphic. The precision is in the glass material, though, which can be machined much more finely and precisely than plastic.”", "cat": "bmw" },

    { "id": "p23", "name": "bmw 3", "pic": "bmw3.png", "price": 45000, "description": "Each Swarovski crystal starts its creation process in the glassworks, a harsh and hot environment, before it becomes more and more defined. It moves to the Crystal Factory of the Future to be cut and coated in the hands of a robot. But no crystal leaves the premises without being checked for quality – by an expert’s eye and under a precision magnifier, of course. By combining their respective expertise and transferring this elaborate process to vehicle headlights, Swarovski and BMW are setting new standards on the road in the luxury segment. Tom Binder, Head of Exterior Light Design at BMW, speaks of a step that no one has taken before: “Up to now, you have only seen homogeneous light strips on the road – the crystal headlights are the complete opposite of that. The dazzling, vibrant light image is a world apart from the familiar accurate light graphic. The precision is in the glass material, though, which can be machined much more finely and precisely than plastic.”", "cat": "bmw" },

    { "id": "p31", "name": "mer 1", "pic": "mer1.jpg", "price": 60000, "description": "In 1886, with the first car. Now it’s time to do so again. Mobility these days is far more than simply a means of transport. A whole world is open to you now on your smartphone. The world of Mercedes-Benz, too. Check your vehicle’s data, take a look at your contracts or book your personal mobility services. So much is possible – and every day there’s more. So come aboard and join us on a journey into the future of mobility.", "cat": "mer" },

    { "id": "p32", "name": "mer 2", "pic": "mer2.jpg", "price": 55000, "description": "In 1886, with the first car. Now it’s time to do so again. Mobility these days is far more than simply a means of transport. A whole world is open to you now on your smartphone. The world of Mercedes-Benz, too. Check your vehicle’s data, take a look at your contracts or book your personal mobility services. So much is possible – and every day there’s more. So come aboard and join us on a journey into the future of mobility.", "cat": "mer" },

    { "id": "p33", "name": "mer 3", "pic": "mer3.jpg", "price": 45000, "description": "In 1886, with the first car. Now it’s time to do so again. Mobility these days is far more than simply a means of transport. A whole world is open to you now on your smartphone. The world of Mercedes-Benz, too. Check your vehicle’s data, take a look at your contracts or book your personal mobility services. So much is possible – and every day there’s more. So come aboard and join us on a journey into the future of mobility.", "cat": "mer" }

];
// $.getJSON("js/data.json", function (items) {
//     data = items;
//     displayImages(data);
// });

displayImages(data);

//lap trinh su kien search
$("#formSearch").submit(function(e) {
    e.preventDefault();

    let search = $("#search").val();
    let re = new RegExp(search, "ig");
    let subdata = data.filter(item => item.name.search(re) >= 0);

    displayImages(subdata);
});

//lap trinh su kien xem chi tiet san pham
// $(".detailImage").click(function(){
//     alert("detailImage");
//     let id = $(this).data('id');
//     alert("test + " + id);
//     location.href = "product_" + id+  ".html";
// });

function showProduct(pid) {
    let products = data.filter(ele => ele.id == pid);
    let product = products[0];
    let x = `
        <div class="row">
            <div class="col-md-6">
                <div><img src="image/${product.pic}" alt="" class="carImage"></div>
            </div>
            <div class="col-md-6">
                <h3>${product.name.toUpperCase()}</h3>
                <h1>Price: ${product.price}</h1>
                <div>
                    <p style="color: white;">${product.description}</p>
                </div>
            </div>
        </div>           
        `;
    $("#productDetail").html(x);
}

//lap trinh su kien click chon loai san pham
$("input[type=checkbox]").click(function() {

    // var cats =
    //     $('input:checkbox[name="cat"]:checked')
    //         .map(function () {
    //             return $(this).val();
    //         }).get();

    // cats = cats.toString().trim();

    let cats = $(".chk-cake:checked").map(function() { return $(this).val() }).toArray().toString();

    let subdata = (cats.length == 0) ? data : data.filter(item => cats.search(item.cat) >= 0);

    displayImages(subdata);

});


function displayImages(items) {
    let s = ``;

    $.each(items, function(k, v) {

        s += `<div class="col-sm-6 col-md-4 divImage">
                <div class="detailImage" data-id="${v.id}">
                    <a href="product_${v.id}.html"><img src="image/${v.pic}" alt="" class="carImage"></a>
                    <h3>${v.name.toUpperCase()} </h3>
                    <h4>Price: ${v.price}</h4>
                </div>
                <a href="#" data-name="${v.name}" data-price="${v.price}" class="add-to-cart btn btn-primary">Add to cart</a>
            </div>`;

    });

    $("#products").html(s);
}