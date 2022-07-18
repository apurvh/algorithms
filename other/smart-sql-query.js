// this is demo code for appsmit demo
// input => natural langauge sql
// outout => sql

// input
var input = document.createElement('input');
input.type = 'text';
input.id = 'input';
input.placeholder = 'Query in natural langauge, forex - get 20 users      ';
input.style.border = '1px solid lightgrey';
input.style.padding = '8px 15px';
input.style.marginRight = '20px';
input.style.marginBottom = '20px';
input.style.width = '600px';

// input where query is pasted
var input2 = document.createElement('textarea');
input2.type = 'text';
input2.id = 'input2';
// input2.placeholder = 'SELECT * FROM users ORDER BY id LIMIT 20;'
input2.value = 'SELECT * FROM users ORDER BY id LIMIT 20;';
input2.style.border = '1px solid lightgrey';
input2.style.padding = '8px 15px';
input2.style.marginBottom = '10px';
input2.style.width = '800px';
// input2.style.height = '150px'
input2.rows = 4;

// button
var button = document.createElement('button');
button.id = 'button';
button.style.backgroundColor = '#F86A2B';
button.style.color = 'white';
button.style.padding = '8px 20px';
button.innerHTML = 'GET SQL';

// display
var openai_embed = document.getElementById('ddd');
openai_embed.appendChild(input);
openai_embed.appendChild(button);

var openai_embed2 = document.getElementById('ddd2');
openai_embed2.appendChild(input2);

/*

<div id='ddd'></div>
<div id='ddd2'></div>

*/

// logic
button.onclick = function () {
  var sqlquery = '';
  // do Open AI call
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((json) => {
      sqlquery = json.title;
      // console.log('sqlquery', sqlquery)
      input2.value = input.value + sqlquery;
    });
};
