var button = document.querySelector('button');
// button.addEventListener('click', event => {
//   console.log(event);
// });

const { throttleTime, map } = rxjs.operators;
const { create } = rxjs.Observable;

// rxjs
//   .fromEvent(button, 'click')
//   .pipe(
//     throttleTime(2000),
//     map(data => {
//       return data.clientY;
//     })
//   )
//   .subscribe(coordinate => console.log(coordinate));

var observer = {
  next: function(value) {
    console.log(value);
  },
  error: function(error) {
    console.log(error);
  },
  complete: function() {
    console.log('Completed');
  }
};

// rxjs.fromEvent(button, 'click').subscribe(observer);
var subscription = create(function(obs) {
  // obs.next('A value');
  // // obs.error('Error');
  // setTimeout(() => {
  //   obs.next('A second value');
  //   obs.complete();
  // }, 2000);
  button.onclick = function(event) {
    obs.next(event);
  };
}).subscribe(observer);

setTimeout(() => {
  subscription.unsubscribe();
}, 5000);
