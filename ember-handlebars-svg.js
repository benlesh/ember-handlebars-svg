/**
 * ember-handlebars-svg.js
 * © Ben Lesh 2014 - http://github.com/blesh/ember-handlebars-svg
 * MIT License
 */
(function(Ember, $){
	if(!Ember._metamorphWrapMap) {
		throw new Error('Unable to patch Ember Handlebars, _metamorphWrapMap not found');
	}

	Ember._metamorphSvgTags = ['altGlyph', 'altGlyphDef', 'altGlyphItem', 'animate', 'animateColor', 'animateMotion', 'animateTransform', 'circle', 
	'clipPath', 'color-profile', 'cursor', 'defs', 'desc', 'ellipse', 'feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 
	'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 
	'feFuncR', 'feGaussianBlur', 'feImage', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 
	'feSpotLight', 'feTile', 'feTurbulence', 'filter', 'font', 'font-face', 'font-face-format', 'font-face-name', 'font-face-src', 
	'font-face-uri', 'foreignObject', 'g', 'glyph', 'glyphRef', 'hkern', 'image', 'line', 'linearGradient', 'marker', 'mask', 'metadata', 
	'missing-glyph', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'set', 'stop', 'svg', 'switch', 
	'symbol', 'text', 'textPath', 'title', 'tref', 'tspan', 'use', 'view', 'vkern'];

	Ember._metamorphSvgTags.forEach(function(tag){
		Ember._metamorphWrapMap[tag] = [1, '<svg>', '</svg>'];
	});

	function applyClasses(elem, value, fn) {
		var classes = value.split(' ');
	  $(elem).each(function(){
	  	var item = this;
	  	var i, len, cls;
	  	for(i = 0, len = classes.length; i < len; i++) {
	  		cls = classes[i];
	  		if(cls) {
	    		fn(item, cls);  			
	  		}
	  	}
	  });
	}

	if($) {
		// Modern browsers only for now!
    // Open to pull requests.
		$.fn.addClass = function(value) {
			applyClasses(this, value, function(elem, cls) {
				elem.classList.add(cls);
			});
		  return this;
		};

		$.fn.removeClass = function(value) {
			applyClasses(this, value, function(elem, cls) {
				elem.classList.remove(cls);
			});
		  return this;
		};
	}
}(Ember, jQuery));