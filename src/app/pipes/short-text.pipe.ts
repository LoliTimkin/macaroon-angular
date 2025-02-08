import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortText'
})
export class ShortTextPipe implements PipeTransform {

  transform(value: string, limit: number = 95): string {
    return value.length > limit ? value.substring(0, limit) + "..." : value;
  }

}
