// JavaScript Document

//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 70) {
        
	   $(".navbar-fixed-top").addClass("top-nav-collapse");
	   
    
	} else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
	
	
});








//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});




//Countdown Script

	// Set the date we're counting down to
	var countDownDate = new Date("Aug 25, 2017 09:00:00").getTime();

	// Update the count down every 1 second
	var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("days").innerHTML = days; 
	document.getElementById("hours").innerHTML = hours;
	document.getElementById("minutes").innerHTML = minutes;
	document.getElementById("seconds").innerHTML = seconds;

    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("days").innerHTML = "The"; 
		document.getElementById("hours").innerHTML = "time";
		document.getElementById("minutes").innerHTML = "is";
		document.getElementById("seconds").innerHTML = "here!";
    }
}, 1000);



//Accordion

var acc = document.getElementsByClassName("schedule-slot accordion");
var i;

for (i = 0; i < acc.length; i++) {
    
	acc[i].onclick = function(){
      
	    this.classList.toggle("active");
      
	    var panel = this.nextElementSibling;
       
	   	if (panel.style.display === "block") {
         
		    panel.style.display = "none";
       
	    } else {
            
			panel.style.display = "block";
       
	    }
		
    }
}

	





// Function Schedules


$(function () {
	
	//Hides both Div's
    $("#day-two").hide();
    
	//On click function for the two links
    $("#day-one-link, #day-two-link").bind("click", function () {
		
	//hiding the two divs once again when clicked
      $("#day-one, #day-two").hide();        
        
	//Searches through attribute element of link to see which one is active
      if ($(this).attr("id") == "day-one-link")
      {
		 //if link one is clicked show div one 
		  
        $("#day-one").fadeIn( '.8s', 'swing');
     
	  }
      else 
      { 
	  
	  	// else show div two
        $("#day-two").fadeIn();
      
	  }
    });

});
  
  
 $(document).ready(function () {

    $(".player").mb_YTPlayer();

}); 
  
  

  

  