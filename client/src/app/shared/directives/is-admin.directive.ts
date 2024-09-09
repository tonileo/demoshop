import { Directive, effect, inject, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { AccountService } from '../../core/services/account.service';

@Directive({
  selector: '[appIsAdmin]',
  standalone: true
})
export class IsAdminDirective {
  private accountService = inject(AccountService);
  private viewContianerRef = inject(ViewContainerRef);
  private templateRef = inject(TemplateRef);

  constructor() {
    effect(() => {
      if (this.accountService.isAdmin()){
        this.viewContianerRef.createEmbeddedView(this.templateRef);
      }else{
        this.viewContianerRef.clear();
      }
    })
   }
}
