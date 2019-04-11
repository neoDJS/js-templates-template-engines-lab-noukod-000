function createPost(){
    let title = document.getElementById('postTitle').value;
    let post = document.getElementById('postText').value;
    let author = document.getElementById('postAuthor').value;

    let pageTemplateFn = _.template(document.getElementById("page-template").innerHTML);
    let postTemplateFn = _.template(document.getElementById("post-template").innerHTML);
    let commentsTemplateFn = _.template(document.getElementById("comments-template").innerHTML);

    let main = document.getElementsByTagName('main')[0];
    main.innerHTML += pageTemplateFn({post:postTemplateFn({post_title: title, post_body: post, post_author: author})});

    let divPost = document.getElementById('post');
    let commentsSection = commentsTemplateFn({comments: []});

    divPost.innerHTML += commentsSection;

}

function postComment(){

    let commenter = document.getElementById('commenterName').value;
    let comment = document.getElementById('commentText').value;

    let commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

    let commentSection = commentTemplate({commenter: commenter, comment: comment});

    let divComments = document.getElementById('comments');
    divComments.innerHTML += commentSection;
}
