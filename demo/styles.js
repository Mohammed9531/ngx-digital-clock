(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\n/*-------------------------\n\tSimple reset\n--------------------------*/\n* {\n  margin: 0;\n  padding: 0; }\n/*-------------------------\n\tGeneral Styles\n--------------------------*/\nhtml {\n  overflow: hidden; }\nbody {\n  font: 15px/1.3 Arial, sans-serif;\n  color: #4f4f4f;\n  z-index: 1;\n  background: #1c536f; }\na, a:visited {\n  outline: none;\n  color: #389dc1; }\na:hover {\n  text-decoration: none; }\nsection, footer, header, aside {\n  display: block; }\n/*-------------------------\n\tThe clocks\n--------------------------*/\n#clock {\n  width: 370px;\n  padding: 40px;\n  margin: 200px auto 60px;\n  position: relative; }\n#clock:after {\n  content: '';\n  position: absolute;\n  width: 400px;\n  height: 20px;\n  border-radius: 100%;\n  left: 50%;\n  margin-left: -200px;\n  bottom: 2px;\n  z-index: -1; }\n#clock .display {\n  text-align: center;\n  padding: 40px 20px 20px;\n  border-radius: 6px;\n  position: relative;\n  height: 54px; }\n/*-------------------------\n\tLight color theme\n--------------------------*/\n#clock.light {\n  background-color: #f3f3f3;\n  color: #272e38; }\n#clock.light:after {\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15); }\n#clock.light .digits div span {\n  background-color: #272e38;\n  border-color: #272e38; }\n#clock.light .digits div.dots:before,\n#clock.light .digits div.dots:after {\n  background-color: #272e38; }\n#clock.light .display {\n  background-color: #dddddd;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08) inset, 0 1px 1px #fafafa; }\n/*-------------------------\n\tDark color theme\n--------------------------*/\n#clock.dark {\n  background-color: #272e38;\n  color: #cacaca; }\n#clock.dark:after {\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); }\n#clock.dark .digits div span {\n  background-color: #cacaca;\n  border-color: #cacaca; }\n#clock.dark .display {\n  background-color: #0f1620;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08) inset, 0 1px 1px #2d3642; }\n#clock.dark .digits div.dots:before,\n#clock.dark .digits div.dots:after {\n  background-color: #cacaca; }\n/*-------------------------\n\tThe Digits\n--------------------------*/\n#clock .digits div {\n  text-align: left;\n  position: relative;\n  width: 28px;\n  height: 50px;\n  display: inline-block;\n  margin: 0 4px; }\n#clock .digits div span {\n  opacity: 0;\n  position: absolute;\n  transition: 0.25s; }\n#clock .digits div span:before,\n#clock .digits div span:after {\n  content: '';\n  position: absolute;\n  width: 0;\n  height: 0;\n  border: 5px solid transparent; }\n#clock .digits .d1 {\n  height: 5px;\n  width: 16px;\n  top: 0;\n  left: 6px; }\n#clock .digits .d1:before {\n  border-width: 0 5px 5px 0;\n  border-right-color: inherit;\n  left: -5px; }\n#clock .digits .d1:after {\n  border-width: 0 0 5px 5px;\n  border-left-color: inherit;\n  right: -5px; }\n#clock .digits .d2 {\n  height: 5px;\n  width: 16px;\n  top: 24px;\n  left: 6px; }\n#clock .digits .d2:before {\n  border-width: 3px 4px 2px;\n  border-right-color: inherit;\n  left: -8px; }\n#clock .digits .d2:after {\n  border-width: 3px 4px 2px;\n  border-left-color: inherit;\n  right: -8px; }\n#clock .digits .d3 {\n  height: 5px;\n  width: 16px;\n  top: 48px;\n  left: 6px; }\n#clock .digits .d3:before {\n  border-width: 5px 5px 0 0;\n  border-right-color: inherit;\n  left: -5px; }\n#clock .digits .d3:after {\n  border-width: 5px 0 0 5px;\n  border-left-color: inherit;\n  right: -5px; }\n#clock .digits .d4 {\n  width: 5px;\n  height: 14px;\n  top: 7px;\n  left: 0; }\n#clock .digits .d4:before {\n  border-width: 0 5px 5px 0;\n  border-bottom-color: inherit;\n  top: -5px; }\n#clock .digits .d4:after {\n  border-width: 0 0 5px 5px;\n  border-left-color: inherit;\n  bottom: -5px; }\n#clock .digits .d5 {\n  width: 5px;\n  height: 14px;\n  top: 7px;\n  right: 0; }\n#clock .digits .d5:before {\n  border-width: 0 0 5px 5px;\n  border-bottom-color: inherit;\n  top: -5px; }\n#clock .digits .d5:after {\n  border-width: 5px 0 0 5px;\n  border-top-color: inherit;\n  bottom: -5px; }\n#clock .digits .d6 {\n  width: 5px;\n  height: 14px;\n  top: 32px;\n  left: 0; }\n#clock .digits .d6:before {\n  border-width: 0 5px 5px 0;\n  border-bottom-color: inherit;\n  top: -5px; }\n#clock .digits .d6:after {\n  border-width: 0 0 5px 5px;\n  border-left-color: inherit;\n  bottom: -5px; }\n#clock .digits .d7 {\n  width: 5px;\n  height: 14px;\n  top: 32px;\n  right: 0; }\n#clock .digits .d7:before {\n  border-width: 0 0 5px 5px;\n  border-bottom-color: inherit;\n  top: -5px; }\n#clock .digits .d7:after {\n  border-width: 5px 0 0 5px;\n  border-top-color: inherit;\n  bottom: -5px; }\n/* 1 */\n#clock .digits div.one .d5,\n#clock .digits div.one .d7 {\n  opacity: 1; }\n/* 2 */\n#clock .digits div.two .d1,\n#clock .digits div.two .d5,\n#clock .digits div.two .d2,\n#clock .digits div.two .d6,\n#clock .digits div.two .d3 {\n  opacity: 1; }\n/* 3 */\n#clock .digits div.three .d1,\n#clock .digits div.three .d5,\n#clock .digits div.three .d2,\n#clock .digits div.three .d7,\n#clock .digits div.three .d3 {\n  opacity: 1; }\n/* 4 */\n#clock .digits div.four .d5,\n#clock .digits div.four .d2,\n#clock .digits div.four .d4,\n#clock .digits div.four .d7 {\n  opacity: 1; }\n/* 5 */\n#clock .digits div.five .d1,\n#clock .digits div.five .d2,\n#clock .digits div.five .d4,\n#clock .digits div.five .d3,\n#clock .digits div.five .d7 {\n  opacity: 1; }\n/* 6 */\n#clock .digits div.six .d1,\n#clock .digits div.six .d2,\n#clock .digits div.six .d4,\n#clock .digits div.six .d3,\n#clock .digits div.six .d6,\n#clock .digits div.six .d7 {\n  opacity: 1; }\n/* 7 */\n#clock .digits div.seven .d1,\n#clock .digits div.seven .d5,\n#clock .digits div.seven .d7 {\n  opacity: 1; }\n/* 8 */\n#clock .digits div.eight .d1,\n#clock .digits div.eight .d2,\n#clock .digits div.eight .d3,\n#clock .digits div.eight .d4,\n#clock .digits div.eight .d5,\n#clock .digits div.eight .d6,\n#clock .digits div.eight .d7 {\n  opacity: 1; }\n/* 9 */\n#clock .digits div.nine .d1,\n#clock .digits div.nine .d2,\n#clock .digits div.nine .d3,\n#clock .digits div.nine .d4,\n#clock .digits div.nine .d5,\n#clock .digits div.nine .d7 {\n  opacity: 1; }\n/* 0 */\n#clock .digits div.zero .d1,\n#clock .digits div.zero .d3,\n#clock .digits div.zero .d4,\n#clock .digits div.zero .d5,\n#clock .digits div.zero .d6,\n#clock .digits div.zero .d7 {\n  opacity: 1; }\n/* The dots */\n#clock .digits div.dots {\n  width: 5px; }\n#clock .digits div.dots:before,\n#clock .digits div.dots:after {\n  width: 5px;\n  height: 5px;\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 14px; }\n#clock .digits div.dots:after {\n  top: 34px; }\n/*-------------------------\n\tThe Alarm\n--------------------------*/\n#clock .alarm {\n  width: 16px;\n  height: 16px;\n  bottom: 20px;\n  position: absolute;\n  opacity: 0.2; }\n#clock .alarm.active {\n  opacity: 1; }\n/*-------------------------\n\tWeekdays\n--------------------------*/\n#clock .weekdays {\n  font-size: 12px;\n  position: absolute;\n  width: 100%;\n  top: 10px;\n  left: 0;\n  text-align: center; }\n#clock .weekdays span {\n  opacity: 0.2;\n  padding: 0 10px; }\n#clock .weekdays span.active {\n  opacity: 1; }\n/*-------------------------\n\t\tAM/PM\n--------------------------*/\n#clock .ampm {\n  position: absolute;\n  bottom: 20px;\n  right: 20px;\n  font-size: 12px; }\n/*-------------------------\n\t\tButton\n--------------------------*/\n.button-holder {\n  text-align: center;\n  padding-bottom: 100px; }\na.button {\n  background-color: #f6a7b3;\n  border: 1px solid #eb9ba7;\n  border-radius: 2px;\n  box-shadow: 0 2px 2px #ccc;\n  color: #fff;\n  text-decoration: none !important;\n  padding: 15px 20px;\n  display: inline-block;\n  cursor: pointer; }\na.button:hover {\n  opacity: 0.9; }\n"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/raw-loader!../node_modules/postcss-loader/lib??embedded!../node_modules/sass-loader/lib/loader.js??ref--14-3!./styles.scss */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/c000801/eclipse-workspace/ngx-digital-clock/src/styles.scss */"./src/styles.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map