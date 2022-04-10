export class Quote {
    public showDescription: boolean;
    constructor(public id: number ,public text: string,public author: string){
      this.showDescription=false;
    }
}
