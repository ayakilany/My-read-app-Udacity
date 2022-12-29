import EachBook from "./EachBook";
import PropTypes from "prop-types";

const SearchResult=({searches,handleupdate,searchQuery,listBook})=>{
/*let arr=[];
for(let i=0;i<searches.length;i++){
    for(let j=0;j<listBook.length;j++){
        if(searches[j].id===listBook[i].id){
            arr.push(listBook[i])
        }else{arr.push(searches[j])}
    }
}*/
return(        
       <div className="search-books-results">
<ol className="books-grid">
{searches.filter((b)=>b.title.toLowerCase().includes(searchQuery.toLowerCase()))
.map((book) => (
<EachBook
book={book}
key={book.idustryIdentifiers}
handleupdate={handleupdate}
/>
))
}
</ol>
</div>)

}
SearchResult.propTypes = {
    searches: PropTypes.array.isRequired,
    handleupdate: PropTypes.func.isRequired,
};
    export default SearchResult;