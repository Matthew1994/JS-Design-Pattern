var myModule = (function () {
	// private function and variable
	var privateVar = 8;
	function privateFun(args) {
		console.log('Private Function!');
	}

	return {
		publicVar: 10,
		publicFun: function (args) {
			privateFun();
			console.log('Public Function');
		}
	};
})();

console.log(myModule.publicVar)
myModule.publicFun();