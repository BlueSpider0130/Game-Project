import { Injectable } from '@angular/core';
import { EntityStoreService } from '@itdl/shared/common';

import { LogicAnchorDirective } from '../directives/logic-anchor.directive';

@Injectable()
export class LogicAnchorStoreService extends EntityStoreService<LogicAnchorDirective> {}
