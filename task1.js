ctx.prototype.__processStyleKeys = function(callback, styleState) {
    var keys = Object.keys(styleState), i, key;
    for (i = 0; i < keys.length; i++) {
        key = keys[i];
        callback.call(this, key);
    }
};



ctx.prototype.__applyStyleState = function (styleState) {
    this.__processStyleKeys(function(key) {
        this[key] = styleState[key];
    }, styleState);
};


ctx.prototype.__setDefaultStyles = function () {
    ctx.prototype.__applyStyleState(STYLES);
};

ctx.prototype.__getStyleState = function () {
    var styleState = {};
    this.__processStyleKeys(function(key) {
        styleState[key] = this[key];
    }, STYLES);
    return styleState;
};
