import { Component } from "@angular/core";

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent{
    public names: string[] = ['Html',' CSS' ,'JavaScript','TypeScript'];
    public colors: string[] = ['blueviolet','mediumseagreen', 'lightcyan','pink','violet'];
    selectedColor:string = ''
    isShow: boolean = true;
    public result: string[] = [];
    selectedUser = '';
  
    constructor() { }
    onSelect(ind: number): void {
      this.isShow = false;
      if(ind === 0){
        this.names = this.names.splice(1)
      }else{
        this.names = this.names.splice(0,ind).concat(this.names.splice(1, this.names.length))
      }
    }
    onChangeColor(name: string,ind: number){
        if(this.result.length === this.colors.length){
            return;
        }
        let index = Math.floor(Math.random() * this.colors.length);
        while (this.result.includes(this.colors[index])) {
            index = Math.floor(Math.random() * this.colors.length);
        }
        this.result.shift();
        this.result.push(this.colors[index]);
        this.selectedColor = this.colors[index]
        this.selectedUser = name;
        return this.colors[index];
    }
}