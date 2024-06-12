import React from "react";

import styles from './index.module.scss';
import GameData from "../components/GameData";

const DetialPages = () => {
    return (
        <div className="flex pt-5">
            <div className={styles.rootRadar}>
                <div className={styles.group68}>
                    <p className={styles.block4441}>
                        <span className={styles.block4441}>block: </span>
                        <span className={styles.block44411}>44</span>
                        <span className={styles.block44412}> : </span>
                        <span className={styles.block44413}>41</span>
                    </p>
                    <div className={styles.autoWrapper}>
                        <p className={styles.score11090}>
                            <span className={styles.score11090}>score: </span>
                            <span className={styles.score110901}>110 : </span>
                            <span className={styles.score110902}>90</span>
                        </p>
                        <div className={styles.autoWrapper}>
                            <img
                                src="https://p6-semi-sign.byteimg.com/tos-cn-i-acvclvrq33/5153475c33a74b5dbaf2cd2c030b68a6.svg?rk3s=521bdb00&x-expires=1717730723&x-signature=snVw7Wr63d4IeU4NWckh2GUo9xw%3D"
                                className={styles.union}
                            />
                            <p className={styles.threePointShot1911}>
                                <span className={styles.threePointShot1911}>three point shot: </span>
                                <span className={styles.threePointShot19111}>19</span>
                                <span className={styles.threePointShot19112}> : </span>
                                <span className={styles.threePointShot19113}>11</span>
                            </p>
                            <p className={styles.fieldGoalPercentage4}>
              <span className={styles.fieldGoalPercentage4}>
                field goal percentage:{" "}
              </span>
                                <span className={styles.fieldGoalPercentage41}>41.30%</span>
                                <span className={styles.fieldGoalPercentage42}> : </span>
                                <span className={styles.fieldGoalPercentage43}>42.50%</span>
                            </p>
                            <p className={styles.steal138}>
                                <span className={styles.steal138}>steal: </span>
                                <span className={styles.steal1381}>13 </span>
                                <span className={styles.steal1382}>: </span>
                                <span className={styles.steal1383}>8</span>
                            </p>
                            <p className={styles.assist2727}>
                                <span className={styles.assist2727}>Assist: </span>
                                <span className={styles.assist27271}>27</span>
                                <span className={styles.assist27272}> : </span>
                                <span className={styles.assist27273}>27</span>
                            </p>
                        </div>
                        <p className={styles.freeThrowPercentage1}>
            <span className={styles.freeThrowPercentage1}>
              Free throw percentage:{" "}
            </span>
                            <span className={styles.freeThrowPercentage11}>100%</span>
                            <span className={styles.freeThrowPercentage12}> : </span>
                            <span className={styles.freeThrowPercentage13}>91.67%</span>
                        </p>
                    </div>
                    <p className={styles.foul2016}>
                        <span className={styles.foul2016}>foul: </span>
                        <span className={styles.foul20161}>20</span>
                        <span className={styles.foul20162}> : </span>
                        <span className={styles.foul20163}>16</span>
                    </p>
                </div>
                <img
                    src="https://p9-semi-sign.byteimg.com/tos-cn-i-acvclvrq33/2acf907ff1dd426eab55c80e73865f3d.svg?rk3s=521bdb00&x-expires=1717730723&x-signature=%2FoglhUx%2F%2B76n2gOG1DI4OSRL2k0%3D"
                    className={styles.vector72}
                />
                <img
                    src="https://p26-semi-sign.byteimg.com/tos-cn-i-acvclvrq33/a27cc9e6920a4882a2a6a58fb3106e37.svg?rk3s=521bdb00&x-expires=1717730723&x-signature=ZRmbKwMG%2FGLksfxPqUmQXENw%2BAA%3D"
                    className={styles.vector107}
                />
                <div className={styles.group20}>
                    <img
                        src="https://p9-semi-sign.byteimg.com/tos-cn-i-acvclvrq33/0c28ba29799841509d2d021746930cab.svg?rk3s=521bdb00&x-expires=1717730723&x-signature=0VXd9ZvPo%2Bk0u%2Ftz%2Bfo7UaGlueE%3D"
                        className={styles.vector}
                    />
                    <p className={styles.warriors}>Warriors</p>
                </div>
                <div className={styles.group69}>
                    <img
                        src="https://p6-semi-sign.byteimg.com/tos-cn-i-acvclvrq33/bede064368184bffa247bca698fa8a93.svg?rk3s=521bdb00&x-expires=1717730723&x-signature=k76dTkY%2BdtearlE3JKi8Q7qQXas%3D"
                        className={styles.vector}
                    />
                    <p className={styles.celtics}>Celtics</p>
                </div>
                <p className={styles.nBAFinalsGame6On2021}>
        <span className={styles.nBAFinalsGame6On2021}>
          NBA Finals&nbsp;&nbsp;game 6 on 2021-2022
        </span>
                    <span className={styles.nBAFinalsGame6On20211}>
          (day6.17)
          <br/>
        </span>
                    <span className={styles.nBAFinalsGame6On20212}>Warriors vs. Celtics</span>
                </p>
            </div>
            <GameData></GameData>
        </div>
    );
}

export default DetialPages;