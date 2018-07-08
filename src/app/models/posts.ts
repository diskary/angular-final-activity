export class Post {
    id: number;
    title: string;
    content: string;
    loveIts: number;
    created_at: Date;
  
    constructor(id:number, title: string, content: string) {
      this.id = id;
      this.title = title;
      this.content = content;
      this.loveIts = 0;
      this.created_at = new Date();
    }
  }