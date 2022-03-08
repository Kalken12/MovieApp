var images = ["https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_NoTimeToDieAllLanguages_Launch/5abd7b86-e96a-4378-a558-e83b829a48ac._UR3000,600_SX1500_FMwebp_.jpeg",
    "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_StarTrekPicardS2_NewepisodeeveryFriday/343f9b38-142f-4634-afc5-814d18579f93._UR3000,600_SX1500_FMwebp_.jpeg",
    "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_CROW_UN_MissionFrontlinewithFarhanAkhtar_DP_V2/7e8fece3-d50e-487a-92f7-ff43fd9f6bcf._UR3000,600_SX1500_FMwebp_.jpeg",
    "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TuckJagadishLaunch/968864a9-6d38-49ef-841b-90dd7237aa11._UR3000,600_SX1500_FMwebp_.jpeg",
    "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_BestsellerRevised_Launch/9ea765eb-7e52-458a-83c3-e10205034ca8._UR3000,600_SX1500_FMwebp_.jpeg", "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_CROW_UN_Jugadistaan_LP/c6833fb0-cd31-466f-a46e-226aab2c2f9b._UR3000,600_SX1500_FMwebp_.jpeg"]

var slideshow = document.getElementById("slideshow");
slideshow.innerHTML = null;
let i = 0;
let id;
id = setInterval(function () {

    //  console.log(images.length)
    if (i === images.length) {
        i = 0;
    }
    let image = images[i]  //url
    slideshow.innerHTML = null;
    let img = document.createElement("img")
    img.src = image;
    slideshow.append(img);
    i++;

}, 3000)



var movieData = [
    {
        id: 0,
        name: "No Time To Die",

        url: "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/079cc67ccc39c4f9407650cd74eded843d298363edab10fc7e1a1c1dd39ffab2._UR1920,1080_RI_UX400_UY225_.jpg",
        info: "A mission to rescue a kidnapped scientist turns out to be far more treacherous than expected, leading Bond (Daniel Craig) onto",
        time: "7.32 h 44 min2021",
        ret: "5"
    },
    {
        id: 1,
        name: "Sardar Udham",

        url: "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/c1e802d67e655b946c62d378adc9c8506e485e91600a4c239cf184c2ef921a6c._UR1920,1080_RI_UX400_UY225_.jpg",
        info: "A young Sardar Udham was left deeply scarred by the Jallianwala Bagh massacre. He escaped into the mountains of Afghanistan,",
        time: "8.82 h 42 min2021",
        ret: "4"

    },
    {
        id: 2,
        name: "Shershaah",

        url: "https://images-eu.ssl-images-amazon.com/images/S/atv-aps-images/encoded/DHARMA_SHAH/IN/en_US.hi_IN/COVER_ART/NEW_MOVIE/Romance._UR1920,1080_RI_UX400_UY225_.jpg",
        info: "The film Shershaah is a story of a PVC awardee brave Indian soldier- Capt. Vikram Batra, who shot to fame and became a h",
        time: "8.92 h 15 min2021",
        ret: "5"

    },
    {
        id: 3,
        name: "Dybbuk",

        url: "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/78aedb083bf31cd21d442b2598bcfecc6847d44d8c42b15e8890bd35299b1ba1._UR1920,1080_RI_UX400_UY225_.jpg",
        info: "Mahi, a newly married woman, brings an antique Jewish box into her home. When Mahi and her husband Sam begin to have",
        time: "5.11 h 52 min2021",
        ret: "1"

    },
    {
        id: 4,
        name: "Jai Bhim (Hindi)",
        url: "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/b65ffce505f1589f9e23e7147cb548e303a4f3adc8b9d65e3fa17805b1ca2350._UR1920,1080_RI_UX400_UY225_.jpg",
        info: "A pregnant woman from a primitive tribal community, searches desperately for her husband, who is missing from police custody.",
        time: "9.52 h 31 min2021",
        ret: "3"

    },
    {
        id: 5,
        name: "Gold",

        url: "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/3a06db2d9eb9bb302eddd1cad1d94df9765b1bb138cb13b6055eeb0505b30eba._UR1920,1080_RI_UX400_UY225_.jpg",
        info: "Set in 1948, the historical story of India's first Olympic medal posts their independence.",
        time: "7.42 h 25 min2018",
        ret: "2"

    },
    {
        id: 6,
        name: "premam",
        url: "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/a929aaa1b264df0121343ba56a62e691e68ee6c1ffc048f5763961ad57b11b59._UR1920,1080_RI_UX400_UY225_.jpg",
        info: "Vijay Krishna is a guy who is called a loser because of bad luck and due to lack of social skills. He is often misunderstood and rejected",
        time: "7.42 h 25 min2018",
        ret: "2  ",

    },

    {
        id: 7,
        name: "Kesari",

        url: "https://images-eu.ssl-images-amazon.com/images/S/atv-aps-images/encoded/KESARI/en_US/COVER_ART/STILL5._UR1920,1080_RI_UX400_UY225_.jpg",
        info: "Set in 1948, the historical story of India's first Olympic medal posts their independence.",
        time: "7.42 h 25 min2018",
        ret: "3"

    },

    {
        id: 8,
        name: "Majili",
        url: "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/3a06db2d9eb9bb302eddd1cad1d94df9765b1bb138cb13b6055eeb0505b30eba._UR1920,1080_RI_UX400_UY225_.jpg",
        info: "Poorna (Naga Chaitanya) is a youth from Vizag who falls in love with Anju (Divyansha Kaushik), a rich naval officer's daughter. As",
        time: "2 h 29 min2019",
        ret: "2"

    },
    {
        id: 9,
        name: "Dum Laga Ke Haisha",
        url: "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/9358d9ae6f31cca43879ee88ee53de4783165556916c49eb5e202940400c7f6b._UR1920,1080_RI_UX400_UY225_.jpg",
        info: "Prem is a shy music buff who runs a tape recording shop. Sandhya is about to carve a niche for herself as a teacher. Will a regular",
        time: "2 h 29 min2019",
        ret: "1"

    },
    {
        id: 10,
        name: "Majili",
        url: "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/3a06db2d9eb9bb302eddd1cad1d94df9765b1bb138cb13b6055eeb0505b30eba._UR1920,1080_RI_UX400_UY225_.jpg",
        info: "Poorna (Naga Chaitanya) is a youth from Vizag who falls in love with Anju (Divyansha Kaushik), a rich naval officer's daughter. As",
        time: "2 h 29 min2019",
        ret: "4"

    },
    {
        id: 11,
        name: "Chak De India",
        url: "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/f387592b927d1b21ace38e9f42f2525d4ec9f1b66029cd32ed8e96f873263b33._UR1920,1080_RI_UX400_UY225_.jpg",
        info: "Poorna (Naga Chaitanya) is a youth from Vizag who falls in love with Anju (Divyansha Kaushik), a rich naval officer's daughter. As",
        time: "2 h 29 min2019",
        ret: "4"

    }


]
var movies = document.querySelector("#movies");
var moviesArr = [];
movieData.map(function (ele, index, arr) {
    var box = document.createElement("div");
    var img = document.createElement("img");
    img.src = ele.url;

    var name = document.createElement("h2")
    name.textContent = ele.name;

    var p = document.createElement("p")
    p.textContent = ele.info;
    var flexDiv = document.createElement("div")
    //console.log(flexDiv);
    flexDiv.setAttribute("id", "flexDiv")

    var ret = document.createElement("h4")
    ret.textContent = ele.ret;

    var time = document.createElement("h4");
    time.textContent = ele.time;


    flexDiv.append(time, ret)
    box.append(img, p, name, flexDiv)
    movies.append(box);
    moviesArr.push(ele)
    //console.log(ele)
    localStorage.setItem("movies", JSON.stringify(moviesArr))
});



////////////////////////sorting////// we are having two function ascending sort and descending sort
var ArrRet = []
var ArrId = [];
var obj = {}
movieData.map(function (ele, index, arr) {
    ArrRet.push(ele.ret)
    ArrId.push(ele.id)


});

//ArrRet.sort()
console.log(ArrRet);
//ArrId.sort()
console.log(ArrId);
for (let i = 0; i < ArrRet.length; i++) {
    if (obj[ArrId[i]] == undefined) {
        obj[ArrId[i]] = ArrRet[i]
    }
}
console.log(obj)

for(var key in obj)
{
    if(obj[key]==1)
    {

    }
}


///Ascedning sort
//document.querySelector("#sort-lh").addEventListener("click", AscendingSort)







//Descending sort


