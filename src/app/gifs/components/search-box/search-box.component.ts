import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../../service/gifs.service';

@Component({
    selector: 'gifs-search-box',
    templateUrl: 'search-box.component.html'
})

export class SearchBoxComponent implements OnInit {
    @ViewChild('txtTagInput')
    public txtTagInput!: ElementRef<HTMLInputElement>
    constructor(
        private gifService: GifsService,
    ) { }

    ngOnInit() { }
    searchTag(){
        const newTag = this.txtTagInput.nativeElement.value;
        this.gifService.searchTag(newTag);
        this.txtTagInput.nativeElement.value = '';
    }
}