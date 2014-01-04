class PeopleBackendRun
	constructor: ($httpBackend, people) ->
		nextId = 0

		angular.forEach people, (person) ->
			person.id = nextId++

		$httpBackend.whenGET('/people').respond people

		$httpBackend.whenPOST('/people').respond (method, url, data) ->
			person = angular.fromJson data
			name = person.name
			isUnique = (name for p in people when p.name is name).length is 0

			return if not isUnique
				message =
					title: 'Duplicate!'
					message: "#{name} is a duplicate.  Please enter a new name."

				[403, message]

			person.id = nextId++

			people.push person

			[200, person]