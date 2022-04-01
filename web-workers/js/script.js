const myWorker = new Worker("js/my_task.js");

myWorker.onmessage = ({data}) => {
    console.log(data);
    let gallary = document.querySelector('.gallary');


    for(let i = 0; i < data.imgs.length; i++) {
        const img = document.createElement('img');
        img.src  = data.imgs[i];
        gallary.append(img);

        if(i > 10) break;
    }
};



async function getPosts() {
    let posts = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await posts.json();
}

getPosts()
    .then(r => {
        const articleContainer = document.querySelector('#articles');
        r.forEach(item => {
            const template = createTemplate(item);
            articleContainer.append(template);
        })
    })