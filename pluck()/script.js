const { pluck, debounceTime, distinctUntilChanged } = rxjs.operators;
const { fromEvent } = rxjs;

var input = document.querySelector('input');
var observable = fromEvent(input, 'input');

observable
  .pipe(pluck('target', 'value'), debounceTime(500), distinctUntilChanged())
  .subscribe({
    next: function(value) {
      console.log(value);
    }
  });
