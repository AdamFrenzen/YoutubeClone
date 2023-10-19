import { Component } from '@angular/core';

// Fontawesome imports
import { faBars, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons"
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  protected readonly faBars = faBars;
  protected readonly faMagnifyingGlass = faMagnifyingGlass;
  protected readonly faBell = faBell;
  protected readonly faUser = faUser;

  searchBar = new FormGroup({
    searchBox: new FormControl('')
  })

  search() {
    console.log('submitted')
  }
}
