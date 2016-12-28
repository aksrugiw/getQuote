$( document ).ready(function() {

	var colors = [
		{"body": "#A6C5E4", "well": "#387CC2"},
		{"body": "#70B2C4", "well": "#457A8A"},
		{"body": "#7FB57E", "well": "#4F754E"},
		{"body": "#F78383", "well": "#9C3737"},
		{"body": "#FBE58C", "well": "#F7C604"},
		{"body": "#E7D6FF", "well": "#8B7AA3"},
		{"body": "#B8AAE4", "well": "#5C4E89"},
		{"body": "#8F90B5", "well": "#33345A"},
		{"body": "#78778B", "well": "#1D1B30"},
		{"body": "#FFB8B3", "well": "#FF3C2F"},
		{"body": "#FCEBA2", "well": "#F9C801"},
		{"body": "#FFA6C3", "well": "#FF0B5B"},
		{"body": "#EBA2A3", "well": "#C80002"},
		{"body": "#FED1AD", "well": "#FE8220"},
		{"body": "#FF948D", "well": "#BA2C23"},
		{"body": "#DCF174", "well": "#8BA801"},
		{"body": "#73DECB", "well": "#008F75"},
		{"body": "#73BA73", "well": "#005E00"},
		{"body": "#9FDB8F", "well": "#3A8B26"},
		{"body": "#ADEAFF", "well": "#518EA3"}
	];

	var icons = [
		"battery.png", 
		"bell.png", 
		"book.png", 
		"cloud.png", 
		"compass.png", 
		"cursor.png", 
		"edit.png", 
		"favorites.png", 
		"flag.png", 
		"home.png", 
		"idea.png", 
		"image.png", 
		"medal.png", 
		"microphone.png", 
		"music.png", 
		"padlock.png", 
		"power-button.png", 
		"speakers.png"
	];

	$('#showQuote').click(function(){
		$(".quote-content").empty();
		$(".quote-author").empty();
		var randomColor = Math.floor((Math.random() * colors.length));

		$('body').css('background-color', colors[randomColor].body).hide().fadeIn(999);
		$('.well').css('background-color', colors[randomColor].well).hide().fadeIn(999);
		$('.show-quote').css('border-color', colors[randomColor].well);
		$('.show-quote').css('color', colors[randomColor].well);

		var randomIcon = Math.floor((Math.random() * icons.length));

		$('.icon-quote').attr('src', 'assets/icons/' + icons[randomIcon]).hide().fadeIn(1999);


		$('.icon-quote').attr('alt', icons[randomIcon]);

		$.ajax({
		    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
		    type: 'GET', // The HTTP Method
		    datatype: 'json',
		    cache: false,
		    success: function(data) { 
		    	

		    	var json = JSON.parse(data);
		    	$(".quote-content").append(json.quote).hide().fadeIn(999);
				$(".quote-author").append(json.author).hide().fadeIn(999);
				var randomQuote = $(".quote-content").text();
				var randomAuthor = $(".quote-author").text();
				var urlForTweet = 'https://twitter.com/intent/tweet?hashtags=quotes&text=' + '\"' + encodeURIComponent(randomQuote + '\" ~ ' + randomAuthor);
				$('.twitter-share-button').attr("href", urlForTweet);

				

		    },
		    error: function(err) { alert(err); },
		    beforeSend: function(xhr) {
		    xhr.setRequestHeader("X-Mashape-Authorization", "sZYuSJCwLBmshotkB5Hy6NDNIxMQp1D7WmjjsnUb0PYZLkpVhf"); // Enter here your Mashape key
		    }
		});
	});
	$.ajax({
	    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
	    type: 'GET', // The HTTP Method
	    datatype: 'json',
	    success: function(data) { 
	    	var json = JSON.parse(data);
	    	$(".quote-content").append(json.quote).hide().fadeIn(999);;
			$(".quote-author").append(json.author).hide().fadeIn(999);;
			var randomQuote = $(".quote-content").text();
			var randomAuthor = $(".quote-author").text();
			var urlForTweet = 'https://twitter.com/intent/tweet?hashtags=quotes&text=' + '\"' + encodeURIComponent(randomQuote + '\" ~ ' + randomAuthor);
			$('.twitter-share-button').attr("href", urlForTweet);

			var randomColor = Math.floor((Math.random() * colors.length));

			$('body').css('background-color', colors[randomColor].body).hide().fadeIn(999);;
			$('.well').css('background-color', colors[randomColor].well).hide().fadeIn(999);;
			$('.show-quote').css('border-color', colors[randomColor].well);
			$('.show-quote').css('color', colors[randomColor].well);

			var randomIcon = Math.floor((Math.random() * icons.length));

			$('.icon-quote').attr('src', 'assets/icons/' + icons[randomIcon]).hide().fadeIn(1999);;

			$('.icon-quote').attr('alt', icons[randomIcon]);


	    },
	    error: function(err) { alert(err); },
	    beforeSend: function(xhr) {
	    xhr.setRequestHeader("X-Mashape-Authorization", "sZYuSJCwLBmshotkB5Hy6NDNIxMQp1D7WmjjsnUb0PYZLkpVhf"); // Enter here your Mashape key
	    }
	});
	



});
