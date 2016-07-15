// JavaScript Document
	var DATA = [];
	
	$("#click").click(function (){
	var text = $('#myvalue').val();
	DATA.push($('#myname').val()+":"+text);
	$('#myvalue').val('');	
	RenderJSON(DATA);
   	 save(DATA);	
	
		
	
	});
	
	
    function RenderJSON(data, uname){
		
		$("#container").empty();
	for (var i=0;  i< data.length; i++){
		
		  var text = $('#myvalue').val();
		 $("#container").append('<div id="' + data[i] + '">   <label>'+data[i]+' </label><br></div> ');
			
			
			

		 
		 $("#"+data[i]).click(function(){
			  var myid=$(this).attr("id");
			  

			  
			  //Debugger
			  var index= DATA.indexOf(myid);
			  if (index >-1){
				  DATA.splice(index,1);
				  RenderJSON(DATA);
					 save(DATA);		
				  }
			  });
		  }	
	}
	
	function save(){
    $.ajax({
	    url: 'http://datastore.asadmemon.com/akif', 
	    type: 'POST', 
	    contentType: 'application/json', 
	    data: JSON.stringify(DATA),
	success:function(res){console.log(res);}
	});
}
	
	function load() {
		
 $.get('http://datastore.asadmemon.com/akif',function(res){
		
		DATA = res 
	RenderJSON(DATA);
	
	})
 
}

load();
     
	 setInterval (function(){ load() }, 500);