import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BooklistService } from '../booklist-service/booklist.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.scss'
})
export class SearchInputComponent {
  searchTerm = "";

  constructor(private booklistService: BooklistService) { }

  handleKeyup() {
    this.booklistService.triggerSearch(this.searchTerm);
  }

}
