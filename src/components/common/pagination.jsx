import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
class Pagination extends Component {
    // state = {  }
    render() { 
        const {count , pageSize, currentPage, onClick} = this.props;
        //console.log(currentPage);
        const pageCount = Math.ceil(count/pageSize);
        const pages=_.range(1,pageCount+1);
        //console.log(pages);
        if(pageCount===1){
            return null;
        }
        return ( 
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {pages.map(page=>
                       <li key={page} className={page===currentPage ? 'page-item active' : 'page-item'}>
                            <a className="page-link" onClick={()=>onClick(page)}>{page}</a>
                      </li>
                    )}
                    
                </ul>
            </nav>
         );
    }
}
 
Pagination.propTypes={
    count : PropTypes.number.isRequired ,
    pageSize : PropTypes.number.isRequired, 
    currentPage : PropTypes.number.isRequired, 
    onClick : PropTypes.func.isRequired
};

export default Pagination;