let gallery = (function () {
    let tags = ['art', 'beauty', 'architecture', 'pictures', 'paints', 'coffee', 'morning', 'body', 'health', 'iceCream',
        'sunset', 'bicycles', 'summer', 'happiness', 'cake', 'pampering', 'traveling', 'waterfall']

    let people = ['idrisova_lena', 'alexandramitroshina', 'nadezhda_sukhotskaya', 'tanya-mint', 'le_sacha',
        'angelinaburskaya', 'alexavalkovich']

    let photoPosts = [
        {
            id: '1',
            descriprion: '  St. Petersburg is a city of magic beauty, a city of white nights,' +
                'broad straight avenues, green parks, countless bridges and canals',
            createdAt: new Date('2019-03-04T16:00:00'),
            author: 'tanya-mint',
            photoLink: 'practice2019/UI/img/pic1.jpg',
            tags: ['art', 'beauty'],
            likes: ['alexandramitroshina', 'nadezhda_sukhotskaya'],
        },

        {
            id: '2',
            descriprion: '  Architecture is art because a building that is constructed is an expression of the imagination' +
                ' and creativity of whoever is involved in its design.',
            createdAt: new Date('2015-03-04T16:02:16'),
            author: 'tanya-mint',
            photoLink: 'practice2019/UI/img/pic2.jpg',
            tags: ['architecture', 'art'],
            likes: ['idrisova_lena', 'alexandramitroshina', 'nadezhda_sukhotskaya', 'tanya-mint', 'le_sacha'],
        },

        {
            id: '3',
            descriprion: ' Flowers  are really very soft and beautiful. They appear in ' +
                'thousands of colours and of mixed colours. They look very beautiful and attract our sights.',
            createdAt: new Date('2019-03-05T12:02:57'),
            author: 'nadezhda_sukhotskaya',
            photoLink: 'practice2019/UI/img/pic3.jpg',
            tags: ['flowers', 'happiness', 'beauty'],
            likes: ['angelinaburskaya', 'idrisova_lena'],
        },

        {
            id: '4',
            descriprion: '  Pictures. Those little things that help people keep their memories alive.' +
                ' The things that help us to remember the past, and the people that existed in our lives in the past,' +
                ' and the present.',
            createdAt: new Date('2019-03-05T12:15:39'),
            author: 'nadezhda_sukhotskaya',
            photoLink: 'practice2019/UI/img/pic4.jpg',
            tags: ['pictures', 'paints'],
            likes: ['angelinaburskaya', 'idrisova_lena', 'alexandramitroshina', 'nadezhda_sukhotskaya'],
        },

        {
            id: '5',
            descriprion: 'The coffee plant is a bush or tree that can grow up to ten meters (about 32 feet) high,' +
                ' but is usually cut shorter. Coffee plants originally grew in Africa, and now also grow in South America,' +
                ' Central America and Southeast Asia.',
            createdAt: new Date('2019-03-07T06:17:50'),
            author: 'angelinaburskaya',
            photoLink: 'practice2019/UI/img/pic5.jpg',
            tags: ['coffee', 'morning'],
            likes: ['angelinaburskaya', 'tanya-mint', 'le_sacha'],
        },

        {
            id: '6',
            descriprion: ' My favorite body part is the brain, that shiny mound of being, that mouse gray parliament ' +
                'of cells, that dream factory, that petit tyrant inside a ball of bone, that huddle of neurons calling ' +
                'all the plays',
            createdAt: new Date('2019-03-07T07:24:42'),
            author: 'angelinaburskaya',
            photoLink: 'practice2019/UI/img/pic6.jpg',
            tags: ['body'],
            likes: ['angelinaburskaya', 'nadezhda_sukhotskaya'],
        },

        {
            id: '7',
            descriprion: 'For years, nutrition experts have said that a healthy breakfast is a key start to the day.' +
                ' Not only do we think and perform better on the job, they tell us, it supports our well-being in many other ways.',
            createdAt: new Date('2019-03-07T23:51:39'),
            author: 'le_sacha',
            photoLink: 'practice2019/UI/img/pic7.jpg',
            tags: ['health', 'morning'],
            likes: ['alexandramitroshina'],
        },

        {
            id: '8',
            descriprion: 'In Ancient Rome, Emperor Nero frequently sent messengers out to gather snow from the mountains.' +
                'Some historians credit Marco Polo with being the first one to bring some type of ice cream to Europe.',
            createdAt: new Date('2019-03-08T01:04:28'),
            author: 'le_sacha',
            photoLink: 'practice2019/UI/img/pic8.jpg',
            tags: ['iceCream'],
            likes: ['angelinaburskaya', 'idrisova_lena', 'tanya-mint'],
        },

        {
            id: '9',
            descriprion: 'When the sun sets, nature looks very beautiful.',
            createdAt: new Date('2019-03-10T13:01:46'),
            author: 'alexavalkovich',
            photoLink: 'practice2019/UI/img/pic9.jpg',
            tags: ['sunset', 'beauty'],
            likes: ['angelinaburskaya', 'alexandramitroshina', 'nadezhda_sukhotskaya', 'le_sacha'],
        },

        {
            id: '10',
            descriprion: ' The beautiful sunset is marked by colorful sky,' +
                ' astoundingly clouds reflections and soothing tunes of the birds',
            createdAt: new Date('2019-03-10T13:03:17'),
            author: 'alexavalkovich',
            photoLink: 'practice2019/UI/img/pic10.jpg',
            tags: ['sunset', 'beauty'],
            likes: ['angelinaburskaya', 'tanya-mint'],
        },

        {
            id: '11',
            descriprion: 'A bicycle has a tiny manufacturing footprint when compared to a car. All manufactured goods ' +
                'have environmental impact, but bicycles can be produced for a fraction of the materials, energy and ' +
                'shipping costs of a car',
            createdAt: new Date('2019-03-13T09:54:38'),
            author: 'tanya-mint',
            photoLink: 'practice2019/UI/img/pic11.jpg',
            tags: ['bicycles', 'summer'],
            likes: ['le_sacha'],
        },

        {
            id: '12',
            descriprion: 'When we feel blue, sometimes the best remedy is reaching for the cookie jar or cuddling up ' +
                'with an ice cream cone. These treats can be a quick fix, but sweets may not be the healthiest solution to ' +
                'happiness.',
            createdAt: new Date('2019-03-13T09:55:23'),
            author: 'tanya-mint',
            photoLink: 'practice2019/UI/img/pic12.jpg',
            tags: ['happiness'],
            likes: ['angelinaburskaya', 'idrisova_lena', 'alexandramitroshina', 'nadezhda_sukhotskaya', 'tanya-mint', 'le_sacha'],
        },

        {
            id: '13',
            descriprion: 'First I drink the coffe. then I do th things',
            createdAt: new Date('2019-03-14T07:01:42'),
            author: 'idrisova_lena',
            photoLink: 'practice2019/UI/img/pic13.jpg',
            tags: ['coffee'],
            likes: ['angelinaburskaya'],
        },

        {
            id: '14',
            descriprion: 'Coffee is a cup of hope in a world full of chaos and mondays',
            createdAt: new Date('2019-03-14T07:02:15'),
            author: 'idrisova_lena',
            photoLink: 'practice2019/UI/img/pic14.jpg',
            tags: ['coffee'],
            likes: ['idrisova_lena', 'alexandramitroshina', 'nadezhda_sukhotskaya', 'tanya-mint', 'le_sacha'],
        },

        {
            id: '15',
            descriprion: ' Just enjoy life and be at peace. Let self-pampering restore your inner strength.' +
                ' Pay for a massage or a hair-cut and shave. This pampering reminds us that we are worthy and cared for.',
            createdAt: new Date('2019-05-14T14:07:15'),
            author: 'idrisova_lena',
            photoLink: 'practice2019/UI/img/pic15.jpg',
            tags: ['cake', 'pampering'],
            likes: [],
        },

        {
            id: '16',
            descriprion: 'Today I challenge you to stop thinking of pampering as a luxury. Too often people feel guilty ' +
                'about pampering themselves, but today I want you to think about pampering as a healthy way to live.',
            createdAt: new Date('2019-03-17T01:27:51'),
            author: 'tanya-mint',
            photoLink: 'practice2019/UI/img/pic16.jpg',
            tags: ['healthy', 'pampering'],
            likes: ['nadezhda_sukhotskaya', 'tanya-mint'],
        },

        {
            id: '17',
            descriprion: 'What is beauty? How do we decide who is attractive and who is not? Society is full of information' +
                ' telling us what is beautiful, but what fact is that information based on?',
            createdAt: new Date('2019-03-17T17:10:34'),
            author: 'alexandramitroshina',
            photoLink: 'practice2019/UI/img/pic17.jpg',
            tags: ['beauty'],
            likes: ['idrisova_lena', 'le_sacha'],
        },


        {
            id: '20',
            descriprion: 'You must live in the present, launch yourself on every wave, find your eternity in each moment',
            createdAt: new Date('2019-03-21T06:37:25'),
            author: 'tanya-mint',
            photoLink: 'practice2019/UI/img/pic20.jpg',
            tags: ['waterfall'],
            likes: ['angelinaburskaya', 'idrisova_lena', 'alexandramitroshina', 'tanya-mint', 'le_sacha'],
        },
        {
            id: '18',
            descriprion: 'One of the traveling benefits is finding and keeping humility. Too often, people get ' +
                'wrapped up in their lives, their daily routine of working, sleeping, eating and living. ' +
                'They become self-absorbed to the point it affects their health, their happiness, and their perspective.',
            createdAt: new Date('2019-03-18T23:00:00'),
            author: 'alexandramitroshina',
            photoLink: 'practice2019/UI/img/pic18.jpg',
            tags: ['traveling'],
            likes: ['angelinaburskaya', 'alexandramitroshina', 'tanya-mint'],
        },

        {
            id: '19',
            descriprion: 'Sitting in the waterfall. How are your weekends?',
            createdAt: new Date('2019-03-19T10:00:00'),
            author: 'alexandramitroshina',
            photoLink: 'practice2019/UI/img/pic19.jpg',
            tags: ['waterfall'],
            likes: ['alexandramitroshina', 'nadezhda_sukhotskaya', 'le_sacha'],
        },
    ]

    function validatePhotoPost(photoPost) {
        if (photoPost) {
            if (typeof (photoPost.author) !== 'string' || typeof (photoPost.photoLink) !== 'string') {
                console.log("Type isn't a string");
                return false;
            }
            if (photoPost.author == "" || photoPost.photoLink === "") {
                console.log("Required fields are not entered");
                return false;
            }
            if (typeof (photoPost.descriprion) !== 'string' || photoPost.descriprion.length > 200) {
                console.log("Not correct data");
                return false;
            }
        } else {
            return false;
        }
    }

    function getPhotoPosts(skip, top, filterConfig) {
        if (filterConfig) {
            return photoPosts.filter(function (value) {
                if (filterConfig.author) {
                    if (value.author !== filterConfig.author) {
                        return false;
                    }
                }
                if (filterConfig.tags) {
                    let len = filterConfig.tags.length;
                    if (len === 0 || typeof (len) === 'undefined') {
                        return false;
                    }
                    for (let i = 0; i < len; ++i) {
                        if (value.tags.indexOf(filterConfig.tags[i]) === -1) {
                            return false;
                        }
                        if (typeof (filterConfig.tags[i]) !== 'string') {
                            console.log("Tag isn't a string");
                            return false;
                        }
                    }
                }
                if (filterConfig.date) {

                    if (filterConfig.date.from) {
                        if (new Date(filterConfig.date.from) == 'Invalid Date') {
                            return false;
                        }
                        if (value.createdAt.getTime() < filterConfig.date.from.getTime()) {
                            return false;
                        }
                    }
                    if (filterConfig.date.to) {
                        if (value.createdAt.getTime() > filterConfig.date.to.getTime()) {
                            return false;
                        }
                    }
                }
                return true;
            }).slice(skip, skip + top).sort(function (x, y) {
                return x.createdAt.getDate() - y.createdAt.getDate();
            });
        } else {
            return photoPosts.slice(skip, skip + top);
        }
    }

    function getPhotoPost(id) {
        if (typeof (id) !== 'string') {
            console.log("ID isn't string");
            return;
        } else {
            return photoPosts.find(function (value) {
                return (value.id == id)
            })
        }
    }

    function addPhotoPost(photoPost) {
        if (validatePhotoPost(photoPost)) {
            photoPosts.push(photoPost);
            return true;
        } else {
            return false;
        }
    }

    function findingIndex(id) {
        var len = photoPosts.length;
        var index = -1;
        for (let i = 0; i > len; ++i) {
            if (id === photoPosts[i].id) {
                index = i;
            }
        }
        return index;

    }

    function editPhotoPost(id, photoPost) {
        if (photoPost.author || photoPost.id || photoPost.createdAt) {
            return false;
        }
        let index = findingIndex(id);
        if (index !== -1) {
            if (photoPost.photoLink) {
                if (validatePhotoPost(photoPost)) {
                    photoPosts[index].photoLink = photoPost.photoLink;
                }
            }
            if (photoPost.description) {
                if (validatePhotoPost(photoPost)) {
                    photoPosts[index].descriprion = photoPost.description;
                }
            }
            if (photoPost.tags) {
                if (validatePhotoPost(photoPost)) {
                    for (let i = 0; i < photoPost.tags.length; i++) {
                        if (tags.indexOf(photoPost.tags[i]) === -1) {
                            return false;
                        }
                    }
                    photoPosts[index].tags = photoPost.tags;
                } else {
                    return false;
                }
            }
        } else {
            console.log("Nor correct ID");
            return false;
        }
        return true;

    }

    function removePhotoPost(id) {
        if (typeof (id) === 'string') {
            let index = photoPosts.findIndex(function (value) {
                return value.id === id;
            });
            if (index !== -1) {
                photoPosts.slice(index, 1);
                return true;
            } else {
                return false;
            }
        } else {
            console.log("Id isn't a string");
            return false;
        }

    }

    function addLike(id, persons) {
        if (typeof (id) === 'string' ) {
            let index = photoPosts.findIndex(function (value) {
                return value.id === id;
            });
            let len = persons.length;
            return {
                like: function (person) {
                    for (let i = 0; i < len; ++i) {
                        photoPosts[index].likes.push(person[i]);

                    }
                }
            };
        } else {
            console.log("ID isn't a string");
            return false;
        }


    }

    function addTags(id, tags) {
        if (typeof (id) === 'string' ) {
            let index = photoPosts.findIndex(function (value) {
                return value.id === id;
            });
            let len = tags.length;
            return {
                like: function (tag) {
                    for (let i = 0; i < len; ++i) {
                        photoPosts[index].tags.push(tag[i]);

                    }
                }
            };
        } else {
            console.log("ID isn't a string");
            return false;
        }

    }

    return {
        getPhotoPosts, getPhotoPost, addPhotoPost, editPhotoPost, removePhotoPost, addLike,  addTags
    }

})();

console.log("Testing getPhotoPost()");

console.log("getPhotoPost(2)");
console.log(gallery.getPhotoPost(2));

console.log("getPhotoPost('6')");
console.log(gallery.getPhotoPost('6'));


console.log("Testing getPhotoPosts()");

console.log("getPhotoPosts(10, 10)");
console.log(gallery.getPhotoPosts(10, 10));

console.log("getPhotoPosts(0, 10, {author: 'tanya-mint'})");
console.log(gallery.getPhotoPosts(0, 10, {author: 'tanya-mint'}));

console.log("getPhotoPosts(0, 10, {author: 9999999})");
console.log(gallery.getPhotoPosts(0, 10, {author: 9999999}));

console.log("getPhotoPosts(0, 20, {tags: ['beauty']})");
console.log(gallery.getPhotoPosts(0, 20, {tags: ['beauty']}));

console.log("getPhotoPosts(0, 20, {tags: ['art', 'beauty']})");
console.log(gallery.getPhotoPosts(0, 20, {tags: ['art', 'beauty']}));

console.log("getPhotoPosts(10, 5, {tags: ['art', 'beauty']})");
console.log(gallery.getPhotoPosts(10, 5, {tags: ['art', 'beauty']}));

console.log("getPhotoPosts(0, 20, {tags: ['coffee', 'undefined']})");
console.log(gallery.getPhotoPosts(0, 20, {tags: ['coffee', 'undefined']}));

console.log("getPhotoPosts(2, 10, {date: {from: new Date(2000)}})");
console.log(gallery.getPhotoPosts(2, 10, {date: {from: new Date(2000)}}));

console.log("getPhotoPosts(2, 10, {date: {to: new Date(2003)}})");
console.log(gallery.getPhotoPosts(2, 10, {date: {to: new Date(2003)}}));

console.log("getPhotoPosts(0, 10, {date: {to: new Date(\"s\")}})");
console.log(gallery.getPhotoPosts(0, 10, {date: {to: new Date("s")}}));

console.log("getPhotoPosts(10, 3, {date: {from: new Date(2008) ,to: new Date(2020)}})");
console.log(gallery.getPhotoPosts(0, 10, {
    date: {
        from: new Date('2018'),
        to: new Date('2020')
    }
}));


console.log("testing addPhotoPost()");

console.log(gallery.addPhotoPost({
    id: '21',
    descriprion: 'something',
    createdAt: new Date('2020-03-07T06:17:50'),
    author: 'angelinaburskaya',
    photoLink: 'practice2019/UI/img/pic21.jpg',
    tags: ['something'],
    likes: ['tanya-mint', 'le_sacha'],
}));

console.log("Try to add validate photo post");
console.log(gallery.addPhotoPost({
    id: 2,
    descriprion: 'something',
    createdAt: new Date('2020-03-07T06:17:50'),
    author: '',
    photoLink: 'practice2019/UI/img/pic21.jpg',
    tags: ['something'],
    likes: ['tanya-mint', 'le_sacha'],
}));

console.log("testing editPhotoPost");

console.log("testing editPhotoPost editPhotoPost(editPhotoPost('1'," +
    " { photoLink: 'http://haradok.info/static/news/5/4565/preview.jpg' }))");
console.log(gallery.editPhotoPost('1', {photoLink: 'http://haradok.info/static/news/5/4565/preview.jpg'}));

console.log("Try to edit author ");
console.log(gallery.editPhotoPost('1', {author: "person"}));

console.log("Try to edit validate data");
console.log(gallery.editPhotoPost(6, {tag: "person"}));

console.log("testing removePhotoPost()");
console.log(gallery.removePhotoPost('7'));
console.log(gallery.removePhotoPost(-100));
console.log(gallery.removePhotoPost('1000'));

console.log("Testing addLikes()");
console.log(gallery.addLike('1', ['Masha']));
console.log(gallery.addLike(3, ['Masha']));


console.log("Testing addTags()");
console.log(gallery.addTags('1', ['sun', 'sky']));
console.log(gallery.addTags('3', ['sun', 'sky', 'undefined']));
console.log(gallery.addTags(3, ['hello']));
