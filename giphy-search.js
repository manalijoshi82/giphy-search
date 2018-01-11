$(document).ready(function() {
	/*------------------
    
   SEARCH 
   
   ---------------------*/
	$('input[type="search"]').keypress(function(e) {
		if (e.which === 13) {
			var searchTerm = $('input[type="search"]').val();
			//alert(searchTerm);

			var url =
				'https://api.giphy.com/v1/gifs/search?q=' +
				searchTerm +
				'&api_key=OU3ApZVikO0v4wA5tj3P8xEYWwRyWA3Z&limit=10';

			$.get(url, function(gotData) {
				console.log(gotData);
				$('.results').empty();
				for (var i = 0; i < gotData.data.length; i++) {
					//console.log(gotData.data[i].images.original.url);

					var gifDiv = $('<div>'); //div for the gifs to go inside
					gifDiv.addClass('gifDiv');

					var img = '<img src="';

					var gifImg = img + gotData.data[i].images.original.url + '" alt="loading..." />';

					//$(".gifDiv").append(gifImg);
					$('.results')
						.append(gifDiv)
						.append(gifImg);
				}
			});
		}
	});

	/*------------------
    
   TRENDING 
   
   ---------------------*/

	$('.trending').click(function() {
		$('.results').empty();

		var trendingUrl = 'https://api.giphy.com/v1/gifs/trending?q=&api_key=OU3ApZVikO0v4wA5tj3P8xEYWwRyWA3Z';

		$.get(trendingUrl, function(gotData) {
			for (var i = 0; i < gotData.data.length; i++) {
				if (gotData.data[i].rating == 'g') {
					var img = '<img src="';

					var gifImg = img + gotData.data[i].images.original.url + '" alt="loading..." />';
					$('.results').append(gifImg);
					console.log(gifImg);
				}
			}
		});
	});

	/*------------------
    
   RANDOM 
   
   ---------------------*/
	$('.random').click(function() {
		$('.results').empty();
		console.log('clicked');
		var randomUrl = 'https://api.giphy.com/v1/gifs/random?q=&api_key=OU3ApZVikO0v4wA5tj3P8xEYWwRyWA3Z';

		$.get(randomUrl, function(gotData) {
			console.log(gotData);
			var img = '<img src="';

			var gifImg = img + gotData.data.image_original_url + '" alt="loading..." />';
			$('.results').append(gifImg);
			console.log(gifImg);
		});
	});
});
