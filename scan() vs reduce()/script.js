const { reduce, scan } = rxjs.operators;
const { of } = rxjs;

var observable = of(1, 2, 3, 4, 5);

// observable
//   .pipe(
//     reduce((total, currentValue) => {
//       return total + currentValue;
//     }, 0)
//   )
//   .subscribe({
//     next: function(data) {
//       console.log(data);
//     }
//   });

observable
  .pipe(
    scan((total, currentValue) => {
      return total + currentValue;
    }, 0)
  )
  .subscribe({
    next: function(data) {
      console.log(data);
    }
  });
