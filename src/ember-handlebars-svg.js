/**
 * ember-handlebars-svg.js
 * © Ben Lesh 2014 - http://github.com/blesh/ember-handlebars-svg
 * MIT License
 */
(function(Ember){
	if(!Ember._metamorphWrapMap) {
		throw new Error('Unable to patch Ember Handlebars, _metamorphWrapMap not found');
	}

	var tags = 'altglyph altglyphdef altglyphitem animate animatecolor animatemotion animatetransform circle clippath color-profile cursor defs desc ellipse feblend fecolormatrix fecomponenttransfer fecomposite feconvolvematrix fediffuselighting fedisplacementmap fedistantlight feflood fefunca fefuncb fefuncg fefuncr fegaussianblur feimage femerge femergenode femorphology feoffset fepointlight fespecularlighting fespotlight fetile feturbulence filter font font-face font-face-format font-face-name font-face-src font-face-uri foreignobject g glyph glyphref hkern image line lineargradient marker mask metadata missing-glyph mpath path pattern polygon polyline radialgradient rect set stop switch symbol text textpath title tref tspan use view vkern'.split(' ');

	tags.forEach(function(tag) {
		Ember._metamorphWrapMap[tag] = [1, '<svg>', '</svg>'];
	});
}(Ember, jQuery));