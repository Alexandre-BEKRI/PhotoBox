'use strict';

import photoloader from "./lib/photoloader.js";

function getPicture(id: string | number): void {
    /* TODO */
}

const id = window.location.hash ? window.location.hash.substring(1) : 105;

getPicture(id);
