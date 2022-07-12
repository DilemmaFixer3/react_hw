export class PostsApiService{
    _url1 = 'https://jsonplaceholder.typicode.com/posts';

    getPosts(){
        return fetch(this._url1).then(value => value.json());
    }

    getPost(id){
        return fetch(this._url1 + '/' + id).then(value => value.json());
    }
}