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

	if($) {
		var addClass = $.fn.addClass;
		var removeClass = $.fn.removeClass;
		var tmp;

		var patchFunction = function(fn) {
			return function(value) {
				var self = this;
				tmp = tmp || document.createElement('div');
				fn.call([tmp], value);
				$(self).attr('class', tmp.className);
				return self;
			}
		}

		$.fn.addClass = patchFunction(addClass);
		$.fn.removeClass = patchFunction(removeClass);
	}
}(Ember, jQuery));