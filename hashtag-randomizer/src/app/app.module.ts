import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagerComponent } from './page/manager/manager.component';
import { NgZorroAntdModule, NZ_I18N, en_US, NzInputModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzConfig, NZ_CONFIG } from 'ng-zorro-antd';


registerLocaleData(en);
const ngZorroConfig: NzConfig = {
  message: { nzMaxStack: 3 }
};

@NgModule({
  declarations: [
    AppComponent,
    ManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzInputModule,
    NzGridModule,
    NzButtonModule,
    NzMessageModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, { provide: NZ_CONFIG, useValue: ngZorroConfig }],
  bootstrap: [AppComponent],
  exports: [ManagerComponent]
})
export class AppModule { }
