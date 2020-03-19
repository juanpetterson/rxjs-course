const { share, shareReplay, publish } = rxjs.operators;
const { Observable } = rxjs;

function print(value) {
  console.log(value);
}

const cold = Observable.create(o => o.next(Math.random()));
// cold.subscribe(print);
// cold.subscribe(print);

// Only one subscriber will be executed
// const hot = cold.pipe(share());
// hot.subscribe(print);
// hot.subscribe(print);

// All the subs will get the same value
const hot = cold.pipe(shareReplay());
hot.subscribe(print);
hot.subscribe(print);
