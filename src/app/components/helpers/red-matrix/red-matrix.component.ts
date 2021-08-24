import {Component, ElementRef, ViewChild, OnInit, AfterViewInit} from '@angular/core';


@Component({
  selector: 'app-red-matrix',
  templateUrl: './red-matrix.component.html',
  styleUrls: ['./red-matrix.component.scss']
})
export class RedMatrixComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;

  private ctx: CanvasRenderingContext2D | null;

  public lunared = "0010 0101 01010 1010101 01011101110 1 000 1110 100  10 101010";
  private lunaredarray: Array<any>;
  public font_size: number = 10;
  public columns: number;

  //an array of drops - one per column
  public drops: Array<any> = [];

  private matrixWidth: any;
  private matrixHeight: any;

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext("2d")!;
  }


  ngAfterViewInit () {
    //converting the string into an array of single characters
    this.lunaredarray = this.lunared.split("");
    //making the canvas full screen
    this.matrixHeight = window.innerHeight;
    this.matrixWidth = window.innerWidth;


    this.columns = this.matrixWidth/this.font_size; //number of columns for the rain

    //x below is the x coordinate
    //1 = y co-ordinate of the drop(same for every drop initially)
    for(let x = 0; x < this.columns; x++)
      this.drops[x] = 1;

    //drawing the characters
    setInterval(() => this.doit(), 33)
  }

  doit () {
    //Black BG for the canvas
    //translucent BG to show trail
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    this.ctx.fillRect(0, 0, this.matrixWidth, this.matrixHeight);

    this.ctx.fillStyle = "#ff110a"; //green text
    this.ctx.font = this.font_size + "px arial";

    //looping over drops
    for (let i = 0; i < this.drops.length; i++) {
      //a random chinese character to print
      let text = this.lunaredarray[Math.floor(Math.random() * this.lunared.length)];

      this.ctx.fillText(text, i * this.font_size, this.drops[i] * this.font_size);

      //sending the drop back to the top randomly after it has crossed the screen
      //adding a randomness to the reset to make the drops scattered on the Y axis
      if (this.drops[i] * this.font_size > this.matrixHeight && Math.random() > 0.975) {
        this.drops[i] = 0;
      }

      //incrementing Y coordinate
      this.drops[i]++;
    }
  }

}
