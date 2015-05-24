$(document).ready(function(){
  $("input").keypress(function(e){
    if (e.which == 13) {
      e.preventDefault();
      var newTodo = $(this).val();
      $(this).val('');
      var ul = $(this).siblings("ul")
      ul.append("<li>" + newTodo + "</li>").hide().fadeIn(1000);
    }
  });
  $(".card_list").sortable({
    connectWith: ".card_list"
  }); 
});