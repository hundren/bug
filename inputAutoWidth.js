   var textWidth = function(text){
            var sensor = $('<pre>'+ text +'</pre>').css({display: 'none'}); 
            $('body').append(sensor); 
            var width = sensor.width();
            sensor.remove(); 
            return width+15;
  };
  $("input").each(function(){
         $(this).width(textWidth($(this).val())).attr("disabled",true);
 })
