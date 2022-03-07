var images = ["https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_NoTimeToDieAllLanguages_Launch/5abd7b86-e96a-4378-a558-e83b829a48ac._UR3000,600_SX1500_FMwebp_.jpeg",
"https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_StarTrekPicardS2_NewepisodeeveryFriday/343f9b38-142f-4634-afc5-814d18579f93._UR3000,600_SX1500_FMwebp_.jpeg",
"https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_CROW_UN_MissionFrontlinewithFarhanAkhtar_DP_V2/7e8fece3-d50e-487a-92f7-ff43fd9f6bcf._UR3000,600_SX1500_FMwebp_.jpeg",
"https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TuckJagadishLaunch/968864a9-6d38-49ef-841b-90dd7237aa11._UR3000,600_SX1500_FMwebp_.jpeg",
"https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_BestsellerRevised_Launch/9ea765eb-7e52-458a-83c3-e10205034ca8._UR3000,600_SX1500_FMwebp_.jpeg","https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_CROW_UN_Jugadistaan_LP/c6833fb0-cd31-466f-a46e-226aab2c2f9b._UR3000,600_SX1500_FMwebp_.jpeg"]
var slideshow = document.getElementById("slideshow");
slideshow.innerHTML=null;
let i = 0;
let id;
 id = setInterval(function()
{

    console.log(images.length)
    if(i=== images.length)
    {
        i=0;
    }
   let image = images[i]  //url
   slideshow.innerHTML=null;
   let img = document.createElement("img")
   img.src = image;
   slideshow.append(img);
   i++;

},1000)
