import Command from "./commandInterface";
import { Message } from "discord.js";

export class Mixeur implements Command {
  commandNames = ["rachid"];

  help(commandPrefix: string): string {
    return `Use ${commandPrefix}greet to get a greeting.`;
  }

  async run(message: Message): Promise<void> {

    var team=['Mohamed',"Rachid","Mouny",'Carina','JordanD','Tiphaine', 'JordanT','Joshua', 'Maria', 'Morjane', 'Bernard', 'Thibault','Farouk','Marwa', 'Souad','Bart', 'Maxime', 'Youcef','Adlane','Biben']

    function Shuffle(Array:any) {
        for ( let i = Array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = Array[i];
            Array[i] = Array[j];
            Array[j] = temp; 
        }
        let divide= Dispach(Array);
    
        return divide;
    };
    
    function Dispach(Array:any){
        let coup = (Array.length)/2 ;
        let a = Array.slice(0,coup)
        return a
        };
        

    await message.reply(Shuffle(team));
  }
}