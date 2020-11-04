import { Component, OnInit } from '@angular/core';
import { TopicService } from 'src/app/_services/topic.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-topic-details',
  templateUrl: './topic-details.component.html',
  styleUrls: ['./topic-details.component.css']
})
export class TopicDetailsComponent implements OnInit {

  currentTopic = null;
  message = '';

  constructor(
    private topicService: TopicService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.message = '';
    this.getTopic(this.route.snapshot.paramMap.get('id'));
  }

  getTopic(id) {
    this.topicService.get(id)
      .subscribe(
        data => {
          this.currentTopic = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateCreated(status) {
    const data = {
      title: this.currentTopic.title,
      description: this.currentTopic.description,
      created: status
    };

    this.topicService.update(this.currentTopic.id, data)
      .subscribe(
        response => {
          this.currentTopic.created = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateTopic() {
    this.topicService.update(this.currentTopic.id, this.currentTopic)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The tutorial was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteTopic() {
    this.topicService.delete(this.currentTopic.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/topics']);
        },
        error => {
          console.log(error);
        });
  }
}
