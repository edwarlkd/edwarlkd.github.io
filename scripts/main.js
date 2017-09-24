  
$(document).ready(function(){
	
    var $profile = "def"; // 0 Edward & 1 Andrew 
    var $currPage = 0; // 0 home & 1 aboutUs....
    var $link = "Link_def";

    $("#btn1").click(function(){
//        $("p").append(" <b>btnclicked: "+$profile+" "+$link+"</b>.");
    });

    /*When A PRPOFILE is click, saved the value to display */
  	$('img').click(function(){

  		$temp = $('img').attr('src');

		if ( $temp == "images/cs.jpg") {
      		$profile = 0;
		}	
		else if ( $temp == "images/ee.jpg"){
			$profile = 1;
		}
  		
	//	$("p").append(" <b>"+$profile+"   " + $link + "</b>.");

  	});

	$('a').click(function(){
		$link = this.getAttribute('href');
	//	$("p").append(" <b>"+$link+"</b>.");
	
	});

	// Clicking on Reset
    function myFunction() {
		document.getElementById('hm1').reset();

	}
	
	// Clicking on Send button
	$("form").submit(function(){
		
			var first = $('#fName').val();
			var last = $('#lName').val();
			var city = $('#cName').val();
			var state = $('#sName').val();
			var email = $('#eName').val();
			var comment = $('#comments').val();
						
			alert("haha"+xx);

			/*
			  var link = "mailto:me@example.com"+
						 "?cc=CCaddress@example.com"+
						 "&subject=" + escape("From   by Online Resume")+
						 "&body=" + escape("This is body");
			  window.location.href = link;
			*/			
			
			var link = "mailto:"+email+
				 "?cc=edwarlkd814@yahoo.com"+
				 "&subject=" + escape("From by Online Resume")+
				 "&body=" + escape("This is body");
			window.location.href = link;
			

	});
	
	
	
});



/*link	//image switch
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


	myImage2.onclick = function(){

		var mySrc2 = myImage2.getAttribute('src');
		if(mySrc === 'images/cs.jpg'){
			myImage.setAttribute('src', 'images/Donald-Trump.png');
		}
		else if (mySrc === 'images/ee.jpg'){
			myImage.setAttribute('src', 'images/Firefox-icon.png');	
		}
	}

	
*/

