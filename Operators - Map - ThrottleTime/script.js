const { throttleTime, map } = rxjs.operators;
const { interval } = rxjs;

var observable = interval(1000);
var observer = {
  next: function(value) {
    console.log(value);
  }
};

observable
  .pipe(
    map(function(value) {
      return 'Number: ' + value;
    }),
    throttleTime(2000)
  )
  .subscribe(observer);
