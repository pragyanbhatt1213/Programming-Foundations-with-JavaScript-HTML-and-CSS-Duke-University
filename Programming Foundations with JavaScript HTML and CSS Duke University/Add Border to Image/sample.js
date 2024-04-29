function sumPixel(nameOfImage, xpos, ypos) ;{
    var img= new Simpleimage(nameOfImage);
    var pic= img.getPixel(xpos,ypos);
    var r= pic.getRed();
    var g= pic.getGreen();
    var b= pic.getBlue();
    return(r+g+b)
}

var answer = sumPixel("drewgreen.png", 250, 500);
print(answer);
answer = sumPixel("drewgreen.png",10, 10);
print(answer);

function sumPixel(nameOfImage, xpos, ypos){
    var img= new SimpleImage(nameOfImage);
    var pic= img.getPixel(xpos,ypos);
    var r= pic.getRed();
    var g= pic.getGreen();
    var b= pic.getBlue();
    return(r+g+b)
}
//Make a yellow square that is 200 pixels wide and 200 pixels high
var answer = sumPixel("drewgreen.png", 250, 500);
print(answer);
answer = sumPixel("drewgreen.png",10, 10);
print(answer);

var img = new SimpleImage(200,200);
for (var pixel of img.values()) {
    pixel.setRed(255);
    pixel.setGreen(255);
}

print(img);
//Turn the eggs less red

var image = new SimpleImage("eastereggs.jpg");
var a=0
for (var pixels of image.values()) {
    if ((pixels.getRed())>70) {
    pixels= (pixels.setRed(70));
    }
}
    

print(image); 
//Green box in top left corner
var image = new SimpleImage("chapel.png");

// Get the width and height of the image
var width = image.getWidth();
var height = image.getHeight();

// Define the size of the square to replace
var squareSize =  50;

// Loop through the pixels in the top left square
for (var y =  0; y < squareSize; y++) {
    for (var x =  0; x < squareSize; x++) {
        // Make sure we're not going outside the image bounds
        if (x < width && y < height) {
            // Get the pixel at the current position
            var pixel = image.getPixel(x, y);

            // Set the pixel color to green
            pixel.setGreen(255);
            pixel.setRed(0);
            pixel.setBlue(0);
        }
    }
}

// Print the resulting image
print(image);
function topRightCorner(cornerWidth, cornerHeight, someImage, red, green, blue) {
    var ht=someImage.getHeight();
    var wt=someImage.getWidth();
    for(var pixel of someImage.values()){
        var x=pixel.getX();
        var y=pixel.getY();
        if(x>=wt-cornerWidth && y < cornerHeight){
            pixel.setRed(red);
            pixel.setGreen(green);
            pixel.setBlue(blue);
        }
    }
    return someImage;
}
var picture = new SimpleImage("chapel.png");
var result = topRightCorner(30, 60, picture, 255, 255, 0);
print(result);
var picture2 = new SimpleImage("smalllion.jpg");
var result2 = topRightCorner(125, 20, picture2, 255, 0, 0);
print(result2);
