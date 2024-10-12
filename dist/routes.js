"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes = (0, express_1.Router)();
const link = [];
routes.get('/', (request, response) => {
    response.status(200).send(link);
});
routes.post('/', (request, response) => {
    const { title, url } = request.body;
    const linke = {
        title,
        url,
        id: link.length ? link[link.length - 1].id + 1 : 1
    };
    link.push(linke);
    response.status(201).send(linke);
});
routes.put('/:id', (request, response) => {
    const { title, url } = request.body;
    const index = link.findIndex((link) => link.id === parseInt(request.params.id));
    const modfiedLink = {
        title,
        url,
        id: request.params.id
    };
    link[index] = modfiedLink;
    response.status(200).send(modfiedLink);
});
routes.delete('/:id', (request, response) => {
    const index = link.findIndex((link) => link.id === parseInt(request.params.id));
    link.splice(index, 1);
    response.status(200).send(link);
});
exports.default = routes;
