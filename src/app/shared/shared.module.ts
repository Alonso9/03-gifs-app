import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LazyImageComponent } from './components/lazyImage/lazyImage.component';


@NgModule({
  declarations: [
    SidebarComponent,
    LazyImageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ // Si queremos exportar ese modulo fuera del shared lo tenemos que exportar
    SidebarComponent,
    LazyImageComponent
  ]
})
export class SharedModule { }
// Ahora si queremos usar las caracteristicas de un modulo de shared, los
// tenemos que importar en donde se desea usar el SharedModule