import React from 'react';

const ArrowButton = ({arrowCode, page, changePage}) => {

    const heightAndWidth = '30px';
    const width = '20px'
    
    return(
        <div>
            {
                arrowCode === 'first' && page!=='first' && page!=='firstAndLast' ?
                <button 
                onClick={() => changePage(arrowCode)}
                className="br-100 bg-transparent b--none"
                style={{padding:'5px', margin:'5px'}}>
                    <img alt='<<' src='/images/firstPageArrow.png' style={{height : heightAndWidth, width: heightAndWidth}}/>
                </button>
                :
                arrowCode === 'previous' && page!=='first' && page!=='firstAndLast' ?
                <button 
                onClick={() => changePage(arrowCode)}
                className="br-100 bg-transparent b--none"
                style={{padding:'5px', margin:'5px'}}>
                    <img alt='<' src='/images/previousPageArrow.png' style={{height :heightAndWidth, width: width}}/>
                </button>
                :
                arrowCode === 'next' && page!=='last' && page!=='firstAndLast' ?
                <button 
                onClick={() => changePage(arrowCode)}
                className="br-100 bg-transparent b--none"
                style={{padding:'5px', margin:'5px'}}>
                    <img alt='<<' src='/images/nextPageArrow.png' style={{height : heightAndWidth, width: width}}/>
                </button>
                :
                arrowCode === 'last' && page!=='last' && page!=='firstAndLast' ?
                <button 
                onClick={() => changePage(arrowCode)}
                className="br-100 bg-transparent b--none"
                style={{padding:'5px', margin:'5px'}}>
                    <img alt='<<' src='/images/lastPageArrow.png' style={{height : heightAndWidth, width: heightAndWidth}}/>
                </button>
                :
                <div></div>
            }
        </div>
    )
}

export default ArrowButton;