import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { PersonService } from './person.service';

const appRoutes: Routes = [

  { path : 'delete', component:DeleteComponent  },
  { path : 'read', component: ReadComponent },
  { path : 'update', component:UpdateComponent  },
  { path : 'create', component :CreateComponent },


];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateComponent,
    ReadComponent,
    UpdateComponent,
    DeleteComponent,
    
  ],
 imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
