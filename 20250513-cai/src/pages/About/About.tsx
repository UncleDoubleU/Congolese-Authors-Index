import PageTitle from "../../components/PageTitle/PageTitle"
import styles from "./About.module.sass"

function About() {
     return (
          <main>
               <PageTitle title="About" />
               <section className={styles.section}>
                    <article>
                         <h2 className={styles.H2}>A free and accessible digital list of the DRC’s writers</h2>
                         <p>The Congolese Author Index is a research project documenting writers from the Democratic Republic of Congo and their respective bibliographies.</p>
                    </article>
               </section>
               <section className={styles.section}>
                    <article>
                         <h2 className={styles.H2}>For anybody with an interest in Congolese literature</h2>
                         <p>This index was created to minimise the number of websites I have to find Congolese literature to reference in my work and enjoy in my free time.<br />

                              This project is aimed at anyone interested in the Congolese culture.  But prioritises the researchers and analysts, creatives who are seeking to reference Congolese literature for their work.</p>
                    </article>
               </section>
               <section className={styles.section}>
                    <article>
                         <h2 className={styles.H2}>The perfect opportunity to learn and celebrate Congolese Culture</h2>
                         <p>From a design perspective this project was the perfect opportunity to celebrate my heritage.<br />

                              It also allows me to implement what I am learning about design activism through creating informational design.<br />

                              It is also the right time to showcase what I am learning about design activism: the creation of informational design that gives away more control on how the information is used to the audience by incorporating features that will allow for more control to be passed on the users. </p>
                    </article>
               </section>
               <section className={styles.section}>
                    <article>
                         <h2 className={styles.H2}>How to get in touch?</h2>
                         <p>if you have questions, suggestions, or corrections follow this link to <a href="mailto:" className={styles.emailLink}>send me an email.</a><br />

                              I will get back to you as soon as I can.
                         </p>
                    </article>
               </section>
               <section className={styles.section}>
                    <article>
                         <h2 className={styles.H2}>Want to help?</h2>
                         <p>this projecct is totally open-source and as such would love your help: we are currently seeking: interpretors with knowledge of english - lingala, swahili or any other language spoken in the DRC.<br />

                              I am looking for people with either education / training in the fields of commnucation, languages or someone who can demonstrate experties in interpreting formal written or spoken communications.
                         </p>
                    </article>
               </section>
          </main>
     )
}

export default About
