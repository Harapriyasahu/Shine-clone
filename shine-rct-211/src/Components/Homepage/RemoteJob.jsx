import React from "react";
// import data from "../data";
import {remote} from "../../data";
import styles from "../../styles/beEarly.module.css";

const RemoteJob = () => {
    return (
        <div >
          <h1 style={{fontSize:"45px"}}>Remote Jobs</h1>
          <div className={styles.chiki}>
          {remote.length > 0 &&
            remote.map((item) => {
              return (
                <>
                  <div>
                    <div className={styles.subhasree}>
                     <div className={styles.limca}>
                     <h3 style={{paddingTop:"15px"}}>{item.role}</h3>
                      <div className={styles.haram}>{item.card}</div>
    
                      <div className={styles.exp}>
                        <div><i class="fa-solid fa-location-dot"></i>{item.location}</div>
                        <div><i class="fa-solid fa-suitcase"></i>{item.experience}</div>
                      </div>
    
                      <div className={styles.para}>
                        <p><i class="fa-solid fa-circle"></i>{item.hp1}</p>
                        <p><i class="fa-solid fa-circle"></i>{item.hp2}</p>
                        <p><i class="fa-solid fa-circle"></i>{item.hp3}</p>
                      </div>
                      <div className={styles.yami}>Apply</div>
                     </div>
                     
                    </div>
                    
                  </div>
                </>
              );
            })}
        </div>
        
         </div>
      );
}

export default RemoteJob;