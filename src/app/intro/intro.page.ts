import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slides = [
    {
      title: "Rock",
      img: "https://dbdzm869oupei.cloudfront.net/img/photomural/preview/69854.png",
      icon: "beer-outline",
      description: "Descubre el poder del rock and roll. Sumérgete en su energía, rebeldía y pasión. Abre tus oídos y déjate llevar por la música que trasciende barreras y libera emociones. ¡El rock and roll te espera!" 
    },
    {
      title: "Salsa",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj59peF7sVQk42Y4lz8JcCGXo2bgUr7_uZPQ&usqp=CAU",
      description: "Déjate seducir por el ritmo apasionado y contagioso de la salsa. Descubre un mundo de alegría, pasión y movimiento. La salsa es más que un género musical, es una invitación a bailar y disfrutar al máximo. Abre tus sentidos y déjate llevar por los irresistibles ritmos y melodías que te transportarán a la pista de baile. ¡La salsa te espera para que te entregues al goce de su cadencia y te sumerjas en su magia!" 
    },
    {
      title: "Electronica",
      img: "https://johanycarloshome.files.wordpress.com/2019/01/fotolia45452813subscriptionmonthlyl21700x467-1200x800.jpg?w=1024",
      icon: "beer-outline",
      description: "Sumérgete en el emocionante mundo de la música electrónica. Deja que sus pulsaciones te lleven a un estado de euforia y te transporten a una experiencia sensorial única. ¡Baila y disfruta al máximo con la música electrónica!" 
    },
    {
      title: "Reggaeton",
      img: "https://www.billboard.com/wp-content/uploads/2021/06/Reggaeton-Jhay-Cortez-Wisin-Jowell-Randy-Rauw-Alejandro-Bad-Bunny-billboard-1500-1623162307.jpg",
      icon: "beer-outline",
      description: "Sumérgete en el vibrante mundo del reguetón. Deja que su ritmo caliente y sus letras provocativas te lleven a un estado de pura diversión y euforia. ¡Baila y disfruta al máximo con el reguetón!" 
    },
    {
      title: "Jazz",
      img: "https://img.asmedia.epimg.net/resizer/RT3pltRj4HONPeicqvzXBLmp6gs=/1472x828/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/MSCTCGE2DVPMBLWSE6UXMEV2UA.jpg",
      icon: "beer-outline",
      description: "Explora el fascinante mundo del jazz. Disfruta su elegancia, improvisación y melodías suaves. Déjate llevar por la magia del jazz y su expresión musical única." 
    }
  ]

  constructor(private router: Router, private storage: Storage) { }

  ngOnInit() {
  }

  finish() {
    this.storage.set("introShow", true);
    this.router.navigateByUrl("/home");
  }

}
