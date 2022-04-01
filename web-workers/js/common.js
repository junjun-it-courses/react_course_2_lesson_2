function createTemplate({title, body}) {
    const item = document.createElement('div');
    item.className = 'article_item';

    const heading = document.createElement('h3');
    heading.innerText = title;

    const articleBody = document.createElement('div');
    articleBody.className = 'article_body';
    articleBody.innerText = body;

    item.prepend(heading);
    item.append(articleBody);

    return item;
}