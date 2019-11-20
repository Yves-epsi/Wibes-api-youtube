const log4js = require('log4js');

//Ecrire en log
exports.writeLog = function(text, category = "Wibes", level = "INFO"){
    log4js.configure({
        appenders: { writer: { type: 'file', filename: './logs/log.txt' } },
        categories: { default: { appenders: ['writer'], level: level } }
    });
    var logger = log4js.getLogger(category);
    logger.log(level, text);
};
