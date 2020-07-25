// var xoff1 = 0
// var xoff2 = 10000

function setup() {
    createCanvas(200, 200);
    pixelDensity(1);
}

var inc = 0.1;
function draw() {
    var yoff = 0;

    loadPixels();
    for (var y = 0; y < height; y++) {
        var xoff = 0;
        for (var x = 0; x < width; x++) {
            var index = (x + y * width) * 4;
            var r = noise(xoff, yoff) * 255;
            pixels[index] = r;
            pixels[index + 1] = r;
            pixels[index + 2] = r;
            pixels[index + 3] = 255;
            xoff += inc;
        }
        yoff += inc;
    }
    
    updatePixels();
    noLoop()
}

// var inc = 0.01
// var start = 0
// // graph perlin noise
// function draw() {
//     background(51);
//     stroke(255)
//     noFill()
//     beginShape()
//     var xoff = start
//     for (var x = 0; x < width; x++) {
//         stroke(255)
//         // var y = random(height)
//         var y = noise(xoff) * height
//         vertex(x, y)
//         xoff += inc
//     }
//     endShape()

//     start += inc
//     // noLoop()
// }

// 1d perlin noise

// var xoff = 0

// function draw(){
//     background(51);
//     // var x = random(width);
//     var x = map(noise(xoff), 0, 1, 0, width);

//     xoff += 0.01

//     ellipse(x, 200, 24, 24);
// }

// cool thingy
// for (var x = 0; x < width; x++) {
//     stroke(255)
//     point(x, random(height))
// }

