class PostModel {
    _posts;

    constructor(photoPosts) {
        this._posts = photoPosts;
    }

    _filterByAuthor(author, skip, top) {
        return this._posts.filter(function (value) {
            if (value.author !== author) {
                return false;
            }
            return true;
        })
    }

    _filterByTags(tags, skip, top) {
        let len = tags.length;
        return this._posts.filter((value) => {
            if (len === 0 || typeof (len) === 'undefined') {
                return false;
            }
            for (let i = 0; i < len; ++i) {
                if (value.tags.indexOf(tags[i]) === -1) {
                    return false;
                }
                if (typeof (typeof (tags[i])) !== 'string') {
                    return false;
                }
            }
            return true;
        })
    }

    _filterByDate(date, skip, top) {
        return this._posts.filter(function (value) {
            if (date.from) {
                if (new Date(date.from) == 'Invalid Date') {
                    return false;
                }

                if (value.createdAt.getTime() < date.from.getTime()) {
                    return false;
                }
            }
            if (date.to) {
                if (new Date(date.to) == 'Invalid Date') {
                    return false;
                }
                if (value.createdAt.getTime() > date.to.getTime()) {
                    return false;
                }
            }
            return true;
        })
    }

    getPage(skip, top, filterConfig) {
        if (filterConfig) {
            let filteredPosts=[];

            if (filterConfig.author) {
                filteredPosts = this._filterByAuthor(filterConfig.author, skip, top);
            }
            if (filterConfig.tags) {
                filteredPosts = this._filterByTags(filterConfig.tags, skip, top);
            }
            if (filterConfig.date) {
                filteredPosts = this._filterByDate(filterConfig.date, skip, top);
            }
            return filteredPosts.slice(skip, skip + top).sort(function (x, y) {
                return x.createdAt.getDate() - y.createdAt.getDate();
            });

        } else {
            return this._posts.slice(skip, skip + top).slice(skip, skip + top).sort(function (x, y) {
                return x.createdAt.getDate() - y.createdAt.getDate();
            });
        }
    }

    get(id) {
        if (typeof (id) !== 'string') {
            console.log("ID isn't string");
            return;
        } else {
            return photoPosts.find((value) => {
                return value.id == id;
            })
        }
    }

    static validate(photoPost) {
        if (photoPost) {
            if (photoPost.author) {
                if (typeof (photoPost.author) !== 'string') {
                    console.log("Type isn't a string");
                    return false;
                }
                if (photoPost.author === "") {
                    console.log("Required fields are not entered");
                    return false;
                }
            }
            if (photoPost.photoLink) {
                if (typeof (photoPost.photoLink) !== 'string') {
                    console.log("Type isn't a string");
                    return false;
                }
                if (photoPost.photoLink === "") {
                    console.log("Required fields are not entered");
                    return false;
                }
            }
            if (photoPost.description) {
                if (typeof (photoPost.description) !== 'string' || photoPost.description.length > 200) {
                    console.log("Not correct data");
                    return false;
                }
            }
            if (photoPost.id) {
                if (typeof (photoPost.id) !== 'string') {
                    return false;
                }
            }
            return true;
        } else {
            return false;
        }

    }

    add(photoPost) {
        if (PostModel.validate(photoPost)) {
            this._posts.push(photoPost);
            return true;
        } else {
            return false;
        }
    }

    _findingIndex(id) {
        if (id === 'string') {
            let len = this._posts.length;
            let index = -1;
            for (let i = 0; i < len; ++i) {
                if (id === this._posts[i].id) {
                    return index = i;
                }
            }
            return index;
        } else {
            return -1;
        }
    }

    edit(id, photoPost) {
        if (photoPost.author || photoPost.id || photoPost.createdAt || photoPost.description === "") {
            return false;
        }
        if (PostModel.validate(photoPost)) {
            let index = this._findingIndex(id);
            if (index !== -1) {

                if (photoPost.photoLink) {
                    this._posts[index].photoLink = this._posts.photoLink;
                }
                if (photoPost.description) {
                    this._posts[index].description = photoPost.description;
                }
                if (photoPost.tags) {
                    for (let i = 0; i < photoPost.tags.length; i++) {
                        if (tags.indexOf(photoPost.tags[i]) === -1) {
                            return false;
                        }
                    }
                    this._posts[index].tags = photoPost.tags;
                }
            } else {
                console.log("Validate data");
                return false;
            }
        } else {
            console.log("Nor correct ID");
            return false;
        }
        return true;
    }

    remove(id) {
        if (typeof (id) === 'string') {
            let index = this._posts.findIndex(function (value) {
                return value.id === id;
            });
            if (index !== -1) {
                this._posts.slice(index, 1);
                return true;
            } else {
                return false;
            }
        } else {
            console.log("Id isn't a string");
            return false;
        }
    }

    addAll(photoPosts) {
        this._posts = photoPosts.slice();
        let len = this._posts.length;
        let validatePosts= [];
        for (let i = 0; i < len; ++i) {
            if (!PostModel.validate(this._posts[i])) {
                validatePosts.push(this._posts[i]);
            }
        }
        return validatePosts;
    }
}