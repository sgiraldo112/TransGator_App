$(document).ready(function() {
  var lan1 = $('#lan1');
  var lan2 = $('#lan2');
  var textBox = $('#text-box');
  var result = $('#result');

  $('#go').on('click', function(event) {
    event.preventDefault();
    console.log('click');
    var code1 = lan1.val();
    var code2 = lan2.val();
    var text = textBox.val();

    axios
      .get('/translate/' + code2 + '/' + encodeURI(text))
      .then(function(response) {
        result.text(response.data.slice(response.data.indexOf('>') + 1, response.data.lastIndexOf('<')));
      })
      .catch(function(error) {
        console.log(error);
      });
  });
});
