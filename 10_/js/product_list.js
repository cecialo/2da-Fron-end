Vue.component('product-list', {
    data: function() {
        return {
            products: [],
            token: localStorage.getItem("token")
        }
    },
    created: function() {
        var self = this;
        fetch("http://silabuz-api-project.herokuapp.com/products/products/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Token " + this.token
            }
        })
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            self.products = data;
        })
        .catch(function(error) {
            console.log("Error: " + error)
        })
    },
    template: `
        <div class="row">
            <div class="col-12">
                <product-item 
                    v-for="product in products" 
                    v-bind:product="product">
                </product-item>
            </div>
        </div>
    `
})