import { NgModule } from '@angular/core';
import { AuthModule } from 'angular-auth-oidc-client';

@NgModule({
    imports: [AuthModule],
    exports: [],
})
export class AuthConfigModule {}
