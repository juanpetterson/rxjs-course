const { debounceTime, distinctUntilChanged, map } = rxjs.operators;
const { fromEvent } = rxjs;

var input = document.querySelector('input');
var observable = fromEvent(input, 'input');

observable
  .pipe(
    map(function(event) {
      return event.target.value;
    }),
    debounceTime(500),
    distinctUntilChanged()
  )
  .subscribe({
    next: function(data) {
      console.log(data);
    }
  });
