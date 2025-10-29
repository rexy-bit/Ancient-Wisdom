import { memo } from "react"
import GuideHeader from "./GuideHeader"
import HistoryGuideMain from "./HistoryGuideMain"

const GuidePage = () => {

    return(
        <>
           <GuideHeader/>
           <HistoryGuideMain/>
        </>
    )
}

export default memo(GuidePage);