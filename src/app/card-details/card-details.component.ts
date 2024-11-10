import { Component, inject, Input, OnInit } from "@angular/core";
import {
  NgxGalleryAnimation,
  NgxGalleryImage,
  NgxGalleryOptions,
} from "ngx-gallery";
import { LoadPropertysService } from "../shared/services/load-propertys.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-card-details",
  templateUrl: "./card-details.component.html",
  styleUrls: ["./card-details.component.scss"],
})
export class CardDetailsComponent implements OnInit {
  data: any;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  private currentId: string;

  constructor(
    private loadDataService: LoadPropertysService,
    private route: ActivatedRoute
  ) {
    this.currentId = this.route.snapshot.params.id;
  }

  ngOnInit() {
    this.loadData();
    this.galleryOptions = [
      {
        width: "85%",
        height: "450px",
        thumbnailsColumns: 5,
        thumbnailsRows: 1,
        imageArrowsAutoHide: true,
        thumbnailsArrowsAutoHide: true,
        thumbnailsMoveSize: 1,
        thumbnailsRemainingCount: true,
        previewCloseOnEsc: true,
        arrowPrevIcon: "fa fa-chevron-circle-left",
        arrowNextIcon: "fa fa-chevron-circle-right",
        imageAnimation: NgxGalleryAnimation.Slide,
      },

      // max-width 800
      {
        breakpoint: 800,
        width: "50%",
        height: "300px",
        imagePercent: 80,
      },
      // max-width 400
      {
        breakpoint: 300,
        preview: false,
      },
    ];
    this.galleryImages = [
      {
        small:
          "assets/img/casasanj/sala3-Casasan jose-hospedaje-santamarta-colombia.jpg",
        medium:
          "assets/img/casasanj/sala3-Casasan jose-hospedaje-santamarta-colombia.jpg", //fachada
        big: "assets/img/casasanj/sala3-Casasan jose-hospedaje-santamarta-colombia.jpg",
      },
      {
        small:
          "assets/img/casasanj/sala2-Casasan jose-hospedaje-santamarta-colombia.jpg",
        medium:
          "assets/img/casasanj/sala2-Casasan jose-hospedaje-santamarta-colombia.jpg", //sala
        big: "assets/img/casasanj/sala2-Casasan jose-hospedaje-santamarta-colombia.jpg",
      },
      {
        small:
          "assets/img/casasanj/habita1-Casasan jose-hospedaje-santamarta-colombia.jpg",
        medium:
          "assets/img/casasanj/habita1-Casasan jose-hospedaje-santamarta-colombia.jpg", //hab
        big: "assets/img/casasanj/habita1-Casasan jose-hospedaje-santamarta-colombia.jpg",
      },
      {
        small:
          "assets/img/casasanj/habita2-Casasan jose-hospedaje-santamarta-colombia.jpg",
        medium:
          "assets/img/casasanj/habita2-Casasan jose-hospedaje-santamarta-colombia.jpg", //hab
        big: "assets/img/casasanj/habita2-Casasan jose-hospedaje-santamarta-colombia.jpg",
      },
      {
        small:
          "assets/img/casasanj/habitacion-Casasan jose-hospedaje-santamarta-colombia.jpg",
        medium:
          "assets/img/casasanj/habitacion-Casasan jose-hospedaje-santamarta-colombia.jpg", //hab
        big: "assets/img/casasanj/habitacion-Casasan jose-hospedaje-santamarta-colombia.jpg",
      },
      {
        small:
          "assets/img/casasanj/habitacion3-Casasan jose-hospedaje-santamarta-colombia.jpg",
        medium:
          "assets/img/casasanj/habitacion3-Casasan jose-hospedaje-santamarta-colombia.jpg", //hab
        big: "assets/img/casasanj/habitacion3-Casasan jose-hospedaje-santamarta-colombia.jpg",
      },

      {
        small:
          "assets/img/casasanj/sala2-Casasan jose-hospedaje-santamarta-colombia.jpg",
        medium:
          "assets/img/casasanj/sala2-Casasan jose-hospedaje-santamarta-colombia.jpg", //baño
        big: "assets/img/casasanj/sala2-Casasan jose-hospedaje-santamarta-colombia.jpg",
      },
      {
        small:
          "assets/img/casasanj/sala3-Casasan jose-hospedaje-santamarta-colombia.jpg",
        medium:
          "assets/img/casasanj/sala3-Casasan jose-hospedaje-santamarta-colombia.jpg", //baño
        big: "assets/img/casasanj/sala3-Casasan jose-hospedaje-santamarta-colombia.jpg",
      },
    ];
  }

  loadData() {
    this.loadDataService.getPhotos().subscribe(
      (res) => {
        res.filter((item) => {
          if (item.title == this.currentId) {
            this.data = item;
          }
        });
      },
      (err) => console.log(err)
    );
  }
}
