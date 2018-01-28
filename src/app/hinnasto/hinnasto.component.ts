import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Palvelu, PalvelutService } from '../cards/palvelut.service';

@Component({
  selector: 'hinnasto',
  template: `
    <outlet-container>
      <hinnat></hinnat>
      <peruutus></peruutus>
      <ajanvaraus></ajanvaraus>
    </outlet-container>
  `
})
export class Hinnasto implements OnInit {

  constructor(private meta: Meta, private title: Title, private palvelutService: PalvelutService) {
    this.title.setTitle('Hinnasto - Hieroja Minna Kauppinen');
    let palvelut = this.palvelutService.get();
    let description = 'Hierontahinnat alkaen ' + palvelut[0].hinta + '€ - ' + palvelut[0].kesto + 'min.'
    + ' Ajanvaraus numerosta 050 5477 811.';
    this.meta.updateTag({ name: 'description', content: description });
    
}
  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
