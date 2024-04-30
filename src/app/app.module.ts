import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TaskComponent } from './task/task.component';
import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskDialogComponent
  ],
  imports: [
    MatToolbarModule,
    MatIconModule,
    BrowserModule,
    MatCardModule,
    DragDropModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    AngularFireModule.initializeApp({"apiKey":"AIzaSyC2Sad-yEGUT2Yh-0scHfUWsF5r_gF2GTs",
    "authDomain": "kanbanfire-ce2e9.firebaseapp.com",
    "projectId": "kanbanfire-ce2e9",
    "storageBucket": "kanbanfire-ce2e9.appspot.com",
   "messagingSenderId": "452668606129",
    "appId": "1:452668606129:web:feccfeb726abd0e6f3c490",
    "measurementId": "G-811VHNHD74"}),
    AngularFirestoreModule,
    FormsModule,
    
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({"projectId":"kanbanfire-ce2e9","appId":"1:452668606129:web:8fc7446c5a0708bcf3c490","storageBucket":"kanbanfire-ce2e9.appspot.com","apiKey":"AIzaSyC2Sad-yEGUT2Yh-0scHfUWsF5r_gF2GTs","authDomain":"kanbanfire-ce2e9.firebaseapp.com","messagingSenderId":"452668606129","measurementId":"G-6Z0RDPV3DF"})),
    provideFirestore(() => getFirestore())
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
