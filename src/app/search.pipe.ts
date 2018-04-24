import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'search', pure: false })
export class SearchPipe implements PipeTransform {
  transform(items, search, searchProperties: string[]) {
    if (!search) {
      return items;
    }
    return items.filter(item => {
      for (const property in searchProperties) {
        if (this.isIndexOf(item, search, searchProperties[property])) {
          return true;
        }
      }
      return false;
    });
  }

  isIndexOf(item, search, property): boolean {
    return item[property].toLowercase().indexOf(search.toLowercase()) !== -1 ||
      item.children && item.children.length && item.children.filter(child => {
        return child[property].toLowercase().indexOf(search.toLowercase()) !== -1;
      }).length > 0;
  }
}
