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
                            src="https://p3-semi-sign.byteimg.com/tos-cn-i-acvclvrq33/753544ffb993494e97c7ebe5aacdf93d.svg?rk3s=521bdb00&x-expires=1717499044&x-signature=rVTk3fFBskZdHYLBa41IYbSmucw%3D"
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
                src="https://p6-semi-sign.byteimg.com/tos-cn-i-acvclvrq33/2fb41ed78e5149c18558f05d15953172.svg?rk3s=521bdb00&x-expires=1717499044&x-signature=S3QMiyIxzRI4S1CJEaCMwwZxHvg%3D"
                className={styles.vector72}
            />
            <img
                src="https://p6-semi-sign.byteimg.com/tos-cn-i-acvclvrq33/2e10b2a53df74a2d9c578dc3863e7934.svg?rk3s=521bdb00&x-expires=1717499044&x-signature=jmP94kwLIfOeqKlS%2BQD5FdrP53g%3D"
                className={styles.vector107}
            />
            <div className={styles.group20}>
                <img
                    src="https://p26-semi-sign.byteimg.com/tos-cn-i-acvclvrq33/9aa20d57aa194c23bf438ccc901d5290.svg?rk3s=521bdb00&x-expires=1717499044&x-signature=7jSqrW1TK9Eo5pIaOf6TenT3EuI%3D"
                    className={styles.vector}
                />
                <p className={styles.warriors}>Warriors</p>
            </div>
            <div className={styles.group69}>
                <img
                    src="https://p9-semi-sign.byteimg.com/tos-cn-i-acvclvrq33/599891d6a4d44b16b7f49db3724e1961.svg?rk3s=521bdb00&x-expires=1717499044&x-signature=IhFfwWRI4OQg9Q86LNkmDyYxPfw%3D"
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
          <br />
        </span>
                <span className={styles.nBAFinalsGame6On20212}>Warriors vs. Celtics</span>
            </p>
        </div>
        <GameData></GameData>
    </div>
    );
}

export default DetialPages;