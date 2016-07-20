describe('main tests', function() {
  var handler;

  document.addEventListener = function(event, eventHandler) {
    if(event === 'DOMContentLoaded')
      handler = eventHandler;
  }

  ng.core.ViewChild = function(element){      
      console.log(element);
      this.element = element;
    }
  
  it('main registers TagComponent with bootstrap', function(done) {
    ng.platform.browser.bootstrap = function(component) {
      expect(component).to.be.eql(app.TagsComponent);
      done();
    }

    handler();
  });
});