import { NgModule } from '@angular/core';

import { MeetupSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [MeetupSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [MeetupSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class MeetupSharedCommonModule {}
