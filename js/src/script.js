$(function() {
  $('.bxslider').bxSlider();
  $("#container").masonry({
  	itemSelector: ".item",
  	columnWidth: ".item",
  	gutter: 20
  });
  function getjson(text){
  	$.ajax({
  		url: 'https://pixabay.com/api/?key=3602016-bce28b45529dedb18f9ef8eb6&q='+text+'&image_type=photo',
  		dataType: "json",
  		success: function(data){
  		  var str = data.hits;
        var lenStr = str.length;
        var variables = [];
        var i = 0;
        var j = 0;
        while( variables.length < 7 && variables.length < lenStr && j < 100){
          var random = Math.floor(Math.random() * lenStr);
          if(jQuery.inArray(random, variables) == -1){
            variables[i] = random;
            i++;
          }
          j++;
        }
        var n = 0;
        for ( var i = 0; i < 7; i++){
          n = variables[i];
          $(".item-bckground"+(i+1)).attr('src', str[n].webformatURL);
          $(".item--text"+(i+1)).html(str[n].tags);
        }
      }
    });
  }
    var arr = ["Франция", "Нидерланды", "Италия", "Англия", "Бразилия", "Бали", "Германия","Венгрия", "Польша", "Испания", "Кувейт"];
    var rand = Math.floor(Math.random() * arr.length);
    var inputvalue = arr[rand];
    $('#search').on('click', function(){
      inputvalue = $('#find-picture').val();
      getjson(inputvalue);
      return false;
    });
    $('#find-picture').keyup(function(){
      if (event.keyCode == 13) {
        inputValue = $('#find-picture').val();
        getjson(inputValue);
        return false;    
    }
  });
    getjson(inputvalue);
});