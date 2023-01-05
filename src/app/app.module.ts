import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ExampleComponent } from './components/example/example.component';
import { Example2Component } from './components/example2/example2.component';
import { DatapassComponent } from './components/datapass/datapass.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { NgOnChangeComponent } from './components/ng-on-change/ng-on-change.component';
import { NgforComponent } from './components/ngfor/ngfor.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { UpperPipe } from './pipes/upper.pipe';
import { TemplateDrivenComponent } from './components/template-driven/template-driven.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { HelperService } from './services/helper.service';
import { PageModule } from "./pages/page.module";


@NgModule({
    declarations: [
        AppComponent,
        ExampleComponent,
        Example2Component,
        DatapassComponent,
        TwoWayBindingComponent,
        NgOnChangeComponent,
        NgforComponent,
        PipeComponent,
        UpperPipe,
        TemplateDrivenComponent,
        FirstComponent,
        SecondComponent,
    ],
    providers: [HelperService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        PageModule
    ]
})
export class AppModule { }
