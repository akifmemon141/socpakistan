var Controller = function(){
	
	this.model = new Model();
		
	this.net = new Network();
	
	this.reloadmsgs();
	 				    
	this.view = new View( this.handleNewMsg.bind(this) );
	
	setInterval (function(){ 
	
	this.reloadmsgs();
	
	  }.bind(this), 500);    
	
}

Controller.prototype.handleNewMsg = function(msg){
    
	this.model.PushMsg(msg)
	
	this.net.SaveAllMsgs(this.model.Getdata())
}

Controller.prototype.reloadmsgs=function(){
	
	this.net.GetAllMsgs(function(DATA){
		
		this.model.Updatedata(DATA)	 
		console.log(DATA);
		this.view.RenderJSON(DATA)
	
	}.bind(this))
	
	}
var con=new Controller();