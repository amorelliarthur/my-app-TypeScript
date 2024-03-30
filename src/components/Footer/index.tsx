import styles from "@/components/Footer/Footer.module.css";
import Link from "next/link";

const Footer = (): React.ReactElement => {
    return(
        <footer className={styles.contentFooter}>
            <span>Created By <Link href="http://arthuramorelli-portifolio.rf.gd/?i=1">Arthur Amorelli</Link></span>
        </footer>
    );
}

export default Footer;