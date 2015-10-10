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

  this.transition(
    this.fromRoute('home'),
    this.toRoute('work'),
    this.use('twoCardTransition')
  );

  this.transition(
    this.fromRoute('about'), 
    this.toRoute('contact'),
    this.use('twoCardTransition')
  );

  this.transition(
    this.fromRoute('work'),
    this.toRoute('home'),
    this.use('twoCardTransition')
  );

  this.transition(
    this.fromRoute('contact'),
    this.toRoute('about'),
    this.use('twoCardTransition')
  );

  this.transition(
    this.fromRoute('home'),
    this.toRoute('contact'),
    this.use('threeCardTransition')
  );

  this.transition(
    this.fromRoute('about'),
    this.toRoute('home'),
    this.use('threeCardTransition')
  );

  this.transition(
    this.fromRoute('work'),
    this.toRoute('about'),
    this.use('threeCardTransition')
  );

  this.transition(
    this.fromRoute('contact'),
    this.toRoute('work'),
    this.use('threeCardTransition')
  );
}