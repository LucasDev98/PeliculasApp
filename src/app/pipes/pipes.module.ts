import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PosterPipePipe } from './poster-pipe.pipe';



@NgModule({
  declarations: [
    PosterPipePipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PosterPipePipe
  ]
})
export class PipesModule { }
