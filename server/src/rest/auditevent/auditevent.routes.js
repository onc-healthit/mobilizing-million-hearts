const controller = require('./auditevent.controller');

module.exports = router => {
	router.post('/auditevent/', controller.create);
};
