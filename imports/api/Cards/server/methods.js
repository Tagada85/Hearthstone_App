import rp from 'request-promise'

Meteor.methods({
	getAllCards(){
		return new Promise((resolve, reject) => {
			rp({
				uri: 'https://omgvamp-hearthstone-v1.p.mashape.com/cards?collectible=1',
				headers: {
					'X-Mashape-Key': 'oRf7ZSEtS0mshPVSdO0sUCbwXWLEp128RbcjsnIYyIXV4Kty5L'
				}
			}, (err, result) => {
				if( err ){
					reject(err)
				} else {
					resolve(JSON.parse(result.body))
				}
			})
		})
	}
})