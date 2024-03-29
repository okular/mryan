var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Mryan Model
 * ==========
 */

var Mryan = new keystone.List('Mryan');

Mryan.add({
	name: { type: Types.Name, required: true, index: true },
	email: { type: Types.Email, initial: true, required: true, index: true },
	password: { type: Types.Password, initial: true, required: true }
}, 'Permissions', {
	isAdmin: { type: Boolean, label: 'Can access Keystone', index: true }
});

// Provide access to Keystone
Mryan.schema.virtual('canAccessKeystone').get(function() {
	return this.isAdmin;
});


/**
 * Relationships
 */

Mryan.relationship({ ref: 'Post', path: 'author' });


/**
 * Registration
 */

Mryan.defaultColumns = 'name, email, isAdmin';
Mryan.register();
