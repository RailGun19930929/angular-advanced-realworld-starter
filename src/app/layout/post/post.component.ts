import { PostService } from './../../post.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SingleArticle } from 'src/app/interfaces/single-article';
import { Article } from 'src/app/interfaces/article';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  article: Article;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe((params) => {
        const id = params.get('id');
        console.log(`id = ${id}`);

        this.postService.getArticle(id)
          .subscribe((res: SingleArticle) => {
            console.log(res.article);
            this.article = res.article;
          });
      });
  }

}
