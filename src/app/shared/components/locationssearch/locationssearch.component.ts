import { BadInput } from './../../../common/bad-input';
import { AppError } from './../../../common/app-error';
import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { LocationsService } from 'shared/services/locations.service';

@Component({
  selector: 'app-locationssearch',
  templateUrl: './locationssearch.component.html',
  styleUrls: ['./locationssearch.component.scss']
})
export class LocationssearchComponent implements OnInit {

  locations = ["testi","velo"];

  constructor(private locationsService: LocationsService,) { }

  searcValueChange($event) {
    let inputValue = $event.target.value;
    console.log(inputValue.length);
    if (inputValue.length > 2) {
      this.getSuggestions(inputValue);
    }
  }

  getSuggestions(inputValue) {
    console.log("getsuggestions");

    this.locationsService.queryAll("?prefix="+inputValue)
    .take(1)   // use this operator to unsubscribe after 1 item
    .subscribe(
        results => {
          let suggestions = results["suggest"]["location-suggest"][0]["options"];
            console.log(suggestions);
        },
        (error: AppError) => {
        if (error instanceof BadInput) {
            // here could add a form error....

            console.log("Input is not accepted");
        } else {
            throw error;  // throw error to be handled by global error handler
        }
        }
    );
  }

  ngOnInit() {
  }

}
