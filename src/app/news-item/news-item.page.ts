import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.page.html',
  styleUrls: ['./news-item.page.scss'],
})
export class NewsItemPage implements OnInit {
  article;

  constructor(private newsProvider:NewsService) { }

  ngOnInit() {
    this.article = this.newsProvider.curretArticle;
  }

}
