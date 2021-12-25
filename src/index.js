function PlugName() { }

PlugName.prototype.afterLoader = function (config, info) {

    if (/node_modules/.test(info.filepath) && /module\.exports/.test(info.source)) {
        info.source = `

        var module={
            exports:{}
        };
        var exports=module.exports;

        ${info.source}

        export default module.exports;

        `;
    }

    return info;
};

module.exports = PlugName;
