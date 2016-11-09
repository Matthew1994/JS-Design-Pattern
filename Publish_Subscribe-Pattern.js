var pubsub = {};

(function (p) {
	var topics = {};
	var uuid = 0;
	p.publish = function (topic, args) {
		if (!Array.isArray(topics[topic]) || !topics[topic].length)
			return false;
		topics[topic].forEach((item)=> {
			item.fn(args);
		});
		return this;
	}

	p.subscribe = function (topic, fn) {
		if (!Array.isArray(topics[topic])) {
			topics[topic] = []
		}
		let id = (++uuid).toString();
		topics[topic].push({
			id: id,
			fn: fn
		});
		return id
	}

	p.unsubscribe = function (uuid) {
		for (let topic in topics) {
			let index = topics[topic].findIndex((item)=> {
				return item.id === uuid.toString();
			});
			if (index !== -1) {
				topics[topic].splice(index, 1);
				return true;
			}
		}
		return false;	
	}
})(pubsub);

pubsub.subscribe('test', (args)=> {
	console.log(`${args} 1`);
});


let id = pubsub.subscribe('test', (args)=> {
	console.log(`${args} 2`);
});


pubsub.unsubscribe(id);

pubsub.publish('test', 'test');