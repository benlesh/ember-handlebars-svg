function typeString(o) {
	return Object.prototype.toString.call(o);
}

function getTestElements(tag) {
	return new Promise(function(resolve, reject) {
		var blah = $('<div id="blah">').appendTo('body');

		var view= Ember.View.extend({
		  template:Ember.Handlebars.compile('hello <svg width=300 height=300>{{#each item in view.items}}<%@>{{item}}</%@>{{/each}}</svg>'.fmt(tag, tag))
		});

		var foo = view.create({ items: [1, 2, 3] });

		foo.appendTo(blah);

		Ember.run.next(function(){
		  var actual = blah.find(tag).first();
		  var actualType = typeString(actual[0]);
		  var expected = document.createElementNS('http://www.w3.org/2000/svg', tag);
		  var expectedType = typeString(expected);
		  //expect(actualType).toBe(expectedType);
		  resolve({
		  	expected: expectedType, 
		  	actual: actualType
		  });
		});
	});
}

describe('Ember._metamorphWrapMap additions', function(){
	Ember._metamorphSvgTags.forEach(function(tag){
		it('should fix <' + tag + '> in {{#each}}', function(){
			var actual, expected;
			
			runs(function(){
				actual = expected = null;

			  getTestElements(tag).then(function(result){
			  	actual = result.actual;
			  	expected = result.expected;
			  });
			});

			waitsFor(function(){
				return actual && expected;
			}, 'get test elements', 1000);

			runs(function(){
			  	expect(actual).toBe(expected);				
			});
		});
	});

});