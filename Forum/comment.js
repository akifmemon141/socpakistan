// JavaScript Document
var topicref = firebase.database().ref('/topics');

$("#submit").click(function(){
	
	var obj = {
"title" : $("#text").val(), "username": $("#user").val(),
"time" : Date.now()
}
topicref.push(obj);	
})
topicref.on('child_added',function(snapshot){
   $('#container').append("<div>" + "<a href='topic.html#key=" + snapshot.key + "'>"+snapshot.val().title+"</a>"+" Posted by: "+snapshot.val().username+"</div>");

		

});
