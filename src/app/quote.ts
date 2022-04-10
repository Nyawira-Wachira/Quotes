export class Quote {
    public showDescription: boolean;
    constructor(public text: string,public author: string, public originDate: Date){
      this.showDescription=false;
    }
}
