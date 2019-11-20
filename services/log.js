const log4js = require('log4js');
const alert = require('./mail');

//Logger tout les évènements de l'application.
exports.writeLog = function(text, category = "Wibes", level = "INFO"){
    log4js.configure({
        appenders: { writer: { type: 'file', filename: './logs/log.txt' } },
        categories: { default: { appenders: ['writer'], level: level } }
    });
    var logger = log4js.getLogger(category);

    logger.log(level, text);
    //S'il s'agit d'une erreur : Envoyer un mail (Alerting Applicatif)
    if(level === "ERROR"){
        alert.send("ERREUR WIBES", "ERREUR WIBES ATTENTION");
    }
};