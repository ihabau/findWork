import { Component, OnInit } from '@angular/core';

declare var $: any;


@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {


  constructor() { }

  ngOnInit() {


    $(".introBtn").click(function () {
      $(".contact").fadeOut("slow", function () {
        $(".intro").removeClass("d-none");
        $(".intro").fadeIn("slow");
      });

    })

    $(".edBtn").click(function () {
      $(".education").fadeOut("slow", function () {
        $(".contact").fadeIn("slow");
      });

    })

    $(".infoBtn").click(function () {
      $(".intro").fadeOut("slow", function () {
        $(".education").removeClass("d-none");

        $(".education").fadeIn("slow");
      });

      $(".contact").fadeOut("slow", function () {
        $(".education").removeClass("d-none");

        $(".education").fadeIn("slow");
      });
    })
  }
}


