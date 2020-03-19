const { interval, timer } = rxjs;
const { takeWhile, takeUntil } = rxjs.operators;

const source = interval(100);

const subscription1 = source.pipe(takeWhile(v => v <= 10));

const subscription2 = source.pipe(takeUntil(timer(2000)));

subscription2.subscribe(value => {
  console.log(value);
});
