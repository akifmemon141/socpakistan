// JavaScript Document
var View = function(newMsgCallback){
    
	$("#click").click(function (){
	var text = $('#myvalue').val();
	
     var finalmsg= ($('#myname').val()+":"+text);
        $("#myvalue").val('');
        
        newMsgCallback(finalmsg);
        
        

    });
}
			View.prototype.RenderJSON = function(data, uname){
	
		$("#container").empty();
	
			for (var i=0;  i< data.length; i++){
		
		 var text = $('#myvalue').val();
		 
		 	$("#container").append('<div id="' + data[i] + '">   <label>'+data[i]+' </label><br></div> ');
	
		$("#"+data[i]).click(function(){
			 
			  var myid=$(this).attr("id");
			  
		var index= DATA.indexOf(myid);
			  	
				if (index >-1){
		
		DATA.splice(index,1);
				 
				 RenderJSON(DATA);
					 
		save(DATA);		
		
				  }
			  });
		  }	
	}
	

	