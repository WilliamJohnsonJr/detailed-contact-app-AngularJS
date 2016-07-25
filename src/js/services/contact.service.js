function ContactService ($http, SERVER) {
	let vm = this;

	this.create = create;
	this.getContacts = getContacts;

	function getContacts () {
		return $http.get(SERVER.URL)
	}

	function create (contact) {
		return getPhoto().then(function(response){
			contact.photo = response.data.results[0].picture.medium;
			return $http.post(SERVER.URL, contact);	
		})
	};

    function getPhoto(){
	  return $http({
		method: 'GET',
		url: 'https://randomuser.me/api/',
		dataType: 'json'
	 })
    }
}

ContactService.$inject = ['$http', 'SERVER'];
export { ContactService };