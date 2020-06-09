import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { PostService } from '@services';
import { appReducer, PostEffects } from '@state';
import {
  HeaderComponent,
  PostsContainerComponent,
  GoupingSelectorComponent,
  PostsTreeComponent,
} from './components';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostsContainerComponent,
    GoupingSelectorComponent,
    PostsTreeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(appReducer, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    EffectsModule.forRoot([PostEffects]),
  ],
  providers: [PostService],
  bootstrap: [AppComponent],
})
export class AppModule {}
