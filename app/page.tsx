import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pronicles - Data Engineer Portfolio</title>
        <meta name="description" content="Portfolio of a Data Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1>Welcome to Pronicles Portfolio</h1>
        <p>Hi, I&apos;m a Data Engineer with expertise in big data solutions, data pipelines, and cloud technologies.</p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.h2}>Skills & Technologies</h2>
        <ul className={styles.list}>
          <li>Data Engineering</li>
          <li>Big Data Technologies: Hadoop, Spark</li>
          <li>Cloud Platforms: AWS, Azure, GCP</li>
          <li>Data Pipelines (ETL)</li>
          <li>Database Management (SQL, NoSQL)</li>
          <li>Python, SQL, and Java</li>
          <li>Machine Learning</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Projects</h2>
        <ul className={styles.list}>
          <li>
            <strong>Data Pipeline Automation:</strong> Automated ETL pipelines for real-time data processing.
          </li>
          <li>
            <strong>Cloud Data Architecture:</strong> Designed scalable cloud data architectures for high availability.
          </li>
          <li>
            <strong>Big Data Analytics:</strong> Worked with large datasets using Spark and Hadoop to derive insights.
          </li>
        </ul>
      </section>

      <footer className={styles.footer}>
      <p>Contact me at <a href="mailto:your-email@example.com">rjrockzz@protonmail.com</a></p>
      </footer>
    </div>
  )
}