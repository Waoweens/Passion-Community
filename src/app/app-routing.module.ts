import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'about', component: AboutComponent},
	{ path: 'contact', component: ContactComponent},
	{ path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect blank url to /home
	{ path: '**', component: NotfoundComponent} // 404 page
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
