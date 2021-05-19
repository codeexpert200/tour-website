function nextImage()
{
    var image1 = document.getElementById("hotel1_photos");
    var image2 = document.getElementById("hotel2_photos");
    var image3 = document.getElementById("hotel3_photos");
    if(image1.src.match("assets/images/hotels_photo1.jpg"))
    {
        image1.src = "assets/images/hotels_photo2.jpg";
    }
    else if (image1.src.match("assets/images/hotels_photo2.jpg"))
    {
        image1.src = "assets/images/hotels_photo3.jpg";
    }
    else if (image1.src.match("assets/images/hotels_photo3.jpg"))
    {
        image1.src = "assets/images/hotels_photo4.jpg";
    }
    else
    {
        image1.src = "assets/images/hotels_photo5.jpg";
    }
    if(image2.src.match("assets/images/hotels_photo6.jpg"))
    {
        image2.src = "assets/images/hotels_photo7.jpg";
    }
    else if (image2.src.match("assets/images/hotels_photo7.jpg"))
    {
        image2.src = "assets/images/hotels_photo8.jpg";
    }
    else if (image2.src.match("assets/images/hotels_photo8.jpg"))
    {
        image2.src = "assets/images/hotels_photo9.jpg";
    }
    else
    {
        image2.src = "assets/images/hotels_photo10.jpg";
    }
    if(image3.src.match("assets/images/hotels_photo11.jpg"))
    {
        image3.src = "assets/images/hotels_photo12.jpg";
    }
    else if (image3.src.match("assets/images/hotels_photo12.jpg"))
    {
        image3.src = "assets/images/hotels_photo13.jpg";
    }
    else if (image3.src.match("assets/images/hotels_photo13.jpg"))
    {
        image3.src = "assets/images/hotels_photo14.jpg";
    }
    else
    {
        image3.src = "assets/images/hotels_photo15.jpg";
    }
}
function prevImage()
{
    var image1 = document.getElementById("hotel1_photos");
    var image2 = document.getElementById("hotel2_photos");
    var image3 = document.getElementById("hotel3_photos");
    if(image1.src.match("assets/images/hotels_photo5.jpg"))
    {
        image1.src = "assets/images/hotels_photo4.jpg";
    }
    else if(image1.src.match("assets/images/hotels_photo4.jpg"))
    {
        image1.src = "assets/images/hotels_photo3.jpg";
    }
    else if(image1.src.match("assets/images/hotels_photo3.jpg"))
    {
        image1.src = "assets/images/hotels_photo2.jpg";
    }
    else
    {
        image1.src = "assets/images/hotels_photo1.jpg";
    }
    if(image2.src.match("assets/images/hotels_photo10.jpg"))
    {
        image2.src = "assets/images/hotels_photo9.jpg";
    }
    else if (image2.src.match("assets/images/hotels_photo9.jpg"))
    {
        image2.src = "assets/images/hotels_photo8.jpg";
    }
    else if (image2.src.match("assets/images/hotels_photo8.jpg"))
    {
        image2.src = "assets/images/hotels_photo7.jpg";
    }
    else
    {
        image2.src = "assets/images/hotels_photo6.jpg";
    }
    if(image3.src.match("assets/images/hotels_photo15.jpg"))
    {
        image3.src = "assets/images/hotels_photo14.jpg";
    }
    else if (image3.src.match("assets/images/hotels_photo14.jpg"))
    {
        image3.src = "assets/images/hotels_photo13.jpg";
    }
    else if (image3.src.match("assets/images/hotels_photo13.jpg"))
    {
        image3.src = "assets/images/hotels_photo12.jpg";
    }
    else
    {
        image3.src = "assets/images/hotels_photo11.jpg";
    }
}

