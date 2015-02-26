define(["jquery","analitics","parse"],function($){
  var CFM=function(){
    var init=(function(){
      Parse.initialize("rOWD5mbmsfCQBclaByHOgPJW4I9bXroHq9ghBoBk", "yTXJI3hJiSRPPDKutNTkvUySwmbPsTOYekZJp3nN");
    })();
    var Sus=Parse.Object.extend("Suscriptor");
    this.push=function(str,callback){
      var obj=new Sus();
      obj.set("mail",str);
      obj.save(null,{
        success:callback,
        error:callback
      });
    }
  };
  $(document).on("ready",init);
    function init(){
    window.candy=new CFM();
    $("form").on("submit",function(e){
      e.preventDefault();
      var val=$("#mce-EMAIL").val();
      candy.push(val,function(msg,err){
        if(err){
          $(".box").addClass('error').children('p').text(err);
          $(".box").fadeIn();
        }else{
          $(".box").addClass('success').children('p').text("pronto nos contactaremos contigo");
          $(".box").fadeIn();
          console.log(msg)
        }
      });
    });
  }
});
