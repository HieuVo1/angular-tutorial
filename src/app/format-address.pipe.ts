import { Pipe, PipeTransform } from "@angular/core";

interface AddressLike {
  address: string,
  state: string,
  city: string,
  country: string
}

@Pipe({
  name: 'formatAddress'
})
export class FormatAddressPipe implements PipeTransform {
  transform(value: AddressLike, param1?: string) {
    console.log("run", param1);
    return `${value.address} - ${value.city} - ${value.state}`;
  }

}
