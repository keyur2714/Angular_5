import { IQuestion } from './IQuestion';

export class BigdataQuestion extends IQuestion{
    askQuestion():string{
        return "What is BigData?";
    }
}