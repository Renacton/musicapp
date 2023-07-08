import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slides = [
    {
      title: "Titulo Uno",
      img: "https://www.zooplus.es/magazine/wp-content/uploads/2021/06/Lombrices-en-gatitos.jpg",
      icon: "beer-outline",
      description: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas , las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum." 
    },
    {
      title: "Titulo Dos",
      img: "https://www.lifewire.com/thmb/fxbUeZKA7CCXMuHZ2VY-ro_kFLw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/ScreenShot2020-04-20at10.06.28AM-69855f4797cb4be4bbed72f51dff1ab5.jpg",
      description: "Hola soy la explicacion del slide, Hola soy la explicacion del slide" 
    },
    {
      title: "Titulo Tres",
      img: "https://www.zooplus.es/magazine/wp-content/uploads/2021/06/Lombrices-en-gatitos.jpg",
      icon: "beer-outline",
      description: "Hola soy la explicacion del slide, Hola soy la explicacion del slide" 
    }
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  finish() {
    this.router.navigateByUrl("/home")
  }

}
