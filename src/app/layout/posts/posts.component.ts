import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/article';
import { Articles } from 'src/app/interfaces/articles';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  articles: Article[];

  constructor(
    private postService: PostService,
  ) { }

  ngOnInit(): void {
    this.postService.getArticles()
    .subscribe((res: Articles) => {
      console.log(res.articles);
      this.articles = res.articles;
    });
  }

}
