(function(app) {
    app.TagsComponent = ng.core
        .Component({
            selector: 'tag-image',
            queries: {
                picTag: new ng.core.ViewChild('picTag')
            }
        })
        .View({
            directives: [app.TagsDirective],
            templateUrl: 'tag-component.html'
        })
        .Class({
            constructor: [

                function() {
                    console.log('Component');
                    this.X = 0;
                    this.Y = 0;
                    this.top = -1;
                    this.left = -1;
                    this.scaledX = -1;
                    this.scaledY = -1;
                }
            ],
            writeMessage: function(message, X, Y) {
                console.log('controller', message, X, Y);
                var naturalHeight = this.picTag.nativeElement.naturalHeight;
                var naturalWidth = this.picTag.nativeElement.naturalWidth;

                var heightRatio = naturalHeight / 100;
                var widthRatio = naturalWidth / 200;
                console.log('widthRatio', widthRatio, 'heightRatio', heightRatio);
                this.scaledX = (X * widthRatio * 300) / naturalWidth;
                this.scaledY = (Y * heightRatio * 300) / naturalHeight;
                console.log('scaledX:', this.scaledX, 'scaledY:', this.scaledY);


                this.left = X - 5;
                this.top = Y - 5;



            },

            getMousePos: function(event) {
                var element = event.currentTarget;
                this.X = event.pageX;
                this.Y = event.pageY;

                var parentOffset = event.srcElement.offsetParent;
                var x = event.pageX - element.offsetLeft - parentOffset.offsetLeft;
                var y = event.pageY - element.offsetTop - parentOffset.offsetTop;
                console.log('x:', x, 'y:', y);
                var message = 'Mouse position: ' + x + ',' + y;
                this.writeMessage(message, x, y);
            }


        });
})(window.app || (window.app = {}));