import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'posterPipe'
})
export class PosterPipePipe implements PipeTransform {

  transform( img: string): string {
      let path! : string;
      if( img )  {

       path = `https://image.tmdb.org/t/p/w500${img}`
      }else {
        path = "assets/img/no-image.jpg";
      }

      return path;
  }

}
