import classes from "./CertificateItem.module.css";

const CertificateItem = function (props) {
  return (
    <div className={classes["certificate-item"]}>
      <div className={classes.img_container}>
        <img src={props.src} alt={props.alt} />
        <div className={classes.img_overlay} />
      </div>

      <div className={classes.content}>
        <div className={classes.header}>
          <h3>{props.title}</h3>
        </div>
        <p className={classes.metaText}>{props.site}</p>
        <p className={classes.dateText}>{props.certification_date}</p>
        <a
          href={props.certificate_link}
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          View Certificate↗
        </a>
      </div>
    </div>
  );
};

export default CertificateItem;
