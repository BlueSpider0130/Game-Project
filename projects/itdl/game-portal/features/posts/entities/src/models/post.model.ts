// Define the IGamePost interface
export interface IGamePost {
  id: number;
  name: string;
  content: string;
  imageUrl: string;
  createdDate: Date;
}

// Define the Post model class
export class GamePost {
  id: number;
  name: string;
  content: string;
  imageUrl: string;
  createdDate: Date;

  constructor(postData: IGamePost) {
      this.id = postData.id;
      this.name = postData.name;
      this.content = postData.content;
      this.imageUrl = postData.imageUrl;
      this.createdDate = postData.createdDate;
  }
}
