function PlugName() { }

PlugName.prototype.afterLoader = function (config, info) {

    return info;
};

module.exports = PlugName;
