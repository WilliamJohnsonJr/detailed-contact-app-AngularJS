function ContactService ($http, SERVER, $stateParams) {
	let vm = this;

	this.create = create;
	this.getContacts = getContacts;
	this.getDetail = getDetail;
	this.deleteContact = deleteContact;

	function getContacts () {
		return $http.get(SERVER.URL)
	}

	function create (contact) {
		return getPhoto().then(function(response){
			contact.photo = response.data.results[0].picture.medium;
			contact.largePhoto = response.data.results[0].picture.large;
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

    function getDetail(){
    	return $http.get(SERVER.URL + $stateParams.id);
    };

    function deleteContact(contact){
    	return $http.delete(SERVER.URL + contact._id);
    }
}

ContactService.$inject = ['$http', 'SERVER', '$stateParams'];
export { ContactService };