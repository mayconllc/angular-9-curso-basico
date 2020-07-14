import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductComponent } from './views/product/product.component';
import { CreateComponent } from './components/product/create/create.component';

const routes: Routes  = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: 'products',
        component: ProductComponent
    },
    {
        path: 'products/create',
        component: CreateComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}