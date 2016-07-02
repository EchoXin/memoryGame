var cards=['queen','queen','king','king'];
var cardsInPlay=[]; 
var creatBoard=function(){
	for(var i=0;i<cards.length;i++){
		document.getElementsByClassName('card')[i].setAttribute('data-card',cards[i]);	   
	    document.getElementsByClassName('card')[i].addEventListener('click',isTwoCards);
	}
};
var isTwoCards=function(){
	cardsInPlay.push(this.getAttribute('data-card'));
	if(this.getAttribute('data-card')=="queen"){
		this.innerHTML="<img src='http://i.imgur.com/1BiyaCQ.png' alt='Heart of Queen'>";
	}
	else{
		this.innerHTML="<img src='http://i.imgur.com/XQfOj31.png' alt='Heart of King'>";
	}
	
	if(cardsInPlay.length==2){
		isMatch();
		cardsInPlay=[];
	}
};
var isMatch=function(){
	if(cardsInPlay[0]==cardsInPlay[1]){
		alert('You found a match!');
	}
	else{
		alert('Sorry, try again!');
	}
};

creatBoard();