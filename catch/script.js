const { of, Subject } = rxjs;
const { catchError, retry } = rxjs.operators;

const sub = new Subject();
sub
  .pipe(
    catchError(err => of('something broke, but we handledd it'))
    // retry(2)
  )
  .subscribe(value => console.log(value));

sub.next('good');
sub.error('broken!');
