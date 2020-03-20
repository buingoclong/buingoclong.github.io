var player;

$.youtubeReady = function(callback){
	var EVENT_READY = "youtubeready";
	if(window.YT && window.YT.Player){
		return callback();
	}
	$(window).on(EVENT_READY, callback);
	window.onYouTubeIframeAPIReady = function(){
		$(this).trigger(EVENT_READY);
		window.onYouTubeIframeAPIReady = void 0;
	};
	$("<script>", {src: "//www.youtube.com/iframe_api"}).appendTo("body");
};
function loadPlayer(videoID) {
	if(!player){
		player = new YT.Player( 'player',{
			width: '800',
			height: '450',
			videoId: videoID,
			playerVars: {'rel': 0, 'showinfo': 0, 'controls': 0, 'wmode': 'transparent', 'iv_load_policy': 3},
			events: {'onReady': onPlayerReady, 'onStateChange': onPlayerStateChange }
		});
	}else{
		player.cueVideoById(videoID);
	}
	return videoID;
}
function onPlayerReady(event){

}
function onPlayerStateChange(event) {
	var state = player.getPlayerState();
	if(state == YT.PlayerState.PLAYING) {
		$('.play-button').addClass('playing');
	}
	if(state == YT.PlayerState.PAUSED) {
		$('.play-button').removeClass('playing');
	}
	if(state == YT.PlayerState.ENDED) {
		player.stopVideo();
		$('.detail-main-video .media-wrapper').removeClass('played');
		$('.play-button').removeClass('playing');
	}
	if(state == YT.PlayerState.BUFFERING) {
		$('.play-button').removeClass('playing');
	}
}
