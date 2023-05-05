export interface Branch {
  title: string;
  url: string;
}
export interface BagDetailList {
  imgUrl: string;
  title: string;

  price: string;
  size: number;
}
export interface ShoeCategory {
  categoryName: string;
  categoryUrl: string;
  branchname: Array<Branch>;
}
export interface breandDetailq {
  LogoName: string;
  LogoUrl: string;
  MainCategory: Array<ShoeCategory>;
}
