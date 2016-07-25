function AddController (ContactService, $state) {
	ContactService.add(contact).then( (res) => {
	      $state.go('root.home');
	    });
}

AddController.$inject = ['ContactService', '$state'];
export { AddController };