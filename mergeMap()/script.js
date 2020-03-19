const { mergeMap, map } = rxjs.operators;
const { fromEvent } = rxjs;

var input1 = document.querySelector('#input1');
var input2 = document.querySelector('#input2');

var span = document.querySelector('span');

var observable1 = fromEvent(input1, 'input');
var observable2 = fromEvent(input2, 'input');

observable1
  .pipe(
    mergeMap(event1 => {
      return observable2.pipe(
        map(event2 => {
          return event1.target.value + ' ' + event2.target.value;
        })
      );
    })
  )
  .subscribe(combinedValue => {
    span.textContent = combinedValue;
  });
