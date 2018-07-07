export class User {
	email 	: string;
	name 	: string;

	constructor( idParam: string, nameParam: string ){
		this.email = idParam;
		this.name = nameParam;
	}
}