import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrderByPipe} from './order-by.pipe';

@NgModule({
  declarations: [OrderByPipe],
  exports: [OrderByPipe],
  imports: [CommonModule]
})
export class SharedModule { }


/**
 * Hello there!
 * This is our shared module that is used for piping
 * the orderBy pipe.
 */





