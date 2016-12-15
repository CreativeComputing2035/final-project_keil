	$(document).ready(function(){
		var quoteSource=[
		{
			quote: "There's 90% chance that I'm not actually afraid of pudding.",
			name:"Francis of Assisi"
	    },
	    {
	    	quote:"I'm dead",
	    	name:"Theodore Roosevelt"
	    },
	    {
	    	quote:"Honestly I was just writing a parody help book I didn't want it taken seriously.",
	    	name:"Confucius"
	    },
	    {
	    	quote:"what do you mean i can't do that",
	    	name:"Thomas A. Edison"
	    },
	    {
	    	quote:"seriously tho I didn't want you to read my help book",
	    	name:"Confucius"
	    },
	    {
	    	quote:"time time time time time",
	    	name:"Sam Levenson"
	    },
	    {
	    	quote:"I can't pronounce my own name",
	    	name:"Ayn Rand"
	    },
	    {
	    	quote:"Creativity is a curse",
	    	name:"Ayn Rand"
	    },
	    {
	    	quote:"Beats and sourcream make a delicious salad.",
	    	name:"Alfred A. Montapert"
	    },
	    {
	    	quote:"I'm so tired",
	    	name:"me"
	    },
	    {
	    	quote:"I know you stopped listening when i didn't say I was sam adams.",
	    	name:"Samuel Beckett"
	    },
	    {
	    	quote:"YES TAKE THE SOUP",
	    	name:"Oscar Wilde"
	    },
	    {
	    	quote:"yo stuff exists.",
	    	name:"Albert Einstein"
	    },
	    {
	    	quote:"call me marge",
	    	name:"Margaret Mead"
	    }

	];
		

		$('#quoteButton').click(function(evt){
			//define the containers of the info we target
			var quote = $('#quoteContainer p').text();
			var quoteGenius = $('#quoteGenius').text();
			//prevent browser's default action
			evt.preventDefault();
			//getting a new random number to attach to a quote and setting a limit
			var sourceLength = quoteSource.length;
			var randomNumber= Math.floor(Math.random()*sourceLength);
			//set a new quote
			for(i=0;i<=sourceLength;i+=1){
			var newQuoteText = quoteSource[randomNumber].quote;
			var newQuoteGenius = quoteSource[randomNumber].name;
			//console.log(newQuoteText,newQuoteGenius);
      var timeAnimation = 500;
      var quoteContainer = $('#quoteContainer');
      //fade out animation with callback
      quoteContainer.fadeOut(timeAnimation, function(){
        quoteContainer.html('');
				quoteContainer.append('<p>'+newQuoteText+'</p>'+'<p id="quoteGenius">'+'-								'+newQuoteGenius+'</p>');
        
        //fadein animation.
        quoteContainer.fadeIn(timeAnimation);
      });  
			
			break;
		};//end for loop
	
	});//end quoteButton function
		
		
});//end document ready