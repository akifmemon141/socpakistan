// JavaScript Document
var Model = function (){	
	this.DATA = [];
}

Model.prototype.Updatedata = function(newdata){
	
	this.DATA = newdata;
	
	}

Model.prototype.Getdata = function(){
	
	return this.DATA
	
	}	
	
Model.prototype.PushMsg	= function(msg){
	
	this.DATA.push(msg);
	
	
	}