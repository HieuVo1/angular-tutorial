import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'adult',
})
export class AdultPipe implements PipeTransform {
  transform(value: any) {
    return value.filter(val => val.age >= 18);
  }

}
