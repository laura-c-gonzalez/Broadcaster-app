import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UploadSongsComponent } from './upload-songs/upload-songs.component';
import { SearchMusicComponent } from './search-music/search-music.component';
import { MyPlaylistComponent } from './my-playlist/my-playlist.component';
import { MyStatsComponent } from './my-stats/my-stats.component';
import { RegistrationComponent } from './login/registration/registration.component';
import { UploadFormComponent } from './upload-songs/upload-form/upload-form.component';
import { EditSongFormComponent } from './upload-songs/edit-song-form/edit-song-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule, registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { OnlyOneErrorPipe } from './pipes/only-one-error.pipe';
import { AuthStore } from './shared-services/auth-store/auth-store';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UploadSongsComponent,
    SearchMusicComponent,
    MyPlaylistComponent,
    MyStatsComponent,
    RegistrationComponent,
    UploadFormComponent,
    EditSongFormComponent,
    OnlyOneErrorPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  exports: [
    AppComponent,
    AppRoutingModule,
    CommonModule
  ],
  providers: [AuthStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
