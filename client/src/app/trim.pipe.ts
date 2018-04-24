import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'trim'})
export class TrimPipe implements PipeTransform {
    transform(inputString: string): string {
        return inputString.replace(/"/g, '').slice(1, -1);
    }
}
