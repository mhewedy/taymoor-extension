
var array = [];

var clickFn = function(){
	var self = $(this);
	
	var index = array.findIndex(function(e){
		return JSON.stringify(self) == JSON.stringify(e);
	});

    if (index > -1){
        array.splice(index, 1);
        effect(self, false);
    }else{
        array.push(self);
        effect(self, true);
    }
	
	console.log(array);
}

function effect(e, set){
    e.css('border-color', set? 'red': '');
    e.css('border-style', set? 'solid': '');
    e.css('border-width', set? '4px': '');
}

$('input').click(clickFn);
