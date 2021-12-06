import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyPlaylistComponent } from './my-playlist/my-playlist.component';
import { MyStatsComponent } from './my-stats/my-stats.component';
import { SharedServiceModule } from './shared-services/shared-service.module';

const routes: Routes = [
  //{ path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'broadcaster/home', component: HomeComponent },
  {
    path: 'broadcaster/login',
    loadChildren: () => import('./login/login.module').then(m => m.loginModule)
  },
  {
    path: 'broadcaster/upload',
    loadChildren: () => import('./upload-songs/upload-songs.module').then(mod => mod.uploadSongsModule)
  },
  {
    path: 'broadcaster/search',
    loadChildren: () => import('./search-music/search.module').then(mod => mod.searchModule)
  },
  { path: 'broadcaster/my-playlist', component: MyPlaylistComponent },
  { path: 'broadcaster/stats', component: MyStatsComponent },

];

@NgModule({
  declarations:[],
  imports: [
    RouterModule.forRoot(routes),
    SharedServiceModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
