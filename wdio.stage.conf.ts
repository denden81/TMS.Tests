var config = require('./wdio.conf.ts').config;

config.baseUrl = 'https://stage.tms.artlogics.ru'
exports.config = config;
