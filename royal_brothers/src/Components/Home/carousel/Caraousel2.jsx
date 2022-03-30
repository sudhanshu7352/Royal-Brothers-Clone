import {Carousel} from "react-bootstrap"
import styles from "./caraousel2.css"
export const  Caro2=()=>{
    return(
        <div >
    <Carousel className={styles.cram} indicators={false} controls={false} variant="dark">
    <Carousel.Item interval={2000}>
    <div  className={styles.cra2div}>
      <div className={styles.craImgdiv}>
      <img
        className={styles.cra2Img}
        src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/money_control-0301bddd4ac901172098f7d0b590e8dbed35e7fa1064d2ced799f9cbc9185d66.png"
        alt="First slide"
      />
      </div>
      <div  className={styles.craImgdiv}>
       <img
        className={styles.cra2Img}
        src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/the_better_india-09cca403fbe2fe19974cb1701aaa87fce8e587f32a18bc477ebf28f05e1c1788.png"
        alt="First slide"
      />
      </div>
      <div  className={styles.craImgdiv}>
       <img
        className={styles.cra2Img}
        style={{width:"200px"}}
        src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/inc_42-59ce79f32655b91f34e9ed4e5d53175f446ea263b57ffc85fd3572a1a4a1aade.jpg"
        alt="First slide"
      />
      </div>
      </div>
    </Carousel.Item>
    <Carousel.Item interval={1000}>
    <div style={{display:"flex" ,flexDirection:"row"}}>
    <div  className={styles.craImgdiv}>
      <img
       className={styles.cra2Img}
        src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/the_indian_express-e2581d704a7b572ef2d66812e5a264c6ab753e109a200c4da8e249b82e3c9f52.jpg"
        alt="First slide"
      />
      </div>
       <div  className={styles.craImgdiv}>
       <img
        className={styles.cra2Img}
        style={{width:"200px"}}
        src="https://freepngimg.com/save/68296-business-media-company-inc42-startup-marketing/2000x595"
        alt="First slide"
      />
      </div>
       <div  className={styles.craImgdiv}>
       <img
        style={{width:"200px",height:"130px" ,marginTop:"-5px"}}
        className={styles.cra2Img}
        src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/media/times%20of%20india.png"
        alt="First slide"
      />
      </div>
      </div>
    </Carousel.Item>
    <Carousel.Item interval={1000}>
    <div style={{display:"flex" ,flexDirection:"row"}}>
    <div  className={styles.craImgdiv}>
      <img
        // className="d-block w-100 "
        style={{width:"200px",height:"100px" ,marginTop:"-5px"}}
        className={styles.cra2Img}
        src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/media/bettre.png"
        alt="First slide"
      />
      </div>
       <div  className={styles.craImgdiv}>
       <img
        // className="d-block w-100 "
        style={{width:"200px",height:"200px" ,marginTop:"-5px"}}
        className={styles.cra2Img}
        src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/media/hindu.png"
        alt="First slide"
      />
      </div>
       <div  className={styles.craImgdiv}>
       <img
        // className="d-block w-100 "
        className={styles.cra2Img}
        src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/image%203.png"
        alt="First slide"
      />
      </div>
      </div>
    </Carousel.Item>
  </Carousel>
  </div>
  
    )
}