import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../auth.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Injectable()
export class LockGuard implements CanActivate {
  // constructor(private toastr: ToastsManager) {
  // }

  canActivate() {
    if (AuthService.getUser().pin === true) {
      return true;
    }
    // this.toastr.error('Please setup a pin before you try and lock', 'No PIN'); todo: add this again once you can have providers in services
    return false;
  }
}
