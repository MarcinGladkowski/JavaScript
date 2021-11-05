class SocialMedia {
    constructor(media, name) {
        this.media = media
        this.name = name
    }

    subscribe() {
        return `Subscribed ${this.name}`
    }
}

const media = new SocialMedia('Youtube', 'overment')

class Youtube extends SocialMedia {
    constructor(name, subscrinber_count, movies) {
        super('Youtube', 'overment')
        this.subscrinber_count = subscrinber_count
        this.movies = movies
    }
}

const myChannel = new Youtube('overment', 27000, 155)

myChannel.subscribe() // inheritance of method