import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  title: string;

  constructor(private router: Router, private metaTitle: Title, private metaData: Meta) {
    this.getRouterData().subscribe(event => {
      this.title = event.title;
      this.metaTitle.setTitle(this.title);

      const metaTag: MetaDefinition = {
        name: `description`,
        content: this.title
      };
      this.metaData.updateTag(metaTag);
    });
  }

  ngOnInit() {
  }

  getRouterData() {
    return this.router.events.pipe(
      filter(event => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)
    );
  }

}
