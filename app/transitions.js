export default function() {
	this.transition(
    this.fromRoute('home'),
    this.toRoute('about'),
    this.use('fooBarTransition')
  );

this.transition(
	this.fromRoute('foo'),
	this.toRoute('bar'),
	this.use('fooBarTransition')
)
}