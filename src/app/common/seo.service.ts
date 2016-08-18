import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { getDOM } from '@angular/platform-browser/src/dom/dom_adapter';

/*
 * Based on http://blog.devcross.net/2016/03/20/angular-2-seo/
 */

@Injectable()
export class SeoService {

  constructor(private titleService: Title) {
  }

  public getTitle(): string {
    return this.titleService.getTitle();
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  public getMetaDescription(): string {
    let attribute: string;
    let element = this.getMetaDescriptionElement();
    if (element) {
      attribute = element.getAttribute('content');
    }
    return attribute;
  }

  public setMetaDescription(description: string) {
    let element = this.getMetaDescriptionElement();

    if (element) {
      element.setAttribute('content', description);
    }
  }

  private getMetaDescriptionElement(): HTMLElement {
    return this.getOrCreateMetaElement('description');
  }

  private getHeadElement(): HTMLElement {
    let dom = getDOM();
    let element: HTMLElement;
    if (dom) {
      element = dom.query('head');
    }
    return element;
  }

  private getOrCreateMetaElement(name: string): HTMLElement {
    let el: HTMLElement;
    let dom = getDOM();
    let headElement = this.getHeadElement();
    if (dom && headElement) {
      el = dom.query('meta[name=' + name + ']');
      if (el === null) {
        el = dom.createElement('meta');
        el.setAttribute('name', name);
        headElement.appendChild(el);
      }
    }
    return el;
  }

}
