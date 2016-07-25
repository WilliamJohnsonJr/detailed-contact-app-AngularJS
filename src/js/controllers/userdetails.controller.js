function UserDetailsController (ContactService, $state){

	let vm = this;
	vm.contact = {};

	init ();

	function init(){
		ContactService.getDetail().then( (res) => {
    		vm.contact = res.data;	
		});
	};	
};

UserDetailsController.$inject = ['ContactService', '$state'];
export { UserDetailsController };