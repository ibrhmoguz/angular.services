
import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers: [LoggingService]
})
export class NewAccountComponent {
  constructor(private loggingService: LoggingService, private accountService: AccountsService) { }

  onCreateAccount(accountName: string, accountStatus: string) {
    console.log('onCreateAccount: ' + accountName);
    this.accountService.addAccount(accountName, accountStatus);
    //console.log('A server status changed, new status: ' + accountStatus);
    //this.loggingService.logStatusChanged(accountStatus);
  }
}
