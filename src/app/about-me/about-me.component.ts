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
    let toggle = false;

    $(".introBtn").click(function () {


      if (toggle == false) {
        $(".intro").removeClass("d-none");
        $(".intro").show();
        $(".contact").hide();
        $(".introBtn").text("contact")
        $(".introBtn").removeClass("btn-info");
        $(".introBtn").addClass("btn-danger");


        toggle = true;

      } else {
        $(".intro").hide();
        $(".contact").show();
        $(".introBtn").text("Intro")
        $(".introBtn").removeClass("btn-danger");
        $(".introBtn").addClass("btn-info");

        toggle = false;

      }



    })


  }


}


