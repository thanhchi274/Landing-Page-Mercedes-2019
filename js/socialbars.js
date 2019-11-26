$(document).ready(function () {

	// ["Label" , "website link" , "bar color" , "bar image"]
	var social = [
		["Product Page", "http://www.aim.com/", "#ffd900", "images/aim.png"],
		["behance", "http://www.behance.net/", "#1769ff", "images/behance.png"],
		["digg", "http://digg.com/", "#2e9fff", "images/digg.png"],
		["dribbble", "http://dribbble.com/", "#8aba56", "images/dribbble.png"],
	];

	$("#socialside").append('<ul class="mainul"></ul>');

	/// generating bars
	for (var i = 0; i < social.length; i++) {
		$(".mainul").append("<li>" + '<ul class="scli" style="background-color:' + social[i][2] + '">' +
			'<li>' + social[i][0] + '<img src="' + social[i][3] + '"/></li></ul></li>');
	}

	/// bar click event
	$(".scli").click(function () {
		var link = $(this).text();
		for (var i = 0; i < social.length; i++) {
			if (social[i][0] == link) {
				window.open(social[i][1]);
			}
		}
	});

	/// mouse hover event
	$(".scli").mouseenter(function () {
		$(this).stop(true);
		$(this).clearQueue();
		$(this).animate({
			left: "140px"
		}, 300);

	});

	/// mouse out event
	$(".scli").mouseleave(function () {
		$(this).animate({
			left: "0px"
		}, 700, 'easeOutBounce');
	});

});