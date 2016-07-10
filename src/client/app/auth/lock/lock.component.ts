import { Component, OnInit } from '@angular/core';
import { LockService } from './lock.service';

@Component({
  moduleId: module.id,
  providers: [LockService],
  templateUrl: 'lock.component.html'
})
export class LockComponent implements OnInit {
  errorMessage: string;
  user = JSON.parse(localStorage.getItem('user'));

  constructor(private lockService: LockService) {
  }

  onSubmit() {
    this.unlock(this.user.id, this.user.pin);
  }

  handleError() {
  }

  ngOnInit() {
    this.lockService.lock();
    this.user.pin = null;
  }

  unlocked(token: string) {
    localStorage.setItem('id_token', token);
  }

  unlock(id: number, pin: number) {
    this.lockService.unlock(id, pin)
      .subscribe(
        token => this.unlocked(token),
        error => this.errorMessage = <any>error);
  }
}
