/**
 * Created by kanodoe on 21-02-17.
 */

export default class PocService{

    static get $inject(){
        return ['$http', '$q'];
    }

    constructor($http, $q){
        this.$http = $http;
        this.$q = $q;
    }

    // Run the poc with the data given.
    // We use transformResponse to stop the response being
    // converted to an object in case it's a string (i.e. in the case of an error message).
    getPoc(){
        let promise = this.$http({
            method: 'GET',
            url: '/orchestrator'
        }).then((response) => {
            let poc = response.data;

            return poc;
        }, (response) => {
            // Return a rejected response as to not allow us to fall
            // into the .then() block after getPoc() is called from a controller.
            //
            // Also here only return the data, which is the error message string
            return this.$q.reject(response.data);
        });

        return promise;
    }


}