const { throttleTime, map } = rxjs.operators;
const { Subject } = rxjs;

var subject = new Subject();

subject.subscribe({
  next: function(value) {
    console.log(value);
  },
  error: function(error) {
    console.log(error);
  },
  complete: function() {
    console.log('Completed');
  }
});

subject.subscribe({
  next: function(value) {
    console.log(value);
  }
});

subject.next('A new data piece');
// subject.error('Error');
subject.complete();
subject.next('New value');
