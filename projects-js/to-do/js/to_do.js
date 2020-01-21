

// User clicks on the add button
// If there is any text inside the item field, add that to the
// to-do list.

document.getElementById('addItem').addEventListener('click', function() {
    // A variable to grab the value in the input
    var value = document.getElementById('addList').value;

    console.log(value)
});