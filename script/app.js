$(document).ready(function (){
	function readURL(img){
		if(img.files && img.files[0]){
			var reader = new FileReader();
			reader.onload = function(e){
				$('#img_view').append('<img id="twt_img" src="'+ e.target.result +'"/>');
			}
			reader.readAsDataURL(img.files[0]);
		}
	}
	$('#twtImg').change(function(){
		readURL(this);
	});

});


function tweetPost(){
	var twttxt = $('#textVal').val();
	var twtimg = $('#twt_img').attr('src');
	$('#tweet_list').append('<div><img class="postImg" src="'+ twtimg +'""></div>');	
	if(twttxt != ""){
		$('#tweet_list').append('<div><h4>'+ twttxt + '</h4></div>');
	}
}

	
