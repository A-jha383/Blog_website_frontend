import react from "react";
import ArticleList from "../components/ArticleList";
import articleContent from './article-content';
import NotFoundPage from "./NotFoundPage";

const ArticlePage= ({match}) => {
    const name = match.params.name;
    const article = articleContent.find(article=>article.name===name)
    if(!article)return <NotFoundPage/>
    const otherArticles = articleContent.filter(article=>article.name!==name)

    return(
    <><h1>{article.title}</h1>
    {article.content.map((paragraph,key)=>(
        <p key={key}>{paragraph}</p>
    ))}
    <h3>Other Articles:</h3>
<ArticleList articles={otherArticles}/>
        </>
    )}

export default ArticlePage;