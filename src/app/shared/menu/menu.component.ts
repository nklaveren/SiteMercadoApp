import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {

  }
  logout() {
    UserService.logout();
  }
  isUserAuthenticated() {
   return this.userService.isAuthenticated()
  }
}
