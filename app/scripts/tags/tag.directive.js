(function(app) {
  app.TagsDirective = ng.core
  	 .Component({
  	 	selector: 'tag',
      	templateUrl: 'tag.directive.html',
      	inputs:[
      	'top',
      	'left'
      	]

  	 })
  	 .Class({
  	 	constructor: [
  	 	function(){
  	 		console.log("directive");
  	 		this.top = 0;
  	 		this.left = 0;

  	 	}],
  	 	onClick: function(){
  	 		window.open("https://amzn.com/B0093GMEQK", '_blank');
  	 	}
  	 });

})(window.app || (window.app = {}));