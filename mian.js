let menu = document.querySelector(".icon .toggle");
let all_links = document.querySelector(".nav");
let all_a = document.querySelectorAll(".nav  a");
let border_store = localStorage.getItem("border");
let padding_store = localStorage.getItem("padding");
let link_active = localStorage.getItem("activeLinkIndex");;
if (link_active !== null) {
    let same_link = all_a[link_active];
    same_link.style.borderBottom = border_store;
    same_link.style.paddingBottom = padding_store;



}
all_a.forEach((e, index) => {
    e.addEventListener("click", function() {
        all_a.forEach(l => {
            l.style.borderBottom = "";
            l.style.paddingBottom = "";
        });

        e.style.borderBottom = "2px solid red";
        e.style.paddingBottom = "10px";

        localStorage.setItem("border", e.style.borderBottom);
        localStorage.setItem("padding", e.style.paddingBottom);
        localStorage.setItem("activeLinkIndex", index);
    });





})
console.log(all_a)
menu.onclick = function() {
    all_links.classList.toggle("active");
    if (all_links.classList.contains("active")) {
        menu.classList.remove("fa-solid");
        menu.classList.add("fa-x");

    } else {
        menu.classList.add("fa-solid");
        menu.classList.remove("fa-x");
    }
}

function update_item() {
    // الحصول على قيمة الخيار المحدد من القائمة
    let all_links = document.getElementById("choose").value;
    // الحصول على العنصر الذي سيتم تحديث محتواه
    let all_item = document.querySelector(".cars");

    // التحقق من الخيار وتحديث المحتوى بناءً عليه
    if (all_links === "ALL") {
        all_item.innerHTML = `
         <div class="row">
            <!-- محتوى جميع السيارات هنا -->
            <div class="col-md-6 col-lg-4">
                <div class="box">
                    <div class="image">
                        <img src="img/s4.avif" alt="">
                        <hr>
                    </div>
                    <div class="flex">
                        <div class="name"><h5>Normal X5 2024</h5></div>
                        <div class="price"><h4>$900,0000</h4></div>
                    </div>
                    <hr>
                    <div class="icon">
                        <div class="first">
                            <h6><i class="fa-solid fa-gas-pump" style="margin-right: 10px;"></i>Diesel</h6>
                            <h6><i class="fa-solid fa-meteor" style="margin-right: 10px;"></i>6KMpL</h6>
                        </div>
                        <div class="second">
                            <h6><i class="fa-solid fa-car" style="margin-right: 10px;"></i>Coupe</h6>
                            <h6><i class="fa-brands fa-mandalorian" style="margin-right: 10px;"></i>Manual</h6>
                        </div>
                    </div>
                    <div class="order"><button>Order Now</button></div>
                </div>
            </div>
            <!-- إضافة المزيد من السيارات إذا لزم الأمر -->
        </div>`;
    } else if (all_links === "one" || all_links === "two" || all_links === "five" || all_links === "four") {
        // عرض صورة عند عدم توفر بيانات
        all_item.innerHTML = `
            <div class="row m-2">
                <div class="image text-center">
                    <img src="img/nodata.jpg" style="width: 500px; height: 500px; border-radius: 10px;" alt="No Data">
                </div>
            </div>`;
    } else if (all_links === "seven") {
        // عرض مجموعة سيارات الفيراري
        all_item.innerHTML = `
            <div class="row m-2">
            <div class="col-md-6 col-lg-4">
                        <div class="box">
                            <div class="image">
                                <img src="img/s1.avif" alt="">
                                <hr>
                            </div>
                            <div class="flex">
                                <div class="name">
                                    <h5>Ferrari X6 2024</h5>
                                </div>
                                <div class="price">
                                    <h4>$900,0000</h4>
                                </div>
                            </div>
                            <hr>
                            <div class="icon">
                                <div class="first">
                                    <h6><i class="fa-solid fa-gas-pump" style="margin-right: 10px;"></i>Diesel</h6>
                                    <h6><i class="fa-solid fa-meteor" style="margin-right: 10px;"></i>6KMpL</h6>
                                </div>
                                <div class="second">
                                    <h6><i class="fa-solid fa-car" style="margin-right: 10px;"></i>Coupe</h6>
                                    <h6><i class="fa-brands fa-mandalorian" style="margin-right: 10px;"></i>Manual</h6>
                                </div>
                            </div>
                            <div class="order"><button>Order Now</button></div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="box">
                            <div class="image">
                                <img src="img/s2.avif" alt="">
                                <hr>
                            </div>
                            <div class="flex">
                                <div class="name">
                                    <h5>Ferrari X6 2024</h5>
                                </div>
                                <div class="price">
                                    <h4>$900,0000</h4>
                                </div>
                            </div>
                            <hr>
                            <div class="icon">
                                <div class="first">
                                    <h6><i class="fa-solid fa-gas-pump" style="margin-right: 10px;"></i>Diesel</h6>
                                    <h6><i class="fa-solid fa-meteor" style="margin-right: 10px;"></i>6KMpL</h6>
                                </div>
                                <div class="second">
                                    <h6><i class="fa-solid fa-car" style="margin-right: 10px;"></i>Coupe</h6>
                                    <h6><i class="fa-brands fa-mandalorian" style="margin-right: 10px;"></i>Manual</h6>
                                </div>
                            </div>
                            <div class="order"><button>Order Now</button></div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="box">
                            <div class="image">
                                <img src="img/s4.avif" alt="">
                                <hr>
                            </div>
                            <div class="flex">
                                <div class="name">
                                    <h5>Ferrari X6 2024</h5>
                                </div>
                                <div class="price">
                                    <h4>$900,0000</h4>
                                </div>
                            </div>
                            <hr>
                            <div class="icon">
                                <div class="first">
                                    <h6><i class="fa-solid fa-gas-pump" style="margin-right: 10px;"></i>Diesel</h6>
                                    <h6><i class="fa-solid fa-meteor" style="margin-right: 10px;"></i>6KMpL</h6>
                                </div>
                                <div class="second">
                                    <h6><i class="fa-solid fa-car" style="margin-right: 10px;"></i>Coupe</h6>
                                    <h6><i class="fa-brands fa-mandalorian" style="margin-right: 10px;"></i>Manual</h6>
                                </div>
                            </div>
                            <div class="order"><button>Order Now</button></div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="box">
                            <div class="image">
                                <img src="img/fc5.png" alt="">
                                <hr>
                            </div>
                            <div class="flex">
                                <div class="name">
                                    <h5>Ferrari X6 2024</h5>
                                </div>
                                <div class="price">
                                    <h4>$900,0000</h4>
                                </div>
                            </div>
                            <hr>
                            <div class="icon">
                                <div class="first">
                                    <h6><i class="fa-solid fa-gas-pump" style="margin-right: 10px;"></i>Diesel</h6>
                                    <h6><i class="fa-solid fa-meteor" style="margin-right: 10px;"></i>6KMpL</h6>
                                </div>
                                <div class="second">
                                    <h6><i class="fa-solid fa-car" style="margin-right: 10px;"></i>Coupe</h6>
                                    <h6><i class="fa-brands fa-mandalorian" style="margin-right: 10px;"></i>Manual</h6>
                                </div>
                            </div>
                            <div class="order"><button>Order Now</button></div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="box">
                            <div class="image">
                                <img src="img/fc7.png" alt="">
                                <hr>
                            </div>
                            <div class="flex">
                                <div class="name">
                                    <h5>Ferrari X6 2024</h5>
                                </div>
                                <div class="price">
                                    <h4>$900,0000</h4>
                                </div>
                            </div>
                            <hr>
                            <div class="icon">
                                <div class="first">
                                    <h6><i class="fa-solid fa-gas-pump" style="margin-right: 10px;"></i>Diesel</h6>
                                    <h6><i class="fa-solid fa-meteor" style="margin-right: 10px;"></i>6KMpL</h6>
                                </div>
                                <div class="second">
                                    <h6><i class="fa-solid fa-car" style="margin-right: 10px;"></i>Coupe</h6>
                                    <h6><i class="fa-brands fa-mandalorian" style="margin-right: 10px;"></i>Manual</h6>
                                </div>
                            </div>
                            <div class="order"><button>Order Now</button></div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="box">
                            <div class="image">
                                <img src="img/fc8.png" alt="">
                                <hr>
                            </div>
                            <div class="flex">
                                <div class="name">
                                    <h5>Ferrari X6 2024</h5>
                                </div>
                                <div class="price">
                                    <h4>$900,0000</h4>
                                </div>
                            </div>
                            <hr>
                            <div class="icon">
                                <div class="first">
                                    <h6><i class="fa-solid fa-gas-pump" style="margin-right: 10px;"></i>Diesel</h6>
                                    <h6><i class="fa-solid fa-meteor" style="margin-right: 10px;"></i>6KMpL</h6>
                                </div>
                                <div class="second">
                                    <h6><i class="fa-solid fa-car" style="margin-right: 10px;"></i>Coupe</h6>
                                    <h6><i class="fa-brands fa-mandalorian" style="margin-right: 10px;"></i>Manual</h6>
                                </div>
                            </div>
                            <div class="order"><button>Order Now</button></div>
                        </div>
                    </div>
                <!-- إضافة سيارة فيراري أخرى -->
            </div>`;
    } else if (all_links === "six") {
        // عرض مجموعة أخرى من السيارات
        all_item.innerHTML = `
            <div class="row">
                <!-- سيارة من المجموعة العادية -->
                <div class="col-md-6 col-lg-4">
                    <div class="box">
                        <div class="image">
                            <img src="img/fc1.png" alt="">
                            <hr>
                        </div>
                        <div class="flex">
                            <div class="name"><h5>Normal X5 2024</h5></div>
                            <div class="price"><h4>$900,0000</h4></div>
                        </div>
                        <hr>
                        <div class="icon">
                            <div class="first">
                                <h6><i class="fa-solid fa-gas-pump" style="margin-right: 10px;"></i>Diesel</h6>
                                <h6><i class="fa-solid fa-meteor" style="margin-right: 10px;"></i>6KMpL</h6>
                            </div>
                            <div class="second">
                                <h6><i class="fa-solid fa-car" style="margin-right: 10px;"></i>Coupe</h6>
                                <h6><i class="fa-brands fa-mandalorian" style="margin-right: 10px;"></i>Manual</h6>
                            </div>
                        </div>
                        <div class="order"><button>Order Now</button></div>
                    </div>
                </div>
                               <div class="col-md-6 col-lg-4">
                    <div class="box">
                        <div class="image">
                            <img src="img/fc8.png" alt="">
                            <hr>
                        </div>
                        <div class="flex">
                            <div class="name"><h5>BMW X2 2024</h5></div>
                            <div class="price"><h4>$900,0000</h4></div>
                        </div>
                        <hr>
                        <div class="icon">
                            <div class="first">
                                <h6><i class="fa-solid fa-gas-pump" style="margin-right: 10px;"></i>Diesel</h6>
                                <h6><i class="fa-solid fa-meteor" style="margin-right: 10px;"></i>6KMpL</h6>
                            </div>
                            <div class="second">
                                <h6><i class="fa-solid fa-car" style="margin-right: 10px;"></i>Coupe</h6>
                                <h6><i class="fa-brands fa-mandalorian" style="margin-right: 10px;"></i>Manual</h6>
                            </div>
                        </div>
                        <div class="order"><button>Order Now</button></div>
                    </div>
                </div>
                               <div class="col-md-6 col-lg-4">
                    <div class="box">
                        <div class="image">
                            <img src="img/fc7.png" alt="">
                            <hr>
                        </div>
                        <div class="flex">
                            <div class="name"><h5>BMW X5 2024</h5></div>
                            <div class="price"><h4>$900,0000</h4></div>
                        </div>
                        <hr>
                        <div class="icon">
                            <div class="first">
                                <h6><i class="fa-solid fa-gas-pump" style="margin-right: 10px;"></i>Diesel</h6>
                                <h6><i class="fa-solid fa-meteor" style="margin-right: 10px;"></i>6KMpL</h6>
                            </div>
                            <div class="second">
                                <h6><i class="fa-solid fa-car" style="margin-right: 10px;"></i>Coupe</h6>
                                <h6><i class="fa-brands fa-mandalorian" style="margin-right: 10px;"></i>Manual</h6>
                            </div>
                        </div>
                        <div class="order"><button>Order Now</button></div>
                    </div>
                </div>
            </div>`;
    } else if (all_links === "three") {
        // عرض مجموعة أخرى من السيارات
        all_item.innerHTML = `
            <div class="row">
                <!-- سيارة من المجموعة العادية -->
                <div class="col-md-6 col-lg-4">
                    <div class="box">
                        <div class="image">
                            <img src="img/ncm1.png" alt="">
                            <hr>
                        </div>
                        <div class="flex">
                            <div class="name"><h5>Kia X5 2024</h5></div>
                            <div class="price"><h4>$900,0000</h4></div>
                        </div>
                        <hr>
                        <div class="icon">
                            <div class="first">
                                <h6><i class="fa-solid fa-gas-pump" style="margin-right: 10px;"></i>Diesel</h6>
                                <h6><i class="fa-solid fa-meteor" style="margin-right: 10px;"></i>6KMpL</h6>
                            </div>
                            <div class="second">
                                <h6><i class="fa-solid fa-car" style="margin-right: 10px;"></i>Coupe</h6>
                                <h6><i class="fa-brands fa-mandalorian" style="margin-right: 10px;"></i>Manual</h6>
                            </div>
                        </div>
                        <div class="order"><button>Order Now</button></div>
                    </div>
                </div>
                               <div class="col-md-6 col-lg-4">
                    <div class="box">
                        <div class="image">
                            <img src="img/ncm3.png" alt="">
                            <hr>
                        </div>
                        <div class="flex">
                            <div class="name"><h5>Kia X2 2024</h5></div>
                            <div class="price"><h4>$900,0000</h4></div>
                        </div>
                        <hr>
                        <div class="icon">
                            <div class="first">
                                <h6><i class="fa-solid fa-gas-pump" style="margin-right: 10px;"></i>Diesel</h6>
                                <h6><i class="fa-solid fa-meteor" style="margin-right: 10px;"></i>6KMpL</h6>
                            </div>
                            <div class="second">
                                <h6><i class="fa-solid fa-car" style="margin-right: 10px;"></i>Coupe</h6>
                                <h6><i class="fa-brands fa-mandalorian" style="margin-right: 10px;"></i>Manual</h6>
                            </div>
                        </div>
                        <div class="order"><button>Order Now</button></div>
                    </div>
                </div>
                               <div class="col-md-6 col-lg-4">
                    <div class="box">
                        <div class="image">
                            <img src="img/fc2.png" alt="">
                            <hr>
                        </div>
                        <div class="flex">
                            <div class="name"><h5>Kia X5 2024</h5></div>
                            <div class="price"><h4>$900,0000</h4></div>
                        </div>
                        <hr>
                        <div class="icon">
                            <div class="first">
                                <h6><i class="fa-solid fa-gas-pump" style="margin-right: 10px;"></i>Diesel</h6>
                                <h6><i class="fa-solid fa-meteor" style="margin-right: 10px;"></i>6KMpL</h6>
                            </div>
                            <div class="second">
                                <h6><i class="fa-solid fa-car" style="margin-right: 10px;"></i>Coupe</h6>
                                <h6><i class="fa-brands fa-mandalorian" style="margin-right: 10px;"></i>Manual</h6>
                            </div>
                        </div>
                        <div class="order"><button>Order Now</button></div>
                    </div>
                </div>
            </div>`;
    }
}