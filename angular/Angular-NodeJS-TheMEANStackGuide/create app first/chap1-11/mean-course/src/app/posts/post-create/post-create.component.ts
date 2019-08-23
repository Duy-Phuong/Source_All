import { Component } from "@angular/core";

@Component({
  selector: "app-post-create",
  templateUrl: "./post-create.component.html",
  styleUrls: ["./post-create.component.css"]
})
export class PostCreateComponent {
  enteredContent = "";
  newPost = "no content";
  // step 2 start
  // onAddPost(postInput: HTMLTextAreaElement) {
  // alert("event button click");
  // this.newPost = "the user post";

  // xem nội dung user input
  // console.dir(postInput);
  // this.newPost = postInput.value;
  // }
  // step 2 end

  // step 3 start
  onAddPost() {
    // xem nội dung user input cách 2
    this.newPost = this.enteredContent;
  }
  // step 3 end
}
