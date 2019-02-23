export class LoggingService{
    logInfo(msg:string){
        console.log("Info: "+msg);
    }
    logDebug(msg:string){
        console.log("Debug: "+msg);
    }
    logError(msg:string){
        console.log("Error: "+msg);
    }
    logWarn(msg:string){
        console.log("Warn: "+msg);
    }
}