// document.getElementById('btn-1').addEventListener('click', function(){
//    const bField = document.getElementById('input-1');
//    const bFieldString = parseInt(bField.value);
//    console.log(bFieldString)

//    const hField = document.getElementById('input-2');
//    const hFieldString = parseInt(hField.value);
//    console.log(hFieldString)

//    const triangleArea = 0.5 * bFieldString * hFieldString ;
//    console.log(triangleArea);
// //    display
// const displayTriangle = document.getElementById('triangle');
// displayTriangle.innerText = triangleArea;


// })

function calculateTriangleArea() {
    const bField = document.getElementById('input-1');
    const bFieldString = parseInt(bField.value);
    console.log(bFieldString);
 
    const hField = document.getElementById('input-2');
    const hFieldString = parseInt(hField.value);
    console.log(hFieldString);
 
    const triangleArea = 0.5 * bFieldString * hFieldString;
    console.log(triangleArea);
    
    // Display the triangle area
    const displayTriangle = document.getElementById('triangle');
    displayTriangle.innerText = triangleArea;
 }
 
 document.getElementById('btn-1').addEventListener('click', calculateTriangleArea);
 

// rectiangle
document.getElementById('rectangle-btn').addEventListener('click', function(){
    console.log('clicked')
    const wField = document.getElementById('wField');
    const wFieldString =parseInt( wField.value);
    console.log(wFieldString)
    const lField = document.getElementById('lField');
    const lFieldString = parseInt(lField.value);
    console.log(lFieldString)

    const rectangleArea = wFieldString * lFieldString ; 
    console.log(rectangleArea)

    // display Rectangle
    const rectangleDisplay = document.getElementById('rectangle');
    rectangleDisplay.innerText = rectangleArea;
})