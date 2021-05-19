function nextImage()
{
    var image1 = document.getElementById("burj");
    var image2 = document.getElementById("frame");
    var image3 = document.getElementById("aquarium");
    if(image1.src.match("assets/images/burj1.jpg"))
    {
        image1.src = "assets/images/burj2.jpg";
    }
    else if (image1.src.match("assets/images/burj2.jpg"))
    {
        image1.src = "assets/images/burj3.jpg";
    }
    else if (image1.src.match("assets/images/burj3.jpg"))
    {
        image1.src = "assets/images/burj1.jpg";
    }
    else
    {
        image1.src = "assets/images/burj1.jpg";
    }
    if(image2.src.match("assets/images/frame1.jpg"))
    {
        image2.src = "assets/images/frame2.jpg";
    }
    else if (image2.src.match("assets/images/frame2.jpg"))
    {
        image2.src = "assets/images/frame3.jpg";
    }
    else if (image2.src.match("assets/images/frame3.jpg"))
    {
        image2.src = "assets/images/frame1.jpg";
    }
    else
    {
        image2.src = "assets/images/frame1.jpg";
    }
    if(image3.src.match("assets/images/aqua1.jpg"))
    {
        image3.src = "assets/images/aqua2.jpg";
    }
    else if (image3.src.match("assets/images/aqua2.jpg"))
    {
        image3.src = "assets/images/aqua3.jpg";
    }
    else if (image3.src.match("assets/images/aqua3.jpg"))
    {
        image3.src = "assets/images/aqua1.jpg";
    }
    else
    {
        image3.src = "assets/images/aqua2.jpg";
    }
}
function prevImage()
{
    var image1 = document.getElementById("burj");
    var image2 = document.getElementById("frame");
    var image3 = document.getElementById("aquarium");
    if(image1.src.match("assets/images/burj1.jpg"))
    {
        image1.src = "assets/images/burj3.jpg";
    }
    else if(image1.src.match("assets/images/burj3.jpg"))
    {
        image1.src = "assets/images/burj2.jpg";
    }
    else if(image1.src.match("assets/images/burj2.jpg"))
    {
        image1.src = "assets/images/burj1.jpg";
    }
    else
    {
        image1.src = "assets/images/burj1.jpg";
    }
    if(image2.src.match("assets/images/frame1.jpg"))
    {
        image2.src = "assets/images/frame3.jpg";
    }
    else if (image2.src.match("assets/images/frame2.jpg"))
    {
        image2.src = "assets/images/frame1.jpg";
    }
    else if (image2.src.match("assets/images/frame3.jpg"))
    {
        image2.src = "assets/images/frame2.jpg";
    }
    else
    {
        image2.src = "assets/images/frame1.jpg";
    }
    if(image3.src.match("assets/images/aqua1.jpg"))
    {
        image3.src = "assets/images/aqua3.jpg";
    }
    else if (image3.src.match("assets/images/aqua2.jpg"))
    {
        image3.src = "assets/images/aqua1.jpg";
    }
    else if (image3.src.match("assets/images/aqua3.jpg"))
    {
        image3.src = "assets/images/aqua2.jpg";
    }
    else
    {
        image3.src = "assets/images/aqua1.jpg";
    }
}

