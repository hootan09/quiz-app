keystone = require('keystone');
//var quiz = keystone.list(req.params.quiz);

/**
 * quiz category
 */
exports.getcat = function(req, res) {
		res.apiResponse([
			{name:'LPIC1' , url:'/api/LPIC1' , description:'lpic1 quiz exam'}
		]);
}

/**
 * List quizs
 */
exports.list = function(req, res) {
	var model = req.params.quiz;
	if(model =='User') res.send ('you have not the permission!');
	else{
	var quiz = keystone.list(model);

	quiz.model.find(function(err, items) {
		if (err) return res.apiError('database error', err);
		res.apiResponse( {quizs: items} );
	});
}
}


// /**
//  * Get quiz by ID
//  */
// exports.get = function(req, res) {
// 	quiz.model.findById(req.params.id).exec(function(err, item) {
//
// 		if (err) return res.apiError('database error', err);
// 		if (!item) return res.apiError('not found');
//
// 		res.apiResponse({
// 			quiz: item
// 		});
//
// 	});
// }
//
//
// /**
//  * Create a quiz
//  */
// exports.create = function(req, res) {
//
// 	var item = new quiz.model(),
// 		data = (req.method == 'quiz') ? req.body : req.query;
//
// 	item.getUpdateHandler(req).process(data, function(err) {
//
// 		if (err) return res.apiError('error', err);
//
// 		res.apiResponse({
// 			quiz: item
// 		});
//
// 	});
// }
//
// /**
//  * Get quiz by ID
//  */
// exports.update = function(req, res) {
// 	quiz.model.findById(req.params.id).exec(function(err, item) {
//
// 		if (err) return res.apiError('database error', err);
// 		if (!item) return res.apiError('not found');
//
// 		var data = (req.method == 'quiz') ? req.body : req.query;
//
// 		item.getUpdateHandler(req).process(data, function(err) {
//
// 			if (err) return res.apiError('create error', err);
//
// 			res.apiResponse({
// 				quiz: item
// 			});
//
// 		});
//
// 	});
// }
//
// /**
//  * Delete quiz by ID
//  */
// exports.remove = function(req, res) {
// 	quiz.model.findById(req.params.id).exec(function (err, item) {
//
// 		if (err) return res.apiError('database error', err);
// 		if (!item) return res.apiError('not found');
//
// 		item.remove(function (err) {
// 			if (err) return res.apiError('database error', err);
//
// 			return res.apiResponse({
// 				success: true
// 			});
// 		});
//
// 	});
// }
