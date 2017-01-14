var main=require("./main");
var CronJob =  require('cron').CronJob;   //定时执行程序
new CronJob('00 */53 * * * *', function() {
    main();
}, null, true, 'America/Los_Angeles');
