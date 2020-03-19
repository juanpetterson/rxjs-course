const { Observable, of, from, interval, fromEvent, asyncScheduler } = rxjs;

const hello = of('hello');
hello.subscribe(print);

// async
// const hello = of('hello', asyncScheduler);
// hello.subscribe(print);

// print('world');

// const world = from('world');
// world.subscribe(print);

// const event = fromEvent(document, 'click');
// event.subscribe(print);

// const periodic = interval(500);
// periodic.subscribe(print);

function print(value) {
  console.log(value);
}
