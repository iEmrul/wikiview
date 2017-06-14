$('#searchbox').keypress(function(event){
 
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
     $(".block").hide();
      var term = $("#searchbox").val();
      
          $.getJSON("https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch="+term+"&prop=extracts&exintro=1&exlimit=20&exchars=200&format=json&callback=?", function(data) {

            for (var key in data.query.pages) {
              $(".row").append('<div class ="block" onclick ="window.open(\'https://en.wikipedia.org/?curid=' + data.query.pages[key].pageid + '\',\'_blank\')"><div id = "title">'+data.query.pages[key].title + '</div> <div id ="description">'+data.query.pages[key].extract +'</div> </div> ');
              
}
          $("#searchbox").val(''); 
    });
       

    }
    
    });