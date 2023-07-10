/*var h1Element = ducoment.querySelector('h1');
h1Element.style.color = 'blue';

var isyellow = false;
var bodyElement = document.querySelector('body')

setInterval(function (){
    if (isyellow){
        bodyElement.style.background = 'white';
    } else {
       bodyElement.style.background = 'yellow'; 
    }
    isyellow = !isyellow;

}, 1000);

var selectWithId = document.getElementById('oakparagraph');
console.log(selectWithId);

var selectWithclass = document.getElementsByClassName('background');
console.log(selectWithClass);

var selectWithTag = document.getElementsByTagName('h1');
console.log(selectWithTag);

var selectWithqueryId =  document.querySelector('#oakparagraph');
console.log(selectWithqueryId);


var selectWithqueryClass =  document.querySelector('.background');
console.log(selectWithqueryClass);

var selectWithqueryClass =  document.querySelectorAll('.background');
console.log(selectWithqueryAllclass);

*/

///////////////MANIPULATION METHODS//////////////////
/*
var divToManipulate = document.querySelector('.background');

divToManipulate.Style.height = '50px';
divToManipulate.Style.width = '400px';
divToManipulate.Style.backgroundColor = 'red';
divToManipulate.Style.fontSize = '30px';
divToManipulate.Style.border = '5px solid black';
*/
/*
divToManipulate.classList.add('addClass');
divToManipulate.classList.remove('addClass');

divToManipulate.classList.toggle('addClass');
divToManipulate.classList.toggle('addClass');
divToManipulate.classList.toggle('addClass');
*/
/*
var paragraph = document.querySelector('#oakParagraph');
// paragraph.textContent = 'OAK academy is the best, really';
paragraph.innerHTML = 'oak academy is <strong>great</great>'

*/
////////////MANIPULATION ATTRIBUTE/////////////
/*
var myLink = document.querySelector('a');
console.log(myLink.getAttribute('href'));
myLink.setAttribute('href','https://www.facebook.com/')
console.log(myLink.getAttribute('href'));
myLink.textContent = 'go to facebook'
*/

/////////////////EVENT HANDLERS///////////
/*
var button = document.querySelector('#btn1');
var title = document.querySelector('#OAKTitle');
button.addEventListener('click', function (){
    console.log('you clicked the button');
    title.Style.backgroundColor = 'red'

});

var listParent= document.querySelector('ul');
listParent.addEventListene
r('click', function (event){
    console.log('you clicked the ul');
    event.target.style.backgroundColor = 'blue';

})


///////////////////////Quiz SOLUTION//////////////////
var listItems = document.querySelectorAll('li');
console.log('listenItems',listenItems);

for(var i = 0; i < listenItems. length; i++){
    listItems[i].addEventListener('click', function (){
        this.style.color = 'White';
    })

}
*/

/*
var oakParagraph = document.querySelector('#oakParagraph');

function toggleBackground() {
    oakParagraph.classList.toggle('toggleBackground');

}

oakParagraph.addEventListener('click', toggleBackground);
*/
/*

var firstTodoItem = document.querySelector('.todoItem');
firstTodoItem.addEventListener('mouseover', function(){
    firstTodoItem.Style.backgroundColor = 'blue';
    firstTodoItem.Style.Color = 'white';
})

firstTodoItem.addEventListener('mouseout', function (){
    firstTodoItem.Style.backgroundColor = 'white';
    firstTodoItem.Style.backgroundColor = 'black';

})
*/

var todoListItems = document.querySelectorAll('.todoItem');

for (var i = 0; i < todoListItems.length; i++){
    todoListItems[i].addEventListener('mouseover', function(){
        this.style.backgroundColor = 'blue'
        this.style.color = 'white'
    })

    todoListItems[i].addEventListener('mouseout', function (){
        this.style.backgroundColor = 'white'
        this.style.color = 'black'
    })

    todoListItems[i].addEventListener('click', function(){
        this.classList.add('okay');

    })
}