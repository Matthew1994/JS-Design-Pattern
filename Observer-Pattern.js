function ObserverList() {
	var list = [];
	this.push = function(obj) {
		if (list.indexOf(obj) !== -1)
			return false
		list.push(obj);
		return true
	}
	this.remove = function(obj) {
		let index = list.indexOf(obj);
		if ( index === -1)
			return false
		list.splice(index, 1)
		return true
	}
	this.count = function () {
		return list.length;
	}
	this.empty = function () {
		list = [];
	}
	this.forEach = function (fn) {
		list.forEach(function (item) {
			fn(item);
		});
	}
}
function Subject() {
	var observers = new ObserverList();
	this.add = function (obj) {
		return observers.push(obj);
	}
	this.remove = function (obj) {
		return observers.remove(obj);
	}
	this.notify = function (content) {
		observers.forEach((observer)=> {
			if (typeof observer.update === "function")
				observer.update(content);
		});
	}
}

function Observer(name) {
	this.name = name;
	this.update = function (content) {
		console.log(`${this.name} getMessage: ${content}`);
	}
}

var subject = new Subject();
var observer1 = new Observer('observer1');
var observer2 = new Observer('observer2');
var observer3 = new Observer('observer3');
subject.add(observer1);
subject.add(observer2);
subject.add(observer3);
subject.notify('testing');