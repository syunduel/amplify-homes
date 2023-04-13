"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlchemyMultichainClient = void 0;
var alchemy_sdk_1 = require("alchemy-sdk");
/**
 * This is a wrapper around the Alchemy class that allows you to use the same
 * Alchemy object to make requests to multiple networks using different
 * settings.
 *
 * When instantiating this class, you can pass in an `AlchemyMultiChainSettings`
 * object to apply the same settings to all networks. You can also pass in an
 * optional `overrides` object to apply different settings to specific
 * networks.
 */
var AlchemyMultichainClient = /** @class */ (function () {
    /**
     * @param settings The settings to use for all networks.
     * @param overrides Optional settings to use for specific networks.
     */
    function AlchemyMultichainClient(settings, overrides) {
        /**
         * Lazy-loaded mapping of `Network` enum to `Alchemy` instance.
         *
         * @private
         */
        this.instances = new Map();
        this.settings = settings;
        this.overrides = overrides;
    }
    /**
     * Returns an instance of `Alchemy` for the given `Network`.
     *
     * @param network
     */
    AlchemyMultichainClient.prototype.forNetwork = function (network) {
        return this.loadInstance(network);
    };
    /**
     * Checks if an instance of `Alchemy` exists for the given `Network`. If not,
     * it creates one and stores it in the `instances` map.
     *
     * @private
     * @param network
     */
    AlchemyMultichainClient.prototype.loadInstance = function (network) {
        if (!this.instances.has(network)) {
            // Use overrides if they exist -- otherwise use the default settings.
            var alchemySettings = this.overrides && this.overrides[network]
                ? __assign(__assign({}, this.overrides[network]), { network: network }) : __assign(__assign({}, this.settings), { network: network });
            this.instances.set(network, new alchemy_sdk_1.Alchemy(alchemySettings));
        }
        return this.instances.get(network);
    };
    return AlchemyMultichainClient;
}());
exports.AlchemyMultichainClient = AlchemyMultichainClient;
