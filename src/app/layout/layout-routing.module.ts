import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'posts' },
      { path: 'posts', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule) },
      { path: 'post/:id', loadChildren: () => import('./post/post.module').then(m => m.PostModule) },
      { path: 'create', loadChildren: () => import('./create/create.module').then(m => m.CreateModule) },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
