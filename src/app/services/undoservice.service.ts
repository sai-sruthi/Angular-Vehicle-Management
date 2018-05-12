import { Injectable } from '@angular/core';

@Injectable()
export class UndoserviceService {
undoaction:string="";
undoflag:boolean=false;
  constructor() { }

setundo(lastaction){
  this.undoaction=lastaction;
}

getundo(){
  return this.undoaction;
}

setflag(){
  this.undoflag=true;
}

setflagfalse(){
  this.undoflag=false;
}
getflag(){
  return this.undoflag;
}

}
