import { Component, OnInit } from '@angular/core';
import { TopicService } from 'src/app/_services/topic.service';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {
  topics: any;
  currentTopic = null;
  currentIndex = -1;
  title = '';

  constructor(private topicService: TopicService) { }

  ngOnInit() {
    this.retrieveTopics();
  }

  retrieveTopics() {
    this.topicService.getAll()
      .subscribe(
        data => {
          this.topics = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList() {
    this.retrieveTopics();
    this.currentTopic = null;
    this.currentIndex = -1;
  }

  setActiveTopic(topic, index) {
    this.currentTopic = topic;
    this.currentIndex = index;
  }

  removeAllTopics() {
    this.topicService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveTopics();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle() {
    this.topicService.findByTitle(this.title)
      .subscribe(
        data => {
          this.topics = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
