var mySingleton = (function() {
	var _instance = null;

	function MyObject (option) {
		var counter = 0;
		function privateFun() {
			console.log('call private Function');
		}
		this.publicVar = 10;
		this.publicFun = function() {
			privateFun();
			console.log('call Public Function');
		}
		this.counterIncrement  = function () {
			counter++;
		}
		this.getCounter = function () {
			return counter;
		}
	}

	return {
		getInstance: function (option) {
			if (_instance)
				return _instance
			else {
				_instance = new MyObject(option);
				return _instance;
			}
		}
	}
})()

export default mySingleton


