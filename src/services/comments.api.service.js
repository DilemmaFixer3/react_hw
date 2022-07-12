export class CommentsApiService{
    _url2 = 'https://jsonplaceholder.typicode.com/comments';

    getComments(){
        return fetch(this._url2).then(value => value.json());
    }

    getComment(id){
        return fetch(this._url2 + '/' + id).then(value => value.json());
    }
}