// JavaScript Document
	 
	 var ref = firebase.database().ref('/msgs');
ref.on('child_added',function(snapshot){
   $('#container').append("<div>" + snapshot.val()+"</div>");
});

$('#click').on('click',function(){
   var text = $('#myvalue').val();
   var name =$('#myname').val()
   ref.push(name + ": " + text);
});

