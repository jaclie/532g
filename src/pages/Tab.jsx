import PersonalRanking from "../components/PersonalRanking";
import RankingR from "../components/RankingR";

function Tab() {
    return (
        <div className="flex content-center">
         <div role="tablist" className="tabs tabs-lifted it">
            <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Score" checked/>
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box"><PersonalRanking/></div>

            <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Rebound"/>
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box"><RankingR/></div>

            <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Assist"/>
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box">Tab content 3</div>
         </div>
        </div>
    )
}
export default Tab