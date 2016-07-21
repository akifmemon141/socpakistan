// JavaScript Document
var Network =  function(){
}
	Network.prototype.SaveAllMsgs = function(DATA){
		$.ajax({
	    url: 'http://datastore.asadmemon.com/akif', 
	    type: 'POST', 
	    contentType: 'application/json', 
	    data: JSON.stringify(DATA),
	success:function(res){console.log(res);}
	});
		
	}
	Network.prototype.GetAllMsgs = function(callback){
		$.get('http://datastore.asadmemon.com/akif',function(res){
		
		callback(res)
	})
 
		
		}
	