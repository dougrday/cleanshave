import {Injectable} from 'angular2/core';

function fetchInternal(fetch, options) {
    const request = new Request(options.url, options);
    return fetch(request)
        .then(response => {
            if (response.status >= 200 && response.status < 400) {
                return response
                    .json()
                    .then(json => ({ json, response }));
            }
            return Promise.reject(response);
        });
}

/**
 * A context object, used to collect API call parameters and
 * execute the api via window.fetch().
 */
class ApiContext {
    constructor(fetchFn) {
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

    url(url) {
        this.options.url = url;
        return this;
    }

    method(method) {
        if (method) {
            this.options.method = method.toUpperCase();
        }
        else {
            delete this.options.method;
        }
        return this;
    }

    headers(headers) {
        const keys = Object.keys(headers);
        for (let k of keys) {
            this.options.headers.set(k, headers[k]);
        }
        return this;
    }

    payload(payload) {
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
            const params = Object.keys(params).map(k => `${k}=${params[k]}`);
            const hasParams = this.url.indexOf("?");
            this.url = this.url + (hasParams ? "&" : "?") + params;
        }
        return this;
    }

    fetch() {
        return fetchInternal(this.$_fetch, this.options);
    }
}

/**
 * A simple REST API class, used to prepare and execute API calls.
 */
@Injectable()
export class Api {
    constructor() {
        this.$_fetch = window.fetch;

        this.get = this.get.bind(this);
        this.post = this.post.bind(this);
        this.put = this.put.bind(this);
        this.delete = this.delete.bind(this);
    }

    set fetch(fn) {
        this.$_fetch = fn;
    }

    get(url) {
        return new ApiContext(this.$_fetch).url(url).method("GET");
    }

    patch(url) {
        return new ApiContext(this.$_fetch).url(url).method("PATCH");
    }

    post(url) {
        return new ApiContext(this.$_fetch).url(url).method("POST");
    }

    put(url) {
        return new ApiContext(this.$_fetch).url(url).method("PUT");
    }

    delete(url) {
        return new ApiContext(this.$_fetch).url(url).method("DELETE");
    }
}
