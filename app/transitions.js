export default function() {
	var duration = 1000;
	this.transition(
    this.fromRoute('home'),
    this.toRoute('about'),
    this.use('cardTransition')
  );
}