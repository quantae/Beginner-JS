/**
 * To access an HTML element, JavaScript can use the document.getElementById(id) method.
 * The id attribute defines the HTML element. The innerHTML property defines the HTML
 * content:
 */
//document.getElementById("paragraph").innerHTML = 5 + 6;
//document.write(5+6);

// FUNTION TO PRINT TO BROWSER A RANDOM NUMBER FROM 0 TO 50
//var random_Number = Math.floor(Math.random() * 20)

// Variable declaration
var store_value = '';
var store_value_arr = [];

function random_whole_number() {
    store_value = Math.floor(Math.random() * 50);
    document.getElementById('generated-number').innerHTML = store_value;
    store_value_arr.push(store_value);

    store_value_arr_length = store_value_arr.length;
    text = "<ul class='list-group'>";

    for (i = 0; i < store_value_arr_length; i++) {
        text += "<li class='list-group-item'>" + store_value_arr[i] + "</li>";
    }
    text += "</ul>";

    document.getElementById('history-display').innerHTML = text;
    onclick.getElementById('clear-history').text = '';
    console.log(store_value_arr);
    // return store_value;

};

function clear() {
    store_value_arr.length = 0;
    text = '';
    console.log(store_value_arr);
};