var titleCase = function(title) {
  var phrase = title.split(" ");
  for (var i = 0; i < phrase.length; i += 1) {
    phrase[i] = phrase[i].charAt(0).toUpperCase() + phrase[i].slice(1).toLowerCase();
  };
  return phrase.join(" ");
};


  
$(document).ready(function() {
  $("form#title").submit(function(event) {
    var phrase = $('input#phrase').val();

    var newPhrase = titleCase(phrase);

    $(".finalResult").text(newPhrase);
    $("#finalResult").show();
    this.reset();
    event.preventDefault();
  });
});

