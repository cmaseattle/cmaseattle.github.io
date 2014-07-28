$(document).ready(function(){
  igrid.init({
    container: 'instagram-one',
    client_id: '483b33a7281f47a2a4e632d1156d3c9f', //obtained from article above
    userID: '55758514',
    clearfix: true
  });

  igrid.init({
    container: 'instagram-two',
    client_id: '483b33a7281f47a2a4e632d1156d3c9f', //obtained from article above
    userID: '187102427',
    width: 4,
    height: 2, 
    link: true,
    caption: true,
    likes: true,
    likesHover: true,
    clearfix: true
  });
});