function ContactService ($http, SERVER) {
	let vm = this;

	vm.add = add;

	vm.contact = {};

	function getPhoto (contact){
		$http({
			method: 'GET',
			url: 'https://randomuser.me/api/',
			dataType: 'json',
			success: function(data) {
				console.log(data);
			}
		}).then((res)=>{
			console.log(res.data);
			contact.photo = res.data.results[0].picture.medium;
		});
	};

	function add (contact) {
		getPhoto(vm.contact).then((res)=>{
			return $http.post(SERVER.URL, contact);	
			vm.contact = {};
		});		
	};

}

ContactService.$inject = ['$http', 'SERVER'];
export { ContactService };