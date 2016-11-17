import { Pipe } from '@angular/core';

@Pipe({
    name: 'SearchPipe'
})

export class SearchPipe {
    transform(value) {
        // Set the limit for the app title
        let limit = 30;
        if(value.length < limit){
            return value;
        }
        return value.substring(0, limit) + '...';
    }
}
