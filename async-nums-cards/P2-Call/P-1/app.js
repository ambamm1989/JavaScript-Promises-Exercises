let favNumber  = 15;
let baseURL  = "http://numbersapi.com";

$.getJSON(`${baseURL}/${favNumber}?json`, function(data)  {
    console.log(data);
});

let favNumbers  = [7, 11, 22];
$.getJSON(`${baseURL}/${favNumber}?json`, function (data)  {
    console.log(data);
});

let facts  = [];
$.getJSON(`${baseURL}/${favNumber}?json`, function(data)  { facts.push(data.text);
    $.getJSON(`${baseURL}/${favNumber}?json`, function(data)  { facts.push(data.text);
        $.getJSON(`${baseURL}/${favNumber}?json`, function(data)  { facts.push(data.text);
            $.getJSON(`${baseURL}/${favNumber}?json`, function(data)  { facts.push(data.text);
            facts.forEach(fact  => {
            $("body").append(`<p>${fact}</p>`);
             });
            });
        });
    });
});