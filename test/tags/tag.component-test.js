describe('tags component tests', function() {

  var sandbox;  
  var tagsComponent;
  beforeEach(function initializeTagComponent(){
  	sandbox = sinon.sandbox.create();
  	tagsComponent = new app.TagsComponent();

  });

  afterEach(function(){
  	sandbox.restore();
  });

  it("should set selector in annotation", function(){
  	 var componentAnnotations = 
      Reflect.getMetadata('annotations', app.TagsComponent)[0];
   
    expect(componentAnnotations.selector).to.be.eql('tag-image');
  })
  it("should set template in annotation", function(){
  	 var componentAnnotations = 
      Reflect.getMetadata('annotations', app.TagsComponent)[1];
   
    expect(componentAnnotations.templateUrl).to.be.eql('tag-component.html');
  })
  it("should set directives in annotation", function(){
  	var directives = [app.TagsDirective];
  	 var componentAnnotations = 
      Reflect.getMetadata('annotations', app.TagsComponent)[1];
   
    expect(componentAnnotations.directives).to.be.eql(directives);
  })
  it("should set queries in annotation", function(){
  	
  	var componentAnnotations = 
      Reflect.getMetadata('annotations', app.TagsComponent)[0];
    expect(componentAnnotations.queries.picTag.element).to.be.eql('picTag');
  })



});
