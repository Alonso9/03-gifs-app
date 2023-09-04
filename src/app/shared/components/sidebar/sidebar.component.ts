import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/service/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(
    public gifService: GifsService,
  ) { }

  get tags(){
    return this.gifService.tagsHistory;
  }

  searchTag(tag: string){
    // const newTag = this.txtTagInput.nativeElement.value;
    this.gifService.searchTag(tag);
}
}
