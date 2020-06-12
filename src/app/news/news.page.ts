import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  data:any;

  constructor(private newsProvider:NewsService,private router:Router) { }

  ngOnInit() {
    this.newsProvider.getData('top-headlines?country=us&category=business').subscribe(data=>{
      this.data = data;
    });
  }

  onNewsClicked(article){
    this.newsProvider.curretArticle = article;
    this.router.navigate(['/news-item']);
  }

}
