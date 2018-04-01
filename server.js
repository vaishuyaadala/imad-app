var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));











$(function() {

        if (localStorage["name"]) {
            $('#name').val(localStorage["name"]);
        }
        if (localStorage["email"]) {
            $('#email').val(localStorage["email"]);
        }
		if (localStorage["message"]) {
            $('#message').val(localStorage["message"]);
        }

});

$('.stored').change(function () {
    localStorage[$(this).attr('name')] = $(this).val();
});
	
$('#contactForm').submit(function() {
	localStorage.clear();
  $('.stored').val("");
});