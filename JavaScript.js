(function(){
  var j = document.createElement("script");j.type = "application/javascript";j.src = 'https://www.tyle.io/sdk/sdk-0.1.0.js';document.body.appendChild(j);
})();
window.handleOpen = function(){
  tyleSDK.open({
      api_key : 'testApiKey', // Ŭ���̾�Ʈ api key
      user_token : '8794ab28148d844f8d1ac28ad1e6290b0a35c1de', // Ŭ���̾�Ʈ�� �α��ε� ���� ��ū(�ؽ��� ���ڿ� ��ȣ)
      done_callback : function(result){
          console.log("result", result);
          $('#example').empty();
          result.images.map(function(image){
              $('#image-results').append('<li class="col-xs-4 col-sm-3"><img src="'+image+'" class="img-responsive" style="margin-bottom:20px;"/></li>');
          });
      }
  });
};