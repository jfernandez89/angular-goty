export class GameDTO {
  id: string;
  name: string;
  url: string;
  votes: number;
  description: string;

  constructor(
    id: string,
    name: string,
    url: string,
    votes: number,
    description: string
  ) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.votes = votes;
    this.description = description;
  }
}
