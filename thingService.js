var createThing = function(){
    
	var thing = {};
    thing.settings = { 
		"name": 'Name of thing',
		"id": 3432,
		"iconType": "Lamp",
		//"position": config.getPosition(),
		"actionControles": [
                {"type":"button", "name":"My action", "id":"1"}
            ]
	};	

	thing.onAction = function(action){
		if(action.id === "1"){
			console.log("My action");
		}
	}
	return thing;
};

module.exports.thing = createThing();