export default function() {
	this.transition(
    this.fromRoute('home'),
    this.toRoute('about'),
    this.use('oneCardTransition')
  );

  this.transition(
  	this.fromRoute('about'),
  	this.toRoute('work'),
  	this.use('oneCardTransition')
  );

  this.transition(
  	this.fromRoute('work'),
  	this.toRoute('contact'),
  	this.use('oneCardTransition')
  );

  this.transition(
    this.fromRoute('contact'),
    this.toRoute('home'),
    this.use('oneCardTransition')
  );
}