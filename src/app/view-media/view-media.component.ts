import { MediaService } from './../services/media.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-view-media',
  templateUrl: './view-media.component.html',
  styleUrls: ['./view-media.component.scss']
})
export class ViewMediaComponent implements OnInit {

  private image: any = [];


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private mediaService: MediaService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      console.log(params);

      this.mediaService.getMediaFile(params.fileid).subscribe(
        res => {
          console.log(res);
          this.image = res;
        }
      );
    });

  }

}
