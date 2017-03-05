import { Observable } from 'rxjs/Rx';
import { IPeople } from './entities/people';
import { PeopleService } from './people.service';
import { Component, OnInit } from '@angular/core';
import { _ } from 'underscore';

@Component({
    moduleId: module.id + "",
    selector: 'people',
    templateUrl: 'people.component.html'
})
export class PeopleComponent implements OnInit {

    catsByOwnerGender: any;

    constructor(private peopleService: PeopleService) { }

    ngOnInit() {
        this.peopleService.getPeople()
            .subscribe((mappedResponse) => {

                // filter response for only people with cats
                let peopleWithCats: IPeople[] = _.filter(mappedResponse, (person) => {
                    person.pets = _.filter(person.pets, (pet) => {
                        return pet.type === 'Cat'
                    })
                    return person;
                })

                // group people by gender
                let peopleByGender = _.groupBy(peopleWithCats, 'gender');

                // instantiate viewModel
                this.catsByOwnerGender = {};

                _.each(peopleByGender, (gender, index) => {

                    //dynamically create a new object by gender
                    this.catsByOwnerGender[index] = [];

                    // flatten pets array per person
                    _.each(gender, (person) => {
                        _.each(person.pets, (pet) => {
                            // 
                            this.catsByOwnerGender[index].push({ name: pet.name });
                        });
                    })

                    // Sort by pet name
                    this.catsByOwnerGender[index] = _.sortBy(this.catsByOwnerGender[index], 'name');;
                })
            })
    }
}