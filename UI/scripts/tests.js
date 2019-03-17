let tags = ['art', 'beauty', 'architecture', 'pictures', 'paints', 'coffee', 'morning', 'body', 'health', 'iceCream',
    'sunset', 'bicycles', 'summer', 'happiness', 'cake', 'pampering', 'traveling', 'waterfall'];

let photoPosts = [
    {
        id: '3',
        description: ' Flowers  are really very soft and beautiful. They appear in ' +
            'thousands of colours and of mixed colours. They look very beautiful and attract our sights.',
        createdAt: new Date('2019-03-05T12:02:57'),
        author: 'nadezhda_sukhotskaya',
        photoLink: 'practice2019/UI/img/pic3.jpg',
        tags: ['flowers', 'happiness', 'beauty'],
        likes: ['angelinaburskaya', 'idrisova_lena'],
    },

    {
        id: '4',
        description: '  Pictures. Those little things that help people keep their memories alive.' +
            ' The things that help us to remember the past, and the people that existed in our lives in the past,' +
            ' and the present.',
        createdAt: new Date('2019-03-05T12:15:39'),
        author: 'nadezhda_sukhotskaya',
        photoLink: 'practice2019/UI/img/pic4.jpg',
        tags: ['pictures', 'paints'],
        likes: ['angelinaburskaya', 'idrisova_lena', 'alexandramitroshina', 'nadezhda_sukhotskaya'],
    },

    {
        id: '1',
        description: '  St. Petersburg is a city of magic beauty, a city of white nights,' +
            'broad straight avenues, green parks, countless bridges and canals',
        createdAt: new Date('2019-03-04T16:00:00'),
        author: 'tanya-mint',
        photoLink: 'practice2019/UI/img/pic1.jpg',
        tags: ['art', 'beauty'],
        likes: ['alexandramitroshina', 'nadezhda_sukhotskaya'],
    },

    {
        id: '2',
        description: '  Architecture is art because a building that is constructed is an expression of the imagination' +
            ' and creativity of whoever is involved in its design.',
        createdAt: new Date('2015-03-04T16:02:16'),
        author: 'tanya-mint',
        photoLink: 'practice2019/UI/img/pic2.jpg',
        tags: ['architecture', 'art'],
        likes: ['idrisova_lena', 'alexandramitroshina', 'nadezhda_sukhotskaya', 'tanya-mint', 'le_sacha'],
    },

    {
        id: '5',
        description: 'The coffee plant is a bush or tree that can grow up to ten meters (about 32 feet) high,' +
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
        description: ' My favorite body part is the brain, that shiny mound of being, that mouse gray parliament ' +
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
        description: 'For years, nutrition experts have said that a healthy breakfast is a key start to the day.' +
            ' Not only do we think and perform better on the job, they tell us, it supports our well-being in many other ways.',
        createdAt: new Date('2019-03-07T23:51:39'),
        author: 'le_sacha',
        photoLink: 'practice2019/UI/img/pic7.jpg',
        tags: ['health', 'morning'],
        likes: ['alexandramitroshina'],
    },

    {
        id: '8',
        description: 'In Ancient Rome, Emperor Nero frequently sent messengers out to gather snow from the mountains.' +
            'Some historians credit Marco Polo with being the first one to bring some type of ice cream to Europe.',
        createdAt: new Date('2019-03-08T01:04:28'),
        author: 'le_sacha',
        photoLink: 'practice2019/UI/img/pic8.jpg',
        tags: ['iceCream'],
        likes: ['angelinaburskaya', 'idrisova_lena', 'tanya-mint'],
    },

    {
        id: '9',
        description: 'When the sun sets, nature looks very beautiful.',
        createdAt: new Date('2019-03-10T13:01:46'),
        author: 'alexavalkovich',
        photoLink: 'practice2019/UI/img/pic9.jpg',
        tags: ['sunset', 'beauty'],
        likes: ['angelinaburskaya', 'alexandramitroshina', 'nadezhda_sukhotskaya', 'le_sacha'],
    },

    {
        id: '10',
        description: ' The beautiful sunset is marked by colorful sky,' +
            ' astoundingly clouds reflections and soothing tunes of the birds',
        createdAt: new Date('2019-03-10T13:03:17'),
        author: 'alexavalkovich',
        photoLink: 'practice2019/UI/img/pic10.jpg',
        tags: ['sunset', 'beauty'],
        likes: ['angelinaburskaya', 'tanya-mint'],
    },

    {
        id: '11',
        description: 'A bicycle has a tiny manufacturing footprint when compared to a car.',
        createdAt: new Date('2019-03-13T09:54:38'),
        author: 'tanya-mint',
        photoLink: 'practice2019/UI/img/pic11.jpg',
        tags: ['bicycles', 'summer'],
        likes: ['le_sacha'],
    },

    {
        id: '12',
        description: 'When we feel blue, sometimes the best remedy is reaching for the cookie jar or cuddling up ' +
            'with an ice cream cone. These treats can be a quick fix, but sweets may not be the healthiest solution to ' +
            'happiness.',
        createdAt: new Date('2019-03-13T09:55:23'),
        author: 'tanya-mint',
        photoLink: 'practice2019/UI/img/pic12.jpg',
        tags: ['happiness'],
        likes: ['angelinaburskaya', 'idrisova_lena', 'alexandramitroshina', 'nadezhda_sukhotskaya', 'tanya-mint', 'le_sacha'],
    },

    {
        id: 0,
        description: 'First I drink the coffe. then I do th things',
        createdAt: new Date('2019-03-14T07:01:42'),
        author: 'idrisova_lena',
        photoLink: 'practice2019/UI/img/pic13.jpg',
        tags: ['coffee'],
        likes: ['angelinaburskaya'],
    },

    {
        id: '14',
        description: 'Coffee is a cup of hope in a world full of chaos and mondays',
        createdAt: new Date('2019-03-14T07:02:15'),
        author: 'idrisova_lena',
        photoLink: 'practice2019/UI/img/pic14.jpg',
        tags: ['coffee'],
        likes: ['idrisova_lena', 'alexandramitroshina', 'nadezhda_sukhotskaya', 'tanya-mint', 'le_sacha'],
    },

    {
        id: '15',
        description: ' Just enjoy life and be at peace. Let self-pampering restore your inner strength.' +
            ' Pay for a massage or a hair-cut and shave. This pampering reminds us that we are worthy and cared for.',
        createdAt: new Date('2019-05-14T14:07:15'),
        author: 'idrisova_lena',
        photoLink: 'practice2019/UI/img/pic15.jpg',
        tags: ['cake', 'pampering'],
        likes: [],
    },

    {
        id: '16',
        description: 'Today I challenge you to stop thinking of pampering as a luxury. Too often people feel guilty ' +
            'about pampering themselves, but today I want you to think about pampering as a healthy way to live.',
        createdAt: new Date('2019-03-17T01:27:51'),
        author: 'tanya-mint',
        photoLink: 'practice2019/UI/img/pic16.jpg',
        tags: ['healthy', 'pampering'],
        likes: ['nadezhda_sukhotskaya', 'tanya-mint'],
    },

    {
        id: '17',
        description: 'What is beauty? How do we decide who is attractive and who is not? Society is full of information' +
            ' telling us what is beautiful, but what fact is that information based on?',
        createdAt: new Date('2019-03-17T17:10:34'),
        author: 'alexandramitroshina',
        photoLink: 'practice2019/UI/img/pic17.jpg',
        tags: ['beauty'],
        likes: ['idrisova_lena', 'le_sacha'],
    },


    {
        id: '20',
        description: 'You must live in the present, launch yourself on every wave, find your eternity in each moment',
        createdAt: new Date('2019-03-21T06:37:25'),
        author: 'tanya-mint',
        photoLink: 'practice2019/UI/img/pic20.jpg',
        tags: ['waterfall'],
        likes: ['angelinaburskaya', 'idrisova_lena', 'alexandramitroshina', 'tanya-mint', 'le_sacha'],
    },
    {
        id: '18',
        description: 'One of the traveling benefits is finding and keeping humility. Too often, people get ' +
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
        description: 'Sitting in the waterfall. How are your weekends?',
        createdAt: new Date('2019-03-19T10:00:00'),
        author: 'alexandramitroshina',
        photoLink: 'practice2019/UI/img/pic19.jpg',
        tags: ['waterfall'],
        likes: ['alexandramitroshina', 'nadezhda_sukhotskaya', 'le_sacha'],
    },
];

posts = new PostModel(photoPosts);
console.log(posts.getPage(0, 10));
console.log(posts.getPage(0, 10, {author: ''}));
console.log(posts.getPage(0, 10, {author: 'tanya-mint'}));
console.log(posts.getPage(1, 15, {tags: ['beauty']}));
console.log(posts.getPage(0, 15, {tags: ['healthy', 'pampering']}));
console.log(posts.getPage(2, 10, {date: {from: new Date(2000)}}));
console.log(posts.getPage(2, 10, {date: {to: new Date(2003)}}));
console.log(posts.getPage(0, 10, {date: {to: new Date("s")}}));

console.log(posts.get(1));
console.log(posts.get('2'));
console.log(posts.get('100'));

console.log(posts.add({
    id: '21',
    description: 'something',
    createdAt: new Date('2019-03-07T06:17:50'),
    author: 'angelinaburskaya',
    photoLink: 'practice2019/UI/img/pic21.jpg',
    tags: ['something'],
    likes: ['tanya-mint', 'le_sacha'],
}));

console.log(PostModel.validate({author: 123}));

console.log(posts.edit('3', {author: 'name'}));
console.log(posts.edit('3', {id: '1000'}));
console.log(posts.edit('5', {description: 'new str'}));
console.log(posts.edit('8', {description: ''}));
console.log(posts.edit(0, {description: 'smth'}));

console.log(posts.remove('4'));
console.log(posts.remove(10));

console.log("validate posts:");
console.log(posts.addAll(photoPosts));