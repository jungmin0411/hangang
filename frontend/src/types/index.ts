//화장실(Toilet)과 리뷰(Review) 데이터가 어떻게 생겼는지 정의하는 곳.
export interface Toilet{
    id: number;
    name : string;
    address : string;
    lat : number;
    lng : number;
    avg_clean: number;
    avg_congestion : number;
    review_count : number;
}
export interface Review{
    toilet_id : number;
    author : number;
    content : number;
    clean_score : number;
    congestion_score : number;
    create_at : string;
}