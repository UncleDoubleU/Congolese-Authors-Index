import styles from './PageTitle.module.sass'
interface TitleProps {
     title: string
}


function PageTitle({ title }: TitleProps) {
     return (
          <div>
               <h1 className={styles.h1}>{title}</h1>
          </div>
     )
}

export default PageTitle
