//set random color function
function randomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
        for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
        return color;
            
    }

//set random number to 0 or 1
function valueZeroOrOne() {
    var y = Math.random();
        if (y < 0.5) {
        y = 0
        }else{
        y = 1
        }
        return y;
}     

function makeBox() {
    let coloredBox = randomColor();
    let parentDiv = document.getElementById('grayBox');

//removes children elements(current image) so that the next image can take its place when clicked again:
    if(parentDiv.hasChildNodes()) {
        parentDiv.querySelectorAll('*').forEach(n => n.remove());
    }
    
    const firstChildDiv = document.createElement('div');
    firstChildDiv.id = 'firstChild';
    parentDiv.appendChild(firstChildDiv);

//create first three columns of boxes
    for(let j =0; j< 3; j++){
        for(let i = 0; i < 5; i++) {
            let newDiv = document.createElement('div');
            newDiv.classList.add('newBox');
            newDiv.setAttribute('value', valueZeroOrOne());
            newDiv.style.backgroundColor = coloredBox;
            const val = newDiv.getAttribute('value');
        
        if(val == 0){
            newDiv.style.backgroundColor = 'white';
        }
        firstChildDiv.appendChild(newDiv);
        }
    }
//clone columns to use as seperate reference and pass it to an array so that only first two columns are mirrored on the ight side
const clone = firstChildDiv.cloneNode(true);
const childrenArr = clone.children;
const cloneArr = Array.from(childrenArr);
const firstTwoArr = cloneArr.slice(0, 10);

//right side of image: copy first two columns and append to last two columns and reverse 
const newEl = document.createElement('div');
firstTwoArr.forEach(function(el){
    newEl.appendChild(el); 
    newEl.id = 'secondParent';
    parentDiv.appendChild(newEl);
    })
}
    
    

   
  
  
