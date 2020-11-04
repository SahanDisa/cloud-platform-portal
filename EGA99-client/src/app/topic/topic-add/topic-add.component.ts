import { Component, OnInit } from '@angular/core';
import { TopicService } from 'src/app/_services/topic.service';

@Component({
  selector: 'app-topic-add',
  templateUrl: './topic-add.component.html',
  styleUrls: ['./topic-add.component.css']
})
export class TopicAddComponent implements OnInit {

  topic = {
    title: '',
    description: '',
    subscription: '',
    created: false
   
  };
  submitted = false;

  topicArray = ['Blob Stroage','Event habs','IoT Hubs','Resource Groups','Service Bus','EGA Map','Media Service','Cloud Service'];

  constructor(private topicService: TopicService) { }

  ngOnInit() {
  }

  saveTopic() {
    const data = {
      title: this.topic.title,
      description: this.topic.description,
      subscription: this.topic.subscription
    };

    this.topicService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newTopic() {
    this.submitted = false;
    this.topic = {
      title: '',
      description: '',
      created: false,
      subscription: 'Not Avaliable'
    };
  }
}
