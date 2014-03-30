$(document).ready(function() {
	$('.input-number').keydown(function(event){    
		if(event.keyCode==13){
		   $('.btn').trigger('click');
	    }	   
	});
	    $('.btn').click(function(){
		        var fizzNumber = $('.input-number').val();  	
			    for(i=fizzNumber; i < 101; i++) {
					if( ( i % 15 == 0) ){
					$('.fizz-space').append('<p>fizz buzz</p>');
					}
					else if( i%3 == 0){
					$('.fizz-space').append('<p>fizz</p>');
					}
					else if( i%5 == 0) {
					$('.fizz-space').append('<p>buzz</p>');
					} 
					else {
					$('.fizz-space').append('<p>' + i + '</p>');
				    } 			    
				}
		}); 
   
});