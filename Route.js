import { createServer } from "http";
import { parse } from "url";
export default class Route {
  #get = [];
  #post = [];
  #delete = [];
  #put = [];

  constructor() {
    this.server = createServer((req, res) => {
      const method = req.method.toLowerCase();
      const paredUrl = parse(req.url, true);
      const path = paredUrl.pathname;

      let found = false;

      let routes = null;
      switch (method) {
        case "get":
          routes = this.#get;
          break;
        case "post":
          routes = this.#post;
          break;
        case "delete":
          routes = this.#delete;
          break;
        case "put":
          routes = this.#put;
          break;
        default:
          res.writeHead(405, { "Content-Type": "text/plain" });
          res.end(`Method ${method} not allowed\n`);
          return;
      }

      for (const route of routes) {
        if (route.endpoint === path) {
          found = true;
          req.query = paredUrl.query; // Parse query parameters
          route.callback(req, res);
          break;
        }
      }

      if (!found) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end(`No ${req.method} ${req.url} routes defined\n`);
      }
    });
  }

  
  get(endpoint, callback) {
    if (this.#get.some((route) => route.endpoint === endpoint)) {
      throw new Error(`Endpoint ${endpoint} already exists for GET method`);
    }
    this.#get.push({
      endpoint,
      callback,
    });
  }
  post(endpoint, callback) {
    if (this.#post.some((route) => route.endpoint === endpoint)) {
      throw new Error(`Endpoint ${endpoint} already exists for GET method`);
    }
    this.#post.push({
      endpoint,
      callback,
    });
  }
  put(endpoint, callback) {
    if (this.#put.some((route) => route.endpoint === endpoint)) {
      throw new Error(`Endpoint ${endpoint} already exists for GET method`);
    }
    this.#put.push({
      endpoint,
      callback,
    });
  }
  delete(endpoint, callback) {
    if (this.#delete.some((route) => route.endpoint === endpoint)) {
      throw new Error(`Endpoint ${endpoint} already exists for GET method`);
    }
    this.#delete.push({
      endpoint,
      callback,
    });
  }

  start(port = 3000, callback) {
    this.server.listen(port, callback);
  }
}
