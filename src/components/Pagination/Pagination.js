import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import style from "./Pagination.module.scss";
const cx = classNames.bind(style);
function Pagination({data,dataPerPage=8,currentPageData = ()=>{}}) {
    const totalPage = Math.round(data.length/dataPerPage)
    const [currPos,setCurrPos] = useState(0);
    const currentData = data.filter((item,index)=>{return index<dataPerPage*(currPos+1)&&index>=dataPerPage*(currPos)})
    // console.log(data.length)
    useEffect(()=>currentPageData(currentData),[currPos])
    // currentPageData(data.map((item,index)=>{return item}))
    const renderPg = ()=>{
        let renderPage=[];
        for(let i = 0; i< totalPage; i++){
            if(i === currPos){
                renderPage.push(<li key={i}><div className={cx('item','active')} onClick={()=>setCurrPos(i)}>{i+1}</div></li>)
            }else
            renderPage.push(<li key={i}><div className={cx('item')} onClick={()=>setCurrPos(i)}>{i+1}</div></li>)
        }
        return renderPage
    }
    return ( <div className={cx('pagination')}>
        <ul className={cx('menu')}>
        {renderPg()}
        </ul>
    </div> );
}

export default Pagination;