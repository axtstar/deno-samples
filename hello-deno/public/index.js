function fib(n) {
    return n < 2 ? n : fib(n - 2) + fib(n - 1);
}

var app = new Vue({
    el: '#app',
    data: {
      number:10,
      message: '',
      canvas: null,
      duration: ''
    },
    methods: {
      greet: function() {
        this.message = 'hello vue!'
      },
      fib_js: function() {
        var start = Date.now();
        this.message = 'fib(' + this.number + ') = ' + fib(this.number) + '!'
        var end = Date.now();
        this.duration = (end - start) + 'ms';
      },
      uploadFile: function(e){
        var canvas = document.querySelector('canvas');
        var ctx = canvas.getContext("2d");
    
        let files = e.target.files;
        var file = files[0];
    
        var image = new Image();
        var reader = new FileReader();
    
        reader.onload = function(evt) {    
          image.onload = function() {
            ctx.drawImage(image, 0, 0);
          }
          image.src = evt.target.result;
        }
        reader.readAsDataURL(file);
      },
    }
})
