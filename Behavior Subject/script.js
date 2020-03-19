const { switchMap } = rxjs.operators;
const { BehaviorSubject } = rxjs;

var clickEmmited = new BehaviorSubject('Not clicked');
var button = document.querySelector('button');
var div = document.querySelector('div');

button.addEventListener('click', () => {
  clickEmmited.next('Clicked');
});

clickEmmited.subscribe(value => {
  div.textContent = value;
});
