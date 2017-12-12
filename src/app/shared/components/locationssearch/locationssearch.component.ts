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

  locations = [];
  inputValue = "";

  constructor(private locationsService: LocationsService,) { }

  searchValueChange($event) {
    let inputValue = $event.target.value;
    if (inputValue.length > 1) {
      this.getSuggestions(inputValue);
    } else {
      this.locations = [];
    }
  }

  selectLocation(location) {
    //console.log("select: " + location.id);
    this.inputValue = location.name;
    this.locations = [];
  }

  getSuggestions(inputValue) {
    this.locationsService.queryAll("?prefix="+inputValue)
    .take(1)   // use this operator to unsubscribe after 1 item
    .subscribe(
        results => {
          let suggestions = results["suggest"]["location-suggest"][0]["options"];
          this.setLocations(suggestions);
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

  setLocations (suggestions) {
    //console.log(suggestions)

    let locations = [];
    /* reduce suggestions to fields needed */
    for (let suggestion of suggestions) {
      locations.push(
        {
          "id": suggestion["_id"].substring(0, suggestion["_id"].indexOf("_") ),
          "language" : suggestion['_source']['language'],
          "name" : suggestion['_source']['name'],
          "country" : suggestion['_source']['country']
        }
      )
    }

    /* filter languages (only german for this test) */
    this.locations = locations.filter(item => item.language == "DE")
  }

  ngOnInit() {
  }

}
