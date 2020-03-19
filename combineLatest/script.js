const { Observable, combineLatest, merge } = rxjs;
const { delay } = rxjs.operators;

const randomAsync = Observable.create(o => o.next(Math.random()));

const delayed = randomAsync.pipe(delay(1000));

// const combo = combineLatest([delayed, randomAsync, randomAsync, randomAsync]);
// combo.subscribe(value => console.log(value));

const merged = merge([delayed, randomAsync, randomAsync, randomAsync]);
merged.subscribe(value => console.log(value));
