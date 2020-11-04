import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/_services/tutorials.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorials.component.html',
  styleUrls: ['./add-tutorials.component.css']
})
export class  AddTutorialsComponent implements OnInit {
  tutorial = {
    title: '',
    description: '',
    published: false
  };
  submitted = false;

  constructor(private tutorialService: TutorialService) { }

  ngOnInit() {
  }

  saveTutorial() {
    const data = {
      title: this.tutorial.title,
      description: this.tutorial.description
    };

    
    this.tutorialService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newTutorial() {
    this.submitted = false;
    this.tutorial = {
      title: '',
      description: '',
      published: false
    };
  }
}
