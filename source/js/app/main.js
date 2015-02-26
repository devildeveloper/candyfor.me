define(["jquery","slick","picturefill"],function($){
  $(document).on("ready",init);
  function init(){
    $("#slider").slick({
      dots:true,
      arrows:false
    })
  }
});
