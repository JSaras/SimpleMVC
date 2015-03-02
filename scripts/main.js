require(['models/User', 'controllers/ListController'], function(User, ListController) {

	var users = [
		new User('Barney'),
        new User('Cartman'),
        new User('Sheldon')];

    for (var i = 0, len = users.length; i < len; i++) {
    	console.log(users[i].name);
    };

    localStorage.users = JSON.stringify(users);

    ListController.start();
})



// require(['myMath'], function(myMath) {
// 	console.log(myMath.add(1, 2))
// })