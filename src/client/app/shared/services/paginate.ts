export class Paginate {
  public count: number;
  public current_page: number;
  public links: Links;
  public per_page: number;
  public total: number;
  public total_pages: number;
}
export class Links {
  public next: string;
  public previous: string;
}