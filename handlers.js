exports.index = function(req, res) {
	res.send("Welcome to my website for CS1501. To see some selections from my favorite music, add /watch to the current URL.");
}

var watchf = function(req, res) {
	var video_id = req.query.v;
	res.render('music', { id: video_id }, function(err, html) {
		res.send(html);
	})
}

exports.watch = watchf;