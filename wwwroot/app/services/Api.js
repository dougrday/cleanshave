System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ApiContext, Api;
    function fetchInternal(fetch, options) {
        var request = new Request(options.url, options);
        return fetch(request)
            .then(function (response) {
            if (response.status >= 200 && response.status < 400) {
                return response
                    .json()
                    .then(function (json) { return ({ json: json, response: response }); });
            }
            return Promise.reject(response);
        });
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            /**
             * A context object, used to collect API call parameters and
             * execute the api via window.fetch().
             */
            ApiContext = (function () {
                function ApiContext(fetchFn) {
                    this.$_fetch = fetchFn;
                    this.options = {};
                    this.options.headers = new Headers();
                    this.options.headers.set("Accept", "application/json");
                    this.options.headers.set("Content-Type", "application/json");
                    // Ensure 'this' refers to ApiContext, because JavaScript.
                    this.url = this.url.bind(this);
                    this.method = this.method.bind(this);
                    this.headers = this.headers.bind(this);
                    this.payload = this.payload.bind(this);
                    this.fetch = this.fetch.bind(this);
                    // Alias body() to payload()
                    this.body = this.payload;
                }
                ApiContext.prototype.url = function (url) {
                    this.options.url = url;
                    return this;
                };
                ApiContext.prototype.method = function (method) {
                    if (method) {
                        this.options.method = method.toUpperCase();
                    }
                    else {
                        delete this.options.method;
                    }
                    return this;
                };
                ApiContext.prototype.headers = function (headers) {
                    var keys = Object.keys(headers);
                    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                        var k = keys_1[_i];
                        this.options.headers.set(k, headers[k]);
                    }
                    return this;
                };
                ApiContext.prototype.payload = function (payload) {
                    if (this.method !== "GET") {
                        if (payload) {
                            this.options.body = JSON.stringify(payload);
                        }
                        else {
                            delete this.options.body;
                        }
                    }
                    else {
                        // Map to an array of key-value strings
                        var params_1 = Object.keys(params_1).map(function (k) { return (k + "=" + params_1[k]); });
                        var hasParams = this.url.indexOf("?");
                        this.url = this.url + (hasParams ? "&" : "?") + params_1;
                    }
                    return this;
                };
                ApiContext.prototype.fetch = function () {
                    return fetchInternal(this.$_fetch, this.options);
                };
                return ApiContext;
            }());
            /**
             * A simple REST API class, used to prepare and execute API calls.
             */
            Api = (function () {
                function Api() {
                    this.$_fetch = window.fetch;
                    this.get = this.get.bind(this);
                    this.post = this.post.bind(this);
                    this.put = this.put.bind(this);
                    this.delete = this.delete.bind(this);
                }
                Object.defineProperty(Api.prototype, "fetch", {
                    set: function (fn) {
                        this.$_fetch = fn;
                    },
                    enumerable: true,
                    configurable: true
                });
                Api.prototype.get = function (url) {
                    return new ApiContext(this.$_fetch).url(url).method("GET");
                };
                Api.prototype.patch = function (url) {
                    return new ApiContext(this.$_fetch).url(url).method("PATCH");
                };
                Api.prototype.post = function (url) {
                    return new ApiContext(this.$_fetch).url(url).method("POST");
                };
                Api.prototype.put = function (url) {
                    return new ApiContext(this.$_fetch).url(url).method("PUT");
                };
                Api.prototype.delete = function (url) {
                    return new ApiContext(this.$_fetch).url(url).method("DELETE");
                };
                Api = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], Api);
                return Api;
            }());
            exports_1("Api", Api);
        }
    }
});
//# sourceMappingURL=Api.js.map