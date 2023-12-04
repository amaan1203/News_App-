import Card from "./Card";

const ArticleContainer = (props) => {
    const articles = props.articles;
    const loading = props.loading;
    const setLoading = props.setLoading;
    

    console.log(articles);

    return (
        <div className="flex flex-wrap mx-auto ">
            {
          articles?.map((article)=>{
            return (
                <>
                <Card article={article} key={article.source.id} ></Card>
                
                </>

            )
          })
        }
                       
   
      </div>
    );
}

export default ArticleContainer;
