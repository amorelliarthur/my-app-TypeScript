import styles from "@/components/ContactContent/ContactContent.module.css";
import { FaEnvelope, FaUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const ContactContent = (): React.ReactElement => {
    return(
        <section className={`${styles.contact} ${styles.content}`}>
            <div className={styles.maxWidth}>
                <h2 className={styles.title}>Contato</h2>
                <div className={styles.contactContent}>
                    <div className={`${styles.column} ${styles.left}`}>
                        <p>Mauris volutpat arcu eu mi volutpat fermentum. Aenean vel dignissim orci. Vestibulum mollis elit vel tellus viverra dictum.</p>
                        <div className={styles.icons}>
                            <div className={styles.row}>
                                <i><FaUser /></i>
                                <div className={styles.info}>
                                    <div className={styles.head}>
                                        Empresa
                                    </div>
                                    <div className={styles.subTitle}>
                                        My App
                                    </div>
                                </div>
                            </div>

                            <div className={styles.row}>
                                <i><FaLocationDot /></i>
                                <div className={styles.info}>
                                    <div className={styles.head}>
                                        Enderço
                                    </div>
                                    <div className={styles.subTitle}>
                                        Avenida Winston Churchill
                                    </div>
                                </div>
                            </div>

                            <div className={styles.row}>
                                <i><FaEnvelope /></i>
                                <div className={styles.info}>
                                    <div className={styles.head}>
                                        E-mail
                                    </div>
                                    <div className={styles.subTitle}>
                                        arthur-soares@hotmail.com
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.column} ${styles.right}`}>
                        <div className={styles.text}>
                            Mensagem de Contato
                        </div>
                        <form>
                            <div className={styles.fields}>
                                <div className={`${styles.field} ${styles.name}`}>
                                    <input type="text" placeholder="Digite o nome" required />
                                </div>
                                <div className={`${styles.field} ${styles.email}` }>
                                    <input type="email" placeholder="Digite o e-mail" required />
                                </div>
                            </div>

                            <div className={styles.field}>
                                <input type="text" placeholder="Digite o assunto" required />
                            </div>

                            <div className={`${styles.field} ${styles.textarea}`}>
                                <textarea cols={30} rows={10} placeholder="Digite o conteúdo" required></textarea>
                            </div>

                            <div className={styles.buttonArea}>
                                <button type="submit">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactContent;