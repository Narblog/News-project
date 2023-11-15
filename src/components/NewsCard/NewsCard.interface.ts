


export interface CommentProps{
  id:number;
  author:[];
  text:string;
  date:string;
  replay?:[];
  image:string;
  name:string;
  
  
}
export interface NewsCardProps {
  id: number;
  title: string;
  content: string;
  image: string;
  publishDate: string;
  comments?:CommentProps[];
}
