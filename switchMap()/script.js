const { switchMap } = rxjs.operators;
const { fromEvent, interval, of } = rxjs;

// var button = document.querySelector('button');

// var obs1 = fromEvent(button, 'click');
// var obs2 = interval(1000);

// obs1
//   .pipe(
//     switchMap(event => {
//       return obs2;
//     })
//   )
//   .subscribe(value => {
//     console.log(value);
//   });

const user$ = of({ uid: Math.random() });

const fetchOrders = userId => {
  return of(`${userId}'s order data`);
};

// It works, but its NOT recommended
// let orders;
// user$.subscribe(user => {
//   fetchOrders(user.uid).subscribe(data => {
//     orders = data;
//     console.log(orders);
//   });
// });

const orders$ = user$.pipe(
  switchMap(user => {
    return fetchOrders(user.uid);
  })
);

orders$.subscribe(value => console.log(value));
