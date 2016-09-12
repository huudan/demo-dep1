import angular from 'angular';

export default angular.module('demodep1', [])
	.directive('helloWorld', () => {
		return {
			template: '<h1>Hello, World!</h1>'
		};
	});
