namespace ajax.Controllers {

    export class HomeController {
        public movies;

        constructor(private $http: ng.IHttpService) {
            this.$http.get('/api/movies')
            .then((res) => {
                this.movies = res.data;
            })
            .catch((res) => {
                console.error('Could not retrieve movies.');
            });
        }
    }


    export class AboutController {
        public message = 'Hello from the about page!';
    }

}
