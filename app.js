var striked = true;
var plain = false;

// State
var state = {
	list: []
};

// Modifiers
var addItem = function(state, item) {
	var entry = [item, plain];
	state.list.push(entry);
}

var removeItem = function(state, item) {
	var index = list.indexOf(item);
	delete state.list[index];
}

var toggleItem = function(state, item_name) {
	// Search for striked
	var location = state.list.indexOf([item_name, striked]);
	if (location === -1) {
		// Then must be plain, so make striked
		var actualLocation = state.list.indexOf([item, plain]);
		state.list[actualLocation][1] = striked;
	} else {
		// Is striked, change to plain
		state.list[location][1] = plain;
	}
}

var uncheckItem = function(state, item) {
	var index = list.indexOf(item);
	style.list[index][1] = plain;
}

// Render
var renderList = function(state, element) {
	var itemsHTML = state.list.map(function(item) {
		if (item[1] === striked) {
			var firstString = '<li><span class="shopping-item ' + 
							  'shopping-item__checked">';
		} else {
			var firstString = '<li><span class="shopping-item">';
		}
        var finalString = firstString + item[0] + '</span>' + 
			'<div class="shopping-item-controls">' + 
         		'<button class="shopping-item-toggle">' + 
            		'<span class="button-label">check</span>' + 
          		'</button>' + 
          		'<button class="shopping-item-delete">' + 
            		'<span class="button-label">delete</span>' + 
          		'</button>' + 
        	'</div>' + 
      	'</li>';
      	return finalString;
    });
    element.html(itemsHTML);
}

// Event Listeners
$('.js-shopping-list-form').submit(function(event) {
    // event.preventDefault();
    addItem(state, $('.shopping-list-entry').val());
    renderList(state, $('.shopping-list'));
});

$('.shopping-item-toggle').click(function(event) {
	var item_name = $(this).parent().parent().attr('span').val();
	toggleItem(state, item_name);
});

// $('.shopping-item-delete').click(function(event) {
	
// 	var item_name = ; // Get name of item associated with item
// 	toggleItem(state, item_name);
//     renderList(state, $('.shopping-list'));
// });



