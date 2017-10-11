$(function () {
    // Show the textarea
    $('button#show_form_button').click(function() {
	$('div#tweet_form').removeClass('hideForm');
	$('div#tweet_form').addClass('showForm');
    });

    // Post Tweets
    $('button#form_tweet').click(function postTweet() {
	if($('textarea#message').val() == "") {
	    alert("Tweet cannot be empty.");
	} else {
	    let theMessage = $('textarea#message').val();
	    console.log(theMessage);
	    $('div.new_tweets').append("<p>" + theMessage + "</p>");
	    $('#tweet_form').removeClass('showForm');
	    $('#tweet_form').addClass('hideForm');
	    $('textarea#message').val("");
	}
    });
});
