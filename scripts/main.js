var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';



/*
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}	
*/

var myImage = document.querySelector('img');
myImage.onclick = function(){

	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/Firefox-icon.png'){
		myImage.setAttribute('src', 'images/Donald-Trump.png');
	}
	else{
		myImage.setAttribute('src', 'images/Firefox-icon.png');	
	}


}


