/* eslint-disable */
var renderToString;
try {
	const mod = require('preact-render-to-string');
	renderToString = mod.default || mod.renderToString || mod;
} catch (e) {
	throw Error(
		'renderToString() error: missing "preact-render-to-string" dependency.'
	);
}

exports.renderToString = renderToString;
exports.renderToStaticMarkup = renderToString;
