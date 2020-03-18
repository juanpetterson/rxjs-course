const { filter } = rxjs.operators;
const { interval } = rxjs;

var observable = interval(1000);

observable
  .pipe(
    filter(function(value) {
      return value % 2 == 0;
    })
  )
  .subscribe({
    next: function(value) {
      console.log(value);
    },
    error: function(error) {
      console.log(error);
    }
  });
