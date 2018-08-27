import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {

  constructor(private photosService: PhotosService) { }

  
  onGet(){
    this.photosService.getPhotos()
    .subscribe(
      (photos: any[]) => {
        console.log(photos);
        

      },
      (error) => console.log (error)

    );
  }





 

  ngOnInit() {
  }

}
